// Export types for consumers
import type { Spring } from 'svelte/motion';

// Extract SpringOpts type from Spring.of static method
export type SpringOpts = NonNullable<Parameters<typeof Spring.of>[1]>;

// Make all SpringOpts properties required
export type StrictSpringOptions = Required<SpringOpts>;

// Subset of the defined spring options that are used for the exit animation
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
