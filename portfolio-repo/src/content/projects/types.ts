export const projectSlugs = [
  "chocolate",
  "english4u",
  "orchidcare",
  "petnest",
  "paytrack",
  "ai-comparator",
  "brickdrop",
  "sea-battle"
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export type DeploymentMode = "live" | "media" | "hybrid";

export type AssetStatus = "ready" | "capture-planned";

export type MediaAsset = {
  kind: "image" | "video";
  src: string;
  alt: string;
  width: number;
  height: number;
  poster?: string;
  optimizedSrc?: string;
  featured?: boolean;
  status?: AssetStatus;
  note?: string;
};

export type ProjectLink = {
  label: string;
  href?: string;
  kind: "live" | "code" | "case-study";
};

export type ProjectDetailGroup = {
  title: string;
  text: string;
  items: string[];
};

export type ProjectRepository = {
  label: string;
  href: string;
};

export type ProjectSectionIntro = {
  eyebrow: string;
  title: string;
  text: string;
};

export type ProjectEntry = {
  slug: ProjectSlug;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  category: "full-stack" | "frontend" | "game";
  deploymentMode: DeploymentMode;
  year: string;
  flagship?: boolean;
  visualTone:
    | "warm-luxury"
    | "clean-learning"
    | "soft-utility"
    | "botanical-gold"
    | "finance-peach"
    | "ai-lilac"
    | "arcade"
    | "naval-tech";
  hook: string;
  techStack: string[];
  strengths: string[];
  challenge: string;
  solution: string;
  outcome: string;
  features: string[];
  architecture: string[];
  metrics: { label: string; value: string }[];
  impactBullets: string[];
  interviewAngles: string[];
  repositories?: ProjectRepository[];
  repositoryRoots?: { label: string; path: string }[];
  workflowIntro?: ProjectSectionIntro;
  workflowHighlights?: ProjectDetailGroup[];
  apiIntro?: ProjectSectionIntro;
  apiDomains?: string[];
  qualityIntro?: ProjectSectionIntro;
  qualitySignals?: ProjectDetailGroup[];
  media: MediaAsset[];
  links: ProjectLink[];
};
