export function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

export function circularOffset(index: number, activeIndex: number, length: number) {
  const rawOffset = index - activeIndex;

  if (rawOffset > length / 2) return rawOffset - length;
  if (rawOffset < -length / 2) return rawOffset + length;
  return rawOffset;
}
