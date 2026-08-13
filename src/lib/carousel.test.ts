import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { circularOffset, wrapIndex } from "./carousel";

describe("carousel index navigation", () => {
  it("wraps indexes at both ends of the collection", () => {
    assert.equal(wrapIndex(8, 8), 0);
    assert.equal(wrapIndex(-1, 8), 7);
  });

  it("uses the shortest circular offset between slides", () => {
    assert.equal(circularOffset(7, 0, 8), -1);
    assert.equal(circularOffset(0, 7, 8), 1);
  });
});
