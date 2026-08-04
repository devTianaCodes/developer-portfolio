"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "@/components/LanguageSelector";
import { siteConfig } from "@/content/site";
import { Link, usePathname } from "@/i18n/navigation";

const navItems = [
  { href: "/projects", labelKey: "projects" },
  { href: "/about", labelKey: "about" },
  { href: "/credentials", labelKey: "credentials" },
  { href: "/contact", labelKey: "contact" }
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  const tLocale = useTranslations("LocaleSwitcher");

  function isActiveRoute(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-4 px-2.5 py-[0.675rem] md:px-4 lg:py-[0.9rem]">
        <Link href="/" className="group inline-flex min-w-0 items-center gap-4">
          <span className="relative h-[52px] w-[52px] shrink-0 self-center overflow-hidden rounded-full border-2 border-[#262626] bg-white shadow-[0_8px_20px_rgba(15,23,42,0.12)] transition group-hover:scale-[1.03] lg:h-[63px] lg:w-[63px]">
            <Image
              src="/media/profile/tiana-logo-coding-blank.webp"
              alt="Tiana Oblasser"
              fill
              sizes="(max-width: 1024px) 52px, 63px"
              className="scale-110 object-cover object-center"
              priority
              quality={82}
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-sans text-xl font-medium text-[#262626] sm:text-2xl">{siteConfig.name}</span>
            <span className="block text-[9px] uppercase tracking-[0.22em] text-[#262626]/62 sm:text-[11px] sm:tracking-[0.28em]">
              {t("role")}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-8 xl:gap-12">
          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => {
              const active = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-[0.98rem] font-medium leading-none text-[#262626] transition hover:scale-105 hover:text-[#262626] ${
                    active
                      ? "scale-105 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-[#262626]"
                      : "after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#262626] after:transition-all hover:after:w-full"
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <LanguageSelector />
          </div>

          <button
            type="button"
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border-2 border-[#262626] bg-transparent text-[#262626] transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#262626]/40 lg:hidden"
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`border-t border-line bg-white px-2.5 shadow-[0_18px_42px_rgba(15,23,42,0.12)] transition-[max-height,opacity] duration-300 md:px-4 lg:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[96rem] flex-col py-4">
          <div className="flex items-center justify-between border-b border-line px-1 pb-4">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#262626]/65">
              {tLocale("label")}
            </span>
            <LanguageSelector />
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActiveRoute(item.href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`border-b border-line px-1 py-4 font-sans text-lg font-medium text-[#262626] transition hover:scale-[1.01] hover:text-[#262626] ${
                isActiveRoute(item.href) ? "translate-x-1 font-semibold" : ""
              }`}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
