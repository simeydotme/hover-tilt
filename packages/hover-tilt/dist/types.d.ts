import type { Spring } from 'svelte/motion';
/**
 * Spring animation options from Svelte's motion library.
 * Used for configuring physics-based animations.
 * @see https://svelte.dev/docs/svelte/svelte-motion#Spring
 */
export type SpringOpts = NonNullable<Parameters<typeof Spring.of>[1]>;
export type StrictSpringOptions = Required<SpringOpts>;
export type ExitSpringOptions = Pick<StrictSpringOptions, 'stiffness' | 'damping'>;
/**
 * Props for the HoverTilt component.
 * Provides a beautiful hover tilt effect with customizable animations, shadows, and glare.
 */
export interface HoverTiltProps {
    /** CSS class to apply to the container/host element. */
    class?: string;
    /** Inline CSS styles to apply to the container/host element. */
    style?: string;
    /**
     * Controls the intensity of horizontal tilt.
     * Higher values create more pronounced tilt effects.
     * @default 1
     */
    tiltFactor?: number;
    /**
     * Controls the intensity of vertical tilt.
     * Useful for creating asymmetric tilt effects.
     * Defaults to the same value as `tiltFactor` unless overridden.
     */
    tiltFactorY?: number;
    /**
     * Scale multiplier applied on hover.
     * Values greater than `1` will scale up, values less than `1` will scale down.
     * @default 1
     */
    scaleFactor?: number;
    /**
     * Physics options for scale and opacity animations.
     * Based on Svelte Spring values. Higher stiffness = faster response, higher damping = less oscillation.
     * @default { stiffness: 0.2, damping: 0.8 }
     */
    springOptions?: SpringOpts;
    /**
     * Separate physics options for tilt animations.
     * Allows different animation feel for tilt vs scale.
     * Uses `springOptions` if not specified.
     */
    tiltSpringOptions?: SpringOpts;
    /**
     * Delay in milliseconds before activating the component when cursor enters.
     * Helps prevent flickering when cursor briefly enters the element.
     * @default 0
     */
    enterDelay?: number;
    /**
     * Delay in milliseconds before animating back to default state when cursor leaves.
     * Helps prevent flickering when cursor briefly leaves the element.
     * @default 200
     */
    exitDelay?: number;
    /**
     * Enables dynamic shadow that moves with the tilt effect.
     * @default false
     */
    shadow?: boolean;
    /**
     * Blur radius for the shadow effect (in pixels).
     * Only applies when `shadow` is `true`.
     * Can also be set via CSS variable: `--hover-tilt-shadow-blur`
     * @default 22
     */
    shadowBlur?: number;
    /**
     * CSS blend mode for the glare effect.
     * Common values: `overlay`, `screen`, `multiply`, `plus-lighter`, etc.
     * Can also be set via CSS variable: `--hover-tilt-blend-mode`
     * @default "overlay"
     */
    blendMode?: string;
    /**
     * Intensity of the glare effect.
     * Values greater than `1` increase intensity, values less than `1` decrease it.
     * Values over 4 will not really do anything with the default glare gradient.
     * @default 1
     */
    glareIntensity?: number;
    /**
     * Hue value (0-360) for the glare color.
     * Adjusts the color of the glare effect.
     * Can also be set via CSS variable: `--hover-tilt-glare-hue`
     * @default 270 (lavender-ish)
     */
    glareHue?: number;
    /**
     * CSS mask image for the glare effect.
     * Allows custom masking of the glare to specific areas.
     * Example: `"url(#mask)"`
     */
    glareMask?: string;
    /**
     * CSS `mask-mode` for the glare mask.
     * Controls how the mask is interpreted.
     * @default undefined (browser default behavior is 'match-source')
     */
    glareMaskMode?: 'match-source' | 'luminance' | 'alpha' | 'none';
    /**
     * Composite operation for multiple masks.
     * Only useful if applying multiple masks.
     * @default undefined (browser default behavior is 'add')
     */
    glareMaskComposite?: 'add' | 'subtract' | 'exclude' | 'intersect';
}
export type XY = [number, number];
export interface ElementBox {
    width: number;
    height: number;
    left: number;
    top: number;
    center: XY;
    half: XY;
}
export interface PointerPosition {
    pixels: XY;
    normalized: XY;
    percent: XY;
}
export interface PointerDerivatives {
    delta: XY;
    distance: number;
    angle: number;
    edge: number;
}
export type NormalizedInput = PointerPosition | XY | {
    x: number;
    y: number;
};
