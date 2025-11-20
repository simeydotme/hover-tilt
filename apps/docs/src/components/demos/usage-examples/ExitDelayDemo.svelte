<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content">
  <div class="demo-item">
    <h4>Default Exit Delay (200ms)</h4>
    <HoverTilt scaleFactor={1}>
      <div class="demo-card"><code>Default</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Long Exit Delay (1000ms)</h4>
    <HoverTilt exitDelay={1000}>
      <div class="demo-card"><code>exitDelay: 1000</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>No Exit Delay (0ms)</h4>
    <HoverTilt exitDelay={0}>
      <div class="demo-card"><code>exitDelay: 0</code></div>
    </HoverTilt>
  </div>
</div>

<style>
  .demo-card {
    background: linear-gradient(135deg, #febb4f 0%, #94430d 100%);
  }
</style>
