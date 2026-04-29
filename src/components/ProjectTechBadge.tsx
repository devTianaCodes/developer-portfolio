type TechIconKey = "react" | "vite" | "router" | "zustand" | "tailwind" | "node" | "express";

type ProjectTechBadgeProps = {
  tech: string;
  compact?: boolean;
  className?: string;
};

function techIconKey(tech: string): TechIconKey | undefined {
  const value = tech.toLowerCase();

  if (value.includes("react router")) return "router";
  if (value.includes("react")) return "react";
  if (value.includes("vite")) return "vite";
  if (value.includes("zustand")) return "zustand";
  if (value.includes("tailwind")) return "tailwind";
  if (value.includes("node")) return "node";
  if (value.includes("express")) return "express";

  return undefined;
}

function TechIcon({ type }: { type: TechIconKey }) {
  if (type === "react") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.45">
        <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.3" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.3" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.3" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  if (type === "vite") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round">
        <path d="M5 4.5 12 20l7-15.5-7.1 2.2L5 4.5Z" />
        <path d="m13.2 3.8-3 6.5h4.1l-2.2 5.9 5.2-8.2h-4.1l2-4.2h-2Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "router") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="2.4" />
        <circle cx="18" cy="6" r="2.4" />
        <circle cx="18" cy="18" r="2.4" />
        <path d="M8.2 11 15.8 7" />
        <path d="M8.2 13 15.8 17" />
      </svg>
    );
  }

  if (type === "zustand") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 7h14l-9.5 10H19" />
        <path d="M6 17h3" />
      </svg>
    );
  }

  if (type === "tailwind") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13.4c1.5-3 3.4-4.4 5.8-4.1 1.4.1 2.4.9 3.3 1.7 1.4 1.2 2.6 2.2 5.4-.1" />
        <path d="M5.5 17.2c1.5-3 3.4-4.4 5.8-4.1 1.4.1 2.4.9 3.3 1.7 1.4 1.2 2.6 2.2 5.4-.1" />
      </svg>
    );
  }

  if (type === "node") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round">
        <path d="M12 3 19.8 7.5v9L12 21 4.2 16.5v-9L12 3Z" />
        <path d="M8.7 15V9h1.6l3.4 4.6V9h1.6v6h-1.6l-3.4-4.6V15H8.7Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7.5h16" />
      <path d="M4 12h10.5" />
      <path d="M4 16.5h8" />
      <path d="m14.5 16.5 5-5" />
      <path d="m14.5 11.5 5 5" />
    </svg>
  );
}

export function hasKnownTechIcon(tech: string) {
  return Boolean(techIconKey(tech));
}

export function ProjectTechBadge({ tech, compact = false, className = "" }: ProjectTechBadgeProps) {
  const icon = techIconKey(tech);
  const padding = compact ? "px-3 py-1" : "px-4 py-2";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-white/76 ${padding} text-xs uppercase tracking-[0.12em] text-muted ${icon ? "text-accent" : ""} ${className}`}
    >
      {icon ? <TechIcon type={icon} /> : null}
      {tech}
    </span>
  );
}
