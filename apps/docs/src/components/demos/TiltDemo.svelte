<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content">
  <div class="demo-item">
    <h4>Default Tilt</h4>
    <HoverTilt>
      <div class="demo-card"><code>tiltFactor: 1</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Increased Tilt</h4>
    <HoverTilt tiltFactor={2}>
      <div class="demo-card"><code>tiltFactor: 2</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Different Y Tilt</h4>
    <HoverTilt tiltFactor={1.5} tiltFactorY={0.5}>
      <div class="demo-card"><code>tiltFactor: 1.5<br />tiltFactorY: 0.5</code></div>
    </HoverTilt>
  </div>
</div>

<style>
  .demo-card {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }
</style>
