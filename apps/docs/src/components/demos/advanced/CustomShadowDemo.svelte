<script lang="ts">
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content gap-12!">
  <div class="demo-item w-3/4">
    <HoverTilt shadow scaleFactor={1.1} glareIntensity={0.3} class="simple-card rounded-xl">
      <div class="demo-card rounded-xl">
        <h3>Simple Custom Shadow</h3>
        <p>A simple custom shadow</p>
      </div>
    </HoverTilt>
  </div>
</div>


<style>
  :global(.simple-card) {
    --hover-tilt-custom-shadow:
      hsl(210 75% 15% / 0.4) calc(var(--shadow-x) * 4px) calc(var(--shadow-y) * 6px + 6px) calc(10px + var(--hover-tilt-opacity, 0) * 12px) 0px, 
      hsl(210 75% 15% / 0.4) calc(var(--shadow-x) * 4px) calc(var(--shadow-y) * 2px + 2px) calc(2px + var(--hover-tilt-opacity, 0) * 4px) 0px;
  }
</style>
