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
`