import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { siteConfig } from "@/content/site";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/82 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-6 px-2.5 py-4 md:px-4">
        <Link href="/" className="group inline-flex min-w-0 items-center gap-4">
          <span className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full border-2 border-[#262626] bg-white shadow-[0_8px_20px_rgba(15,23,42,0.12)] transition group-hover:scale-[1.03]">
            <Image
              src="/media/profile/tiana-logo-coding-blank.png"
              alt="Tiana Oblasser"
              fill
              sizes="70px"
              className="scale-110 object-cover object-center"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-sans text-2xl font-medium text-[#262626]">{siteConfig.name}</span>
            <span className="block text-[11px] uppercase tracking-[0.28em] text-[#262626]/62">
              {siteConfig.role}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-12 lg:gap-16">
          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.98rem] font-medium leading-none text-[#262626] transition hover:scale-105 hover:text-[#262626]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-[0.98rem] leading-none text-[#262626] transition hover:scale-105 hover:text-[#262626] md:inline-flex"
          >
            <GithubIcon className="h-4 w-4" />
            {siteConfig.githubHandle}
          </Link>
        </div>
      </div>
    </header>
  );
}
