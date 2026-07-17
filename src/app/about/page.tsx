import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { PageReveal } from "@/components/PageReveal";
import { SocialIcon } from "@/components/SocialIcon";
import { siteConfig } from "@/content/site";

export const metadata = { title: "About" };

const workingStyle = [
  "Responsive interfaces should feel clear on mobile before they scale up.",
  "Frontend flows and backend APIs should be easy to explain in review.",
  "UX decisions should make the product calmer, not just more decorated."
];

const skillAreas = [
  {
    title: "Full-stack development",
    text: "React, TypeScript, Node.js, Express, REST APIs, MySQL, Prisma, JWT authentication, and CRUD workflows."
  },
  {
    title: "Interface and UX/UI",
    text: "Mobile-first layouts, wireframes, prototyping, accessibility, usability, user journeys, and clear interaction patterns."
  },
  {
    title: "Backend foundations",
    text: "Java, Spring Boot, Maven, PostgreSQL, JSON APIs, Postman workflows, and object-oriented programming."
  }
];

const experienceItems = [
  {
    role: "Programming fundamentals instructor",
    detail: "Taught JavaScript, HTML/CSS, Python, Java, logic, algorithms, practical web exercises, and final project presentations."
  },
  {
    role: "Server-side developer intern",
    detail: "Built REST API endpoints for a QR code generator with Java, Spring Boot, Maven, JSON, and Postman."
  },
  {
    role: "Java Academy intern",
    detail: "Developed e-commerce features with Spring Boot, Maven, PostgreSQL, authentication, orders, and security fundamentals."
  },
  {
    role: "Language teacher and tutor",
    detail: "Brought years of teaching, translation, communication, and learner support into technical collaboration."
  }
];

const trainingItems = [
  "Full-time Web Development Master, Boolean",
  "AI Days project and chatbot/AI intensive training",
  "Java Academy and Java 17 Masterclass",
  "UX/UI training with Interaction Design Foundation",
  "University background in economics, business administration, foreign languages, and comparative literature"
];

const languageItems = ["English", "Italian", "German", "Russian", "Romanian", "French"];

export default function AboutPage() {
  return (
    <PageReveal>
      <div className="space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start">
          <div className="space-y-4">
            <p className="section-label">About</p>
            <h1 className="minimal-heading max-w-4xl text-5xl md:text-6xl">
              Junior full-stack developer with design sense and backend range.
            </h1>
            <p className="minimal-text max-w-3xl">
              I build modern, responsive web applications with React, Node.js, Express, REST APIs, and MySQL. My background combines full-stack training, Java backend foundations, UX/UI study, and teaching experience, so I care about both how a product works and how clearly people can use it.
            </p>
          </div>

          <div className="relative aspect-square w-[180px] overflow-hidden rounded-[8px] sm:w-[210px] md:w-[240px] lg:justify-self-end">
            <Image
              src="/media/profile/tiana-contact.jpg"
              alt="Tiana Oblasser portrait"
              fill
              sizes="(max-width: 640px) 180px, (max-width: 768px) 210px, 240px"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <section className="grid gap-4 lg:grid-cols-3">
          {workingStyle.map((item) => (
            <div key={item} className="sharp-panel p-6">
              <p className="text-sm leading-7 text-muted">{item}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          {skillAreas.map((area) => (
            <div key={area.title} className="sharp-panel p-6">
              <p className="section-label">{area.title}</p>
              <p className="mt-4 text-sm leading-7 text-muted">{area.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="sharp-panel p-8">
            <p className="section-label">Current focus</p>
            <h2 className="minimal-heading mt-3 text-4xl">Practical full-stack products.</h2>
            <p className="minimal-text mt-4">
              Selected projects cover commerce, adoption, education, payments, AI comparison, and browser games, with emphasis on real flows, protected routes, database-backed data, and explainable implementation decisions.
            </p>
          </div>

          <div className="sharp-panel p-8">
            <p className="section-label">Public identity</p>
            <h2 className="minimal-heading mt-3 inline-flex items-center gap-3 text-4xl"><GithubIcon className="h-8 w-8 text-accent" />{siteConfig.githubHandle}</h2>
            <p className="minimal-text mt-4 max-w-2xl">GitHub, LinkedIn, and email provide clear paths for code review, professional context, and direct contact.</p>
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
            <p className="section-label">Professional experience</p>
            <h2 className="minimal-heading mt-3 text-4xl">Teaching, backend practice, and client-facing communication.</h2>
            <div className="mt-6 space-y-5">
              {experienceItems.map((item) => (
                <div key={item.role} className="border-t border-line pt-5 first:border-t-0 first:pt-0">
                  <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-ink">{item.role}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="sharp-panel p-8">
              <p className="section-label">Education and training</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                {trainingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="sharp-panel p-8">
              <p className="section-label">Languages</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {languageItems.map((language) => (
                  <span key={language} className="border border-line bg-surface px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    {language}
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
