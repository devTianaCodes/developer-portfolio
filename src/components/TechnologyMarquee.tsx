import { ProjectTechBadge } from "@/components/ProjectTechBadge";
import { siteConfig } from "@/content/site";

function TechnologyGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className="technology-marquee__group"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {siteConfig.stackBands.map((tech) => (
        <li key={tech}>
          <ProjectTechBadge
            tech={tech}
            compact
            className="whitespace-nowrap border-white/25 bg-white/95 px-3 py-2 text-[10px] text-black shadow-[0_8px_20px_rgba(0,8,28,0.16)] sm:px-4 sm:text-[11px]"
          />
        </li>
      ))}
    </ul>
  );
}

export function TechnologyMarquee() {
  return (
    <div className="technology-marquee" aria-label="Technology stack">
      <div className="technology-marquee__track">
        <TechnologyGroup />
        <TechnologyGroup duplicate />
      </div>
    </div>
  );
}
