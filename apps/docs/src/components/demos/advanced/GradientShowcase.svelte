<script lang="ts">
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="gradient-grid not-content leading-snug text-shadow-xs">
  <div class="gradient-wrapper">
    <HoverTilt class="gradient-card custom-gradient" shadow scaleFactor={1.1}>
      <div class="card-surface bg-linear-to-br from-gray-400 to-gray-500">
        <h3>Custom Gradient</h3>
        <p>A simple custom radial gradient.</p>
      </div>
    </HoverTilt>
  </div>
  <div class="gradient-wrapper">
    <hover-tilt class="gradient-card custom-gradient" shadow scale-factor={1.1}>
      <div class="card-surface bg-linear-to-br from-gray-400 to-gray-500">
        <h3>Custom Gradient</h3>
        <p>A simple custom radial gradient.</p>
      </div>
    </hover-tilt>
  </div>

  <div class="gradient-wrapper">
    <HoverTilt class="gradient-card specular-highlight" shadow scaleFactor={1.1} glareIntensity={0.5}>
      <div class="card-surface bg-linear-to-br from-slate-400 to-slate-500">
        <h3>Specular Highlight</h3>
        <p>A specular highlight that follows the pointer.</p>
      </div>
    </HoverTilt>
  </div>

  <div class="gradient-wrapper">
    <HoverTilt class="gradient-card aurora-sweep" shadow scaleFactor={1.1}>
      <div
        class="card-surface bg-linear-to-br from-indigo-400 to-purple-400"
      >
        <h3>Aurora Sweep</h3>
        <p>A conic gradient that pivots around the center.</p>
      </div>
    </HoverTilt>
  </div>

  <div class="gradient-wrapper">
    <HoverTilt class="gradient-card luminance-beam" shadow scaleFactor={1.1} blendMode="luminosity">
      <div
        class="card-surface bg-linear-to-br from-rose-500/60 to-amber-400/50 via-orange-500/40"
      >
        <h3>Luminance Beam</h3>
        <p>A directional beam that fades across the card.</p>
      </div>
    </HoverTilt>
  </div>

  <div class="gradient-wrapper">
    <HoverTilt class="gradient-card inverted-gradient" shadow scaleFactor={1.1}>
      <div
        class="card-surface bg-linear-to-br from-sky-400 to-indigo-400"
      >
        <h3>Inverted Gradient</h3>
        <p>The glare is at the edges, instead of the pointer.</p>
      </div>
    </HoverTilt>
  </div>
</div>

<style>
  .gradient-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem;
    margin: 0 calc(var(--sl-content-pad-x) * -1);
    overflow: hidden;
    padding: 2rem;
  }

:global(.custom-gradient) {
  --hover-tilt-custom-gradient: radial-gradient(
    circle at var(--gradient-x, 50%) var(--gradient-y, 50%),
    rgba(125, 255, 194, calc(var(--hover-tilt-glare-intensity, 1) * 0.5)) 10%,
    rgba(255, 255, 255, 0) 80%,
    transparent 70%
  );
}

.custom-gradient::part(container) {
  --hover-tilt-custom-gradient: radial-gradient(
    circle at var(--gradient-x, 50%) var(--gradient-y, 50%),
    rgba(125, 255, 194, calc(var(--hover-tilt-glare-intensity, 1) * 0.5)) 10%,
    rgba(255, 255, 255, 0) 80%,
    transparent 70%
  );
}

  :global(.specular-highlight) {
    --hover-tilt-custom-gradient: radial-gradient(
      120% 120% at var(--gradient-x, 50%) var(--gradient-y, 50%),
      rgb(255 255 255 / calc(var(--hover-tilt-glare-intensity, 1))) 50%,
      transparent 55%
    );
  }

  :global(.aurora-sweep) {
    --hover-tilt-custom-gradient: conic-gradient(
      from calc((var(--hover-tilt-x) + var(--hover-tilt-y)) * 90deg + 135deg) at center center,
      rgba(255, 255, 255, calc(var(--hover-tilt-glare-intensity, 1) * 0.9)),
      rgba(6, 182, 212, calc(var(--hover-tilt-glare-intensity, 1) * 0.7)),
      rgba(255, 255, 255, calc(var(--hover-tilt-glare-intensity, 1) * 0.9))
    );
  }

  :global(.luminance-beam) {
    --hover-tilt-custom-gradient: linear-gradient(
      120deg,
      rgb(0 0 0 / 0) calc((var(--gradient-x, 50%) / 2 + var(--gradient-y, 50%) / 2) - 60%),
      rgb(249 218 173 / var(--hover-tilt-glare-intensity, 1))
        calc((var(--gradient-x, 50%) / 2 + var(--gradient-y, 50%) / 2)),
      rgb(0 0 0 / 0) calc((var(--gradient-x, 50%) / 2 + var(--gradient-y, 50%) / 2) + 60%)
    );
  }

  :global(.inverted-gradient) {
    --hover-tilt-custom-gradient: radial-gradient(
      200% 200% at calc(var(--gradient-x, 50%) * 2 - 50%) calc(var(--gradient-y, 50%) * 2 - 50%),
      transparent 30%,
      rgb(255 255 255 / var(--hover-tilt-glare-intensity, 1)) 80%
    );
  }

  .card-surface {
    border-radius: inherit;
    padding: 1.25rem;
    aspect-ratio: 1.4;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.4rem;
  }

  h3 {
    margin: 0;
    font-size: 1.4rem;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    max-width: 24ch;
  }
</style>
