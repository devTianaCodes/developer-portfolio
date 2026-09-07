import type { ProjectEntry } from "@/content/projects";

type VisualTone = ProjectEntry["visualTone"];

export const projectSurfaces: Record<VisualTone, string> = {
  "warm-luxury": "bg-[#e6c9bc]",
  "clean-learning": "bg-[#d9e8ff]",
  "soft-utility": "bg-[#dcefe6]",
  "botanical-gold": "bg-[#f8edc6]",
  "finance-peach": "bg-[#f4d8c8]",
  "ai-lilac": "bg-[#f6e4ea]",
  arcade: "bg-[#e2dcff]",
  "naval-tech": "bg-[#d8edf7]"
};

export const projectCarouselGlows: Record<VisualTone, string> = {
  "warm-luxury": "from-[#7a3f2a]/16 via-transparent to-[#f5e4d6]/50",
  "clean-learning": "from-[#2d67b8]/14 via-transparent to-[#f4f8ff]/56",
  "soft-utility": "from-[#2f765d]/14 via-transparent to-[#f4fff8]/56",
  "botanical-gold": "from-[#cdb365]/9 via-transparent to-[#fffbea]/72",
  "finance-peach": "from-[#ff6b5f]/18 via-transparent to-[#fff3e8]/60",
  "ai-lilac": "from-[#c98298]/16 via-transparent to-[#fff6f8]/64",
  arcade: "from-[#5547b8]/14 via-transparent to-[#f7f3ff]/56",
  "naval-tech": "from-[#1f6d94]/14 via-transparent to-[#f5fbff]/56"
};

export const projectCardOverlays: Record<VisualTone, string> = {
  "warm-luxury": "from-[rgba(39,23,18,0.78)] via-[rgba(116,60,38,0.2)] to-transparent",
  "clean-learning": "from-[rgba(15,23,42,0.72)] via-[rgba(37,99,235,0.18)] to-transparent",
  "soft-utility": "from-[rgba(15,54,50,0.72)] via-[rgba(49,95,159,0.14)] to-transparent",
  "botanical-gold": "from-[rgba(86,70,30,0.58)] via-[rgba(196,164,76,0.1)] to-transparent",
  "finance-peach": "from-[rgba(16,24,40,0.78)] via-[rgba(255,107,95,0.22)] to-transparent",
  "ai-lilac": "from-[rgba(99,61,75,0.58)] via-[rgba(205,112,137,0.18)] to-transparent",
  arcade: "from-[rgba(32,54,86,0.82)] via-[rgba(49,95,159,0.2)] to-transparent",
  "naval-tech": "from-[rgba(3,16,28,0.82)] via-[rgba(49,95,159,0.14)] to-transparent"
};

type ProjectCaseStudyTheme = {
  hero: string;
  panel: string;
  tile: string;
  accent: string;
  accentSoft: string;
  line: string;
};

export const projectCaseStudyThemes: Record<VisualTone, ProjectCaseStudyTheme> = {
  "warm-luxury": {
    hero: "bg-[#d7ad9b] text-[#262626]",
    panel: "bg-[rgba(255,248,244,0.78)]",
    tile: "bg-[rgba(255,241,234,0.68)]",
    accent: "#7a3f2a",
    accentSoft: "#d8aa95",
    line: "rgba(122,63,42,0.22)"
  },
  "clean-learning": {
    hero: "bg-[#c6dcff] text-[#262626]",
    panel: "bg-[rgba(247,251,255,0.76)]",
    tile: "bg-[rgba(235,244,255,0.7)]",
    accent: "#2d67b8",
    accentSoft: "#9fc3f2",
    line: "rgba(45,103,184,0.2)"
  },
  "soft-utility": {
    hero: "bg-[#c8e6d8] text-[#262626]",
    panel: "bg-[rgba(250,255,252,0.76)]",
    tile: "bg-[rgba(235,248,240,0.68)]",
    accent: "#2f765d",
    accentSoft: "#a6d7ba",
    line: "rgba(47,118,93,0.2)"
  },
  "botanical-gold": {
    hero: "bg-[#f2e2ad] text-[#262626]",
    panel: "bg-[rgba(255,254,244,0.84)]",
    tile: "bg-[rgba(252,246,221,0.76)]",
    accent: "#7d6814",
    accentSoft: "#e5cf82",
    line: "rgba(125,104,20,0.15)"
  },
  "finance-peach": {
    hero: "bg-[#f0c2aa] text-[#101828]",
    panel: "bg-[rgba(255,250,246,0.8)]",
    tile: "bg-[rgba(255,239,229,0.72)]",
    accent: "#c65345",
    accentSoft: "#f3a88c",
    line: "rgba(198,83,69,0.18)"
  },
  "ai-lilac": {
    hero: "bg-[#f1d4df] text-[#262626]",
    panel: "bg-[rgba(255,249,251,0.84)]",
    tile: "bg-[rgba(250,231,238,0.7)]",
    accent: "#9b6475",
    accentSoft: "#dba2b2",
    line: "rgba(155,100,117,0.18)"
  },
  arcade: {
    hero: "bg-[#d3c9ff] text-[#262626]",
    panel: "bg-[rgba(250,250,255,0.78)]",
    tile: "bg-[rgba(241,238,255,0.7)]",
    accent: "#5547b8",
    accentSoft: "#b9aff2",
    line: "rgba(85,71,184,0.2)"
  },
  "naval-tech": {
    hero: "bg-[#c2e0ef] text-[#262626]",
    panel: "bg-[rgba(248,252,255,0.78)]",
    tile: "bg-[rgba(230,242,251,0.7)]",
    accent: "#1f6d94",
    accentSoft: "#93c9e3",
    line: "rgba(31,109,148,0.2)"
  }
};
