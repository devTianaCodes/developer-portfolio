import { classNames } from "@/lib/classNames";

const languages = [
  { code: "en", label: "EN", name: "English", enabled: true },
  { code: "it", label: "IT", name: "Italian", enabled: false },
  { code: "ro", label: "RO", name: "Romanian", enabled: false }
] as const;

type LanguageSelectorProps = {
  className?: string;
};

export function LanguageSelector({ className }: LanguageSelectorProps) {
  return (
    <div
      role="group"
      aria-label="Select language"
      className={classNames(
        "inline-flex shrink-0 items-center gap-4",
        className
      )}
      data-testid="language-selector"
    >
      {languages.map((language) => {
        const active = language.code === "en";

        return (
          <button
            key={language.code}
            type="button"
            aria-label={language.name}
            aria-pressed={active}
            aria-disabled={!language.enabled}
            disabled={!language.enabled}
            title={language.enabled ? language.name : `${language.name} translation coming soon`}
            className={classNames(
              "relative font-sans text-[0.78rem] font-medium leading-none tracking-[0.08em] text-[#262626] transition hover:scale-105 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-[#262626]",
              active
                ? "scale-105 after:w-full"
                : "cursor-not-allowed text-[#262626]/45 after:w-0 after:transition-all hover:after:w-full"
            )}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
