<svelte:options customElement={{
	tag: 'hover-tilt',
	props: {
		tiltFactor: { attribute: 'tilt-factor', type: 'Number' },
		tiltFactorY: { attribute: 'tilt-factor-y', type: 'Number' },
		scaleFactor: { attribute: 'scale-factor', type: 'Number' },
		springOptions: { attribute: 'spring-options', type: 'Object' },
		tiltSpringOptions: { attribute: 'tilt-spring-options', type: 'Object' },
		shadow: { attribute: 'shadow', type: 'Boolean' },
		shadowBlur: { attribute: 'shadow-blur', type: 'Number' },
		glareIntensity: { attribute: 'glare-intensity', type: 'Number' },
		glareHue: { attribute: 'glare-hue', type: 'Number' },
		glareMask: { attribute: 'glare-mask', type: 'String' },
		glareMaskMode: { attribute: 'glare-mask-mode', type: 'String' },
		glareMaskComposite: { attribute: 'glare-mask-composite', type: 'String' },
		exitDelay: { attribute: 'exit-delay', type: 'Number' },
		blendMode: { attribute: 'blend-mode', type: 'String' }
	}
}} />

<script lang="ts">
	import { Spring } from 'svelte/motion';

	interface SpringOpts {
		stiffness?: number;
		damping?: number;
		precision?: number;
	}

	interface DefinedSpringOptions {
		stiffness: number;
		damping: number;
		precision: number;
	}

	const defaultSpringOptions: DefinedSpringOptions = {
		stiffness: 0.2,
		damping: 0.8,
		precision: 0.001
	};

	interface Props {
		class?: string;
		tiltFactor?: number;
		tiltFactorY?: number;
		scaleFactor?: number;
		springOptions?: SpringOpts;
		tiltSpringOptions?: SpringOpts;
		shadow?: boolean;
		shadowBlur?: number;
		glareIntensity?: number;
		glareHue?: number;
		glareMask?: string;
		glareMaskMode?: 'match-source' | 'luminance' | 'alpha' | 'none';
		glareMaskComposite?: 'add' | 'subtract' | 'exclude' | 'intersect';
		exitDelay?: number;
		blendMode?: string;
	}

	let {
		class: containerClass = '',
		tiltFactor = 1,
		tiltFactorY,
		scaleFactor = 1,
		springOptions = {},
		tiltSpringOptions,
		shadow,
		shadowBlur,
		glareIntensity = 1,
		glareHue,
		glareMask,
		glareMaskMode,
		glareMaskComposite,
		exitDelay = 200,
		blendMode
	}: Props = $props();

	const initialSpringOptions: DefinedSpringOptions = { ...defaultSpringOptions, ...springOptions };
	const initialTiltSpringOptions: DefinedSpringOptions = {
		...defaultSpringOptions,
		...(tiltSpringOptions ?? springOptions)
	};

	let state = new Spring(0, initialSpringOptions);
	let scale = new Spring(1, initialSpringOptions);
	let position = new Spring({ x: 0.5, y: 0.5 }, initialTiltSpringOptions);
	let exitTimeout: ReturnType<typeof setTimeout>;

	const handlePointerEnter = (event: PointerEvent) => {
		const { currentTarget: node } = event;
		clearTimeout(exitTimeout);
		resetSpringOptions();
		state.set(1);
		scale.set(scaleFactor);
	};

	const handlePointerMove = (event: PointerEvent) => {
		const { clientX: x, clientY: y, currentTarget: node } = event;
		if (node instanceof HTMLElement) {
			const rect = node.getBoundingClientRect();
			position.set({
				x: (x - rect.left) / rect.width,
				y: (y - rect.top) / rect.height
			});
		}
	};

	const setExitSpringOptions = () => {
		const exitSpringOptions = {
			stiffness: initialSpringOptions.stiffness * 0.2,
			damping: initialSpringOptions.damping * 0.5
		};
		const exitTiltSpringOptions = {
			stiffness: initialTiltSpringOptions.stiffness * 0.2,
			damping: initialTiltSpringOptions.damping * 0.5
		};
		state.stiffness = exitSpringOptions.stiffness;
		state.damping = exitSpringOptions.damping;
		scale.stiffness = exitSpringOptions.stiffness;
		scale.damping = exitSpringOptions.damping;
		position.stiffness = exitTiltSpringOptions.stiffness;
		position.damping = exitTiltSpringOptions.damping;
	};

	const resetSpringOptions = () => {
		if (initialSpringOptions.stiffness && initialSpringOptions.damping) {
			state.stiffness = initialSpringOptions.stiffness;
			state.damping = initialSpringOptions.damping;
			scale.stiffness = initialSpringOptions.stiffness;
			scale.damping = initialSpringOptions.damping;
			position.stiffness = initialTiltSpringOptions.stiffness ?? initialSpringOptions.stiffness;
			position.damping = initialTiltSpringOptions.damping ?? initialSpringOptions.damping;
		}
	};

	const handlePointerLeave = (event: PointerEvent) => {
		const { currentTarget: node } = event;
		clearTimeout(exitTimeout);
		exitTimeout = setTimeout(() => {
			setExitSpringOptions();
			state.set(0);
			scale.set(1);
			position.set({ x: 0.5, y: 0.5 });
		}, exitDelay);
	};

	let opacity = $derived(state.current);
	const rotation = 10;
