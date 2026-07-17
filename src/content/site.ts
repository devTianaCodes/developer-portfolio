export type SocialLink = {
  label: string;
  href: string;
  kind: "github" | "email" | "linkedin";
  primary?: boolean;
};

export const siteConfig = {
  name: "Tiana Oblasser",
  shortName: "TO",
  role: "Junior Full Stack Web Developer",
  title: "Tiana Oblasser | Web Developer",
  description: "Full-stack web developer portfolio focused on React, Node.js, REST APIs, and user-centered interfaces.",
  location: "Italy-based",
  githubHandle: "devTianaCodes",
  githubUrl: "https://github.com/devTianaCodes",
  email: "oblasser.tatiana@gmail.com",
  emailUrl: "mailto:oblasser.tatiana@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/tiana-oblasser-78ba8665",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/devTianaCodes",
      kind: "github",
      primary: true
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tiana-oblasser-78ba8665",
      kind: "linkedin"
    },
    {
      label: "Email",
      href: "mailto:oblasser.tatiana@gmail.com",
      kind: "email"
    }
  ] satisfies SocialLink[],
  headline: "Full-stack web products with React, Node.js, REST APIs, and user-centered interface craft.",
  subheadline:
    "I build responsive, intuitive applications that connect polished frontend flows with Express, MySQL, Prisma, authentication, and practical backend logic.",
  primaryCta: {
    label: "View GitHub",
    href: "https://github.com/devTianaCodes"
  },
  secondaryCta: {
    label: "Explore Projects",
    href: "/projects"
  },
  principles: [
    "Mobile-first interfaces shaped by real user flows",
    "REST APIs, database models, and frontend state that work together",
    "UX/UI decisions grounded in clarity, accessibility, and usability",
    "Case studies that show implementation depth, not just screenshots"
  ],
  strengths: [
    {
      label: "Projects selected",
      value: "8"
    },
    {
      label: "Full-stack products",
      value: "6"
    },
    {
      label: "Interactive builds",
      value: "2"
    },
    {
      label: "Public code identity",
      value: "devTianaCodes"
    }
  ],
  stackBands: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Express",
    "REST API",
    "MySQL",
    "Prisma",
    "PostgreSQL",
    "JWT",
    "Tailwind CSS",
    "Java",
    "Spring Boot",
    "Vitest",
    "Supertest"
  ]
} as const;
