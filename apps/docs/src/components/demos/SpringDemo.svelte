<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container">
  <div class="demo-item">
    <h4>Default Spring</h4>
    <HoverTilt>
      <div class="demo-card">Default</div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Fast Spring</h4>
    <HoverTilt springOptions={{ stiffness: 0.5, damping: 0.6 }}>
      <div class="demo-card">stiffness: 0.5<br />damping: 0.6</div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Slow Spring</h4>
    <HoverTilt springOptions={{ stiffness: 0.1, damping: 0.9 }}>
      <div class="demo-card">stiffness: 0.1<br />damping: 0.9</div>
    </HoverTilt>
  </div>
  <div class="demo-item">
    <h4>Custom Tilt Spring</h4>
    <HoverTilt tiltSpringOptions={{ stiffness: 0.3, damping: 0.7 }}>
      <div class="demo-card">tiltSpringOptions</div>
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
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-weight: 500;
  }
</style>
