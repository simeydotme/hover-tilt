import type { ElementBox, PointerDerivatives, PointerPosition, NormalizedInput } from './types.js';
export declare const ZERO_POINTER_DERIVATIVES: PointerDerivatives;
export declare const clamp: (value: number, min?: number, max?: number) => number;
export declare const round: (value: number, precision?: number) => number;
/**
 * Reads the current DOMRect once and enriches it with pre-computed
 * values that we reuse for pointer math. This keeps pointer-move handlers
 * to a single layout read per frame.
 */
export declare const readElementBox: ($el: HTMLElement) => ElementBox;
export declare const pointerPositionFromEvent: (event: PointerEvent, box: ElementBox) => PointerPosition;
export declare const derivePointerState: (box: ElementBox, position: NormalizedInput) => PointerDerivatives;
