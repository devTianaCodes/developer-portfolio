import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { projects } from "@/content/projects";
import { localizeProject } from "./localizeProject";

const project = projects.find(({ slug }) => slug === "chocolate");

if (!project) {
  throw new Error("Expected the Chocolate Craft House project fixture to exist");
}

describe("project localization", () => {
  it("keeps the canonical English project unchanged", () => {
    assert.equal(localizeProject(project, "en"), project);
  });

  it("translates project copy while preserving canonical identity", () => {
    const italian = localizeProject(project, "it");
    const romanian = localizeProject(project, "ro");

    assert.equal(italian.slug, project.slug);
    assert.equal(italian.name, project.name);
    assert.equal(italian.media[0]?.src, project.media[0]?.src);
    assert.notEqual(italian.summary, project.summary);

    assert.equal(romanian.slug, project.slug);
    assert.equal(romanian.name, project.name);
    assert.equal(romanian.media[0]?.src, project.media[0]?.src);
    assert.notEqual(romanian.summary, project.summary);
  });
});
