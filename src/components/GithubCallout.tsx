import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { siteConfig } from "@/content/site";

export function GithubCallout() {
  return (
    <section className="grid gap-8 rounded-[1.75rem] border border-slate-800 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.94)_54%,rgba(37,99,235,0.86))] p-8 text-white shadow-editorial lg:grid-cols-[1fr_0.8fr]">
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.32em] text-blue-100/76">Code credibility</p>
        <h2 className="font-display text-4xl leading-tight md:text-5xl">Public identity anchored in real project work.</h2>
        <p className="max-w-2xl text-base leading-8 text-slate-200">
          The portfolio is intentionally GitHub-first. The case studies explain product thinking, but the public identity stays tied to code ownership, implementation depth, and practical delivery.
        </p>
      </div>

      <div className="flex flex-col justify-between gap-6 rounded-[1.35rem] border border-white/10 bg-white/8 p-6 backdrop-blur">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-blue-100/76">GitHub</p>
          <p className="mt-3 inline-flex items-center gap-3 font-display text-4xl"><GithubIcon className="h-8 w-8" />{siteConfig.githubHandle}</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            A cleaner professional entry point while final public email and LinkedIn links are still being finalized.
          </p>
        </div>
        <Link
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm uppercase tracking-[0.18em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-100"
        >
          <GithubIcon className="h-4 w-4" />
          Open GitHub
        </Link>
      </div>
    </section>
  );
}
