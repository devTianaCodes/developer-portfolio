import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  circularOffset,
  getArrowDirection,
  getSwipeDirection,
  wrapIndex
} from "./carousel";

describe("carousel index navigation", () => {
  it("wraps indexes at both ends of the collection", () => {
    assert.equal(wrapIndex(8, 8), 0);
    assert.equal(wrapIndex(-1, 8), 7);
  });

  it("uses the shortest circular offset between slides", () => {
    assert.equal(circularOffset(7, 0, 8), -1);
    assert.equal(circularOffset(0, 7, 8), 1);
  });

  it("maps only horizontal arrow keys to a navigation direction", () => {
    assert.equal(getArrowDirection("ArrowLeft"), -1);
    assert.equal(getArrowDirection("ArrowRight"), 1);
    assert.equal(getArrowDirection("Enter"), null);
  });

  it("resolves a swipe to one direction and prioritizes deliberate distance", () => {
    assert.equal(getSwipeDirection(-55, 0), 1);
    assert.equal(getSwipeDirection(55, 0), -1);
    assert.equal(getSwipeDirection(0, -361), 1);
    assert.equal(getSwipeDirection(0, 361), -1);
    assert.equal(getSwipeDirection(-55, 361), 1);
    assert.equal(getSwipeDirection(20, 100), null);
  });
});
