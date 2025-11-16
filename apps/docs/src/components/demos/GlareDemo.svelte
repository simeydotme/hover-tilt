<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container">
  <div class="demo-item">
    <h4>Default Glare</h4>
    <HoverTilt>
      <div class="demo-card">Default</div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Reduced Glare</h4>
    <HoverTilt glareIntensity={0.5}>
      <div class="demo-card">glareIntensity: 0.5</div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Custom Hue</h4>
    <HoverTilt glareHue={180}>
      <div class="demo-card">glareHue: 180</div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Intense Glare</h4>
    <HoverTilt glareIntensity={1.5}>
      <div class="demo-card">glareIntensity: 1.5</div>
    </HoverTilt>
  </div>
</div>

<style>
  .demo-container {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem;
  }

  .demo-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .demo-item h4 {
    margin: 0;
    font-size: 0.9rem;
    color: var(--sl-color-text-2);
  }

  .demo-card {
    width: 200px;
    height: 150px;
    background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-weight: 500;
  }
</style>
