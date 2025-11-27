import type { HoverTiltProps } from './lib/types/index.js';

declare module 'vue' {
  export interface GlobalComponents {
    /**
     * HoverTilt web component wrapper.
     *
     * Import `hover-tilt/vue` in a Vue app to enable template type-checking
     * and IntelliSense for `<HoverTilt />` and `<hover-tilt>` usages.
     */
    HoverTilt: (props: HoverTiltProps) => any;
  }
}

export {};
