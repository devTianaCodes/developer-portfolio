import Link from "next/link";
import { siteConfig } from "@/content/site";

export function GithubCallout() {
  return (
    <section className="grid gap-8 rounded-[2.4rem] border border-line bg-[linear-gradient(135deg,rgba(28,21,18,0.96),rgba(60,36,24,0.88))] p-8 text-white shadow-editorial lg:grid-cols-[1fr_0.8fr]">
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.32em] text-[rgba(234,212,190,0.76)]">Code credibility</p>
        <h2 className="font-display text-4xl md:text-5xl">Public identity anchored in real project work.</h2>
        <p className="max-w-2xl text-base leading-8 text-[rgba(255,244,232,0.8)]">
          The portfolio is intentionally GitHub-first. The case studies explain product thinking,
          but the public identity stays tied to code ownership, implementation depth, and practical
          delivery.
        </p>
      </div>

      <div className="flex flex-col justify-between gap-6 rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[rgba(234,212,190,0.76)]">GitHub</p>
          <p className="mt-3 font-display text-4xl">{siteConfig.githubHandle}</p>
          <p className="mt-3 text-sm leading-7 text-[rgba(255,244,232,0.74)]">
            A cleaner professional entry point while final public email and LinkedIn links are still being finalized.
          </p>
        </div>
        <Link
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#2a160c] transition hover:bg-[rgba(234,212,190,1)]"
        >
          Open GitHub
        </Link>
      </div>
    </section>
  );
}
