export type ProjectSlug =
  | "chocolate"
  | "english4u"
  | "petnest"
  | "brickdrop"
  | "sea-battle";

export type DeploymentMode = "live" | "media" | "hybrid";

export type AssetStatus = "ready" | "capture-planned";

export type MediaAsset = {
  kind: "image" | "video";
  src: string;
  alt: string;
  width: number;
  height: number;
  poster?: string;
  featured?: boolean;
  status?: AssetStatus;
  note?: string;
};

export type ProjectLink = {
  label: string;
  href?: string;
  kind: "live" | "code" | "case-study";
};

export type ProjectEntry = {
  slug: ProjectSlug;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  category: "full-stack" | "frontend" | "game";
  deploymentMode: DeploymentMode;
  repoPath: string;
  year: string;
  flagship?: boolean;
  visualTone: "warm-luxury" | "clean-learning" | "soft-utility" | "arcade" | "naval-tech";
  hook: string;
  techStack: string[];
  strengths: string[];
  challenge: string;
  solution: string;
  outcome: string;
  features: string[];
  architecture: string[];
  metrics: { label: string; value: string }[];
  impactBullets: string[];
  interviewAngles: string[];
  media: MediaAsset[];
  links: ProjectLink[];
  demoNotes: string[];
  captureChecklist: string[];
};

