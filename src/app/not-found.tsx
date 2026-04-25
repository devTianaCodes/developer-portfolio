import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-[2rem] border border-line bg-panel p-10 shadow-editorial">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">404</p>
      <h1 className="mt-4 font-display text-5xl text-ink">Project not found.</h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
        The requested case study does not exist in the local portfolio content. Return to the project
        index and choose one of the published entries.
      </p>
      <Link
        href="/projects"
        className="mt-8 inline-flex rounded-full border border-[rgba(154,98,57,0.24)] bg-[rgba(226,202,181,0.72)] px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#4a2c1c] transition hover:bg-[rgba(214,184,156,0.94)] hover:text-[#23160e]"
      >
        Back to projects
      </Link>
    </div>
  );
}
