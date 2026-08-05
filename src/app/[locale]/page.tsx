import { useTranslations } from "next-intl";
import Image from "next/image";
import { GithubCallout } from "@/components/GithubCallout";
import { InteractiveHero } from "@/components/InteractiveHero";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { TechnologyMarquee } from "@/components/TechnologyMarquee";
import { projects } from "@/content/projects";
import { Link } from "@/i18n/navigation";
import { createCarouselProjects } from "@/lib/projectCarousel";

const carouselProjects = createCarouselProjects(projects);

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <div className="-mb-10 md:-mb-14">
        <section className="hero-parallax relative -mt-10 shadow-[0_24px_70px_rgba(31,49,78,0.18)] md:-mt-14">
          <div className="hero-parallax__background" aria-hidden="true" />

          <div className="hero-parallax__flow">
            <InteractiveHero />

            <TechnologyMarquee />

            <section className="hero-parallax__projects">
              <ProjectCarousel projects={carouselProjects} />
            </section>

            <section aria-labelledby="technology-about-title" className="technology-parallax">
              <div className="technology-parallax__flow">
                <div className="technology-parallax__content">
                  <div className="technology-parallax__card">
                    <p id="technology-about-title" className="section-label mx-auto w-full max-w-5xl">{t("aboutEyebrow")}</p>

                    <div className="mx-auto mt-[1.1rem] grid w-full max-w-5xl grid-cols-1 items-center gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:gap-8">
                      <p className="minimal-text max-w-3xl text-center text-sm leading-6 sm:text-base sm:leading-7 md:text-justify">
                        {t("aboutDescription")}
                      </p>

                      <Link href="/about" className="sharp-button shrink-0 justify-self-center px-[1em] py-[0.85em] text-xs sm:px-[1.4em] sm:py-[1em] sm:text-sm md:justify-self-auto">
                        {t("readProfile")}
                      </Link>
                    </div>

                    <div className="mx-auto mt-[2.2rem] w-full max-w-5xl">
                      <GithubCallout />
                    </div>

                    <div className="mx-auto mt-[2.2rem] max-w-5xl border-t border-line pt-[1.65rem]">
                      <Image
                        src="/media/hero/technology-stack-banner.png"
                        alt="HTML, CSS, JavaScript, Node.js, Express, React, and MySQL logos"
                        width={1430}
                        height={222}
                        className="h-auto w-full"
                        sizes="(max-width: 768px) 84vw, 1024px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
    </div>
  );
}
