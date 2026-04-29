import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { PageReveal } from "@/components/PageReveal";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "About"
};

const workingStyle = [
  "I care about interface quality, but I do not treat visuals as separate from product structure.",
  "I want projects to be demoable, technically explainable, and credible under real review.",
  "The strongest portfolio work balances branded UI, practical system behavior, and clean presentation."
];

export default function AboutPage() {
  return (
    <PageReveal>
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">About</p>
          <h1 className="max-w-4xl font-display text-5xl text-ink md:text-6xl">
            Tiana Oblasser builds web products that look considered and hold up technically.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-muted">
            My focus sits between premium interface design and practical web engineering. I want the
            work to feel sharp on first impression, but I also want it to stand up when someone asks
            how the product actually behaves, how the routes are structured, or how the backend logic
            supports the experience.
          </p>
        </div>

        <section className="grid gap-6 lg:grid-cols-3">
          {workingStyle.map((item) => (
            <div key={item} className="rounded-[1.9rem] border border-line bg-panel p-6 shadow-editorial">
              <p className="text-sm leading-7 text-muted">{item}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-line bg-panel p-8 shadow-editorial">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Current focus</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Case-study quality over noise.</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              I prefer a tighter portfolio with stronger storytelling, clearer hierarchy, and more
              convincing product scope rather than trying to show everything at once. That is why this
              portfolio centers five selected projects with distinct roles.
            </p>
          </div>

          <div className="rounded-[2rem] border border-line bg-[rgba(255,252,248,0.8)] p-8 shadow-editorial">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Public identity</p>
            <h2 className="mt-3 inline-flex items-center gap-3 font-display text-4xl text-ink"><GithubIcon className="h-8 w-8 text-accent" />{siteConfig.githubHandle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              GitHub is the clearest professional entry point right now, so the portfolio is designed
              around a GitHub-first identity until the rest of the public profile stack is finalized.
            </p>
            <Link
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-blue-50 px-5 py-3 text-sm uppercase tracking-[0.18em] text-accent transition hover:-translate-y-0.5 hover:bg-blue-100"
            >
              <GithubIcon className="h-4 w-4" />
              Open GitHub
            </Link>
          </div>
        </section>
      </div>
    </PageReveal>
  );
}
