<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content">
  <div class="demo-item">
    <h4>Default Spring</h4>
    <HoverTilt>
      <div class="demo-card"><code>Default</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Fast Spring</h4>
    <HoverTilt springOptions={{ stiffness: 0.5, damping: 0.2 }}>
      <div class="demo-card"><code>stiffness: 0.5<br />damping: 0.2</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Slow Spring</h4>
    <HoverTilt springOptions={{ stiffness: 0.05, damping: 0.9 }}>
      <div class="demo-card"><code>stiffness: 0.05<br />damping: 0.9</code></div>
    </HoverTilt>
  </div>
</div>

<style>
  .demo-card {
    background: linear-gradient(135deg, #4bc8a5 0%, #36b57a 100%);
  }
</style>
