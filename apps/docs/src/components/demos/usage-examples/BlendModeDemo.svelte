<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content">
  <div class="demo-item">
    <h4>Default Blend Mode (overlay)</h4>
    <HoverTilt>
      <div class="demo-card"><code>Default</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Luminosity Blend Mode</h4>
    <HoverTilt blendMode="luminosity">
      <div class="demo-card"><code>blendMode: luminosity</code></div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Plus Lighter Blend Mode</h4>
    <HoverTilt blendMode="plus-lighter">
      <div class="demo-card"><code>blendMode: plus-lighter</code></div>
    </HoverTilt>
  </div>
</div>

<style>
  .demo-card {
    background: linear-gradient(135deg, #fcf4c9 10%, #fee3e2, #fbcdf2, #e8befa, #abbfff, #bbf3c0 90%);
  }
  .demo-card code {
    color: #222;
    text-shadow: none;
  }
</style>
