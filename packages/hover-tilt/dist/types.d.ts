import type { Spring } from 'svelte/motion';
export type SpringOpts = NonNullable<Parameters<typeof Spring.of>[1]>;
export type StrictSpringOptions = Required<SpringOpts>;
export type ExitSpringOptions = Pick<StrictSpringOptions, 'stiffness' | 'damping'>;
export interface HoverTiltProps {
    class?: string;
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
    exitDelay?: number;
    blendMode?: string;
}
