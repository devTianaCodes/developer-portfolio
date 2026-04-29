export type SocialLink = {
  label: string;
  href: string;
  kind: "github" | "email" | "linkedin";
  primary?: boolean;
};

export const siteConfig = {
  name: "Tiana Oblasser",
  shortName: "TO",
  role: "Frontend + Full-Stack Web Developer",
  title: "Tiana Oblasser | Modern Web Developer Portfolio",
  description:
    "Professional web developer portfolio for Tiana Oblasser, featuring premium UI, full-stack product case studies, interactive frontend work, and Vercel-ready delivery.",
  location: "United States",
  githubHandle: "devTianaCodes",
  githubUrl: "https://github.com/devTianaCodes",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/devTianaCodes",
      kind: "github",
      primary: true
    }
  ] satisfies SocialLink[],
  headline: "Polished web products with design taste, strong frontend craft, and real full-stack depth.",
  subheadline:
    "I build modern web experiences that feel intentional from the first screen to the underlying product system. This portfolio brings together three full-stack apps, two interactive browser games, and case studies designed to hold up in real technical conversations.",
  identityStatement:
    "Frontend polish, product thinking, and deployable implementation in one portfolio.",
  primaryCta: {
    label: "View GitHub",
    href: "https://github.com/devTianaCodes"
  },
  secondaryCta: {
    label: "Explore Projects",
    href: "/projects"
  },
  principles: [
    "Premium UI without sacrificing usability",
    "Full-stack features that stay demoable and explainable",
    "Design systems shaped by product goals, not decoration",
    "Case studies that show implementation depth, not just screenshots"
  ],
  strengths: [
    {
      label: "Projects selected",
      value: "5"
    },
    {
      label: "Full-stack products",
      value: "3"
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
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MySQL",
    "Prisma",
    "Tailwind CSS",
    "Stripe",
    "Vercel"
  ]
} as const;
