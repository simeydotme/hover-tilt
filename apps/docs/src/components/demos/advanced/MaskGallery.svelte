<script lang="ts">
  import { HoverTilt } from 'hover-tilt';

  type Card = {
    title: string;
    subtitle: string;
    description: string;
    background: string;
    glareMask: string;
    glareMaskMode?: 'match-source' | 'luminance' | 'alpha' | 'none';
    glareMaskComposite?: 'add' | 'subtract' | 'exclude' | 'intersect';
    glareIntensity?: number;
    glareHue?: number;
  };

  const cards: Card[] = [
    {
      title: 'Foil Swirl',
      subtitle: 'mask + match-source',
      description: 'Single PNG mask keeps the glare inside the swirl artwork.',
      background: 'linear-gradient(120deg, rgb(59 130 246) 0%, rgb(147 51 234) 35%, rgb(244 63 94) 100%)',
      glareMask: 'url(https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/me1/me1_en_169_std.foil.png)',
      glareIntensity: 1.35,
      glareHue: 210
    },
    {
      title: 'Etched Layers',
      subtitle: 'two masks + intersect',
      description: 'Mix an etched outline with foil, intersecting both textures.',
      background: 'linear-gradient(145deg, rgb(14 165 233) 0%, rgb(56 189 248) 35%, rgb(248 250 252) 100%)',
      glareMask:
        'url(https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/sv8-5/sv8-5_en_005_mph.etch.png), url(https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/sv8-5/sv8-5_en_005_mph.foil.png)',
      glareMaskComposite: 'intersect',
      glareMaskMode: 'luminance',
      glareIntensity: 1.1,
      glareHue: 180
    },
    {
      title: 'Custom Gradient Mask',
      subtitle: 'mask + alpha mode',
      description: 'A soft gradient PNG limits glare to one side of the card.',
      background: 'linear-gradient(135deg, rgb(251 191 36) 0%, rgb(249 115 22) 45%, rgb(239 68 68) 100%)',
      glareMask: 'url(https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/sv6pt5/sv6pt5_en_046_std.foil.png)',
      glareMaskMode: 'alpha',
      glareIntensity: 1.25,
      glareHue: 40
    }
  ];
</script>

<div class="mask-grid">
  {#each cards as card}
    <div class="mask-wrapper">
      <HoverTilt
        class="mask-card"
        shadow
        shadowBlur={45}
        scaleFactor={1.05}
        glareIntensity={card.glareIntensity}
        glareHue={card.glareHue}
        glareMask={card.glareMask}
        glareMaskMode={card.glareMaskMode}
        glareMaskComposite={card.glareMaskComposite}
      >
        <div class="card-surface" style={`background: ${card.background};`}>
          <span class="eyebrow">{card.subtitle}</span>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      </HoverTilt>
    </div>
  {/each}
</div>

<style>
  :global(.mask-grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .mask-card {
    border-radius: 24px;
  }

  .card-surface {
    border-radius: inherit;
    padding: 1.75rem;
    min-height: 280px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.35rem;
    font-family: 'Sora', var(--sl-font-family);
    text-shadow: 0 6px 18px rgba(15, 23, 42, 0.35);
  }

  .eyebrow {
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    opacity: 0.85;
  }

  h3 {
    margin: 0;
    font-size: 1.35rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    max-width: 18ch;
  }

  .mask-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .mask-wrapper small {
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.65;
  }
</style>
