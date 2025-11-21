export const simpleShadowSvelte = String.raw`
<HoverTilt class="simple-card" shadow scaleFactor={1.1} glareIntensity={0.3}>
  <div class="demo-card">
    Simple Custom Shadow
  </div>
</HoverTilt>

<style>
  /* access the .simple-card with the :global() svelte selector */
  :global(.simple-card) {
    /* define the custom shadow */
    --hover-tilt-custom-shadow:
      hsl(210 75% 15% / 0.4) calc(var(--shadow-x) * 4px) calc(var(--shadow-y) * 6px + 6px) calc(10px + var(--hover-tilt-opacity, 0) * 12px) 0px, 
      hsl(210 75% 15% / 0.4) calc(var(--shadow-x) * 4px) calc(var(--shadow-y) * 2px + 2px) calc(2px + var(--hover-tilt-opacity, 0) * 4px) 0px;
  }
</style>

`;

export const simpleShadowWebComponent = String.raw`
<hover-tilt class="simple-card" shadow scaleFactor={1.1} glareIntensity={0.3}>
  <div class="demo-card">
    Simple Custom Shadow
  </div>
</hover-tilt>

<style>
  /* access the .simple-card with the ::part(container) web component selector */
  .simple-card::part(container) {
    /* define the custom shadow */
    --hover-tilt-custom-shadow:
      hsl(210 75% 15% / 0.4) calc(var(--shadow-x) * 4px) calc(var(--shadow-y) * 6px + 6px) calc(10px + var(--hover-tilt-opacity, 0) * 12px) 0px, 
      hsl(210 75% 15% / 0.4) calc(var(--shadow-x) * 4px) calc(var(--shadow-y) * 2px + 2px) calc(2px + var(--hover-tilt-opacity, 0) * 4px) 0px;
  }
</style>

`;

export const neonShadowSvelte = String.raw`
<HoverTilt class="neon-card" shadow scaleFactor={1.1} glareIntensity={0.3}>
  <div class="demo-card">
    Neon Underglow
  </div>
</HoverTilt>

<style>
  /* access the .neon-card with the :global() svelte selector */
  :global(.neon-card) {
    /* define the custom shadow */
    --hover-tilt-custom-shadow: 
      hsl(322 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.41 + 0.05)) calc(var(--shadow-x) * 2px) calc(var(--shadow-y) * 4px + 1px) 0px 2px, 
      hsl(322 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.31 + 0.05)) calc(var(--shadow-x) * 4px) calc(var(--shadow-y) * 8px + 2px) 0px 4px, 
      hsl(322 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.21 + 0.05)) calc(var(--shadow-x) * 6px) calc(var(--shadow-y) * 12px + 3px) 0px 6px, 
      hsl(322 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.11 + 0.05)) calc(var(--shadow-x) * 8px) calc(var(--shadow-y) * 16px + 4px) 0px 8px, 
      hsl(322 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.05 + 0.05)) calc(var(--shadow-x) * 10px) calc(var(--shadow-y) * 20px + 5px) 0px 10px;
  }
</style>

`;

export const neonShadowWebComponent = String.raw`
<hover-tilt class="neon-card" shadow scaleFactor={1.1} glareIntensity={0.3}>
  <div class="demo-card">
    Neon Underglow
  </div>
</hover-tilt>

<style>
  .neon-card::part(container) {
    --hover-tilt-custom-shadow: 
      hsl(322 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.41 + 0.05)) calc(var(--shadow-x) * 2px) calc(var(--shadow-y) * 4px + 1px) 0px 2px, 
      hsl(322 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.31 + 0.05)) calc(var(--shadow-x) * 4px) calc(var(--shadow-y) * 8px + 2px) 0px 4px, 
      hsl(322 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.21 + 0.05)) calc(var(--shadow-x) * 6px) calc(var(--shadow-y) * 12px + 3px) 0px 6px, 
      hsl(322 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.11 + 0.05)) calc(var(--shadow-x) * 8px) calc(var(--shadow-y) * 16px + 4px) 0px 8px, 
      hsl(322 87% 56% / calc(var(--hover-tilt-opacity, 0) * 0.05 + 0.05)) calc(var(--shadow-x) * 10px) calc(var(--shadow-y) * 20px + 5px) 0px 10px;
  }
</style>

`;

export const steps3Svelte = String.raw`
:global(.simple-card) {
  --hover-tilt-custom-shadow: /* ... */;
}
`;

export const steps3WebComponent = String.raw`
.simple-card::part(container) {
  --hover-tilt-custom-shadow: /* ... */;
}
`;


export const cssShadowSyntax = String.raw`
/*** 
 CSS box-shadow syntax: 
    [horizontal offset] [vertical offset] [blur] [spread] [color] 
***/

--hover-tilt-custom-shadow:
/***    [horizontal offset]               [vertical offset]                     [blur] [spread] [color]   ***/ 
        calc(var(--shadow-x) * 10px)      calc(var(--shadow-y) * 10px + 5px)    5px    10px     #ccc;
/***                 │         │                        │           │
                     │         └─ multiplied by 10px    │           └─ multiplied by 10px, shift down by 5px
                     └─ shadow-x offset ─────┘          └─ shadow-y offset ───────┘
***/
`;

export const cssShadowOpacitySyntax = String.raw`
--hover-tilt-custom-shadow:
/***    [horizontal offset]               [vertical offset]                     [blur] [spread] [color]   ***/
        calc(var(--shadow-x) * 10px)      calc(var(--shadow-y) * 10px + 5px)    5px    10px     hsl(0 0% 0% / calc(var(--hover-tilt-opacity, 0) * 0.5 + 0.2));
/***                                                                                                   │                  │                        │       └──────────┐
                                                                                                       │                  │         multiplied by 50%, add 20% extra ─┘
                                                                                                       │                  └─ using tilt-opacity ───┘
                                                                                                       └─ a black shadow ────────────┘
***/
`;


export const steps4Svelte = String.raw`
:global(.simple-card) {
  --hover-tilt-custom-shadow: 
    calc(var(--shadow-x) * 10px) calc(var(--shadow-y) * 10px + 5px) 5px 10px
      hsl(0 0% 0% / calc(var(--hover-tilt-opacity, 0) * 0.5 + 0.2));
}
`;

export const steps4WebComponent = String.raw`
.simple-card::part(container) {
  --hover-tilt-custom-shadow: 
    calc(var(--shadow-x) * 10px) calc(var(--shadow-y) * 10px + 5px) 5px 10px
      hsl(0 0% 0% / calc(var(--hover-tilt-opacity, 0) * 0.5 + 0.2));
}
`;