<script lang="ts">
  import HoverTilt from '$lib/components/HoverTilt.svelte';
  import type { SpringOpts } from '$lib/types.js';

  // State for all props
  let tiltFactor = $state(1);
  let tiltFactorY = $state<number | undefined>(undefined);
  let scaleFactor = $state(1);
  let enterDelay = $state(0);
  let exitDelay = $state(200);
  let shadow = $state(false);
  let shadowBlur = $state(22);
  let blendMode = $state('overlay');
  let glareIntensity = $state(1);
  let glareHue = $state(270);
  let glareMask = $state<string | undefined>(undefined);
  let glareMaskMode = $state<'match-source' | 'luminance' | 'alpha' | 'none' | undefined>(undefined);
  let glareMaskComposite = $state<'add' | 'subtract' | 'exclude' | 'intersect' | undefined>(undefined);
  let classValue = $state('');
  let styleValue = $state('');
  let springOptions = $state<SpringOpts>({ stiffness: 0.2, damping: 0.8 });
  let tiltSpringOptions = $state<SpringOpts | undefined>(undefined);
  let showSpringOptions = $state(false);
  let showTiltSpringOptions = $state(false);

  // Preset glare masks from MaskOptionsGallery
  const glareMaskPresets = [
    { label: 'None', value: undefined, mode: undefined },
    {
      label: 'CSS Gradient (Alpha)',
      value: 'repeating-radial-gradient(circle at 30% 30%, #fff, #fff 12px, #fff0 12px, #fff0 24px)',
      mode: 'alpha' as const
    },
    {
      label: 'Aztec Pattern (Luminance)',
      value: 'url(/aztec-pattern.webp)',
      mode: 'luminance' as const
    },
    {
      label: 'Circuit Board SVG (Alpha)',
      value: 'url(/circuit-board.svg)',
      mode: 'alpha' as const
    },
    {
      label: 'Aztec + Radial (Luminance)',
      value:
        'url(/aztec-pattern.webp), repeating-radial-gradient(circle at 30% 30%, #fff, #fff 12px, #fff0 12px, #fff0 24px)',
      mode: 'luminance' as const
    },
    {
      label: 'SVG url(#mask)',
      value: 'url(#mask)',
      mode: 'match-source' as const
    }
  ];

  const blendModes = [
    'normal',
    'overlay',
    'screen',
    'multiply',
    'plus-lighter',
    'luminosity',
    'color',
    'color-dodge',
    'color-burn',
    'darken',
    'lighten',
    'difference',
    'exclusion',
    'soft-light',
    'hard-light'
  ];

  // Computed value for glareMask select
  let selectedGlareMaskLabel = $derived(
    glareMaskPresets.find((p) => p.value === glareMask)?.label ?? glareMaskPresets[0].label
  );

  function handleGlareMaskChange(label: string) {
    const selected = glareMaskPresets.find((p) => p.label === label);
    glareMask = selected?.value;
    // Auto-set the mask mode if the preset specifies one
    if (selected?.mode !== undefined) {
      glareMaskMode = selected.mode;
    } else if (selected?.value === undefined) {
      // Reset to default when "None" is selected
      glareMaskMode = undefined;
    }
  }

  // Create a key that changes when spring options change to force re-render
  let springKey = $derived(
    JSON.stringify({
      spring: showSpringOptions ? springOptions : null,
      tiltSpring: showTiltSpringOptions ? tiltSpringOptions : null
    })
  );
</script>

