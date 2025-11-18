<script lang="ts">
  import { HoverTilt } from 'hover-tilt';

  interface Props {
    gradientColor1?: string;
    gradientColor2?: string;
    textColor?: string;
  }

  let { gradientColor1 = '#667eea', gradientColor2 = '#764ba2', textColor = 'white' }: Props = $props();
</script>

<!-- svelte-ignore slot_element_deprecated -->
<div class="demo-container flex items-center justify-center text-center">
  <HoverTilt class="w-full rounded-xl">
    <div
      class="demo-card not-content / box-shadow-md flex min-h-50 flex-col items-center justify-center gap-3 rounded-xl p-6 px-8 text-center"
      style="background: linear-gradient(135deg, {gradientColor1} 0%, {gradientColor2} 100%); color: {textColor};"
    >
      <slot>
        <h3 class="text-2xl font-bold">Basic Example</h3>
        <p class="m-0 leading-5">Hover over this card to see the default tilt effect</p>
      </slot>
    </div>
  </HoverTilt>
</div>
