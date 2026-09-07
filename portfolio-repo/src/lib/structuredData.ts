import type { ProjectEntry } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import { getLocalizedUrl, siteUrl } from "@/i18n/metadata";
import { siteConfig } from "@/content/site";
import { getProjectStructuredImageSrc } from "@/lib/projectMedia";

export type StructuredDataValue = Record<string, unknown>;

type SiteStructuredDataOptions = {
  locale: Locale;
  title: string;
  description: string;
  role: string;
};

const personId = `${siteUrl}/#person`;

export function createSiteStructuredData({
  locale,
  title,
  description,
  role
}: SiteStructuredDataOptions): StructuredDataValue {
  const url = getLocalizedUrl("/", locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        url,
        image: `${siteUrl}/media/profile/tiana-contact.jpg`,
        jobTitle: role,
        sameAs: [siteConfig.githubUrl, siteConfig.linkedInUrl],
        knowsAbout: siteConfig.stackBands
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name: title,
        description,
        inLanguage: locale,
        creator: { "@id": personId }
      }
    ]
  };
}

export function createProjectStructuredData(
  project: ProjectEntry,
  locale: Locale
): StructuredDataValue {
  const url = getLocalizedUrl(`/projects/${project.slug}`, locale);
  const imageSrc = getProjectStructuredImageSrc(project);
  const relatedLinks = [
    ...(project.repositories?.map((repository) => repository.href) ?? []),
    ...project.links.flatMap((link) => (link.href?.startsWith("https://") ? [link.href] : []))
  ];

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#case-study`,
    name: project.name,
    headline: project.tagline,
    description: project.summary,
    url,
    inLanguage: locale,
    dateCreated: project.year,
    image: imageSrc ? `${siteUrl}${imageSrc}` : undefined,
    author: { "@id": personId },
    keywords: project.techStack,
    sameAs: [...new Set(relatedLinks)],
    about: {
      "@type": project.category === "game" ? "VideoGame" : "SoftwareApplication",
      name: project.name,
      applicationCategory: project.category,
      operatingSystem: "Web"
    }
  };
}

export function serializeStructuredData(data: StructuredDataValue) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
