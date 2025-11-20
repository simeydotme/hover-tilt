<svelte:options
  customElement={{
    tag: 'hover-tilt',
    props: {
      tiltFactor: { attribute: 'tilt-factor', type: 'Number' },
      tiltFactorY: { attribute: 'tilt-factor-y', type: 'Number' },
      scaleFactor: { attribute: 'scale-factor', type: 'Number' },
      springOptions: { attribute: 'spring-options', type: 'Object' },
      tiltSpringOptions: { attribute: 'tilt-spring-options', type: 'Object' },
      enterDelay: { attribute: 'enter-delay', type: 'Number' },
      exitDelay: { attribute: 'exit-delay', type: 'Number' },
      shadow: { attribute: 'shadow', type: 'Boolean' },
      shadowBlur: { attribute: 'shadow-blur', type: 'Number' },
      blendMode: { attribute: 'blend-mode', type: 'String' },
      glareIntensity: { attribute: 'glare-intensity', type: 'Number' },
      glareHue: { attribute: 'glare-hue', type: 'Number' },
      glareMask: { attribute: 'glare-mask', type: 'String' },
      glareMaskMode: { attribute: 'glare-mask-mode', type: 'String' },
      glareMaskComposite: { attribute: 'glare-mask-composite', type: 'String' }
    }
  }}
/>

