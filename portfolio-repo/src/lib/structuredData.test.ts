import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { projects } from "@/content/projects";
import { siteUrl } from "@/i18n/metadata";
import {
  createProjectStructuredData,
  createSiteStructuredData,
  serializeStructuredData
} from "./structuredData";

describe("structured data", () => {
  it("describes the localized portfolio owner and website", () => {
    const data = createSiteStructuredData({
      locale: "it",
      title: "Tiana Oblasser | Sviluppatrice web",
      description: "Portfolio full stack",
      role: "Sviluppatrice web full stack"
    });
    const graph = data["@graph"] as Array<Record<string, unknown>>;

    assert.equal(graph[0].name, "Tiana Oblasser");
    assert.equal(graph[0].jobTitle, "Sviluppatrice web full stack");
    assert.equal(graph[1].url, `${siteUrl}/it`);
    assert.equal(graph[1].inLanguage, "it");
  });

  it("describes project case studies with canonical URLs and media", () => {
    const project = projects[0];
    const data = createProjectStructuredData(project, "ro");

    assert.equal(data["@type"], "CreativeWork");
    assert.equal(data.url, `${siteUrl}/ro/projects/${project.slug}`);
    assert.equal(data.inLanguage, "ro");
    assert.match(String(data.image), /^https:\/\/developer-portfolio\.vercel\.app\/media\//);
  });

  it("escapes markup-significant characters before embedding JSON-LD", () => {
    assert.equal(
      serializeStructuredData({ description: "</script>" }),
      '{"description":"\\u003c/script>"}'
    );
  });
});
