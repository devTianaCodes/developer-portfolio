"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { enabledLocales, type Locale } from "@/i18n/config";
import { classNames } from "@/lib/classNames";
import { usePathname, useRouter } from "@/i18n/navigation";

const languageMetadata: Record<Locale, { label: string; nameKey: "english" | "italian" | "romanian" }> = {
  en: { label: "EN", nameKey: "english" },
  it: { label: "IT", nameKey: "italian" },
  ro: { label: "RO", nameKey: "romanian" }
};

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
      {enabledLocales.map((code) => {
        const language = languageMetadata[code];
        const active = code === locale;
        const languageName = t(language.nameKey);

        return (
          <button
            key={code}
            type="button"
            aria-label={languageName}
            aria-pressed={active}
            disabled={isPending}
            title={languageName}
            onClick={() => {
              if (active) return;

              startTransition(() => {
                router.replace(pathname, { locale: code });
              });
            }}
            className={classNames(
              "relative font-sans text-[0.78rem] font-medium leading-none tracking-[0.08em] text-[#262626] transition hover:scale-105 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-[#262626]",
              active
                ? "scale-105 after:w-full"
                : "cursor-pointer after:w-0 after:transition-all hover:after:w-full"
            )}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
