import type { ElementBox, PointerDerivatives, PointerPosition, NormalizedInput } from './types/index.js';
/**
 * Clean pointer derivatives for when no pointer is present.
 */
export declare const ZERO_POINTER_DERIVATIVES: PointerDerivatives;
/**
 * Returns a value clamped between a minimum and maximum.
 */
export declare const clamp: (value: number, min?: number, max?: number) => number;
/**
 * Returns a value rounded to a given precision.
 */
export declare const round: (value: number, precision?: number) => number;
/**
 * Reads the current DOMRect once and enriches it with pre-computed
 * values that we reuse for pointer math. This keeps pointer-move handlers
 * to a single layout read per frame.
 */
export declare const readElementBox: ($el: HTMLElement) => ElementBox;
/**
 * Calculates the position of a pointer event relative to an element box.
 */
export declare const pointerPositionFromEvent: (event: PointerEvent, box: ElementBox) => PointerPosition;
/**
 * Derives the state of a pointer from a normalized position.
 */
export declare const derivePointerState: (box: ElementBox, position: NormalizedInput) => PointerDerivatives;
