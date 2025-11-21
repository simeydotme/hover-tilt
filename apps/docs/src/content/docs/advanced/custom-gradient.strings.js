


export const showcaseCssCode = String.raw`

/* Custom Colored Gradient */
:global(.custom-gradient) {
  --hover-tilt-custom-gradient: radial-gradient(
    circle at var(--gradient-x, 50%) var(--gradient-y, 50%),
    rgba(125, 255, 194, calc(var(--hover-tilt-glare-intensity, 1) * 0.5)) 10%,
    rgba(255, 255, 255, 0) 80%,
    transparent 70%
  );
}

/* Specular Highlight */
:global(.specular-highlight) {
  --hover-tilt-custom-gradient: radial-gradient(
    80% 100% at var(--gradient-x, 50%) var(--gradient-y, 50%),
    rgb(255 255 255 / calc(var(--hover-tilt-glare-intensity, 1))) 50%,
    transparent 55%
  );
}

/* Aurora Sweep */
:global(.aurora-sweep) {
  --hover-tilt-custom-gradient: conic-gradient(
    from calc(var(--hover-tilt-angle, 0)) at center center,
    rgba(255, 255, 255, calc(var(--hover-tilt-glare-intensity, 1) * 0.9)),
    rgba(6, 182, 212, calc(var(--hover-tilt-glare-intensity, 1) * 0.7)),
    rgba(255, 255, 255, calc(var(--hover-tilt-glare-intensity, 1) * 0.9))
  );
}

/* Luminance Beam */
:global(.luminance-beam) {
  --hover-tilt-custom-gradient: linear-gradient(
    120deg,
    rgb(0 0 0 / 0) calc((var(--gradient-x, 50%) / 2 + var(--gradient-y, 50%) / 2) - 60%),
    rgb(249 218 173 / var(--hover-tilt-glare-intensity, 1)) calc((var(--gradient-x, 50%) / 2 + var(--gradient-y, 50%) / 2)),
    rgb(0 0 0 / 0) calc((var(--gradient-x, 50%) / 2 + var(--gradient-y, 50%) / 2) + 60%)
  );
}

/* Inverted Gradient */
:global(.inverted-gradient) {
  --hover-tilt-custom-gradient: radial-gradient(
    200% 200% at calc( var(--gradient-x, 50%) * 2 - 50% ) calc( var(--gradient-y, 50%) * 2 - 50% ),
    transparent 30%,
    rgb(255 255 255 / var(--hover-tilt-glare-intensity, 1)) 80%
  );
}

`;

export const cssGradientSyntax = String.raw`
/*** 
 CSS radial-gradient syntax: 
    radial-gradient( [size/shape] at [horizontal offset] [vertical offset], [color1] [stop1], [color2] [stop2], [colorN] [stopN] );
***/

--hover-tilt-custom-gradient:
/***    radial-gradient( [size/shape]   at   [horizontal offset]    [vertical offset],   [color1] [stop1],           [color2] [stop2] );   ***/ 
        radial-gradient( circle         at   var(--gradient-x)      var(--gradient-y),   rgb(255 255 255 / 1) 10%,   transparent 70% );
/***                                                 │                      │                   
                                                     │                      └─ gradient-y offset
                                                     └─ gradient-x offset
***/
`;

export const cssGlareIntensitySyntax = String.raw`
--hover-tilt-custom-gradient:
/***    radial-gradient( [size/shape]   at   [horizontal offset]    [vertical offset],   [color1] [stop1],                                                          [color2] [stop2] );   ***/ 
        radial-gradient( circle         at   var(--gradient-x)      var(--gradient-y),   rgb(255 255 255 / calc(var(--hover-tilt-glare-intensity, 1) * 0.5)) 10%,   transparent 70% );
/***                                                                                                                       │                            │
                                                                                                                           │                            └─ multiplied by 0.5
                                                                                                                           └─ glare-intensity for color opacity ───┘
***/
`;




export const gradientSvelte = String.raw`
<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<HoverTilt
  class="aurora-card"
  shadow
  glareHue={220}
  style="
    --hover-tilt-custom-gradient: conic-gradient(
      from 45deg at var(--hover-tilt-x, 50%) var(--hover-tilt-y, 50%),
      rgba(255,255,255,0.95),
      rgba(59,130,246,0.6),
      rgba(14,165,233,0.4),
      transparent 70%
    );
    --hover-tilt-glare-intensity: 1.4;
  "
>
  <div class="card"></div>
</HoverTilt>
`;

export const gradientCss = String.raw`
.aurora-card {
  border-radius: 28px;
}

.aurora-card .card {
border-radius: inherit;
min-height: 320px;
background: linear-gradient(130deg, rgb(15 23 42), rgb(76 29 149));
}
`;

export const gradientWebComponent = String.raw`
<hover-tilt
  class="aurora-card"
  shadow
  glare-hue="220"
  style="
    --hover-tilt-custom-gradient: conic-gradient(
      from 45deg at var(--hover-tilt-x, 50%) var(--hover-tilt-y, 50%),
      rgba(255,255,255,0.95),
      rgba(59,130,246,0.6),
      rgba(14,165,233,0.4),
      transparent 70%
    );
    --hover-tilt-glare-intensity: 1.4;
  "
>
  <div class="card"></div>
</hover-tilt>
`;



export const steps1Svelte = String.raw`
  <HoverTilt class="simple-card" glareIntensity="{1}">
    ...
  </HoverTilt>
`;

export const steps1WebComponent = String.raw`
  <hover-tilt class="simple-card" glare-intensity="1">
    ...
  </hover-tilt>
`;


export const steps3Svelte = String.raw`
  :global(.simple-card) {
    --hover-tilt-custom-gradient: /* ... */;
  }
`;

export const steps3WebComponent = String.raw`
  .simple-card::part(container) {
    --hover-tilt-custom-gradient: /* ... */;
  }
`;

export const steps4Svelte = String.raw`
:global(.simple-card) {
  --hover-tilt-custom-gradient: radial-gradient(
    circle at var(--gradient-x) var(--gradient-y),
    rgb(255 255 255 / calc(var(--hover-tilt-glare-intensity, 1) * 0.5)) 10%,
    transparent 70%
  );
}
`;

export const steps4WebComponent = String.raw`
.simple-card::part(container) {
  --hover-tilt-custom-gradient: radial-gradient(
    circle at var(--gradient-x) var(--gradient-y),
    rgb(255 255 255 / calc(var(--hover-tilt-glare-intensity, 1) * 0.5)) 10%,
    transparent 70%
  );
}
`;