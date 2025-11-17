<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content">
  <div class="demo-item">
    <h4>Shadow while Inactive</h4>
    <HoverTilt shadow shadowBlur={30}>
      <div class="demo-card [:not(:hover)]:shadow-lg shadow-red-500/20 transition-shadow duration-300">Custom shadow when inactive</div>
    </HoverTilt>
  </div>
</div>
