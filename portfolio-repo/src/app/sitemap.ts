import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { enabledLocales } from "@/i18n/config";
import { getLanguageAlternates, getLocalizedUrl } from "@/i18n/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: "monthly" | "yearly";
    priority: number;
  }> = [
    {
      path: "/",
      changeFrequency: "monthly",
      priority: 1
    },
    {
      path: "/projects",
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      path: "/about",
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      path: "/credentials",
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      path: "/contact",
      changeFrequency: "yearly",
      priority: 0.4
    },
    ...projects.map((project) => ({
      path: `/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];

  return routes.flatMap((route) => {
    const languages = getLanguageAlternates(route.path);

    return enabledLocales.map((locale) => ({
      url: getLocalizedUrl(route.path, locale),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages }
    }));
  });
}
