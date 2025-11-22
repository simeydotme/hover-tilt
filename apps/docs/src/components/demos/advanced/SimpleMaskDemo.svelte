<script lang="ts">
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="mask-grid not-content leading-snug text-shadow-xs">
  <HoverTilt class="mask-card" glareMask="url(/aztec-pattern.webp)" glareMaskMode="luminance">
    <div class="card-surface bg-linear-to-br from-indigo-400 to-fuchsia-400">
      <h3>Aztec Pattern</h3>
      <p>Single PNG mask keeps the glare inside the pattern.</p>
    </div>
  </HoverTilt>
</div>

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

  h3 {
    margin: 0;
    font-size: 1.35rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    max-width: 24ch;
  }
</style>
