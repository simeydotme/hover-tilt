<script lang="ts">
  // Import the component to register it as a custom element
  import HoverTilt from '$lib/components/HoverTilt.svelte';
  // The import registers the custom element, but we won't use the Svelte component directly

  // Workaround for Svelte HTML-escaping & in custom element attributes
  const cardClass = '[&::part(container)]:rounded-[4.55%/3.5%]';
</script>

<main class="flex flex-wrap gap-5 bg-amber-100 p-25">
  <!-- a basic non-foil non-holo pokemon card with a the default settings -->
  <hover-tilt class={cardClass}>
    <div class="aspect-[0.718] w-90 rounded-[4.55%/3.5%] shadow-lg">
      <img src="https://images.pokemontcg.io/swsh1/85_hires.png" alt="Pokemon #85: Gengar" />
    </div>
  </hover-tilt>

  <!-- a full-art metallic foil card (Lillie's Determination) with a lighter blend mode -->
  <hover-tilt
    class={cardClass}
    scale-factor="1"
    glare-intensity="0.8"
    enter-delay="500"
    exit-delay="500"
    shadow
    blend-mode="plus-lighter"
    glare-mask-mode="luminance"
    glare-mask="url(https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/me1/me1_en_169_std.foil.png)"
  >
    <div class="aspect-[0.718] w-90 rounded-[4.55%/3.5%]">
      <img
        src="https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/me1/me1_en_169_std.png"
        alt="Pokemon Trainer Lillie"
      />
    </div>
  </hover-tilt>

  <!-- a reverse-holo card with multiple masks and extra glare/pop/shadow -->
  <hover-tilt
    class={cardClass}
    glare-intensity="2"
    shadow
    shadow-blur="88"
    scale-factor="1.3"
    blend-mode="plus-lighter"
    glare-mask="url(https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/sv8-5/sv8-5_en_005_mph.etch.png), url(https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/sv8-5/sv8-5_en_005_mph.foil.png)"
    glare-mask-composite="intersect"
    glare-mask-mode="luminance"
  >
    <div class="aspect-[0.718] w-90 rounded-[4.55%/3.5%]">
      <img
        src="https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/sv8-5/sv8-5_en_005_std.png"
        alt="Pokemon #005; Leafeon"
      />
    </div>
  </hover-tilt>
</main>

<style>
</style>
