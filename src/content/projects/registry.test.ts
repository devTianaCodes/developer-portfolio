import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createProjectRegistry } from "./registry";
import type { ProjectEntry } from "./types";

const project = {
  slug: "chocolate",
  name: "Chocolate Craft House"
} as ProjectEntry;

describe("project content registry", () => {
  it("preserves entry order and resolves projects by slug", () => {
    const registry = createProjectRegistry([project]);

    assert.deepEqual(registry.entries, [project]);
    assert.equal(registry.getBySlug("chocolate"), project);
    assert.equal(registry.getBySlug("missing"), undefined);
  });

  it("rejects duplicate project slugs", () => {
    assert.throws(
      () => createProjectRegistry([project, { ...project }]),
      /Duplicate project slug: chocolate/
    );
  });
});
