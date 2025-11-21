<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container not-content">
  <div class="demo-item">
    <HoverTilt shadow shadowBlur={30}>
      <div
        class="demo-card shadow-red-500/20 transition-shadow delay-300 duration-300 hover:delay-0 [:not(:hover)]:shadow-lg"
      >
        Custom shadow when inactive<br />
        Dynamic shadow replaces it
      </div>
    </HoverTilt>
  </div>
</div>
