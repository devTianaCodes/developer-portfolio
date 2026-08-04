import type { ProjectEntry } from "@/content/projects";
import { getItalianProject } from "@/content/projects.it";
import { getRomanianProject } from "@/content/projects.ro";
import type { Locale } from "@/i18n/config";

export function localizeProject(project: ProjectEntry, locale: Locale) {
  if (locale === "it") return getItalianProject(project);
  if (locale === "ro") return getRomanianProject(project);

  return project;
}
