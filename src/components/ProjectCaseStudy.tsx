import Image from "next/image";
import Link from "next/link";
import type { ProjectEntry } from "@/content/projects";

type ProjectCaseStudyProps = {
  project: ProjectEntry;
};

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-4xl text-ink md:text-5xl">{title}</h2>
      <p className="max-w-3xl text-base leading-8 text-muted">{text}</p>
    </div>
  );
}

const heroPanelClasses: Record<ProjectEntry["visualTone"], string> = {
  "warm-luxury": "bg-[linear-gradient(135deg,rgba(47,24,15,0.96),rgba(130,82,52,0.72))] text-white",
  "clean-learning": "bg-[linear-gradient(135deg,rgba(28,42,74,0.98),rgba(93,114,162,0.78))] text-white",
  "soft-utility": "bg-[linear-gradient(135deg,rgba(37,63,59,0.96),rgba(105,135,121,0.76))] text-white",
  arcade: "bg-[linear-gradient(135deg,rgba(7,17,30,0.98),rgba(16,82,120,0.78))] text-white",
  "naval-tech": "bg-[linear-gradient(135deg,rgba(3,16,28,0.98),rgba(10,103,124,0.76))] text-white"
};

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const images = project.media.filter((item) => item.kind === "image");
  const videos = project.media.filter((item) => item.kind === "video");
  const featured = images.find((item) => item.featured) ?? images[0];

  return (
    <div className="space-y-16">
      <section className={`grid gap-8 overflow-hidden rounded-[2.6rem] border border-line p-8 shadow-editorial lg:grid-cols-[1.05fr_0.95fr] lg:items-end ${heroPanelClasses[project.visualTone]}`}>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 bg-[rgba(255,255,255,0.08)] px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/80">
              {project.category}
            </span>
            <span className="rounded-full border border-white/15 bg-[rgba(255,255,255,0.08)] px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/80">
              {project.year}
            </span>
          </div>
          <h1 className="font-display text-5xl leading-none md:text-7xl">{project.name}</h1>
          <p className="max-w-2xl text-xl text-white/90">{project.tagline}</p>
          <p className="max-w-2xl text-base leading-8 text-white/76">{project.hook}</p>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) =>
              link.href ? (
                <Link
                  key={`${project.slug}-${link.label}`}
                  href={link.href}
                  className="rounded-full border border-white/20 bg-[rgba(255,255,255,0.1)] px-5 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#241710]"
                >
                  {link.label}
                </Link>
              ) : null
            )}
          </div>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.08)] p-6 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="space-y-3 rounded-[1.4rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-white/68">{metric.label}</p>
              <p className="font-display text-3xl text-white">{metric.value}</p>
            </div>
          ))}
        </div>
      </section>

      {featured ? (
        <section className="relative overflow-hidden rounded-[2rem] border border-line shadow-editorial">
          <Image
            src={featured.poster ?? featured.src}
            alt={featured.alt}
            width={featured.width}
            height={featured.height}
            className="h-auto w-full object-cover"
            priority
          />
        </section>
      ) : null}

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 rounded-[2rem] border border-line bg-panel p-8">
          <SectionTitle eyebrow="Challenge" title="What needed to work" text={project.challenge} />
        </div>
        <div className="space-y-4 rounded-[2rem] border border-line bg-panel p-8">
          <SectionTitle eyebrow="Solution" title="How it was built" text={project.solution} />
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5 rounded-[2rem] border border-line bg-panel p-8">
          <SectionTitle eyebrow="Outcome" title="Why this project stands out" text={project.outcome} />
          <p className="text-sm uppercase tracking-[0.24em] text-muted">Repository roots</p>
          <p className="rounded-2xl border border-line bg-background px-4 py-4 font-mono text-sm text-muted">
            {project.repoPath}
          </p>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-line bg-panel p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">What this demonstrates</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Project impact</h2>
          </div>
          <div className="grid gap-4">
            {project.impactBullets.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-line bg-background p-5 text-sm leading-7 text-muted">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Product walkthrough"
          title="Feature highlights"
          text="The case study surfaces how the experience works for a real user, admin, or player, rather than stopping at visuals."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {project.features.map((feature) => (
            <div key={feature} className="rounded-[1.5rem] border border-line bg-panel p-5 text-sm leading-7 text-muted">
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Technical decisions"
          title="Architecture and implementation"
          text="These notes focus on why the structure matters, not only what technologies were chosen."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {project.architecture.map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-line bg-panel p-6 text-sm leading-7 text-muted">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Interview angles"
          title="What I would talk through in a review"
          text="Each project is positioned to support technical discussion about decisions, tradeoffs, and execution quality."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {project.interviewAngles.map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-line bg-panel p-6 text-sm leading-7 text-muted">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Media"
          title="Screenshots and demo capture"
          text="Ready assets are already wired into the portfolio. Planned clips remain first-class so the page structure stays stable when final media is dropped in."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {images.map((asset) => (
            <figure key={asset.src} className="overflow-hidden rounded-[1.75rem] border border-line bg-panel">
              <Image
                src={asset.src}
                alt={asset.alt}
                width={asset.width}
                height={asset.height}
                className="h-auto w-full object-cover"
              />
              <figcaption className="flex items-center justify-between gap-4 px-5 py-4 text-xs uppercase tracking-[0.18em] text-muted">
                <span>{asset.alt}</span>
                <span>{asset.status === "ready" ? "Ready" : "Capture planned"}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {videos.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {videos.map((asset) => (
              <div key={asset.src} className="rounded-[1.75rem] border border-dashed border-line bg-panel p-6">
                {asset.poster ? (
                  <Image
                    src={asset.poster}
                    alt={asset.alt}
                    width={asset.width}
                    height={asset.height}
                    className="h-auto w-full rounded-[1.25rem] object-cover"
                  />
                ) : null}
                <div className="mt-4 space-y-2">
                  <p className="text-xs uppercase tracking-[0.22em] text-accent">Demo video</p>
                  <p className="text-sm leading-7 text-muted">
                    {asset.note ?? "Clip placeholder ready for upload to Vercel-hosted media path."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-line bg-panel p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Tech stack</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-background px-4 py-2 text-xs uppercase tracking-[0.16em] text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-line bg-panel p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Demo notes</p>
          <div className="mt-6 space-y-4">
            {project.demoNotes.map((note) => (
              <p key={note} className="rounded-[1.4rem] border border-line bg-background p-4 text-sm leading-7 text-muted">
                {note}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-line bg-panel p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Capture checklist</p>
        <h2 className="mt-3 font-display text-4xl text-ink">Production-ready shot list</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {project.captureChecklist.map((item) => (
            <div key={item} className="rounded-[1.4rem] border border-line bg-background p-4 text-sm leading-7 text-muted">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
