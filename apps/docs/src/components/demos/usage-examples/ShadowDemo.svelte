<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content">
  <div class="demo-item">
    <h4>No Shadow</h4>
    <HoverTilt>
      <div class="demo-card"><code>Default</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>With Shadow</h4>
    <HoverTilt shadow>
      <div class="demo-card"><code>shadow</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Custom Shadow Blur</h4>
    <HoverTilt shadow shadowBlur={60}>
      <div class="demo-card"><code>shadowBlur: 60</code></div>
    </HoverTilt>
  </div>
</div>

<style>
  .demo-card {
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  }
</style>