<script lang="ts">
  import type {
    StrictSpringOptions,
    ExitSpringOptions,
    HoverTiltProps,
    ElementBox,
    PointerDerivatives,
    PointerPosition
  } from '../types.js';
  import { Spring } from 'svelte/motion';
  import { derivePointerState, pointerPositionFromEvent, readElementBox, ZERO_POINTER_DERIVATIVES } from '../utils.js';
  import { onMount } from 'svelte';

  const defaultSpringOptions: StrictSpringOptions = {
    stiffness: 0.2,
    damping: 0.8,
    precision: 0.001
  };

  type Props = HoverTiltProps;

  let {
    class: containerClass = '',
    style: containerStyle = '',
    tiltFactor = 1,
    tiltFactorY,
    scaleFactor = 1,
    springOptions = {},
    tiltSpringOptions,
    enterDelay = 0,
    exitDelay = 200,
    shadow,
    shadowBlur = 12,
    blendMode,
    glareIntensity = 1,
    glareHue = 270,
    glareMask,
    glareMaskMode,
    glareMaskComposite
  }: Props = $props();

  const initialSpringOptions: StrictSpringOptions = {
    ...defaultSpringOptions,
    ...springOptions
  };
  const initialTiltSpringOptions: StrictSpringOptions = {
    ...defaultSpringOptions,
    ...(tiltSpringOptions ?? springOptions)
  };

  let activation = new Spring(0, initialSpringOptions);
  let position = new Spring({ x: 0.5, y: 0.5 }, initialTiltSpringOptions);
  let enterTimeout: ReturnType<typeof setTimeout>;
  let exitTimeout: ReturnType<typeof setTimeout>;
  let pointerBox = $state<ElementBox | null>(null);
  let pendingPointerMove: PointerPayload | null = null;
  let moveFrame: number | null = null;
  let isActive = false;

  type PointerPayload = {
    box: ElementBox;
    pointer: PointerPosition;
  };

  const capturePointerPayload = (event: PointerEvent) => {
    const { currentTarget: node } = event;
    if (!(node instanceof HTMLElement)) {
      return false;
    }
    const box = readElementBox(node);
    const pointer = pointerPositionFromEvent(event, box);
    pointerBox = box;
    pendingPointerMove = { box, pointer };
    return true;
  };

  const schedulePointerUpdate = () => {
    if (!isActive || moveFrame !== null || !pendingPointerMove) {
      return;
    }

    moveFrame = requestAnimationFrame(() => {
      const payload = pendingPointerMove;
      moveFrame = null;

      if (!payload || !isActive) {
        return;
      }

      pendingPointerMove = null;
      pointerBox = payload.box;
      position.set({
        x: payload.pointer.normalized[0],
        y: payload.pointer.normalized[1]
      });
    });
  };

  const interactEnter = (event: PointerEvent) => {
    const { currentTarget: node } = event;
    clearTimeout(enterTimeout);
    clearTimeout(exitTimeout);
    capturePointerPayload(event);
    if (isActive) {
      resetSpringOptions();
      activation.set(1);
      schedulePointerUpdate();
    } else {
      enterTimeout = setTimeout(() => {
        if (!isActive) {
          resetSpringOptions();
          activation.set(1);
          isActive = true;
          schedulePointerUpdate();
        }
      }, enterDelay);
    }
  };

  const interactMove = (event: PointerEvent) => {
    const { currentTarget: node } = event;
    if (capturePointerPayload(event)) {
      schedulePointerUpdate();
    }
  };

  const interactLeave = (event: PointerEvent) => {
    const { currentTarget: node } = event;
    clearTimeout(enterTimeout);
    clearTimeout(exitTimeout);
    if (moveFrame !== null) {
      cancelAnimationFrame(moveFrame);
      moveFrame = null;
      pendingPointerMove = null;
    }

    exitTimeout = setTimeout(async () => {
      setExitSpringOptions();
      position.set({ x: 0.5, y: 0.5 });
      try {
        await activation.set(0);
        isActive = false;
      } catch (error) {
        if (error instanceof Error && error.message === 'Aborted') {
          return;
        }
        throw error;
      }
    }, exitDelay);
  };

  const setExitSpringOptions = () => {
    const exitSpringOptions: ExitSpringOptions = {
      stiffness: initialSpringOptions.stiffness * 0.2,
      damping: initialSpringOptions.damping * 0.5
    };
    const exitTiltSpringOptions: ExitSpringOptions = {
      stiffness: initialTiltSpringOptions.stiffness * 0.2,
      damping: initialTiltSpringOptions.damping * 0.5
    };
    activation.stiffness = exitSpringOptions.stiffness;
    activation.damping = exitSpringOptions.damping;
    position.stiffness = exitTiltSpringOptions.stiffness;
    position.damping = exitTiltSpringOptions.damping;
  };

  const resetSpringOptions = () => {
    if (initialSpringOptions.stiffness && initialSpringOptions.damping) {
      activation.stiffness = initialSpringOptions.stiffness;
      activation.damping = initialSpringOptions.damping;
      position.stiffness = initialTiltSpringOptions.stiffness ?? initialSpringOptions.stiffness;
      position.damping = initialTiltSpringOptions.damping ?? initialSpringOptions.damping;
    }
  };

  let opacity = $derived(activation.current);
  // Use derived values rather than a dedicated scale spring to keep the number of ticked springs low.
  const scaleValue = $derived(1 + (scaleFactor - 1) * activation.current);
  // Pointer metrics are derived from the animated position store so that CSS variables continue to update
  // while springs ease back to their resting state (no pointer events required).
  const pointerState = $derived.by<PointerDerivatives>(() =>
    pointerBox
      ? derivePointerState(pointerBox, { x: position.current.x, y: position.current.y })
      : ZERO_POINTER_DERIVATIVES
  );

  // a nice default rotation value that can be multiplied by the tilt factor
  const ROTATION = 10;
  const rotationX = $derived(ROTATION * tiltFactor);
  const rotationY = $derived(ROTATION * (tiltFactorY ?? tiltFactor));

  // store the style variables so can use them for both the shadow-dom and the slotted elements
  const styleVariables = $derived(`
    --hover-tilt-x: ${position.current.x};
    --hover-tilt-y: ${position.current.y};
    --hover-tilt-opacity: ${opacity};
    --hover-tilt-scale: ${scaleValue};
    --hover-tilt-rotation-x: ${rotationX}deg;
    --hover-tilt-rotation-y: ${rotationY}deg;
    --hover-tilt-angle: ${pointerState.angle}deg;
    --hover-tilt-from-center: ${pointerState.distance}px;
    --hover-tilt-at-edge: ${pointerState.edge};
    --hover-tilt-shadow-blur: ${shadowBlur ?? 12};
    --hover-tilt-blend-mode: ${blendMode ?? 'overlay'};
    --hover-tilt-glare-intensity: ${glareIntensity};
    --hover-tilt-glare-hue: ${glareHue};
    --hover-tilt-glare-mask: ${glareMask ?? 'none'};
    --hover-tilt-glare-mask-mode: ${glareMaskMode ?? 'match-source'};
    --hover-tilt-glare-mask-composite: ${glareMaskComposite ?? 'add'};
  `);

  const staticVariables = `
    --shadow-x: calc(var(--hover-tilt-x, 0) * 2 - 1);
    --shadow-y: calc(var(--hover-tilt-y, 0) * 2 - 1);
    --gradient-x: calc(var(--hover-tilt-x, 0.5) * 100%);
    --gradient-y: calc(var(--hover-tilt-y, 0.5) * 100%);
    --scale: var(--hover-tilt-scale, 1);
    --rotation-x: calc( var(--hover-tilt-y, 0) * var(--hover-tilt-rotation-y, 20deg) * 2 - var(--hover-tilt-rotation-y, 20deg) );
    --rotation-y: calc( (1 - var(--hover-tilt-x, 0)) * var(--hover-tilt-rotation-x, 20deg) * 2 - var(--hover-tilt-rotation-x, 20deg) );
  `;

  const slottedStyles = $derived(`
    <style>
      ::slotted(*) {
        ${styleVariables}
        ${staticVariables}
      }
    </style>
  `);

  const handlePointerEnter = (event: PointerEvent) => {
    interactEnter(event);
  };

  const handlePointerMove = (event: PointerEvent) => {
    interactMove(event);
  };

  const handlePointerLeave = (event: PointerEvent) => {
    interactLeave(event);
  };

  let container: HTMLDivElement | null = null;
  let isWebComponent = $state(false);
  onMount(() => {
    isWebComponent = !!(container?.parentNode instanceof ShadowRoot);
  });