</script>

<div class="hover-tilt-container {containerClass}" class:isActive={state.current !== 0} part="container">
	<div
		class={`hover-tilt`}
		class:hover-tilt-shadow={shadow}
		class:hover-tilt-glare-mask={glareMask}
		part="tilt"
		style:--hover-tilt-x={position.current.x}
		style:--hover-tilt-y={position.current.y}
		style:--hover-tilt-opacity={opacity}
		style:--hover-tilt-scale={scale.current}
		style:--hover-tilt-rotation-x="{rotation * tiltFactor}deg"
		style:--hover-tilt-rotation-y="{rotation * (tiltFactorY ?? tiltFactor)}deg"
		style:--hover-tilt-glare-intensity={glareIntensity}
		style:--hover-tilt-glare-hue={glareHue}
		style:--hover-tilt-glare-mask={glareMask}
		style:--hover-tilt-shadow-blur={shadowBlur}
		style:--hover-tilt-blend-mode={blendMode}
		style:--hover-tilt-glare-mask-mode={glareMaskMode}
		style:--hover-tilt-glare-mask-composite={glareMaskComposite}
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
			perspective: var(--hover-tilt-perspective, 600px);
		}
	}

	.hover-tilt {
		--gradient-x: calc(var(--hover-tilt-x, 0.5) * 100%);
		--gradient-y: calc(var(--hover-tilt-y, 0.5) * 100%);
		--hover-tilt-default-gradient: radial-gradient(
			farthest-corner circle at var(--gradient-x) var(--gradient-y),
			lch(95% 2.7 var(--hover-tilt-glare-hue, 270) / calc(var(--hover-tilt-glare-intensity, 1) * 0.66)) 8%,
			lch(88% 5.5 var(--hover-tilt-glare-hue, 270) / calc(var(--hover-tilt-glare-intensity, 1) * 0.5)) 28%,
			lch(05% 3.5 var(--hover-tilt-glare-hue, 270) / calc(var(--hover-tilt-glare-intensity, 1) * 0.25)) 90%
		);

		position: relative;
		border-radius: inherit;
		transform: scale(var(--hover-tilt-scale, 1))
			rotateX(
				calc(var(--hover-tilt-y, 0) * var(--hover-tilt-rotation-y, 20deg) * 2 - var(--hover-tilt-rotation-y, 20deg))
			)
			rotateY(
				calc(
					(1 - var(--hover-tilt-x, 0)) * var(--hover-tilt-rotation-x, 20deg) * 2 - var(--hover-tilt-rotation-x, 20deg)
				)
			);
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
	}

	.hover-tilt-shadow {
		--shadow-blur-1: calc(var(--hover-tilt-shadow-blur, 22) * 1px);
		--shadow-blur-2: calc(var(--shadow-blur-1) / 2);
		--shadow-x: calc(var(--hover-tilt-x, 0.5) - 0.5);
		--shadow-y: calc(var(--hover-tilt-y, 0.5) - 0.5);
		--hover-tilt-default-shadow:
			calc(var(--shadow-x) * var(--shadow-blur-1))
				calc(var(--shadow-y) * var(--shadow-blur-1) / 2 + var(--shadow-blur-1) / 4) calc(var(--shadow-blur-1) / 2)
				calc(var(--shadow-blur-1) * -0.25) lch(0% 0 0 / calc(var(--hover-tilt-opacity, 0) * 0.125)),
			calc(var(--shadow-x) * var(--shadow-blur-2))
				calc(var(--shadow-y) * var(--shadow-blur-2) / 2 + var(--shadow-blur-2) / 4) calc(var(--shadow-blur-2) / 2)
				calc(var(--shadow-blur-2) * -0.25) lch(0% 0 0 / calc(var(--hover-tilt-opacity, 0) * 0.125));

		box-shadow: var(--hover-tilt-custom-shadow, var(--hover-tilt-default-shadow));
	}

	.hover-tilt-glare-mask::before {
		mask-image: var(--hover-tilt-glare-mask, none);
		mask-size: cover;
		mask-mode: var(--hover-tilt-glare-mask-mode, match-source);
		mask-composite: var(--hover-tilt-glare-mask-composite, add);
	}
</style>
