import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { PageReveal } from "@/components/PageReveal";
import { SocialIcon } from "@/components/SocialIcon";
import { siteConfig } from "@/content/site";

export const metadata = { title: "About" };

const skillAreas = [
  {
    title: "Frontend development",
    text: "JavaScript, TypeScript, React, Next.js, responsive interfaces, accessibility, and mobile-first implementation."
  },
  {
    title: "Backend and APIs",
    text: "Node.js, Express, Python, REST APIs, CRUD, JSON, JWT, CORS, Multer, Nodemailer, Stripe, and API testing."
  },
  {
    title: "Java and data",
    text: "Java, Spring Boot, Maven, OOP, MySQL, PostgreSQL, Prisma ORM, Prisma Migrate, SQL, and Postman."
  }
];

const experienceItems = [
  {
    role: "Lecturer in Fundamentals of Programming",
    meta: "CIOFS/FP and Giardini Digitali | 2024",
    detail: "Taught HTML/CSS, Python, and JavaScript through logic, algorithms, practical exercises, web projects, and final presentations."
  },
  {
    role: "Backend Developer Intern",
    meta: "TwentyFive | 2024",
    detail: "Built REST API endpoints for a customizable QR-code generator with Java, Spring Boot, Maven, JSON, and Postman."
  },
  {
    role: "Java Academy intern",
    meta: "TwentyFive | 2023",
    detail: "Built an e-commerce project with Java, Spring Boot, Maven, PostgreSQL, and Postman, covering products, authentication, orders, and security."
  },
  {
    role: "Lecturer and Language Tutor",
    meta: "British Institutes | 2018 - Present",
    detail: "Tutored English and delivered professional translations with clear, learner-focused communication."
  }
];

const trainingItems = [
  {
    title: "Web Development Master",
    detail: "Boolean | Full-time | 2025 - 2026"
  },
  {
    title: "AI Days Project",
    detail: "Boolean | May 2026"
  },
  {
    title: "Chatbot Development and Artificial Intelligence",
    detail: "NTT DATA InspireHER | 2024"
  },
  {
    title: "Java Academy",
    detail: "TwentyFive | 2023 - 2024"
  },
  {
    title: "Java 17 Masterclass",
    detail: "Udemy | 2023 - 2024"
  },
  {
    title: "UX/UI courses",
    detail: "Interaction Design Foundation | 2022 - 2023"
  },
  {
    title: "EF Standard English Test - C2 Proficient",
    detail: "2023",
    href: "https://cert.efset.org/SmrS7H?cid=em100a"
  },
  {
    title: "University degrees",
    detail: "Economic Sciences; Business Administration; Foreign Languages and Comparative Literature"
  }
];

const languageItems = [
  { language: "English", level: "C2" },
  { language: "Italian", level: "C1" },
  { language: "Russian", level: "C2" },
  { language: "Romanian", level: "C2" },
  { language: "German", level: "B2" },
  { language: "French", level: "B1-B2" }
];

const featuredProjectLinks = [
  { label: "Chocolate demo", href: "https://chocolate-frontend-one.vercel.app" },
  { label: "PetNest demo", href: "https://petnest-frontend.vercel.app" }
];

export default function AboutPage() {
  return (
    <PageReveal>
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="section-label">About</p>

          <div className="relative">
            <div className="min-h-[80px] pr-24 sm:min-h-[92px] sm:pr-28 md:min-h-[112px] md:pr-[8.25rem] lg:min-h-[128px] lg:pr-[9.5rem]">
              <h1 className="font-sans text-[2rem] font-normal leading-[1.05] tracking-[-0.01em] text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                Tatiana Oblasser
              </h1>
              <p className="mt-3 font-sans text-xl font-medium leading-tight text-accent sm:text-2xl md:text-3xl">
                Junior Full-Stack Developer
              </p>
            </div>

            <div className="absolute right-0 top-0 aspect-square w-[80px] overflow-hidden rounded-full sm:w-[92px] md:w-[112px] lg:w-[128px]">
              <Image
                src="/media/profile/tiana-contact.jpg"
                alt="Tatiana Oblasser portrait"
                fill
                sizes="(max-width: 640px) 80px, (max-width: 768px) 92px, (max-width: 1024px) 112px, 128px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          <p className="minimal-text max-w-6xl">
            Junior Full-Stack Developer building responsive, user-focused web applications with React, TypeScript, Node.js, Express and MySQL. Hands-on experience delivering end-to-end projects, from mobile-first interfaces to REST APIs, authentication, payment workflows and database integration. A background in Java and Spring Boot, UX/UI and technical teaching brings a thoughtful approach to usability, problem-solving, collaboration and commitment to continuous learning.
          </p>
        </div>

        <section className="grid gap-4 lg:grid-cols-3">
          {skillAreas.map((area) => (
            <div key={area.title} className="sharp-panel p-6">
              <p className="section-label">{area.title}</p>
              <p className="mt-4 text-sm leading-7 text-muted">{area.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="sharp-panel p-8 lg:order-2">
            <p className="section-label">Current focus</p>
            <h2 className="minimal-heading mt-3 text-4xl">End-to-end web products.</h2>
            <p className="minimal-text mt-4">
              Recent work includes a Stripe-enabled e-commerce product and an adoption platform with dashboards, requests, listing workflows, and admin moderation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {featuredProjectLinks.map((projectLink) => (
                <Link key={projectLink.href} href={projectLink.href} target="_blank" rel="noreferrer" className="sharp-button">
                  {projectLink.label}
                </Link>
              ))}
              <Link href="/projects" className="sharp-button">All projects</Link>
            </div>
          </div>

          <div className="sharp-panel p-8 lg:order-1">
            <p className="section-label">Public identity</p>
            <h2 className="minimal-heading mt-3 inline-flex items-center gap-3 text-4xl"><GithubIcon className="h-8 w-8 text-accent" />{siteConfig.githubHandle}</h2>
            <p className="minimal-text mt-4 max-w-2xl">Review public code on GitHub, professional experience on LinkedIn, or connect directly by email.</p>
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
              <Link href="https://cert.efset.org/SmrS7H?cid=em100a" target="_blank" rel="noreferrer" className="sharp-button">
                English C2 certificate
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
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{item.meta}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:grid lg:h-full lg:grid-rows-[1fr_auto] lg:gap-6 lg:space-y-0">
            <div className="sharp-panel p-8">
              <p className="section-label">Education and training</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                {trainingItems.map((item) => (
                  <li key={item.title}>
                    {item.href ? (
                      <Link href={item.href} target="_blank" rel="noreferrer" className="font-semibold text-ink underline-offset-4 hover:text-accent hover:underline">
                        {item.title}
                      </Link>
                    ) : (
                      <span className="font-semibold text-ink">{item.title}</span>
                    )}
                    <span className="block text-xs leading-5">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sharp-panel p-8">
              <p className="section-label">Languages</p>
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
