import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { siteConfig } from "@/content/site";

export function GithubCallout() {
  return (
    <section className="grid gap-8 rounded-[6px] border border-slate-800 bg-[#1f2937] p-6 text-white shadow-[0_18px_54px_rgba(15,23,42,0.16)] md:p-8 lg:grid-cols-[1fr_0.8fr]">
      <div className="space-y-4">
        <p className="font-sans text-xs font-bold uppercase tracking-[2px] text-blue-100/76">Code credibility</p>
        <h2 className="font-sans text-4xl font-medium leading-tight md:text-5xl">Public work, clean ownership.</h2>
        <p className="max-w-2xl text-base leading-7 text-slate-200">
          GitHub keeps the portfolio grounded in real code, visible project history, and clear implementation ownership.
        </p>
      </div>

      <div className="flex flex-col justify-end gap-6 md:justify-between md:rounded-[6px] md:border md:border-white/14 md:bg-white/8 md:p-6 md:backdrop-blur">
        <div className="hidden md:block">
          <p className="font-sans text-xs font-bold uppercase tracking-[2px] text-blue-100/76">GitHub</p>
          <p className="mt-3 inline-flex items-center gap-3 font-sans text-3xl font-medium"><GithubIcon className="h-7 w-7" />{siteConfig.githubHandle}</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">A clean public entry point for code review and project context.</p>
        </div>
        <Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="sharp-button-dark w-fit">
          <GithubIcon className="h-4 w-4" />
          Open GitHub
        </Link>
      </div>
    </section>
  );
}
