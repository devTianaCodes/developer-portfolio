export type CarouselDirection = -1 | 1;

const swipeOffsetThreshold = 54;
const swipeVelocityThreshold = 360;

export function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

export function getArrowDirection(key: string): CarouselDirection | null {
  if (key === "ArrowLeft") return -1;
  if (key === "ArrowRight") return 1;
  return null;
}

export function getSwipeDirection(offsetX: number, velocityX: number): CarouselDirection | null {
  if (Math.abs(offsetX) >= swipeOffsetThreshold) return offsetX < 0 ? 1 : -1;
  if (Math.abs(velocityX) >= swipeVelocityThreshold) return velocityX < 0 ? 1 : -1;
  return null;
}

export function circularOffset(index: number, activeIndex: number, length: number) {
  const rawOffset = index - activeIndex;

  if (rawOffset > length / 2) return rawOffset - length;
  if (rawOffset < -length / 2) return rawOffset + length;
  return rawOffset;
}
