import type { ProjectEntry } from "@/content/projects";

export type ProjectLogicMap = { src: string; width: number; height: number };

type ProjectPresentation = {
  logicMap: ProjectLogicMap;
  lowerHeroLiveButton?: boolean;
};

export const projectPresentations: Record<ProjectEntry["slug"], ProjectPresentation> = {
  chocolate: {
    logicMap: { src: "/media/projects/chocolate/logic-map.webp", width: 1536, height: 1024 },
    lowerHeroLiveButton: true
  },
  english4u: {
    logicMap: { src: "/media/projects/english4u/logic-map.webp", width: 1536, height: 1024 }
  },
  orchidcare: {
    logicMap: { src: "/media/projects/orchidcare/logic-map.webp", width: 1536, height: 1024 }
  },
  petnest: {
    logicMap: { src: "/media/projects/petnest/logic-map.webp", width: 1672, height: 941 },
    lowerHeroLiveButton: true
  },
  paytrack: {
    logicMap: { src: "/media/projects/paytrack/logic-map.png", width: 1536, height: 1024 }
  },
  "ai-comparator": {
    logicMap: { src: "/media/projects/ai-comparator/logic-map.png", width: 1536, height: 1024 }
  },
  brickdrop: {
    logicMap: { src: "/media/projects/brickdrop/logic-map.webp", width: 1536, height: 1024 }
  },
  "sea-battle": {
    logicMap: { src: "/media/projects/sea-battle/logic-map.png", width: 1672, height: 941 }
  }
};
