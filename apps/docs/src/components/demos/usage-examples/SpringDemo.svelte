<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content spring-demo">
  <div class="demo-item">
    <h4>Default Spring</h4>
    <HoverTilt scaleFactor={1.1}>
      <div class="demo-card"><code>Default</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Fast Spring</h4>
    <HoverTilt scaleFactor={1.1} springOptions={{ stiffness: 0.4, damping: 0.3 }}>
      <div class="demo-card"><code>stiffness: 0.4<br />damping: 0.3</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Slow Spring</h4>
    <HoverTilt scaleFactor={1.1} springOptions={{ stiffness: 0.05, damping: 0.9 }}>
      <div class="demo-card"><code>stiffness: 0.05<br />damping: 0.9</code></div>
    </HoverTilt>
  </div>
</div>

<style>
  :global(.spring-demo .demo-card) {
    background: linear-gradient(135deg, #4bc8a5 0%, #36b57a 100%);
  }
</style>
