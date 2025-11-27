<script>
  import { HoverTilt } from 'hover-tilt';

  let message = $state('Tilt me!');
</script>

<section>
  <HoverTilt tiltFactor={1.5} scaleFactor={1.1} shadow>
    <div class="card not-content">
      <h2>{message}</h2>
    </div>
  </HoverTilt>

  <input bind:value={message} placeholder="Type a message..." />
</section>

<style>
  section {
    display: grid;
    gap: 2rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    place-content: center;
    max-width: 400px;
    aspect-ratio: 1.8;
    padding: 2rem;
    color: white;
    background: linear-gradient(135deg, #fd746c, #ff9068);
  }

  input {
    appearance: none;
    color: rgb(41, 47, 61);
    background: hsl(222, 20%, 100%);
    padding: 0.875em;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    outline: 1px solid transparent;
    accent-color: hsl(200, 85%, 60%);
    box-shadow: 0 3px 2px -3px hsl(222, 20%, 85%);
    transition:
      border 0.3s ease-in,
      outline 0.6s ease-in,
      box-shadow 0.6s ease-in;
  }

  input:focus {
    border-color: hsl(160, 85%, 60%);
    outline-color: hsl(200, 85%, 60%);
    transition:
      border 0.6s ease-out,
      outline 0.3s ease-out,
      box-shadow 0.3s ease-out;
  }
</style>
