import Link from "next/link";
import { siteConfig } from "@/content/site";
import { classNames } from "@/lib/classNames";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-[rgba(246,240,232,0.76)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="group inline-flex min-w-0 items-center gap-4">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-[rgba(255,250,244,0.92)] text-sm font-semibold uppercase tracking-[0.24em] text-accent shadow-[0_12px_30px_rgba(66,41,22,0.08)]">
            {siteConfig.shortName}
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-2xl text-ink">{siteConfig.name}</span>
            <span className="block text-[11px] uppercase tracking-[0.32em] text-muted">
              {siteConfig.role}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-2 rounded-full border border-line bg-[rgba(255,252,249,0.86)] px-2 py-2 shadow-editorial md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={classNames(
                  "rounded-full px-4 py-2 text-sm text-muted transition",
                  "hover:bg-[rgba(255,255,255,0.88)] hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-ink px-5 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-accent hover:text-[#28180f] md:inline-flex"
          >
            {siteConfig.githubHandle}
          </Link>
        </div>
      </div>
    </header>
  );
}
