import Link from "next/link";

export default function NotFound() {
  return (
    <div className="sharp-panel p-10">
      <p className="section-label">404</p>
      <h1 className="minimal-heading mt-4 text-5xl">Project not found.</h1>
      <p className="minimal-text mt-4 max-w-2xl">The project you are looking for is not part of the selected portfolio set.</p>
      <Link href="/projects" className="sharp-button mt-8">Back to projects</Link>
    </div>
  );
}
