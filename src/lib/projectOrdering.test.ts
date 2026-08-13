import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { ProjectEntry } from "@/content/projects";
import { sortProjectsForDisplay } from "./projectOrdering";

describe("project display ordering", () => {
  it("returns projects in the portfolio's curated order", () => {
    const projects = [
      { slug: "sea-battle" },
      { slug: "petnest" },
      { slug: "chocolate" },
      { slug: "orchidcare" }
    ] satisfies ReadonlyArray<Pick<ProjectEntry, "slug">>;

    assert.deepEqual(
      sortProjectsForDisplay(projects).map((project) => project.slug),
      ["chocolate", "petnest", "orchidcare", "sea-battle"]
    );
  });

  it("does not mutate the supplied project collection", () => {
    const projects = [
      { slug: "sea-battle" },
      { slug: "chocolate" }
    ] satisfies ReadonlyArray<Pick<ProjectEntry, "slug">>;

    sortProjectsForDisplay(projects);

    assert.deepEqual(projects.map((project) => project.slug), ["sea-battle", "chocolate"]);
  });
});
