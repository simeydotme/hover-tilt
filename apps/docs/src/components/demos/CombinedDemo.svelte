<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<div class="demo-container">
  <HoverTilt
    tiltFactor={1.5}
    scaleFactor={1.1}
    shadow
    shadowBlur={30}
    glareIntensity={1.2}
    glareHue={200}
    exitDelay={300}
  >
    <div class="demo-card">
      <h3>Combined Effects</h3>
      <p>Multiple props working together</p>
      <ul>
        <li>tiltFactor: 1.5</li>
        <li>scaleFactor: 1.1</li>
        <li>shadow: true</li>
        <li>glareIntensity: 1.2</li>
        <li>glareHue: 200</li>
        <li>exitDelay: 300ms</li>
      </ul>
    </div>
  </HoverTilt>
</div>

<style>
  .demo-container {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }

  .demo-card {
    width: 350px;
    min-height: 250px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px;
    padding: 2rem;
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .demo-card h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .demo-card p {
    margin: 0 0 1rem 0;
    opacity: 0.9;
  }

  .demo-card ul {
    margin: 0;
    padding-left: 1.5rem;
    list-style: disc;
  }

  .demo-card li {
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }
</style>
