<script lang="ts">
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content">
  <div class="demo-item">
    <HoverTilt shadow scaleFactor={1.1} glareIntensity={0.3} class="neon-card rounded-3xl">
      <div class="demo-card rounded-3xl">
        <h3>Neon Underglow</h3>
        <p>A bright neon underglow shadow</p>
      </div>
    </HoverTilt>
  </div>
</div>

<style>
  :global(.neon-card) {
    --hover-tilt-custom-shadow:
      hsl(242 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.41 + 0.05)) calc(var(--shadow-x) * 2px)
        calc(var(--shadow-y) * 4px + 1px) 0px 2px,
      hsl(262 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.31 + 0.05)) calc(var(--shadow-x) * 4px)
        calc(var(--shadow-y) * 8px + 2px) 0px 4px,
      hsl(282 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.21 + 0.05)) calc(var(--shadow-x) * 6px)
        calc(var(--shadow-y) * 12px + 3px) 0px 6px,
      hsl(302 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.11 + 0.05)) calc(var(--shadow-x) * 8px)
        calc(var(--shadow-y) * 16px + 4px) 0px 8px,
      hsl(322 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.05 + 0.05)) calc(var(--shadow-x) * 10px)
        calc(var(--shadow-y) * 20px + 5px) 0px 10px;
  }
</style>
