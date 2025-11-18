<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content">
  <div class="demo-item">
    <h4>Default Hue</h4>
    <HoverTilt>
      <div class="demo-card hue"><code>Default</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Custom Hue</h4>
    <HoverTilt glareHue={20}>
      <div class="demo-card hue"><code>glareHue: 20</code></div>
    </HoverTilt>
  </div>
</div>

<style>
  .demo-card.hue {
    background: linear-gradient(135deg, #acacac 0%, #616161 100%);
  }
</style>
