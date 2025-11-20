<script lang="ts">
  import HoverTilt from '$lib/components/HoverTilt.svelte';
</script>

<main class="flex flex-wrap gap-5 bg-amber-100 p-25">
  <!-- a basic non-foil non-holo pokemon card with a the default settings -->
  <HoverTilt class="rounded-[4.55%/3.5%]">
    <div class="aspect-[0.718] w-90 rounded-[inherit] shadow-lg">
      <img src="https://images.pokemontcg.io/swsh1/85_hires.png" alt="Pokemon #85: Gengar" />
    </div>
  </HoverTilt>

  <!-- a full-art metallic foil card (Lillie's Determination) with a lighter blend mode -->
  <HoverTilt
    class="rounded-[4.55%/3.5%]"
    scaleFactor={1}
    glareIntensity={0.8}
    enterDelay={500}
    exitDelay={500}
    shadow
    blendMode="plus-lighter"
    glareMask="url(https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/me1/me1_en_169_std.foil.png)"
  >
    <div class="aspect-[0.718] w-90 rounded-[inherit]">
      <img
        src="https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/me1/me1_en_169_std.png"
        alt="Pokemon Trainer Lillie"
      />
    </div>
  </HoverTilt>

  <!-- a reverse-holo card with multiple masks and extra glare/pop/shadow -->
  <HoverTilt
    class="rounded-[4.55%/3.5%]"
    glareIntensity={2}
    shadow
    shadowBlur={88}
    scaleFactor={1.3}
    blendMode="plus-lighter"
    glareMask="url(https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/sv8-5/sv8-5_en_005_mph.etch.png), url(https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/sv8-5/sv8-5_en_005_mph.foil.png)"
    glareMaskComposite="intersect"
    glareMaskMode="luminance"
  >
    <div class="aspect-[0.718] w-90 rounded-[inherit]">
      <img
        src="https://cdn.malie.io/file/malie-io/tcgl/cards/png/en/sv8-5/sv8-5_en_005_std.png"
        alt="Pokemon #005; Leafeon"
      />
    </div>
  </HoverTilt>
</main>

<style>
</style>
