<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content tilt-spring-demo">
  <div class="demo-item">
    <h4>Default Tilt Spring</h4>
    <HoverTilt scaleFactor={1.1}>
      <div class="demo-card"><code>Default</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Bouncey Scale, Soft Tilt</h4>
    <HoverTilt
      scaleFactor={1.1}
      springOptions={{ stiffness: 0.08, damping: 0.15 }}
      tiltSpringOptions={{ stiffness: 0.1, damping: 0.2 }}
    >
      <div class="demo-card"><code>springOptions: 0.08, 0.15<br />tiltSpringOptions: 0.1, 0.2</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Soft Scale, Elastic Tilt</h4>
    <HoverTilt
      scaleFactor={1.1}
      springOptions={{ stiffness: 0.05, damping: 0.5 }}
      tiltSpringOptions={{ stiffness: 0.1, damping: 0.075 }}
    >
      <div class="demo-card"><code>springOptions: 0.05, 0.5<br />tiltSpringOptions: 0.1, 0.075</code></div>
    </HoverTilt>
  </div>
</div>

<style>
  :global(.tilt-spring-demo .demo-card) {
    background: linear-gradient(135deg, #5565db 0%, #36a6b5 100%);
  }
</style>