</script>

<div
  bind:this={container}
  part="container"
  data-is-active={activation.current >= 0.1}
  class="hover-tilt-container {containerClass}"
  style={`${styleVariables} ${staticVariables} ${containerStyle}`}
>
  {#if isWebComponent}
    <!-- only render the slotted styles if the component is a web component, 
        this is a performance concern in Svelte Components -->
    {@html slottedStyles}
  {/if}

  <div
    part="tilt"
    class="hover-tilt"
    class:hover-tilt-shadow={shadow}
    class:hover-tilt-glare-mask={glareMask}
    onpointermove={handlePointerMove}
    onpointerleave={handlePointerLeave}
    onpointerenter={handlePointerEnter}
  >
    <slot />
  </div>
</div>

<style>
  @layer components {
    .hover-tilt-container {
      /* perspective defaults to 600px, but can be overridden on the container element */
      perspective: 600px;
    }

    .hover-tilt {
      --hover-tilt-default-gradient: radial-gradient(
        farthest-corner circle at var(--gradient-x) var(--gradient-y),
        lch(95% 2.7 var(--hover-tilt-glare-hue, 270) / calc(var(--hover-tilt-glare-intensity, 1) * 0.66)) 8%,
        lch(88% 5.5 var(--hover-tilt-glare-hue, 270) / calc(var(--hover-tilt-glare-intensity, 1) * 0.5)) 28%,
        lch(05% 3.5 var(--hover-tilt-glare-hue, 270) / calc(var(--hover-tilt-glare-intensity, 1) * 0.25)) 90%
      );

      position: relative;
      border-radius: inherit;
      transform: scale(var(--scale)) rotateX(var(--rotation-x)) rotateY(var(--rotation-y));
      will-change: transform;
      image-rendering: optimizeQuality;
      text-rendering: optimizeLegibility;
    }

    .hover-tilt::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background-image: var(--hover-tilt-custom-gradient, var(--hover-tilt-default-gradient));
      mix-blend-mode: var(--hover-tilt-blend-mode, overlay);
      opacity: var(--hover-tilt-opacity, 0);
      will-change: opacity, background-image;
    }

    .hover-tilt-shadow {
      --shadow-blur-1: calc(var(--hover-tilt-shadow-blur, 12) * 1px);
      --shadow-blur-2: calc(var(--shadow-blur-1) / 2);
      /* prettier-ignore */
      --hover-tilt-default-shadow: 
        calc(var(--shadow-x) * var(--shadow-blur-1)) calc(var(--shadow-y) * var(--shadow-blur-1) / 2 + var(--shadow-blur-1) / 4) calc(var(--shadow-blur-1) / 2) calc(var(--shadow-blur-1) * -0.25) lch(0% 0 0 / calc(var(--hover-tilt-opacity, 0) * 0.125)),
        calc(var(--shadow-x) * var(--shadow-blur-2)) calc(var(--shadow-y) * var(--shadow-blur-2) / 2 + var(--shadow-blur-2) / 4) calc(var(--shadow-blur-2) / 2) calc(var(--shadow-blur-2) * -0.25) lch(0% 0 0 / calc(var(--hover-tilt-opacity, 0) * 0.125));

      box-shadow: var(--hover-tilt-custom-shadow, var(--hover-tilt-default-shadow));
      will-change: box-shadow;
    }

    .hover-tilt-glare-mask::before {
      mask-image: var(--hover-tilt-glare-mask, none);
      mask-size: cover;
      mask-mode: var(--hover-tilt-glare-mask-mode, match-source);
      mask-composite: var(--hover-tilt-glare-mask-composite, add);
    }
  }
</style>
