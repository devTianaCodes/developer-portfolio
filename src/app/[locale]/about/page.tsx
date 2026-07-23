import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { GithubIcon } from "@/components/GithubIcon";
import { PageReveal } from "@/components/PageReveal";
import { SocialIcon } from "@/components/SocialIcon";
import { siteConfig } from "@/content/site";
import { enabledLocales } from "@/i18n/config";
import { createPageMetadata } from "@/i18n/metadata";
import { Link } from "@/i18n/navigation";

type AboutPageProps = {
  params: Promise<{ locale: (typeof enabledLocales)[number] }>;
};

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return createPageMetadata({
    path: "/about",
    locale,
    title: t("aboutTitle"),
    description: t("siteDescription")
  });
}

export default function AboutPage() {
  const t = useTranslations("About");
  const tCommon = useTranslations("Common");
  const skillAreas = [
    {
      title: t("skillAreas.frontend.title"),
      text: t("skillAreas.frontend.text")
    },
    {
      title: t("skillAreas.backend.title"),
      text: t("skillAreas.backend.text")
    },
    {
      title: t("skillAreas.javaData.title"),
      text: t("skillAreas.javaData.text")
    }
  ];
  const experienceItems = [
    {
      role: t("experience.programmingLecturer.role"),
      meta: t("experience.programmingLecturer.meta"),
      detail: t("experience.programmingLecturer.detail")
    },
    {
      role: t("experience.backendIntern.role"),
      meta: t("experience.backendIntern.meta"),
      detail: t("experience.backendIntern.detail")
    },
    {
      role: t("experience.javaIntern.role"),
      meta: t("experience.javaIntern.meta"),
      detail: t("experience.javaIntern.detail")
    },
    {
      role: t("experience.languageTutor.role"),
      meta: t("experience.languageTutor.meta"),
      detail: t("experience.languageTutor.detail")
    }
  ];
  const trainingItems = [
    {
      title: t("training.webDevelopment.title"),
      detail: t("training.webDevelopment.detail")
    },
    {
      title: t("training.aiDays.title"),
      detail: t("training.aiDays.detail")
    },
    {
      title: t("training.chatbotAi.title"),
      detail: t("training.chatbotAi.detail")
    },
    {
      title: t("training.javaAcademy.title"),
      detail: t("training.javaAcademy.detail")
    },
    {
      title: t("training.javaMasterclass.title"),
      detail: t("training.javaMasterclass.detail")
    },
    {
      title: t("training.uxUi.title"),
      detail: t("training.uxUi.detail")
    },
    {
      title: t("training.englishTest.title"),
      detail: t("training.englishTest.detail"),
      href: "https://cert.efset.org/SmrS7H?cid=em100a"
    },
    {
      title: t("training.universityDegrees.title"),
      detail: [
        t("training.universityDegrees.economicSciences"),
        t("training.universityDegrees.businessAdministration"),
        t("training.universityDegrees.foreignLanguages")
      ]
    }
  ];
  const languageItems = [
    { language: t("languageItems.english.language"), level: t("languageItems.english.level") },
    { language: t("languageItems.italian.language"), level: t("languageItems.italian.level") },
    { language: t("languageItems.russian.language"), level: t("languageItems.russian.level") },
    { language: t("languageItems.romanian.language"), level: t("languageItems.romanian.level") },
    { language: t("languageItems.german.language"), level: t("languageItems.german.level") },
    { language: t("languageItems.french.language"), level: t("languageItems.french.level") }
  ];
  const featuredProjectLinks = [
    { label: t("chocolateDemo"), href: "https://chocolate-frontend-one.vercel.app" },
    { label: t("petNestDemo"), href: "https://petnest-frontend.vercel.app" }
  ];

  return (
    <PageReveal>
      <div className="space-y-10">
        <section className="relative left-1/2 -mt-10 flex min-h-[74rem] w-screen -translate-x-1/2 items-center bg-[#4b73a5] py-10 text-white sm:min-h-[55.5rem] md:-mt-14 md:min-h-[57.5rem] md:py-14 lg:min-h-[37.25rem]">
          <Image
            src="/media/about/about-blue-background.png"
            alt=""
            fill
            priority
            quality={82}
            sizes="100vw"
            className="object-cover object-center opacity-90"
          />

          <div className="relative z-10 mx-auto max-w-[96rem] space-y-8 px-2.5 md:px-4">
            <div className="space-y-4">
              <p className="font-sans text-xs font-bold uppercase leading-[1.2] tracking-[2px] text-white">{t("title")}</p>

              <div className="relative">
                <div className="min-h-[80px] pr-24 sm:min-h-[92px] sm:pr-28 md:min-h-[112px] md:pr-[8.25rem] lg:min-h-[166px] lg:pr-44">
                  <h1 className="font-sans text-[2rem] font-normal leading-[1.05] tracking-[-0.01em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                    Tatiana Oblasser
                  </h1>
                  <p className="mt-3 font-sans text-xl font-medium leading-tight text-white sm:text-2xl md:text-3xl">
                    {t("subtitle")}
                  </p>
                </div>

                <div className="absolute right-0 top-0 aspect-square w-[80px] overflow-hidden rounded-full ring-[3.6px] ring-white shadow-[0_12px_30px_rgba(15,23,42,0.3)] sm:w-[92px] md:w-[112px] lg:right-3 lg:top-3 lg:w-[154px]">
                  <Image
                    src="/media/profile/tiana-contact.jpg"
                    alt={t("portraitAlt")}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 92px, (max-width: 1024px) 112px, 154px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              <p className="max-w-6xl font-sans text-base font-normal leading-7 text-white">
                {t("introduction")}
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {skillAreas.map((area) => (
                <div key={area.title} className="rounded-[6px] border border-white/20 bg-white/10 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.12)]">
                  <p className="font-sans text-xs font-bold uppercase leading-[1.2] tracking-[2px] text-white">{area.title}</p>
                  <p className="mt-4 text-sm leading-7 text-white">{area.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="sharp-panel p-8 lg:order-2">
            <p className="section-label">{t("currentFocus")}</p>
            <h2 className="minimal-heading mt-3 text-4xl">{t("currentFocusTitle")}</h2>
            <p className="minimal-text mt-4">
              {t("currentFocusDescription")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {featuredProjectLinks.map((projectLink) => (
                <Link key={projectLink.href} href={projectLink.href} target="_blank" rel="noreferrer" className="sharp-button">
                  {projectLink.label}
                </Link>
              ))}
              <Link href="/projects" className="sharp-button">{tCommon("allProjects")}</Link>
            </div>
          </div>

          <div className="sharp-panel p-8 lg:order-1">
            <p className="section-label">{t("publicIdentity")}</p>
            <h2 className="minimal-heading mt-3 flex min-w-0 items-center gap-3 text-[1.65rem] sm:text-4xl">
              <GithubIcon className="h-8 w-8 shrink-0 text-accent" />
              <span className="min-w-0 break-all">{siteConfig.githubHandle}</span>
            </h2>
            <p className="minimal-text mt-4 max-w-2xl">{t("publicIdentityDescription")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="sharp-button">
                <GithubIcon className="h-4 w-4" />
                GitHub
              </Link>
              <Link href={siteConfig.linkedInUrl} target="_blank" rel="noreferrer" className="sharp-button">
                <SocialIcon kind="linkedin" />
                LinkedIn
              </Link>
              <Link href={siteConfig.emailUrl} className="sharp-button">
                <SocialIcon kind="email" />
                Email
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="sharp-panel p-8">
            <p className="section-label">{t("professionalExperience")}</p>
            <h2 className="minimal-heading mt-3 text-4xl">{t("professionalExperienceTitle")}</h2>
            <div className="mt-6 space-y-5">
              {experienceItems.map((item) => (
                <div key={item.role} className="border-t border-line pt-5 first:border-t-0 first:pt-0">
                  <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-ink">{item.role}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{item.meta}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:grid lg:h-full lg:grid-rows-[1fr_auto] lg:gap-6 lg:space-y-0">
            <div className="sharp-panel p-8" data-testid="education-training">
              <p className="section-label">{t("educationTraining")}</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                {trainingItems.map((item) => (
                  <li key={item.title} className={Array.isArray(item.detail) ? "grid grid-cols-[auto_minmax(0,1fr)] gap-x-4" : undefined}>
                    <div>
                      {item.href ? (
                        <Link href={item.href} target="_blank" rel="noreferrer" className="font-semibold text-ink underline-offset-4 hover:text-accent hover:underline">
                          {item.title}
                        </Link>
                      ) : (
                        <span className="font-semibold text-ink">{item.title}</span>
                      )}
                    </div>

                    {Array.isArray(item.detail) ? (
                      <ul className="min-w-0 divide-y divide-line text-xs leading-5">
                        {item.detail.map((degree) => (
                          <li key={degree} className="py-1 first:pt-0 last:pb-0">
                            {degree}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="block text-xs leading-5">{item.detail}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sharp-panel p-8">
              <p className="section-label">{t("languages")}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {languageItems.map((item) => (
                  <span key={item.language} className="border border-line bg-surface px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    {item.language} · {item.level}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageReveal>
  );
}
