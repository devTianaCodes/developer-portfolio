"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { classNames } from "@/lib/classNames";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages = [
  { code: "en", label: "EN", nameKey: "english", enabled: true },
  { code: "it", label: "IT", nameKey: "italian", enabled: true }
] as const;

type LanguageSelectorProps = {
  className?: string;
};

export function LanguageSelector({ className }: LanguageSelectorProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={classNames(
        "inline-flex shrink-0 items-center gap-4",
        className
      )}
      data-testid="language-selector"
    >
      {languages.map((language) => {
        const active = language.code === locale;
        const languageName = t(language.nameKey);

        return (
          <button
            key={language.code}
            type="button"
            aria-label={languageName}
            aria-pressed={active}
            aria-disabled={!language.enabled}
            disabled={!language.enabled || isPending}
            title={languageName}
            onClick={() => {
              if (!language.enabled || active) return;

              startTransition(() => {
                router.replace(pathname, { locale: language.code });
              });
            }}
            className={classNames(
              "relative font-sans text-[0.78rem] font-medium leading-none tracking-[0.08em] text-[#262626] transition hover:scale-105 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-[#262626]",
              active
                ? "scale-105 after:w-full"
                : language.enabled
                  ? "cursor-pointer after:w-0 after:transition-all hover:after:w-full"
                  : "cursor-not-allowed text-[#262626]/45 after:w-0"
            )}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
