import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2.8rem] border border-line bg-[linear-gradient(135deg,rgba(255,250,244,0.98),rgba(244,235,226,0.86))] px-6 py-8 shadow-editorial md:px-10 md:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,145,103,0.18),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(92,54,37,0.12),transparent_26%),linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.48)_45%,transparent_100%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
        <div className="flex flex-col justify-between gap-10">
          <div className="space-y-7">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.38em] text-accent">{siteConfig.name}</p>
              <h1 className="max-w-5xl font-display text-[3.35rem] leading-[0.92] text-ink md:text-[5.5rem]">
                Professional web products shaped by premium UI and engineering depth.
              </h1>
            </div>

            <div className="max-w-3xl space-y-5">
              <p className="text-lg font-medium leading-8 text-ink/90">{siteConfig.identityStatement}</p>
              <p className="text-base leading-8 text-muted md:text-lg">{siteConfig.subheadline}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[rgba(154,98,57,0.24)] bg-[rgba(226,202,181,0.72)] px-6 py-3 text-sm uppercase tracking-[0.22em] text-[#4a2c1c] transition hover:bg-[rgba(214,184,156,0.94)] hover:text-[#28170f]"
              >
                {siteConfig.primaryCta.label}
              </Link>
              <Link
                href={siteConfig.secondaryCta.href}
                className="rounded-full border border-line bg-[rgba(255,255,255,0.7)] px-6 py-3 text-sm uppercase tracking-[0.22em] text-ink transition hover:border-accent hover:text-accent"
              >
                {siteConfig.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {siteConfig.stackBands.slice(0, 6).map((band) => (
              <span
                key={band}
                className="rounded-full border border-line bg-[rgba(255,255,255,0.66)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted"
              >
                {band}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-line bg-[rgba(28,21,18,0.95)] p-7 text-white shadow-[0_28px_64px_rgba(25,14,8,0.28)]">
            <p className="text-xs uppercase tracking-[0.34em] text-[rgba(231,208,184,0.78)]">
              Current positioning
            </p>
            <p className="mt-5 font-display text-4xl leading-tight">
              Frontend + full-stack delivery with design standards that feel intentional.
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-[rgba(255,244,232,0.78)]">
              Built for recruiters, clients, and engineering interviews that want more than a grid of screenshots.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.strengths.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.75rem] border border-line bg-[rgba(255,255,255,0.74)] p-5"
              >
                <p className="text-[11px] uppercase tracking-[0.26em] text-muted">{item.label}</p>
                <p className="mt-4 break-words font-display text-3xl leading-tight text-ink">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
