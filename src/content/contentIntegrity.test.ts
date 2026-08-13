import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  degreeCredentials,
  professionalCredentials,
  uxUiCredentials
} from "./credentials";
import { projectPresentations } from "./projectPresentation";
import { projects } from "./projects";
import { projectSlugs } from "./projects/types";
import { siteConfig, siteNavigation } from "./site";
import { enabledLocales } from "@/i18n/config";
import { localizeProject } from "@/lib/localizeProject";

function findDuplicates(values: readonly string[]) {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }

  return [...duplicates].sort();
}

function describeStructure(value: unknown): unknown {
  if (Array.isArray(value)) {
    return {
      length: value.length,
      items: value.map(describeStructure)
    };
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, child]) => [key, describeStructure(child)])
    );
  }

  return typeof value;
}

describe("portfolio content identity", () => {
  it("uses unique project and credential slugs", () => {
    const projectSlugs = projects.map(({ slug }) => slug);
    const credentialSlugs = [
      ...professionalCredentials,
      ...degreeCredentials,
      ...uxUiCredentials
    ].map(({ slug }) => slug);

    assert.deepEqual(findDuplicates(projectSlugs), []);
    assert.deepEqual(findDuplicates(credentialSlugs), []);
  });

  it("registers every supported project slug exactly once", () => {
    assert.deepEqual(projects.map(({ slug }) => slug).sort(), [...projectSlugs].sort());
  });

  it("provides exactly one presentation configuration per project", () => {
    assert.deepEqual(
      Object.keys(projectPresentations).sort(),
      projects.map(({ slug }) => slug).sort()
    );
  });
});

describe("localized project content", () => {
  it("preserves the canonical English structure in every locale", () => {
    for (const project of projects) {
      const englishStructure = describeStructure(project);

      for (const locale of enabledLocales) {
        assert.deepEqual(
          describeStructure(localizeProject(project, locale)),
          englishStructure,
          `${project.slug} does not have structural parity in ${locale}`
        );
      }
    }
  });
});

describe("portfolio links", () => {
  it("uses internal paths, HTTPS, or email links", () => {
    const links = [
      ...siteNavigation.map(({ href }) => href),
      ...siteConfig.socialLinks.map(({ href }) => href),
      siteConfig.githubUrl,
      siteConfig.emailUrl,
      siteConfig.linkedInUrl,
      siteConfig.secondaryCta.href,
      ...projects.flatMap((project) => [
        ...project.links.flatMap(({ href }) => (href ? [href] : [])),
        ...(project.repositories?.map(({ href }) => href) ?? []),
        ...(project.repositoryRoots?.map(({ path }) => path) ?? [])
      ])
    ];

    for (const link of links) {
      const supported =
        link.startsWith("/") || link.startsWith("https://") || link.startsWith("mailto:");

      assert.equal(supported, true, `Unsupported URL scheme: ${link}`);
    }
  });
});
