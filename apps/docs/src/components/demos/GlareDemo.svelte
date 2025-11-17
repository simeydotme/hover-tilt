<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content">
  <div class="demo-item">
    <h4>Default Glare</h4>
    <HoverTilt>
      <div class="demo-card"><code>Default</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Subtler Glare</h4>
    <HoverTilt glareIntensity={0.5}>
      <div class="demo-card"><code>glareIntensity: 0.5</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Intense Glare</h4>
    <HoverTilt glareIntensity={1.5}>
      <div class="demo-card"><code>glareIntensity: 1.5</code></div>
    </HoverTilt>
  </div>
</div>


<style>
  .demo-card {
    background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
  }
</style>
