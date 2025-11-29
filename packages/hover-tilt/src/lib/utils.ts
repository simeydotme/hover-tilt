import type { ElementBox, PointerDerivatives, PointerPosition, XY, NormalizedInput } from './types/index.js';

/**
 * Clean pointer derivatives for when no pointer is present.
 */
export const ZERO_POINTER_DERIVATIVES: PointerDerivatives = {
  delta: [0, 0],
  distance: 0,
  angle: 0,
  edge: 0
};

/**
 * Returns a value clamped between a minimum and maximum.
 */
export const clamp = (value: number, min = 0, max = 100): number => Math.min(Math.max(value, min), max);

/**
 * Returns a value rounded to a given precision.
 */
export const round = (value: number, precision = 3): number => {
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
};

/**
 * Reads the current DOMRect once and enriches it with pre-computed
 * values that we reuse for pointer math. This keeps pointer-move handlers
 * to a single layout read per frame.
 */
export const readElementBox = ($el: HTMLElement): ElementBox => {
  const rect = $el.getBoundingClientRect();
  const width = rect.width || 1;
  const height = rect.height || 1;
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  return {
    width,
    height,
    left: rect.left,
    top: rect.top,
    center: [halfWidth, halfHeight],
    half: [halfWidth, halfHeight]
  };
};

/**
 * Calculates the position of a pointer event relative to an element box.
 */
export const pointerPositionFromEvent = (event: PointerEvent, box: ElementBox): PointerPosition => {
  const x = event.clientX - box.left;
  const y = event.clientY - box.top;
  const normalizedX = clamp(x / box.width, 0, 1);
  const normalizedY = clamp(y / box.height, 0, 1);
  // Percent is left in the 0-100 range so callers can drop the value straight
  // into CSS custom properties without additional math.
  return {
    pixels: [x, y],
    normalized: [normalizedX, normalizedY],
    percent: [normalizedX * 100, normalizedY * 100]
  };
};

/**
 * Derives the state of a pointer from a normalized position.
 */
export const derivePointerState = (box: ElementBox, position: NormalizedInput): PointerDerivatives => {
  const normalized = toNormalizedXY(position);
  const px = normalized[0] * box.width;
  const py = normalized[1] * box.height;
  const dx = px - box.center[0];
  const dy = py - box.center[1];
  const distance = Math.hypot(dx, dy);
  const edge = closenessToEdge(box.half, dx, dy);

  return {
    delta: [dx, dy],
    distance,
    angle: angleFromDeltas(dx, dy),
    edge
  };
};

/**
 * Converts a normalized input to a normalized XY tuple.
 */
const toNormalizedXY = (value: NormalizedInput): XY => {
  let tuple: XY;
  if (Array.isArray(value)) {
    tuple = [value[0] ?? 0.5, value[1] ?? 0.5];
  } else if ('normalized' in value) {
    tuple = [value.normalized[0], value.normalized[1]];
  } else {
    tuple = [value.x, value.y];
  }

  return [clamp(tuple[0], 0, 1), clamp(tuple[1], 0, 1)];
};

/**
 * Calculates the angle of a pointer from deltas.
 */
const angleFromDeltas = (dx: number, dy: number): number => {
  if (dx === 0 && dy === 0) return 0;
  // Convert atan2 output into clockwise degrees where 0deg is pointing up.
  let degrees = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
  if (degrees < 0) degrees += 360;
  return degrees;
};

/**
 * Calculates the closeness of a pointer to the edge of an element.
 */
const closenessToEdge = (half: XY, dx: number, dy: number): number => {
  const absX = Math.abs(dx);
  const absY = Math.abs(dy);
  const kx = absX ? half[0] / absX : Infinity;
  const ky = absY ? half[1] / absY : Infinity;
  return clamp(1 / Math.min(kx, ky), 0, 1);
};
