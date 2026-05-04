type TechIconKey =
  | "react"
  | "vite"
  | "router"
  | "zustand"
  | "tailwind"
  | "node"
  | "express"
  | "typescript"
  | "next"
  | "mysql"
  | "prisma"
  | "stripe"
  | "vercel"
  | "tool"
  | "api"
  | "security"
  | "test"
  | "motion"
  | "form"
  | "cloud";

type ProjectTechBadgeProps = {
  tech: string;
  compact?: boolean;
  className?: string;
};

function techIconKey(tech: string): TechIconKey | undefined {
  const value = tech.toLowerCase();

  if (value.includes("react router")) return "router";
  if (value.includes("react query") || value.includes("tanstack")) return "api";
  if (value.includes("react hook form") || value.includes("zod")) return "form";
  if (value.includes("react")) return "react";
  if (value.includes("typescript")) return "typescript";
  if (value.includes("next")) return "next";
  if (value.includes("vite")) return "vite";
  if (value.includes("zustand")) return "zustand";
  if (value.includes("tailwind")) return "tailwind";
  if (value.includes("node")) return "node";
  if (value.includes("express")) return "express";
  if (value.includes("mysql")) return "mysql";
  if (value.includes("prisma")) return "prisma";
  if (value.includes("stripe")) return "stripe";
  if (value.includes("vercel")) return "vercel";
  if (value.includes("axios") || value.includes("cors") || value.includes("morgan") || value.includes("pino")) return "api";
  if (value.includes("jwt") || value.includes("cookie") || value.includes("bcrypt") || value.includes("helmet") || value.includes("rate")) return "security";
  if (value.includes("vitest") || value.includes("supertest")) return "test";
  if (value.includes("framer") || value.includes("clsx")) return "motion";
  if (value.includes("cloudinary") || value.includes("multer")) return "cloud";
  if (value.includes("nodemailer") || value.includes("dotenv") || value.includes("lucide")) return "tool";

  return "tool";
}

function TechIcon({ type }: { type: TechIconKey }) {
  if (type === "react") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.45">
        <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.3" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.3" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.3" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  if (type === "typescript") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M7.5 9h5" />
        <path d="M10 9v7" />
        <path d="M14.3 15.4c.5.5 1.2.8 2 .8 1 0 1.7-.5 1.7-1.3 0-.7-.5-1-1.6-1.4-1.1-.4-1.8-.9-1.8-1.9 0-1.1.9-1.8 2-1.8.8 0 1.4.2 1.9.7" />
      </svg>
    );
  }

  if (type === "next") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M8.5 16V8l7 8V8" />
        <path d="M15.5 16 20 21" />
      </svg>
    );
  }

  if (type === "vite") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round">
        <path d="M5 4.5 12 20l7-15.5-7.1 2.2L5 4.5Z" />
        <path d="m13.2 3.8-3 6.5h4.1l-2.2 5.9 5.2-8.2h-4.1l2-4.2h-2Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "router") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
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
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 7h14l-9.5 10H19" />
        <path d="M6 17h3" />
      </svg>
    );
  }

  if (type === "tailwind") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13.4c1.5-3 3.4-4.4 5.8-4.1 1.4.1 2.4.9 3.3 1.7 1.4 1.2 2.6 2.2 5.4-.1" />
        <path d="M5.5 17.2c1.5-3 3.4-4.4 5.8-4.1 1.4.1 2.4.9 3.3 1.7 1.4 1.2 2.6 2.2 5.4-.1" />
      </svg>
    );
  }

  if (type === "node") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round">
        <path d="M12 3 19.8 7.5v9L12 21 4.2 16.5v-9L12 3Z" />
        <path d="M8.7 15V9h1.6l3.4 4.6V9h1.6v6h-1.6l-3.4-4.6V15H8.7Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "mysql") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }


  if (type === "prisma") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M12.4 3.2 4.8 17.5c-.4.8.3 1.7 1.1 1.4l12.5-4.4c.7-.2 1-.9.7-1.6L13.8 3.3c-.3-.7-1.1-.8-1.4-.1Z" />
        <path d="m12.8 5.9-2.1 10.4 6.1-2.1-4-8.3Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "stripe") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.8 7.4c-1.1-.7-2.5-1-4-1-2.6 0-4.4 1.2-4.4 3.1 0 1.7 1.3 2.5 3.8 3 2 .4 2.7.7 2.7 1.5 0 .9-.9 1.4-2.5 1.4-1.6 0-3.1-.5-4.3-1.3" />
        <path d="M12 4.8v14.4" />
      </svg>
    );
  }

  if (type === "vercel") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 4.5 21 20H3L12 4.5Z" />
      </svg>
    );
  }

  if (type === "api") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 7H6a4 4 0 0 0 0 8h2" />
        <path d="M16 7h2a4 4 0 0 1 0 8h-2" />
        <path d="M8.5 12h7" />
      </svg>
    );
  }

  if (type === "security") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.5 18.5 6v5.2c0 4.1-2.6 7.8-6.5 9.3-3.9-1.5-6.5-5.2-6.5-9.3V6L12 3.5Z" />
        <path d="m9.2 12.1 1.8 1.8 3.8-4" />
      </svg>
    );
  }

  if (type === "test") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6" />
        <path d="M10 3v5.2L5.5 17a2.6 2.6 0 0 0 2.3 3.8h8.4a2.6 2.6 0 0 0 2.3-3.8L14 8.2V3" />
        <path d="M8 15h8" />
      </svg>
    );
  }

  if (type === "motion") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8h9" />
        <path d="M4 12h13" />
        <path d="M4 16h7" />
        <path d="m16 8 4 4-4 4" />
      </svg>
    );
  }

  if (type === "form") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 4.5h10v15H7z" />
        <path d="M9.5 8h5" />
        <path d="M9.5 12h5" />
        <path d="M9.5 16h3" />
      </svg>
    );
  }

  if (type === "cloud") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.5 18h9.2a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.5 1.4A3.4 3.4 0 0 0 7.5 18Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
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
  const size = compact ? "text-[9px]" : "text-xs";
  const padding = compact ? "px-2 py-1" : "px-4 py-2";
  const iconSize = compact ? "[&_svg]:h-4 [&_svg]:w-4" : "";

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[3px] border border-line bg-white/78 ${padding} ${size} ${iconSize} uppercase tracking-[0.12em] text-black ${className}`}
    >
      {icon ? <TechIcon type={icon} /> : null}
      {tech}
    </span>
  );
}
