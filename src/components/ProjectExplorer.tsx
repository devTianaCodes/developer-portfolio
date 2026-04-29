"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { DeploymentMode, ProjectEntry } from "@/content/projects";
import { classNames } from "@/lib/classNames";
import { ProjectCard } from "./ProjectCard";

type FilterKey = "all" | ProjectEntry["category"] | DeploymentMode | "featured";

type Filter = {
  key: FilterKey;
  label: string;
  description: string;
};

const filters: Filter[] = [
  { key: "all", label: "All", description: "Every case study and demo" },
  { key: "featured", label: "Flagship", description: "Best first-read projects" },
  { key: "full-stack", label: "Full-stack", description: "Product apps with backend depth" },
  { key: "game", label: "Games", description: "Playable frontend systems" },
  { key: "live", label: "Live", description: "Ready to open now" },
  { key: "hybrid", label: "Hybrid", description: "Demo plus media strategy" },
  { key: "media", label: "Media-first", description: "Captured as case-study assets" }
];

function matchesFilter(project: ProjectEntry, filter: FilterKey) {
  if (filter === "all") return true;
  if (filter === "featured") return Boolean(project.flagship);
  if (["full-stack", "frontend", "game"].includes(filter)) return project.category === filter;
  return project.deploymentMode === filter;
}

function sortProjects(projects: ProjectEntry[]) {
  return [...projects].sort((a, b) => {
    const aScore = Number(Boolean(a.flagship)) * 4 + Number(a.deploymentMode === "live") * 2;
    const bScore = Number(Boolean(b.flagship)) * 4 + Number(b.deploymentMode === "live") * 2;
    return bScore - aScore || a.name.localeCompare(b.name);
  });
}

export function ProjectExplorer({ projects }: { projects: ProjectEntry[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const reduceMotion = useReducedMotion();
  const filteredProjects = useMemo(
    () => sortProjects(projects.filter((project) => matchesFilter(project, activeFilter))),
    [activeFilter, projects]
  );
  const active = filters.find((filter) => filter.key === activeFilter) ?? filters[0];

  return (
    <section className="space-y-7">
      <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Project explorer</p>
          <h2 className="font-display text-4xl text-ink md:text-5xl">Filter the work by the signal reviewers need.</h2>
          <p className="max-w-2xl text-base leading-8 text-muted">
            Jump between product systems, live interaction demos, and flagship case studies without losing the story behind each project.
          </p>
        </div>
        <div className="rounded-[1.25rem] border border-line bg-white/76 p-4 shadow-editorial">
          <p className="text-xs uppercase tracking-[0.24em] text-accent">Now showing</p>
          <p className="mt-2 font-display text-3xl text-ink">{filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{active.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 rounded-[1.25rem] border border-line bg-white/72 p-2 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActiveFilter(filter.key)}
            className={classNames(
              "shrink-0 rounded-[0.9rem] px-4 py-3 text-sm transition",
              activeFilter === filter.key
                ? "bg-[linear-gradient(135deg,#2563eb,#315f9f)] text-white shadow-[0_12px_30px_rgba(37,99,235,0.22)]"
                : "text-muted hover:bg-white hover:text-ink"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeFilter}
        className="grid gap-6 xl:grid-cols-2"
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} prominent={Boolean(project.flagship)} />
        ))}
      </motion.div>
    </section>
  );
}
