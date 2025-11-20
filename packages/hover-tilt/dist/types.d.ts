import type { Spring } from 'svelte/motion';
export type SpringOpts = NonNullable<Parameters<typeof Spring.of>[1]>;
export type StrictSpringOptions = Required<SpringOpts>;
export type ExitSpringOptions = Pick<StrictSpringOptions, 'stiffness' | 'damping'>;
export interface HoverTiltProps {
    class?: string;
    style?: string;
    tiltFactor?: number;
    tiltFactorY?: number;
    scaleFactor?: number;
    springOptions?: SpringOpts;
    tiltSpringOptions?: SpringOpts;
    shadow?: boolean;
    shadowBlur?: number;
    glareIntensity?: number;
    glareHue?: number;
    glareMask?: string;
    glareMaskMode?: 'match-source' | 'luminance' | 'alpha' | 'none';
    glareMaskComposite?: 'add' | 'subtract' | 'exclude' | 'intersect';
    enterDelay?: number;
    exitDelay?: number;
    blendMode?: string;
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
