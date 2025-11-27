import type { HoverTiltProps } from './lib/types/index.js';

declare class HoverTiltElement extends HTMLElement {
  /**
   * Typed props bag mirroring the web component's configurable options.
   * This is primarily for IDE intellisense when accessing the element via JS.
   */
  props?: HoverTiltProps;
}

declare global {
  interface HTMLElementTagNameMap {
    'hover-tilt': HoverTiltElement;
  }

  namespace JSX {
    interface IntrinsicElements {
      /**
       * HoverTilt web component.
       *
       * When using React/Preact with TypeScript, import this module somewhere
       * in your app (e.g. `import 'hover-tilt/web-component';`) to enable
       * typed props and JSX support for `<hover-tilt>...</hover-tilt>`.
       */
      'hover-tilt': HoverTiltProps & JSX.IntrinsicElements['div'];
    }
  }
}

export {};
