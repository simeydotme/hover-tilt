<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content">
  <div class="demo-item">
    <h4>Default Enter Delay (0ms)</h4>
    <HoverTilt scaleFactor={1}>
      <div class="demo-card"><code>Default</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Long Enter Delay (500ms)</h4>
    <HoverTilt enterDelay={500}>
      <div class="demo-card"><code>enterDelay: 500</code></div>
    </HoverTilt>
  </div>
</div>

<style>
  .demo-card {
    background: linear-gradient(135deg, #97b336 0%, #94740d 100%);
  }
</style>
