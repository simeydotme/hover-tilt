<script lang="ts">
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="mask-grid not-content leading-snug text-shadow-sm">
  <HoverTilt
    class="mask-card"
    glareMask="repeating-radial-gradient(circle at 30% 30%, #fff, #fff 12px, #fff0 12px, #fff0 24px)"
    glareMaskMode="alpha"
  >
    <a href="#css-alpha-repeating-gradient" class="card-surface bg-linear-to-br from-emerald-300 to-indigo-400" title="view the code example">
      <h3>CSS Gradient</h3>
      <p>Repeating radial gradient with <strong><code>alpha</code></strong> mask-mode.</p>
    </a>
  </HoverTilt>

  <HoverTilt class="mask-card" glareMask="url(/public/aztec-pattern.webp)" glareMaskMode="luminance">
    <a href="#black--white-png" class="card-surface bg-linear-to-br from-indigo-400 to-fuchsia-400" title="view the code example">
      <h3>Black &amp; White Bitmap</h3>
      <p>Linked WEBP/PNG with <strong><code>luminance</code></strong> mask-mode.</p>
    </a>
  </HoverTilt>

  <HoverTilt class="mask-card" glareMask="url(/public/circuit-board.svg)" glareMaskMode="alpha">
    <a href="#transparent-svg" class="card-surface bg-linear-to-br from-orange-300 to-rose-400" title="view the code example">
      <h3>Transparent SVG</h3>
      <p>Linked SVG with <strong><code>alpha</code></strong> mask-mode.</p>
    </a>
  </HoverTilt>

  <HoverTilt class="mask-card" glareMask="url(#mask)">
    <a href="#svg-urlid" class="card-surface bg-linear-to-br from-teal-400/65 to-green-500/65" title="view the code example">
      <h3>SVG <code>url(#id)</code></h3>
      <p>References an inline SVG mask definition using <strong><code>url(#...)</code></strong>.</p>
    </a>
  </HoverTilt>
</div>

<svg width="0" height="0" aria-hidden="true" focusable="false">
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

<style>
  :global(.mask-grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .card-surface {
    border-radius: inherit;
    padding: 1.25rem;
    aspect-ratio: 1.7;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.4rem;
  }

  a.card-surface {
    text-decoration: none;
  }

  h3 {
    margin: 0;
    font-size: 1.35rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    max-width: 28ch;
  }
</style>