<div class="interactive-demo my-8 w-full rounded-lg bg-white p-8 shadow-lg">
  <h2 class="mb-6 text-2xl font-bold">Interactive Props Demo</h2>
  <div class="grid grid-cols-1 gap-8 lg:grid-cols-[480px_1fr]">
    <!-- Left Column: Demo Card -->
    <div class="demo-preview">
      <h3 class="mb-4 text-lg font-semibold">Preview</h3>
      {#key springKey}
        <HoverTilt
          class={classValue || 'w-full rounded-xl'}
          style={styleValue || undefined}
          {tiltFactor}
          {tiltFactorY}
          {scaleFactor}
          {enterDelay}
          {exitDelay}
          {shadow}
          {shadowBlur}
          {blendMode}
          {glareIntensity}
          {glareHue}
          {glareMask}
          {glareMaskMode}
          {glareMaskComposite}
          springOptions={showSpringOptions ? springOptions : undefined}
          tiltSpringOptions={showTiltSpringOptions ? tiltSpringOptions : undefined}
        >
          <div
            class="demo-card flex aspect-square flex-col items-center justify-center gap-3 rounded-xl p-6 px-8 text-center text-white"
            style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
          >
            <h3 class="text-2xl font-bold">Interactive Demo</h3>
            <p class="m-0 leading-5">Adjust the controls to see the effect in real-time</p>
          </div>
        </HoverTilt>
      {/key}
    </div>

    <!-- Right Column: Controls -->
    <div class="controls-panel max-h-[800px] space-y-6 overflow-y-auto px-2">
      <!-- Interaction Props Section -->
      <div class="control-section">
        <h3 class="mb-4 border-b pb-2 text-lg font-semibold">Interaction Props</h3>

        <div class="grid grid-cols-2 gap-2">
          <!-- Tilt Factor -->
          <div class="control-item mb-4">
            <label for="tilt-factor" class="mb-2 block text-sm font-medium text-gray-900">
              Tilt Factor: <span class="text-gray-600">{tiltFactor.toFixed(2)}</span>
            </label>
            <input
              id="tilt-factor"
              type="range"
              min="0"
              max="5"
              step="0.1"
              bind:value={tiltFactor}
              class="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
            />
          </div>

          <!-- Tilt Factor Y -->
          <div class="control-item mb-4">
            <label for="tilt-factor-y" class="mb-2 block text-sm font-medium text-gray-900">
              Tilt Factor Y: <span class="text-gray-600">{tiltFactorY?.toFixed(2) ?? 'undefined'}</span>
            </label>
            <input
              id="tilt-factor-y"
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={tiltFactorY ?? tiltFactor}
              oninput={(e) => {
                const target = e.target as HTMLInputElement;
                tiltFactorY = target.value ? Number(target.value) : undefined;
              }}
              class="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
            />
          </div>

          {#if tiltFactorY !== undefined}
            <button
              type="button"
              onclick={() => (tiltFactorY = undefined)}
              class="col-span-2 box-border rounded border border-slate-400 bg-slate-200 px-4 py-2.5 text-sm leading-5 font-medium text-slate-700 shadow-xs hover:bg-slate-300 hover:text-slate-900 focus:ring-4 focus:ring-slate-300/50 focus:outline-none"
            >
              Reset <code>tiltFactorY</code>
            </button>
          {/if}
        </div>

        <!-- Scale Factor -->
        <div class="control-item mb-4">
          <label for="scale-factor" class="mb-2 block text-sm font-medium text-gray-900">
            Scale Factor: <span class="text-gray-600">{scaleFactor.toFixed(2)}</span>
          </label>
          <input
            id="scale-factor"
            type="range"
            min="0"
            max="2"
            step="0.1"
            bind:value={scaleFactor}
            class="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
          />
        </div>

        <!-- Enter Delay -->
        <div class="control-item mb-4">
          <label for="enter-delay" class="mb-2 block text-sm font-medium text-gray-900">
            Enter Delay (ms): <span class="text-gray-600">{enterDelay}</span>
          </label>
          <input
            id="enter-delay"
            type="range"
            min="0"
            max="1000"
            step="50"
            bind:value={enterDelay}
            class="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
          />
        </div>

        <!-- Exit Delay -->
        <div class="control-item mb-4">
          <label for="exit-delay" class="mb-2 block text-sm font-medium text-gray-900">
            Exit Delay (ms): <span class="text-gray-600">{exitDelay}</span>
          </label>
          <input
            id="exit-delay"
            type="range"
            min="0"
            max="1000"
            step="50"
            bind:value={exitDelay}
            class="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
          />
        </div>

        <!-- Spring Options -->
        <div class="control-item mb-4">
          <button
            type="button"
            onclick={() => (showSpringOptions = !showSpringOptions)}
            class="flex w-full items-center justify-between rounded bg-gray-100 px-3 py-2 text-left hover:bg-gray-200"
          >
            <span class="font-medium">Spring Options</span>
            <span>{showSpringOptions ? '▼' : '▶'}</span>
          </button>
          {#if showSpringOptions}
            <div class="mt-2 space-y-3 border-l-2 border-gray-200 pl-4">
              <div>
                <label for="stiffness" class="mb-1 block text-sm font-medium text-gray-900">
                  Stiffness: <span class="text-gray-600">{springOptions.stiffness?.toFixed(2) ?? '0.20'}</span>
                </label>
                <input
                  id="stiffness"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={springOptions.stiffness ?? 0.2}
                  oninput={(e) => {
                    const target = e.target as HTMLInputElement;
                    springOptions = { ...springOptions, stiffness: Number(target.value) };
                  }}
                  class="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                />
              </div>
              <div>
                <label for="damping" class="mb-1 block text-sm font-medium text-gray-900">
                  Damping: <span class="text-gray-600">{springOptions.damping?.toFixed(2) ?? '0.80'}</span>
                </label>
                <input
                  id="damping"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={springOptions.damping ?? 0.8}
                  oninput={(e) => {
                    const target = e.target as HTMLInputElement;
                    springOptions = { ...springOptions, damping: Number(target.value) };
                  }}
                  class="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                />
              </div>
            </div>
          {/if}
        </div>

        <!-- Tilt Spring Options -->
        <div class="control-item mb-4">
          <button
            type="button"
            onclick={() => (showTiltSpringOptions = !showTiltSpringOptions)}
            class="flex w-full items-center justify-between rounded bg-gray-100 px-3 py-2 text-left hover:bg-gray-200"
          >
            <span class="font-medium">Tilt Spring Options</span>
            <span>{showTiltSpringOptions ? '▼' : '▶'}</span>
          </button>
          {#if showTiltSpringOptions}
            <div class="mt-2 space-y-3 border-l-2 border-gray-200 pl-4">
              {#if !tiltSpringOptions}
                <button
                  type="button"
                  onclick={() => (tiltSpringOptions = { stiffness: 0.2, damping: 0.8 })}
                  class="box-border rounded border border-slate-400 bg-slate-200 px-4 py-2.5 text-sm leading-5 font-medium text-slate-700 shadow-xs hover:bg-slate-300 hover:text-slate-900 focus:ring-4 focus:ring-slate-300/50 focus:outline-none"
                >
                  Enable (uses Spring Options by default)
                </button>
              {:else}
                <div>
                  <label for="stiffness" class="mb-1 block text-sm font-medium text-gray-900">
                    Stiffness: <span class="text-gray-600">{tiltSpringOptions.stiffness?.toFixed(2) ?? '0.20'}</span>
                  </label>
                  <input
                    id="stiffness"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={tiltSpringOptions.stiffness ?? 0.2}
                    oninput={(e) => {
                      const target = e.target as HTMLInputElement;
                      tiltSpringOptions = {
                        ...tiltSpringOptions,
                        stiffness: Number(target.value)
                      };
                    }}
                    class="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                  />
                </div>
                <div>
                  <label for="damping" class="mb-1 block text-sm font-medium text-gray-900">
                    Damping: <span class="text-gray-600">{tiltSpringOptions.damping?.toFixed(2) ?? '0.80'}</span>
                  </label>
                  <input
                    id="damping"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={tiltSpringOptions.damping ?? 0.8}
                    oninput={(e) => {
                      const target = e.target as HTMLInputElement;
                      tiltSpringOptions = {
                        ...tiltSpringOptions,
                        damping: Number(target.value)
                      };
                    }}
                    class="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                  />
                </div>
                <button
                  type="button"
                  onclick={() => (tiltSpringOptions = undefined)}
                  class="text-sm text-red-600 hover:text-red-800"
                >
                  Clear (use Spring Options)
                </button>
              {/if}
            </div>
          {/if}
        </div>
      </div>

      <!-- Aesthetic Props Section -->
      <div class="control-section">
        <h3 class="mb-4 border-b pb-2 text-lg font-semibold">Aesthetic Props</h3>

        <!-- Shadow Toggle -->
        <div class="control-item mb-4">
          <label class="inline-flex cursor-pointer items-center">
            <input type="checkbox" bind:checked={shadow} class="peer sr-only" />
            <div
              class="peer relative h-5 w-9 rounded-full bg-gray-200 peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full"
            ></div>
            <span class="ms-3 text-sm font-medium text-gray-900 select-none">Shadow</span>
          </label>
        </div>

        <!-- Shadow Blur -->
        {#if shadow}
          <div class="control-item mb-4">
            <label for="shadow-blur" class="mb-2 block text-sm font-medium text-gray-900">
              Shadow Blur (px): <span class="text-gray-600">{shadowBlur}</span>
            </label>
            <input
              id="shadow-blur"
              type="range"
              min="0"
              max="100"
              step="1"
              bind:value={shadowBlur}
              class="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
            />
          </div>
        {/if}

        <!-- Blend Mode -->
        <div class="control-item mb-4">
          <label for="blend-mode" class="mb-2 block text-sm font-medium text-gray-900">Blend Mode</label>
          <select
            id="blend-mode"
            bind:value={blendMode}
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          >
            {#each blendModes as mode}
              <option value={mode}>{mode}</option>
            {/each}
          </select>
        </div>

        <!-- Glare Intensity -->
        <div class="control-item mb-4">
          <label for="glare-intensity" class="mb-2 block text-sm font-medium text-gray-900">
            Glare Intensity: <span class="text-gray-600">{glareIntensity.toFixed(2)}</span>
          </label>
          <input
            id="glare-intensity"
            type="range"
            min="0"
            max="4"
            step="0.1"
            bind:value={glareIntensity}
            class="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
          />
        </div>

        <!-- Glare Hue -->
        <div class="control-item mb-4">
          <label for="glare-hue" class="mb-2 block text-sm font-medium text-gray-900">
            Glare Hue (0-360): <span class="text-gray-600">{glareHue}</span>
          </label>
          <input
            id="glare-hue"
            type="range"
            min="0"
            max="360"
            step="1"
            bind:value={glareHue}
            class="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
          />
        </div>

        <!-- Glare Mask -->
        <div class="control-item mb-4">
          <label for="glare-mask" class="mb-2 block text-sm font-medium text-gray-900">Glare Mask</label>
          <select
            id="glare-mask"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            value={selectedGlareMaskLabel}
            onchange={(e) => {
              const target = e.target as HTMLSelectElement;
              handleGlareMaskChange(target.value);
            }}
          >
            {#each glareMaskPresets as preset}
              <option value={preset.label}>{preset.label}</option>
            {/each}
          </select>
        </div>

        <!-- Glare Mask Mode -->
        {#if glareMask}
          <div class="control-item mb-4">
            <label for="glare-mask-mode" class="mb-2 block text-sm font-medium text-gray-900">Glare Mask Mode</label>
            <select
              bind:value={glareMaskMode}
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              id="glare-mask-mode"
            >
              <option value={undefined}>Default (match-source)</option>
              <option value="match-source">match-source</option>
              <option value="luminance">luminance</option>
              <option value="alpha">alpha</option>
              <option value="none">none</option>
            </select>
          </div>

          <!-- Glare Mask Composite -->
          <div class="control-item mb-4">
            <label for="glare-mask-composite" class="mb-2 block text-sm font-medium text-gray-900"
              >Glare Mask Composite</label
            >
            <select
              bind:value={glareMaskComposite}
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              id="glare-mask-composite"
            >
              <option value={undefined}>Default (add)</option>
              <option value="add">add</option>
              <option value="subtract">subtract</option>
              <option value="exclude">exclude</option>
              <option value="intersect">intersect</option>
            </select>
          </div>
        {/if}

        <!-- Class Input -->
        <div class="control-item mb-4">
          <label for="css-class" class="mb-2 block text-sm font-medium text-gray-900">CSS Class</label>
          <input
            type="text"
            id="css-class"
            bind:value={classValue}
            placeholder="e.g., rounded-xl"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Style Input -->
        <div class="control-item mb-4">
          <label for="inline-style" class="mb-2 block text-sm font-medium text-gray-900">Inline Style</label>
          <input
            type="text"
            id="inline-style"
            bind:value={styleValue}
            placeholder="e.g., width: 100%;"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- SVG mask definition for url(#mask) option -->
  <svg width="0" height="0" aria-hidden="true" focusable="false" class="absolute">
    <defs>
      <pattern id="pattern" patternUnits="userSpaceOnUse" width="24" height="24">
        <rect x="0" y="0" width="24" height="24" />
        <polygon fill="white" fill-rule="evenodd" points="8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4" />
      </pattern>
      <mask id="mask">
        <rect x="0" y="0" width="500" height="500" fill="url(#pattern)"></rect>
      </mask>
    </defs>
  </svg>
</div>

<style>
  .interactive-demo {
    scrollbar-width: thin;
  }

  .controls-panel::-webkit-scrollbar {
    width: 6px;
  }

  .controls-panel::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  .controls-panel::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  .controls-panel::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Range input styling */
  .range-input::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #3b82f6;
    cursor: pointer;
    border: 2px solid white;
    box-shadow:
      0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .range-input::-webkit-slider-thumb:hover {
    background: #2563eb;
  }

  .range-input:focus::-webkit-slider-thumb {
    outline: 2px solid #93c5fd;
    outline-offset: 2px;
  }

  .range-input::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #3b82f6;
    cursor: pointer;
    border: 2px solid white;
    box-shadow:
      0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .range-input::-moz-range-thumb:hover {
    background: #2563eb;
  }

  .range-input:focus::-moz-range-thumb {
    outline: 2px solid #93c5fd;
    outline-offset: 2px;
  }
</style>
