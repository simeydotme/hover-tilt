<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content">
  <div class="demo-item">
    <h4>No Scale (default)</h4>
    <HoverTilt scaleFactor={1}>
      <div class="demo-card"><code>scaleFactor: 1</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Subtle Scale</h4>
    <HoverTilt scaleFactor={1.05}>
      <div class="demo-card"><code>scaleFactor: 1.05</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Prominent Scale</h4>
    <HoverTilt scaleFactor={1.2}>
      <div class="demo-card"><code>scaleFactor: 1.2</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Negative Scale</h4>
    <HoverTilt scaleFactor={0.9}>
      <div class="demo-card"><code>scaleFactor: 0.9</code></div>
    </HoverTilt>
  </div>
</div>

<style>
  .demo-card {
    background: linear-gradient(135deg, #4fe4fe 0%, #0d6e94 100%);
  }
</style>
