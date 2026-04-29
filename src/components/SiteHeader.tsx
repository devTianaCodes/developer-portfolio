import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { siteConfig } from "@/content/site";
import { classNames } from "@/lib/classNames";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/18 bg-[#203656]/64 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-2.5 py-4 md:px-4">
        <Link href="/" className="group inline-flex min-w-0 items-center gap-4">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-[linear-gradient(135deg,#203656,#315f9f)] text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_12px_28px_rgba(49,95,159,0.22)]">
            {siteConfig.shortName}
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-2xl text-white">{siteConfig.name}</span>
            <span className="block text-[11px] uppercase tracking-[0.28em] text-blue-100/72">
              {siteConfig.role}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={classNames(
                  "rounded-full px-4 py-2 text-sm text-blue-100/78 transition",
                  "hover:bg-white/10 hover:text-white"
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
            className="hidden items-center gap-2 rounded-full border border-blue-200/25 bg-white/10 px-5 py-3 text-sm uppercase tracking-[0.18em] text-blue-100 transition hover:-translate-y-0.5 hover:bg-white/16 hover:text-white md:inline-flex"
          >
            <GithubIcon className="h-4 w-4" />
            {siteConfig.githubHandle}
          </Link>
        </div>
      </div>
    </header>
  );
}