export const projects: ProjectEntry[] = [
  {
    slug: "chocolate",
    name: "Chocolate Craft House",
    tagline: "Premium e-commerce brand with a complete purchase and admin workflow.",
    summary:
      "A full-stack chocolate storefront built as a polished branded product rather than a generic shop. It covers catalog discovery, favorites, cart and checkout, payment handling, admin operations, and post-purchase email flows.",
    role: "Full-stack product and frontend branding",
    category: "full-stack",
    deploymentMode: "media",
    repoPath:
      "/Users/parents/Developer/Project Chocolate Craft House/chocolate_frontend/client and /Users/parents/Developer/Project Chocolate Craft House/chocolate_backend/server",
    year: "2025",
    flagship: true,
    visualTone: "warm-luxury",
    hook: "A commerce case study where branding, customer flow, and backend operations all matter at the same time.",
    techStack: [
      "React 18",
      "Vite",
      "React Router",
      "Zustand",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "Stripe",
      "Nodemailer",
      "Vitest"
    ],
    strengths: [
      "Strongest brand identity in the portfolio",
      "Real commerce flow beyond CRUD",
      "Admin products, inventory, and orders",
      "Stripe and transactional email integration"
    ],
    challenge:
      "Build a commerce experience that feels premium end to end while still supporting real operational workflows like stock checks, order state changes, payment events, and admin maintenance.",
    solution:
      "The frontend uses editorial layouts, focused product discovery routes, and a branded visual system while the backend handles auth, orders, cart merging, payment intents, webhooks, and admin APIs. The project presentation and testing notes were folded directly into this portfolio case study.",
    outcome:
      "The result is the flagship case study: a product with visual polish, business logic depth, and a clear interview narrative about shipping an end-to-end commerce system.",
    features: [
      "Catalog browsing across shop, offers, gifts, search, and favourites",
      "Guest and authenticated cart flows with merge-on-login support",
      "Checkout and order confirmation journey",
      "Admin tools for products, inventory, and orders",
      "Post-payment customer and admin email notifications"
    ],
    architecture: [
      "REST API domains for auth, products, cart, orders, payments, and admin",
      "MySQL-backed order creation with stock checks and rollback paths",
      "JWT authentication with protected and admin-only routes",
      "Backend structure covers the workflows needed for checkout, order handling, and admin operations"
    ],
    metrics: [
      { label: "Frontend routes", value: "20+" },
      { label: "Admin areas", value: "3" },
      { label: "Deployment mode", value: "Media-first" }
    ],
    impactBullets: [
      "Shows the difference between a styled storefront and a real purchase system.",
      "Demonstrates brand-led UI decisions without losing backend rigor.",
      "Creates a clear interview narrative around auth, payments, inventory, and admin tooling."
    ],
    interviewAngles: [
      "How the product keeps a premium visual identity consistent across catalog, cart, checkout, and admin areas.",
      "Why guest-cart merge, stock validation, and rollback behavior matter in real commerce software.",
      "How a portfolio project becomes stronger when it includes payment and post-purchase operations, not just a store UI."
    ],
    media: [
      {
        kind: "image",
        src: "/media/projects/chocolate/showcase/06.png",
        alt: "Chocolate Craft House screenshot 1",
        width: 2868,
        height: 1762,
        featured: true,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/chocolate/showcase/01.png",
        alt: "Chocolate Craft House screenshot 2",
        width: 2944,
        height: 1808,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/chocolate/showcase/05.png",
        alt: "Chocolate Craft House screenshot 3",
        width: 2858,
        height: 1784,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/chocolate/showcase/02.png",
        alt: "Chocolate Craft House screenshot 4",
        width: 2944,
        height: 1808,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/chocolate/showcase/04.png",
        alt: "Chocolate Craft House screenshot 5",
        width: 2858,
        height: 1734,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/chocolate/showcase/03.png",
        alt: "Chocolate Craft House screenshot 6",
        width: 2228,
        height: 1674,
        status: "ready"
      }
    ],
    links: [{ label: "Case Study", href: "/projects/chocolate", kind: "case-study" }],
    demoNotes: [
      "Media-first in phase 1 to avoid exposing payment and email infrastructure prematurely.",
      "Existing local demo credentials and orchestration live in `demo-showcase`."
    ],
    captureChecklist: [
      "Storefront hero and featured products",
      "Product detail and cart state",
      "Checkout summary and confirmation",
      "Admin inventory or orders screen"
    ]
  },
  {
    slug: "english4u",
    name: "English4U",
    tagline: "Self-paced English learning platform with learner journeys and admin CMS.",
    summary:
      "A portfolio-focused LMS built with a React frontend and Express/MySQL backend. It combines onboarding, learner dashboards, course and lesson flows, quizzes, review modes, profile settings, and role-based admin collections.",
    role: "Full-stack LMS product",
    category: "full-stack",
    deploymentMode: "hybrid",
    repoPath:
      "/Users/parents/Developer/Project English4U/english4u-frontend and /Users/parents/Developer/Project English4U/english4u-backend",
    year: "2025",
    flagship: true,
    visualTone: "clean-learning",
    hook: "A learning platform positioned like a real digital product, not just a lessons demo.",
    techStack: [
      "React 18",
      "React Router",
      "Vite",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "Cookie auth"
    ],
    strengths: [
      "Clear learner and admin product surfaces",
      "Designed specifically as portfolio software",
      "Strong route coverage for real app behavior",
      "Practical deployment candidate for Vercel plus external backend"
    ],
    challenge:
      "Create an interview-ready education product that demonstrates both product thinking and implementation discipline without overloading v1 with speculative features.",
    solution:
      "The build focuses on the learning core: onboarding, dashboard, courses, lessons, quizzes, review flows, and admin-authored collections. The case study emphasizes clear scope, learner value, and a realistic path from MVP structure to portfolio polish.",
    outcome:
      "English4U becomes the lead live full-stack candidate in the portfolio because it balances product depth, route richness, and a cleaner deployment path than the commerce app.",
    features: [
      "Guest, learner, and admin route handling",
      "Course catalog, course detail, and lesson routes",
      "Quiz and review workflows",
      "Dashboard, certificates, study plan, settings, and profile pages",
      "Admin collections for courses, levels, units, lessons, quizzes, and users"
    ],
    architecture: [
      "React Router app shell with route guards for guest, learner, and admin experiences",
      "Express backend with auth and content APIs",
      "Clear learner, guest, and admin boundaries help keep the product understandable as the route surface grows",
      "A route surface designed to stay understandable as the learning product grows"
    ],
    metrics: [
      { label: "Learner routes", value: "10+" },
      { label: "Admin collections", value: "6" },
      { label: "Launch mode", value: "Hybrid" }
    ],
    impactBullets: [
      "Connects product thinking to a realistic self-paced education experience.",
      "Shows how auth, progress, content, and admin structure work together.",
      "Presents a focused learning product with both user value and clean implementation structure."
    ],
    interviewAngles: [
      "How the route structure separates guest, learner, and admin experiences without becoming messy.",
      "Why narrowing v1 scope to the learning core made the project stronger and more believable.",
      "How the product becomes demo-ready through polish, seed content, and admin-managed flows."
    ],
    media: [
      {
        kind: "image",
        src: "/media/projects/english4u/showcase/05.png",
        alt: "English4U screenshot 1",
        width: 2818,
        height: 1808,
        featured: true,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/english4u/showcase/02.png",
        alt: "English4U screenshot 2",
        width: 2602,
        height: 1796,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/english4u/showcase/04.png",
        alt: "English4U screenshot 3",
        width: 2602,
        height: 1516,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/english4u/showcase/03.png",
        alt: "English4U screenshot 4",
        width: 2602,
        height: 1818,
        status: "ready"
      }
    ],
    links: [{ label: "Case Study", href: "/projects/english4u", kind: "case-study" }],
    demoNotes: [
      "Best candidate for first live product deployment on free infrastructure.",
      "Strong candidate for a polished live demo because the learner and admin journeys are both easy to present."
    ],
    captureChecklist: [
      "Landing page and course catalog",
      "Learner dashboard and study plan",
      "Lesson or quiz flow",
      "Admin collection management"
    ]
  },
  {
    slug: "petnest",
    name: "PetNest",
    tagline: "Rescue-focused adoption platform with moderation, dashboards, and request flows.",
    summary:
      "A full-stack pet adoption platform with a TypeScript React frontend and TypeScript Express backend. It handles public browsing, authentication, listing creation, favorites, saved searches, adoption requests, analytics, and admin moderation.",
    role: "Full-stack product with TypeScript and Prisma",
    category: "full-stack",
    deploymentMode: "hybrid",
    repoPath:
      "/Users/parents/Developer/PetNest/petNest-frontend and /Users/parents/Developer/PetNest/petNest-backend",
    year: "2025",
    visualTone: "soft-utility",
    hook: "A trust-centered adoption platform that balances public discovery with operational moderation.",
    techStack: [
      "React 18",
      "TypeScript",
      "Vite",
      "React Query",
      "React Hook Form",
      "Zod",
      "Node.js",
      "Express",
      "Prisma",
      "MySQL",
      "Cloudinary"
    ],
    strengths: [
      "Most operationally rich dashboard surface",
      "Type-safe split across frontend and backend",
      "Admin moderation and user reporting",
      "Realistic adoption and messaging flows"
    ],
    challenge:
      "Design a product that supports both public discovery and trusted rescue operations while keeping the experience understandable for everyday users and admins.",
    solution:
      "The app separates public browsing from authenticated dashboard workflows, adds moderation gates for listings, and introduces supporting tools like analytics, saved searches, and request tracking. The portfolio uses the existing README and page structure as the factual source for the case study.",
    outcome:
      "PetNest rounds out the portfolio as the most system-heavy TypeScript app, demonstrating moderation workflows, typed APIs, and product depth outside e-commerce or education.",
    features: [
      "Browse and filter pets with dedicated details pages",
      "Authenticated dashboard for listings, favorites, searches, and requests",
      "Listing creation and editing for rescue operators",
      "Admin dashboards for pending listings, reports, and users",
      "Prisma-backed backend with seeding and image workflows"
    ],
    architecture: [
      "TypeScript frontend and backend split into dedicated apps",
      "Prisma client generation, migration, and seed scripts from the root workspace",
      "Protected route branches for user and admin areas",
      "Image upload flow prepared for Cloudinary-backed media"
    ],
    metrics: [
      { label: "Dashboard routes", value: "9" },
      { label: "Admin areas", value: "4" },
      { label: "Backend language", value: "TypeScript" }
    ],
    impactBullets: [
      "Shows how a portfolio app can model trust, moderation, and user workflow complexity.",
      "Adds strong TypeScript credibility across frontend and backend.",
      "Demonstrates operations-heavy UX beyond the public-facing landing pages."
    ],
    interviewAngles: [
      "How moderation changes both the backend model and the dashboard UX in a trust-based platform.",
      "Why typed forms, validation, and dashboard routes matter more in operational products than in simple brochure apps.",
      "How deployment decisions change when uploads, Prisma, and seeded demo data are involved."
    ],
    media: [
      {
        kind: "image",
        src: "/media/projects/petnest/showcase/05.png",
        alt: "PetNest screenshot 1",
        width: 2858,
        height: 1784,
        featured: true,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/petnest/showcase/01.png",
        alt: "PetNest screenshot 2",
        width: 2786,
        height: 1808,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/petnest/showcase/02.png",
        alt: "PetNest screenshot 3",
        width: 2856,
        height: 1802,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/petnest/showcase/03.png",
        alt: "PetNest screenshot 4",
        width: 2856,
        height: 1818,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/petnest/showcase/04.png",
        alt: "PetNest screenshot 5",
        width: 2858,
        height: 1784,
        status: "ready"
      }
    ],
    links: [{ label: "Case Study", href: "/projects/petnest", kind: "case-study" }],
    demoNotes: [
      "Second live deployment target after English4U if Prisma hosting and free database constraints remain acceptable.",
      "Cloudinary-backed uploads can be disabled for a safer portfolio demo mode."
    ],
    captureChecklist: [
      "Browse and pet details pages",
      "Dashboard listings and analytics",
      "Favorites or saved searches",
      "Admin pending listings or reports"
    ]
  },
  {
    slug: "brickdrop",
    name: "BrickDrop",
    tagline: "Fast, focused browser game with modern polish and classic scoring pressure.",
    summary:
      "A React and Vite implementation of BrickDrop with line clearing, level progression, ghost pieces, bag randomization, pause handling, and responsive styling. It is the most immediate interaction demo in the portfolio.",
    role: "Frontend gameplay engineering",
    category: "game",
    deploymentMode: "live",
    repoPath: "/Users/parents/Developer/BrickDrop",
    year: "2025",
    visualTone: "arcade",
    hook: "A compact game build that proves strong frontend logic can be immediately playable.",
    techStack: ["React 18", "Vite", "Tailwind CSS"],
    strengths: [
      "Self-contained gameplay logic",
      "Clear state transitions and scoring",
      "Low-friction live deployment candidate",
      "Strong contrast to the app-style projects"
    ],
    challenge:
      "Recreate a familiar game with enough play feel to keep it engaging while still keeping the code readable and small.",
    solution:
      "The board, piece movement, locking, line clearing, and scoring logic live directly in the app component. The implementation uses ghost-piece previews, level scaling, and a bag system to give the game a more polished feel.",
    outcome:
      "BrickDrop gives the portfolio an instantly testable live experience and shows tight frontend logic without needing backend infrastructure.",
    features: [
      "Line clear scoring and level progression",
      "Ghost piece preview",
      "Pause and restart flow",
      "Piece bag randomization",
      "Responsive browser play area"
    ],
    architecture: [
      "Single-page React app with self-contained gameplay state",
      "Pure helper functions for placement, rotation, merge, and line clearing",
      "Vite build output already present for static preview"
    ],
    metrics: [
      { label: "Board size", value: "20 x 10" },
      { label: "Tetromino sets", value: "7" },
      { label: "Deployment mode", value: "Live static" }
    ],
    impactBullets: [
      "Adds immediate interactivity to the portfolio instead of only static product case studies.",
      "Shows frontend engineering skill through mechanics, timing, and state transitions.",
      "Creates a low-friction live demo that is easy for reviewers to test."
    ],
    interviewAngles: [
      "How the game logic is structured to stay readable while still feeling polished.",
      "Why ghost pieces, bag randomization, and level pacing elevate a simple clone.",
      "What changes when you optimize a frontend project for direct playability instead of business workflows."
    ],
    media: [
      {
        kind: "image",
        src: "/media/projects/brickdrop/showcase/04.png",
        alt: "BrickDrop screenshot 1",
        width: 2704,
        height: 1762,
        featured: true,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/brickdrop/showcase/01.png",
        alt: "BrickDrop screenshot 2",
        width: 2944,
        height: 1808,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/brickdrop/showcase/02.png",
        alt: "BrickDrop screenshot 3",
        width: 2568,
        height: 1662,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/brickdrop/showcase/03.png",
        alt: "BrickDrop screenshot 4",
        width: 2704,
        height: 1762,
        status: "ready"
      }
    ],
    links: [
      { label: "Live Demo", href: "https://tiana-tetris.vercel.app", kind: "live" },
      { label: "Case Study", href: "/projects/brickdrop", kind: "case-study" }
    ],
    demoNotes: [
      "Now live on Vercel as a standalone static demo linked directly from this portfolio.",
      "The local `demo-showcase` flow still makes it easy to capture gameplay media updates."
    ],
    captureChecklist: [
      "Board and next-piece state",
      "Line clear moment",
      "Level or score UI",
      "Short gameplay clip"
    ]
  },
  {
    slug: "sea-battle",
    name: "Sea Battle",
    tagline: "Single-player Battleship with adaptive AI, glasmorphism styling, and accessibility touches.",
    summary:
      "A modern single-player Battleship experience built with React, Vite, Framer Motion, and Zustand. It includes onboarding, difficulty settings, ship placement, effects, history, pause states, and supporting UI for a polished browser game.",
    role: "Interactive frontend and UI systems",
    category: "game",
    deploymentMode: "live",
    repoPath: "/Users/parents/Developer/sea-battle",
    year: "2025",
    visualTone: "naval-tech",
    hook: "A visually ambitious browser game that combines interface systems, motion, and AI-driven play.",
    techStack: ["React 18", "Vite", "Framer Motion", "Zustand", "Tailwind CSS"],
    strengths: [
      "Most stylistically ambitious frontend game",
      "Adaptive AI and richer UI orchestration",
      "Accessibility hooks and modal patterns",
      "Already documented for Vercel deployment"
    ],
    challenge:
      "Turn a simple board game into an immersive browser product with enough interface depth, feedback, and responsiveness to feel premium.",
    solution:
      "The app is split across focused components and hooks for AI, sound, dialog behavior, scroll locking, and overall game flow. That separation makes it easier to ship a layered experience without collapsing into one monolithic component.",
    outcome:
      "Sea Battle becomes the strongest pure-frontend visual case study in the portfolio and a clean live deployment on Vercel free.",
    features: [
      "Single-player AI opponent",
      "Onboarding, settings, and pause modals",
      "Ship placement and board stage tabs",
      "History, status, and battle intel panels",
      "Responsive and static-host friendly deployment"
    ],
    architecture: [
      "React component system backed by custom hooks for game flow and AI",
      "Framer Motion used for interface polish",
      "Static Vite app with existing Vercel deployment notes"
    ],
    metrics: [
      { label: "Hook-driven game systems", value: "5+" },
      { label: "UI components", value: "15+" },
      { label: "Deployment mode", value: "Live static" }
    ],
    impactBullets: [
      "Expands the portfolio beyond product apps into richer interaction design.",
      "Shows a stronger UI system with motion, modal states, and gameplay feedback.",
      "Brings a more visually expressive frontend language into the overall portfolio mix."
    ],
    interviewAngles: [
      "How hooks and component boundaries support a more layered interactive experience.",
      "Why good frontend case studies can come from game systems, not only product apps.",
      "How static deployment and interface polish make this an easy live demo for portfolio review."
    ],
    media: [
      {
        kind: "image",
        src: "/media/projects/sea-battle/showcase/01.png",
        alt: "Sea Battle screenshot 1",
        width: 2856,
        height: 1802,
        featured: true,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/sea-battle/showcase/02.png",
        alt: "Sea Battle screenshot 2",
        width: 2856,
        height: 1802,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/sea-battle/showcase/03.png",
        alt: "Sea Battle screenshot 3",
        width: 2856,
        height: 1802,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/sea-battle/showcase/04.png",
        alt: "Sea Battle screenshot 4",
        width: 2856,
        height: 1802,
        status: "ready"
      }
    ],
    links: [
      { label: "Live Demo", href: "https://tiana-sea-battle.vercel.app", kind: "live" },
      { label: "Case Study", href: "/projects/sea-battle", kind: "case-study" }
    ],
    demoNotes: [
      "Now live on Vercel as a standalone static demo with the existing deployment shape preserved.",
      "Best visual contrast to the business-product case studies because it foregrounds motion and interface systems."
    ],
    captureChecklist: [
      "Main menu or onboarding",
      "Ship placement",
      "Battle state with AI turn history",
      "Short gameplay clip"
    ]
  }
];

export const featuredProjects = projects.filter((project) => project.flagship);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
