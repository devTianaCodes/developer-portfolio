export type ProjectSlug =
  | "chocolate"
  | "english4u"
  | "orchidcare"
  | "petnest"
  | "paytrack"
  | "ai-comparator"
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
  optimizedSrc?: string;
  featured?: boolean;
  status?: AssetStatus;
  note?: string;
};

export type ProjectLink = {
  label: string;
  href?: string;
  kind: "live" | "code" | "case-study";
};

export type ProjectDetailGroup = {
  title: string;
  text: string;
  items: string[];
};

export type ProjectRepository = {
  label: string;
  href: string;
};

export type ProjectSectionIntro = {
  eyebrow: string;
  title: string;
  text: string;
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
  visualTone: "warm-luxury" | "clean-learning" | "soft-utility" | "finance-peach" | "ai-lilac" | "arcade" | "naval-tech";
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
  repositories?: ProjectRepository[];
  repositoryRoots?: { label: string; path: string }[];
  workflowIntro?: ProjectSectionIntro;
  workflowHighlights?: ProjectDetailGroup[];
  apiIntro?: ProjectSectionIntro;
  apiDomains?: string[];
  qualityIntro?: ProjectSectionIntro;
  qualitySignals?: ProjectDetailGroup[];
  media: MediaAsset[];
  links: ProjectLink[];
};

export const projectDisplayOrder: ProjectSlug[] = [
  "chocolate",
  "petnest",
  "orchidcare",
  "english4u",
  "paytrack",
  "ai-comparator",
  "brickdrop",
  "sea-battle"
];

export function sortProjectsForDisplay(projectList: ProjectEntry[]) {
  return [...projectList].sort((a, b) => {
    const aIndex = projectDisplayOrder.indexOf(a.slug);
    const bIndex = projectDisplayOrder.indexOf(b.slug);

    return (aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex) - (bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex);
  });
}

const fullStackLiveUrls = {
  chocolate: process.env.NEXT_PUBLIC_CHOCOLATE_WEB_APP_URL ?? "https://chocolate-frontend-one.vercel.app",
  petnest: process.env.NEXT_PUBLIC_PETNEST_WEB_APP_URL ?? "https://petnest-frontend.vercel.app"
} as const;

export const projects: ProjectEntry[] = [
  {
    slug: "chocolate",
    name: "Chocolate Craft House",
    tagline: "Premium e-commerce brand with a complete purchase and admin workflow.",
    summary:
      "A full-stack chocolate storefront built as a polished branded product rather than a generic shop. It covers catalog discovery, favorites, cart and checkout, payment handling, admin operations, and post-purchase email flows.",
    role: "Full-stack product and frontend branding",
    category: "full-stack",
    deploymentMode: fullStackLiveUrls.chocolate ? "hybrid" : "media",
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
      "Axios",
      "Lucide React",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "Cookie Parser",
      "CORS",
      "Dotenv",
      "bcrypt",
      "Stripe",
      "Nodemailer",
      "Supertest",
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
    repositories: [
      { label: "Frontend repository", href: "https://github.com/devTianaCodes/chocolate_frontend" },
      { label: "Backend repository", href: "https://github.com/devTianaCodes/chocolate_backend" }
    ],
    repositoryRoots: [
      { label: "Frontend", path: "https://github.com/devTianaCodes/chocolate_frontend/tree/main/client" },
      { label: "Backend", path: "https://github.com/devTianaCodes/chocolate_backend" }
    ],
    workflowHighlights: [
      {
        title: "Full purchase journey",
        text: "The product goes beyond a storefront by covering discovery, search, favourites, cart, checkout, payment, confirmation, account, and admin workflows.",
        items: [
          "Editorial catalog paths through Shop, Offers, Gifts, Search, Favourites, and homepage highlights",
          "Product detail pages with pricing, discount handling, gallery/hover image support, add-to-cart, and review presentation",
          "Checkout flow with delivery information, shipping method support, order summary, and confirmation"
        ]
      },
      {
        title: "Cart, checkout, and order logic",
        text: "Commerce behavior is modeled with the details reviewers expect in a real application, not only a UI demo.",
        items: [
          "Guest carts use session IDs, authenticated carts use user IDs, and shopping intent is preserved through merge-on-login",
          "Order creation performs stock checks, subtotal and shipping calculations, inventory deduction, cart clearing, and rollback on failure",
          "Stripe payment intents and webhook handling move orders into paid status"
        ]
      },
      {
        title: "Operations after payment",
        text: "The system includes back-office and post-payment flows that make the case study stronger for technical interviews.",
        items: [
          "Customer confirmation and admin/store notification emails are sent with Nodemailer",
          "Branded HTML email templates include a centered brand logo for the customer email",
          "Admin screens support product creation, product updates, inventory updates, order listing, and order status changes"
        ]
      }
    ],
    apiDomains: [
      "/api/auth",
      "/api/products",
      "/api/categories",
      "/api/cart",
      "/api/orders",
      "/api/payments",
      "/api/admin",
      "/api/health"
    ],
    qualitySignals: [
      {
        title: "Backend test coverage",
        text: "The backend includes service, controller, middleware, route integration, and optional real DB-backed integration tests.",
        items: [
          "Vitest and Supertest cover unit and route-level behavior",
          "Current backend source coverage: 80.72% statements and lines, 86.32% functions",
          "Test scripts include coverage, DB integration, overall coverage, and changed-code coverage checks"
        ]
      },
      {
        title: "Quality gates and CI",
        text: "Coverage enforcement is treated as a project feature, not an afterthought.",
        items: [
          "Overall backend source coverage target is 80%",
          "New or changed backend source coverage target is 90%",
          "GitHub Actions enforces backend tests, coverage generation, and pull-request changed-code coverage gates"
        ]
      }
    ],
    media: [
      {
        kind: "image",
        src: "/media/projects/chocolate/showcase/06.png",
        optimizedSrc: "/media/projects/chocolate/showcase/06.webp",
        alt: "Chocolate Craft House screenshot 1",
        width: 2868,
        height: 1762,
        featured: true,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/chocolate/showcase/01.png",
        optimizedSrc: "/media/projects/chocolate/showcase/01.webp",
        alt: "Chocolate Craft House screenshot 2",
        width: 2944,
        height: 1808,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/chocolate/showcase/05.png",
        optimizedSrc: "/media/projects/chocolate/showcase/05.webp",
        alt: "Chocolate Craft House screenshot 3",
        width: 2858,
        height: 1784,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/chocolate/showcase/02.png",
        optimizedSrc: "/media/projects/chocolate/showcase/02.webp",
        alt: "Chocolate Craft House screenshot 4",
        width: 2944,
        height: 1808,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/chocolate/showcase/04.png",
        optimizedSrc: "/media/projects/chocolate/showcase/04.webp",
        alt: "Chocolate Craft House screenshot 5",
        width: 2858,
        height: 1734,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/chocolate/showcase/03.png",
        optimizedSrc: "/media/projects/chocolate/showcase/03.webp",
        alt: "Chocolate Craft House screenshot 6",
        width: 2228,
        height: 1674,
        status: "ready"
      }
    ],
    links: [
      { label: "Open Web App", href: fullStackLiveUrls.chocolate, kind: "live" },
      { label: "Case Study", href: "/projects/chocolate", kind: "case-study" }
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
      "Vite",
      "React Router",
      "React.lazy",
      "Suspense",
      "Custom CSS",
      "Node.js",
      "Express",
      "MySQL",
      "mysql2",
      "JWT",
      "jsonwebtoken",
      "Cookie Parser",
      "CORS",
      "Dotenv",
      "bcryptjs",
      "Morgan"
    ],
    strengths: [
      "Clear learner and admin product surfaces",
      "Designed specifically as portfolio software",
      "Strong route coverage for real app behavior",
      "Clear full-stack architecture for learner and admin workflows"
    ],
    challenge:
      "Create an interview-ready education product that demonstrates both product thinking and implementation discipline without overloading v1 with speculative features.",
    solution:
      "The build focuses on the learning core: onboarding, dashboard, courses, lessons, quizzes, review flows, and admin-authored collections. The case study emphasizes clear scope, learner value, and a realistic path from MVP structure to portfolio polish.",
    outcome:
      "English4U remains a strong case study because it balances product depth, route richness, and a clear full-stack structure for technical review.",
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
      { label: "Case study mode", value: "Full-stack" }
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
    repositories: [
      { label: "Frontend repository", href: "https://github.com/devTianaCodes/english4u-frontend" },
      { label: "Backend repository", href: "https://github.com/devTianaCodes/english4u-backend" }
    ],
    repositoryRoots: [
      { label: "Frontend", path: "https://github.com/devTianaCodes/english4u-frontend" },
      { label: "Backend", path: "https://github.com/devTianaCodes/english4u-backend" }
    ],
    workflowIntro: {
      eyebrow: "Learning workflow",
      title: "Placement-to-progress system",
      text: "English4U is strongest when presented as a connected learner journey, not a collection of isolated lesson screens."
    },
    workflowHighlights: [
      {
        title: "Personalized learner path",
        text: "The app guides a learner from account creation into placement, recommended level, course progress, quizzes, review, and study planning.",
        items: [
          "Placement testing recommends A1 or A2 paths with confidence labels, focus-area feedback, history, and trend comparison",
          "The dashboard combines current course, next lesson, streak, completed lessons, quiz average, weekly activity, and coach recommendation",
          "Lessons, quizzes, grammar references, certificates, profile, settings, and study plan pages support the learning journey around the core path"
        ]
      },
      {
        title: "Assessment and review logic",
        text: "The learning flows include backend-driven scoring and review generation instead of only static frontend exercises.",
        items: [
          "Quiz payloads do not expose correct answers before submission, and scoring is handled server-side",
          "Quiz attempts can persist to MySQL and update quiz averages, streaks, and learner progress",
          "Review modes generate practice from mistakes, warm-up content, grammar topics, vocabulary, placement, progress, and recent quiz attempts"
        ]
      },
      {
        title: "Admin and content operations",
        text: "The project includes protected back-office workflows that show role-based product thinking beyond the learner UI.",
        items: [
          "Admin collections cover courses, levels, units, lessons, quizzes, and users",
          "Create, edit, and delete flows support relationship selectors for course, unit, and lesson content",
          "The quiz studio constrains each quiz to three questions, making the admin experience intentionally scoped for demo clarity"
        ]
      }
    ],
    apiIntro: {
      eyebrow: "Backend surface",
      title: "Learning API domains",
      text: "The Express API separates public discovery, authenticated learner workflows, and admin-only content operations."
    },
    apiDomains: [
      "/api/health",
      "/api/auth",
      "/api/courses",
      "/api/lessons",
      "/api/quizzes",
      "/api/onboarding",
      "/api/dashboard",
      "/api/progress",
      "/api/review",
      "/api/study-plan",
      "/api/grammar-topics",
      "/api/users",
      "/api/admin"
    ],
    qualityIntro: {
      eyebrow: "Engineering decisions",
      title: "Architecture, auth, and persistence",
      text: "The implementation choices make the project useful in interviews because they show realistic boundaries between UI, API, auth, and data."
    },
    qualitySignals: [
      {
        title: "Frontend architecture",
        text: "The React app is organized around route-level pages, protected routes, reusable UI/layout pieces, and centralized API access.",
        items: [
          "React Router separates public, authenticated learner, guest-only, and admin-only routes",
          "Route components are lazy-loaded with React.lazy and Suspense for a modular route surface",
          "API calls are centralized through src/services/api.js with consistent response handling"
        ]
      },
      {
        title: "Backend architecture",
        text: "The Express backend follows a layered request flow that keeps controllers, persistence, and domain logic separated.",
        items: [
          "Request flow follows route -> controller -> service/repository/helper -> database or demo content",
          "Feature modules sit under src/modules, with shared config, db pool, middleware, routes, and utilities",
          "Dashboard and review modules compose data across placement, progress, quiz attempts, study plans, lessons, and grammar metadata"
        ]
      },
      {
        title: "Security and persistence",
        text: "Authentication and learner state are handled as backend responsibilities rather than frontend-only route checks.",
        items: [
          "Passwords are hashed with bcryptjs, JWTs include user identity/role, and auth can use HTTP-only cookies or bearer tokens",
          "Backend middleware attaches the current user and enforces protected learner routes plus admin role guards",
          "MySQL persists user, role, placement, lesson progress, quiz attempt, streak, and study plan data while demo libraries keep catalog content portable"
        ]
      }
    ],
    media: [
      {
        kind: "image",
        src: "/media/projects/english4u/showcase/05.png",
        optimizedSrc: "/media/projects/english4u/showcase/05.webp",
        alt: "English4U screenshot 1",
        width: 2818,
        height: 1808,
        featured: true,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/english4u/showcase/02.png",
        optimizedSrc: "/media/projects/english4u/showcase/02.webp",
        alt: "English4U screenshot 2",
        width: 2602,
        height: 1796,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/english4u/showcase/04.png",
        optimizedSrc: "/media/projects/english4u/showcase/04.webp",
        alt: "English4U screenshot 3",
        width: 2602,
        height: 1516,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/english4u/showcase/03.png",
        optimizedSrc: "/media/projects/english4u/showcase/03.webp",
        alt: "English4U screenshot 4",
        width: 2602,
        height: 1818,
        status: "ready"
      }
    ],
    links: [
      { label: "Case Study", href: "/projects/english4u", kind: "case-study" }
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
      "React Router",
      "TanStack Query",
      "Axios",
      "Fetch API",
      "React Hook Form",
      "Zod",
      "Node.js",
      "Express",
      "Prisma",
      "MySQL",
      "JWT",
      "Cookie Parser",
      "CORS",
      "bcrypt",
      "Helmet",
      "Express Rate Limit",
      "Multer",
      "Cloudinary",
      "Pino HTTP",
      "Node Test Runner",
      "Prisma Migrate"
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
    repositories: [
      { label: "Frontend repository", href: "https://github.com/devTianaCodes/petNest-frontend" },
      { label: "Backend repository", href: "https://github.com/devTianaCodes/petNest-backend" }
    ],
    repositoryRoots: [
      { label: "Frontend", path: "https://github.com/devTianaCodes/petNest-frontend" },
      { label: "Backend", path: "https://github.com/devTianaCodes/petNest-backend" }
    ],
    workflowIntro: {
      eyebrow: "Adoption workflow",
      title: "Trust-centered marketplace system",
      text: "PetNest is strongest as a multi-role product where adopters, rescuers, and admins all have different responsibilities."
    },
    workflowHighlights: [
      {
        title: "Public discovery and adoption",
        text: "The public experience supports browsing, filtering, pet detail review, and private adoption requests without exposing sensitive owner contact data.",
        items: [
          "Published pet browsing supports category, location, search, sorting, pagination, and configurable page size",
          "Single pet pages include gallery, metadata, compatibility tags, rescue story, health notes, rescuer info, sharing, and adoption request flow",
          "Private contact fields are hidden from public responses, keeping adoption interest inside the platform"
        ]
      },
      {
        title: "Rescuer dashboard workflows",
        text: "Authenticated users can manage adoption intent and listing operations from a real account surface.",
        items: [
          "Users can create pet listings with structured animal, health, location, compatibility, rescue story, and contact fields",
          "Favorites use relational storage, duplicate protection, optimistic UI updates, safe rollback, and saved-animal views",
          "Saved searches, incoming requests, outgoing requests, profile settings, my listings, and listing analytics create owner-facing product value"
        ]
      },
      {
        title: "Admin trust and safety",
        text: "The platform includes moderation and governance flows that make it feel closer to production software than a CRUD demo.",
        items: [
          "Listings move through draft, pending approval, approved/published, rejected, adopted, and archived states",
          "Admins can approve or reject pending listings, review reports, inspect platform statistics, and update user status",
          "Listing reports support open, resolved, and dismissed states with reviewed-by admin tracking"
        ]
      }
    ],
    apiIntro: {
      eyebrow: "Backend surface",
      title: "Adoption platform API domains",
      text: "The Express API separates public browsing, authenticated account workflows, moderation, media, and admin operations."
    },
    apiDomains: [
      "/api/health",
      "/api/auth",
      "/api/users",
      "/api/categories",
      "/api/pets",
      "/api/favorites",
      "/api/saved-searches",
      "/api/adoption-requests",
      "/api/reports",
      "/api/admin",
      "/uploads"
    ],
    qualityIntro: {
      eyebrow: "Engineering decisions",
      title: "Typed architecture, security, and data model",
      text: "The technical story is built around type safety, role boundaries, normalized data, secure sessions, and tested business rules."
    },
    qualitySignals: [
      {
        title: "Frontend architecture",
        text: "The React TypeScript client is organized around public pages, protected dashboards, admin pages, reusable components, and feature helpers.",
        items: [
          "TanStack Query manages server state for listings, favorites, dashboards, requests, and admin surfaces",
          "React Hook Form and Zod support typed form validation for auth, profile, listing, and request flows",
          "Reusable pieces include PetCard, FavoriteButton, ProtectedRoute, QueryStateNotice, StatusBadge, SocialLinks, NavBar, and Footer"
        ]
      },
      {
        title: "Backend architecture",
        text: "The Express TypeScript backend uses modular domain boundaries with Prisma as the data access layer.",
        items: [
          "Domain modules include auth, users, categories, pets, adoption requests, favorites, saved searches, reports, and admin",
          "Shared middleware handles authentication, validation, centralized errors, rate limiting, uploads, and role enforcement",
          "Image storage is abstracted for Cloudinary-ready hosted storage with a local upload fallback for development"
        ]
      },
      {
        title: "Security and data integrity",
        text: "The system models the parts of a trust-based platform that would create real bugs if handled casually.",
        items: [
          "JWT access tokens pair with HTTP-only refresh cookies, hashed refresh tokens, logout revocation, and unique jti values",
          "Prisma models normalize users, verification tokens, refresh tokens, categories, listings, images, favorites, searches, reports, requests, and audit logs",
          "Indexes and constraints support common access patterns, duplicate favorite prevention, listing visibility, ownership boundaries, and moderation queues"
        ]
      },
      {
        title: "Testing focus",
        text: "Tests are aimed at business rules and security-sensitive behavior rather than shallow page checks.",
        items: [
          "Backend tests cover auth middleware, token behavior, favorites, listing visibility, moderation, reports, saved searches, requests, images, analytics, and profiles",
          "Important rules include owner access to private fields, public sanitization, saved search ownership, request status transitions, and listing submission rules",
          "Build and tooling cover TypeScript checks, Vite production build, Prisma generation, migration, seed scripts, and workspace development commands"
        ]
      }
    ],
    media: [
      {
        kind: "image",
        src: "/media/projects/petnest/showcase/05.png",
        optimizedSrc: "/media/projects/petnest/showcase/05.webp",
        alt: "PetNest screenshot 1",
        width: 2858,
        height: 1784,
        featured: true,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/petnest/showcase/01.png",
        optimizedSrc: "/media/projects/petnest/showcase/01.webp",
        alt: "PetNest screenshot 2",
        width: 2786,
        height: 1808,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/petnest/showcase/02.png",
        optimizedSrc: "/media/projects/petnest/showcase/02.webp",
        alt: "PetNest screenshot 3",
        width: 2856,
        height: 1802,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/petnest/showcase/03.png",
        optimizedSrc: "/media/projects/petnest/showcase/03.webp",
        alt: "PetNest screenshot 4",
        width: 2856,
        height: 1818,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/petnest/showcase/04.png",
        optimizedSrc: "/media/projects/petnest/showcase/04.webp",
        alt: "PetNest screenshot 5",
        width: 2858,
        height: 1784,
        status: "ready"
      }
    ],
    links: [
      { label: "Open Web App", href: fullStackLiveUrls.petnest, kind: "live" },
      { label: "Case Study", href: "/projects/petnest", kind: "case-study" }
    ]
  },
  {
    slug: "paytrack",
    name: "PayTrack",
    tagline: "Mobile-first subscription manager for recurring payments, reminders, and spending clarity.",
    summary:
      "A full-stack subscription tracking app that helps users understand recurring costs, renewal dates, payment-method labels, payment history, and reminder activity without becoming a full banking product.",
    role: "Full-stack subscription product",
    category: "full-stack",
    deploymentMode: "media",
    repoPath:
      "/Users/parents/Developer/PayTrack/payTrack-frontend and /Users/parents/Developer/PayTrack/payTrack-backend",
    year: "2026",
    visualTone: "finance-peach",
    hook: "A calm personal finance assistant that turns forgotten recurring payments into a clear, mobile-first product flow.",
    techStack: [
      "React 18",
      "Vite 6",
      "JavaScript",
      "React Router",
      "Tailwind CSS",
      "i18next",
      "React i18next",
      "Recharts",
      "Lucide React",
      "Simple Icons",
      "Node.js",
      "Express",
      "Prisma",
      "MySQL",
      "Zod",
      "JWT",
      "HTTP-only Cookies",
      "bcryptjs",
      "Cookie Parser",
      "CORS",
      "Nodemailer",
      "node-cron",
      "Node Test Runner"
    ],
    strengths: [
      "Mobile-first product direction",
      "Secure handling of payment-adjacent data",
      "Dashboard analytics and renewal reminders",
      "Internationalization across six languages"
    ],
    challenge:
      "Create a focused subscription manager that feels simpler than a banking app while still modeling real recurring-payment behavior, authenticated user data, and renewal reminders.",
    solution:
      "The app combines a React/Vite frontend with an Express, Prisma, and MySQL backend. It keeps payment methods as safe labels, uses HTTP-only cookie auth, validates requests with Zod, and organizes the product around dashboard insights, subscription management, payment timelines, reminders, and settings.",
    outcome:
      "PayTrack adds a mobile-first finance-adjacent product to the portfolio, showing full-stack architecture, safe data decisions, analytics, internationalization, scheduled jobs, and recurring-payment workflows.",
    features: [
      "Dashboard with monthly spend, yearly projection, active subscription count, upcoming renewals, and category mix",
      "Subscription CRUD with renewal dates, billing frequency, category, status, payment-method label, and notes",
      "Manual payment history that records amount, paid date, currency, method, and notes",
      "Reminder history, scheduled renewal checks, and per-subscription reminder preferences",
      "Settings for display name, language, default currency, timezone, dark mode, and branded payment-method controls",
      "Password reset flow with expiring reset tokens and email delivery support"
    ],
    architecture: [
      "React frontend communicates only with REST JSON endpoints under /api",
      "Express backend owns validation, business logic, authentication, reminder jobs, and Prisma data access",
      "Prisma schema models users, categories, payment methods, subscriptions, payment records, reminder logs, reminder preferences, and password reset tokens",
      "Mobile uses full-label bottom navigation while tablet and desktop expand into side navigation and wider summary layouts",
      "Deployment config supports explicit frontend origins, cross-site cookie settings, and hardened CORS behavior"
    ],
    metrics: [
      { label: "Languages", value: "6" },
      { label: "API domains", value: "7" },
      { label: "Reminder windows", value: "2" }
    ],
    impactBullets: [
      "Shows full-stack product thinking around a real everyday money problem.",
      "Demonstrates secure organization of sensitive-adjacent payment information without storing full card data.",
      "Adds mobile-first responsive depth and internationalization to the portfolio."
    ],
    interviewAngles: [
      "How recurring subscription tracking differs from real payment processing and why labels-only payment methods are safer.",
      "Why archive and restore flows are better than risky one-click deletion for financial history.",
      "How dashboard analytics, reminder jobs, and payment timelines work together in a focused subscription product."
    ],
    repositories: [
      { label: "Frontend repository", href: "https://github.com/devTianaCodes/payTrack-frontend" },
      { label: "Backend repository", href: "https://github.com/devTianaCodes/payTrack-backend" }
    ],
    repositoryRoots: [
      { label: "Frontend", path: "https://github.com/devTianaCodes/payTrack-frontend" },
      { label: "Backend", path: "https://github.com/devTianaCodes/payTrack-backend" }
    ],
    workflowIntro: {
      eyebrow: "Subscription workflow",
      title: "Recurring payments under control",
      text: "PayTrack is strongest as a mobile-first product that turns subscription clutter into clear recurring-payment decisions."
    },
    workflowHighlights: [
      {
        title: "Dashboard and overview",
        text: "The dashboard answers the core user question quickly: how much is being spent, and what renews soon?",
        items: [
          "Monthly spend, yearly projection, active subscription count, upcoming renewals, and spending mix are surfaced together",
          "Subscriptions are grouped by category so repeated costs become easier to understand",
          "Responsive layouts keep the dashboard useful on mobile, tablet, and desktop screens"
        ]
      },
      {
        title: "Subscription lifecycle",
        text: "Subscription management covers repeated real-world operations while avoiding destructive shortcuts.",
        items: [
          "Users can create, edit, cancel, archive, and restore subscriptions across active, cancelled, and archived states",
          "Archive flows remove subscriptions from active totals and reminders without immediately destroying history",
          "Manage Subscription controls group important actions into a more intentional workflow",
          "Seven-day and one-day reminder preferences can be adjusted per subscription"
        ]
      },
      {
        title: "Payment labels and history",
        text: "The app tracks payment context without handling real payment credentials.",
        items: [
          "Payment methods are labels only, such as Visa **** 4242, PayPal, or Bank account",
          "Mark-as-paid records amount, paid date, currency, payment method, and notes",
          "Payment timeline pages show total paid, payment count, average payment, last paid date, next renewal, and year filtering"
        ]
      }
    ],
    apiIntro: {
      eyebrow: "Backend surface",
      title: "Subscription tracking API domains",
      text: "The REST API separates authentication, account settings, subscriptions, dashboard analytics, payment methods, categories, and reminders."
    },
    apiDomains: [
      "/api/auth",
      "/api/auth/password-reset/request",
      "/api/auth/password-reset/confirm",
      "/api/me",
      "/api/categories",
      "/api/payment-methods",
      "/api/subscriptions",
      "/api/subscriptions/:id/payments",
      "/api/subscriptions/:id/reminder-preferences",
      "/api/dashboard",
      "/api/reminders"
    ],
    qualityIntro: {
      eyebrow: "Engineering decisions",
      title: "Safe auth, validation, reminders, and i18n",
      text: "The project is strongest when presented as secure recurring-payment organization rather than payment processing."
    },
    qualitySignals: [
      {
        title: "Authentication and ownership",
        text: "PayTrack protects account data through backend-owned sessions and user-scoped queries.",
        items: [
          "JWT auth is stored in HTTP-only cookies so frontend JavaScript does not directly handle session tokens",
          "Passwords are hashed, never stored as plain text",
          "Users can only access their own subscriptions, payment methods, reminders, and profile data",
          "Password reset tokens are stored server-side, expire, and are marked used after confirmation"
        ]
      },
      {
        title: "Validation and data safety",
        text: "The app keeps sensitive-adjacent payment information useful without turning into a payment processor.",
        items: [
          "Zod validates backend request payloads before business logic runs",
          "Payment methods store labels only and never full card numbers or real payment credentials",
          "Payment-method deletion uses a confirmation step before removing the saved label",
          "Deletion-sensitive actions use confirmation or archive flows instead of immediate permanent removal"
        ]
      },
      {
        title: "Reminder and product systems",
        text: "Scheduled jobs and product preferences make the MVP feel closer to a real subscription assistant.",
        items: [
          "node-cron powers scheduled reminder checks for upcoming renewal windows",
          "Nodemailer supports email reminder delivery when SMTP is configured",
          "Reminder logs keep a reviewable history of sent renewal notifications",
          "Subscription-level reminder preferences let users disable specific reminder windows"
        ]
      },
      {
        title: "Responsive and internationalized UI",
        text: "The frontend is built for repeated everyday use across devices and languages.",
        items: [
          "The interface starts mobile-first with full navigation labels, then expands into tablet and desktop layouts",
          "i18next supports English, Italian, German, French, Romanian, and Russian",
          "Dark mode, default currency, timezone, and language settings let users personalize the app",
          "Recent frontend polish improved accessibility text, navigation clarity, and branded settings dropdowns"
        ]
      },
      {
        title: "Testing and deployment hardening",
        text: "Recent PayTrack updates added focused checks around the areas most likely to regress.",
        items: [
          "Frontend node:test coverage checks payment-method label formatting and full navigation words across locales",
          "Backend tests cover auth schemas, subscription schemas, reminder preference behavior, and allowed CORS origins",
          "Environment config supports multiple frontend URLs for preview and production deployments"
        ]
      }
    ],
    media: [
      {
        kind: "image",
        src: "/media/projects/paytrack/showcase/01.png",
        optimizedSrc: "/media/projects/paytrack/showcase/01.webp",
        alt: "PayTrack desktop dashboard screenshot",
        width: 2900,
        height: 1798,
        featured: true,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/paytrack/showcase/02.png",
        optimizedSrc: "/media/projects/paytrack/showcase/02.webp",
        alt: "PayTrack desktop subscriptions screenshot",
        width: 2900,
        height: 1798,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/paytrack/showcase/03.png",
        optimizedSrc: "/media/projects/paytrack/showcase/03.webp",
        alt: "PayTrack desktop settings screenshot",
        width: 2900,
        height: 1798,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/paytrack/showcase/04.png",
        optimizedSrc: "/media/projects/paytrack/showcase/04.webp",
        alt: "PayTrack light desktop dashboard screenshot",
        width: 2900,
        height: 1798,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/paytrack/showcase/05.png",
        optimizedSrc: "/media/projects/paytrack/showcase/05.webp",
        alt: "PayTrack mobile dashboard screenshot",
        width: 896,
        height: 1786,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/paytrack/showcase/06.png",
        optimizedSrc: "/media/projects/paytrack/showcase/06.webp",
        alt: "PayTrack mobile settings screenshot",
        width: 896,
        height: 1786,
        status: "ready"
      }
    ],
    links: [
      { label: "Case Study", href: "/projects/paytrack", kind: "case-study" }
    ]
  },
  {
    slug: "ai-comparator",
    name: "AI Comparator",
    tagline: "Unauthenticated AI model comparison SPA with search, filters, favourites, and side-by-side analysis.",
    summary:
      "A React and Vite project built around the Boolean final-project requirements: browse AI model records, search and filter them, inspect model details, compare two models side by side, and keep a favourites collection without exposing CRUD actions to the user.",
    role: "Frontend product workflow with REST backend integration",
    category: "full-stack",
    deploymentMode: "media",
    repoPath:
      "/Users/parents/Desktop/Boolean Specializzazione/ai-comparator-final-project/ai-comparator-front and /Users/parents/Desktop/Boolean Specializzazione/ai-comparator-final-project/ai-comparator-back",
    year: "2026",
    visualTone: "ai-lilac",
    hook: "A focused comparison tool that turns a course assignment into a clean product workflow for evaluating AI models.",
    techStack: [
      "React 19",
      "Vite 7",
      "JavaScript",
      "React Router",
      "React Context",
      "Custom Hooks",
      "Custom CSS",
      "Fetch API",
      "Local Storage",
      "Node.js",
      "Express",
      "CORS",
      "Morgan",
      "Zod",
      "TypeScript Schema",
      "JSON Database"
    ],
    strengths: [
      "Clear non-authenticated browsing journey",
      "Search, category filter, and sorting controls",
      "Two-model comparison workflow",
      "Persisted favourites available across the app"
    ],
    challenge:
      "Build a complete comparison SPA against a generated REST backend while respecting the assignment constraint that unauthenticated users can browse, compare, and save favourites, but cannot create, edit, or delete records.",
    solution:
      "The frontend uses React Router pages for the model list, details, comparison, and favourites, wrapped in a GlobalProvider for shared favourite state. A custom useModels hook centralizes API loading, debounced search reduces unnecessary requests, memoized sorting keeps the catalogue responsive, and selected IDs are passed through the comparison route.",
    outcome:
      "The project demonstrates a complete read-only product flow with real backend data, explainable state management, route-based navigation, and a comparison experience that is easy to test in an interview.",
    features: [
      "Model catalogue with debounced search by title, category filtering, and alphabetical sorting by title or category",
      "Detail page that exposes provider, modality, context window, price tier, intelligence index, strengths, and description",
      "Two-model comparison route that loads selected IDs from the query string and displays comparable fields side by side",
      "Favourites flow available from the header and model cards, persisted in localStorage",
      "Empty, loading, and error states for model list, details, favourites, and comparison views"
    ],
    architecture: [
      "React Router separates list, detail, favourites, and comparison routes under a shared DefaultLayout",
      "GlobalContext stores favourite model IDs and syncs them to localStorage",
      "The useModels hook owns model loading, single-model fetches, loading state, and API errors",
      "ModelList keeps the local catalogue controls focused on search, category, sorting, and comparison selection",
      "The backend generates REST endpoints from the exported Model type in types.ts",
      "The Model resource is persisted as JSON data and validated through a generated Zod schema",
      "The UI intentionally excludes create, update, and delete actions to match the non-authenticated user scope"
    ],
    metrics: [
      { label: "Screens", value: "4" },
      { label: "API resource", value: "Model" },
      { label: "Seed records", value: "10+" }
    ],
    impactBullets: [
      "Shows practical React routing, API integration, and state coordination without overengineering.",
      "Makes comparison logic visible through a real two-model workflow instead of a static table.",
      "Demonstrates constraint discipline by keeping the interface read-only for unauthenticated users."
    ],
    interviewAngles: [
      "How the frontend turns assignment requirements into routes and user flows.",
      "Why selected comparison IDs are passed through the URL for a shareable, reloadable comparison view.",
      "How the backend uses a typed resource definition to generate REST endpoints and validate persisted data."
    ],
    repositories: [
      { label: "Frontend repository", href: "https://github.com/devTianaCodes/ai-comparator-front" },
      { label: "Backend repository", href: "https://github.com/devTianaCodes/ai-comparator-back" }
    ],
    repositoryRoots: [
      { label: "Frontend", path: "https://github.com/devTianaCodes/ai-comparator-front" },
      { label: "Backend", path: "https://github.com/devTianaCodes/ai-comparator-back" }
    ],
    workflowIntro: {
      eyebrow: "Comparison workflow",
      title: "Browse, select, compare, and save",
      text: "The strongest part of AI Comparator is the complete read-only journey from catalogue discovery to side-by-side decision support."
    },
    workflowHighlights: [
      {
        title: "Model catalogue",
        text: "The list page gives users the controls expected from a comparison product.",
        items: [
          "Search targets model titles through the backend query string after a 500ms debounce",
          "Category filtering is derived from the model data so the filter stays aligned with available records",
          "Sorting supports title and category in both A-Z and Z-A directions, memoized with useMemo"
        ]
      },
      {
        title: "Selection and comparison",
        text: "The comparison flow is intentionally simple and easy to reason about.",
        items: [
          "Users select exactly two models from the catalogue before opening the comparison view",
          "The compare route reads selected IDs from the URL and fetches both detail records",
          "Comparable fields include provider, release year, modality, context window, pricing tier, intelligence index, strengths, and category"
        ]
      },
      {
        title: "Favourites and detail review",
        text: "The app keeps repeated review actions close to the user without adding account complexity.",
        items: [
          "Favourite buttons are available on cards and detail views through GlobalContext",
          "Favourite model IDs persist in localStorage so selections survive page refreshes",
          "A dedicated favourites route keeps saved models accessible from the header",
          "Detail pages display the extended Model resource instead of only the catalogue fields"
        ]
      }
    ],
    apiIntro: {
      eyebrow: "Backend surface",
      title: "Generated REST API over a Model resource",
      text: "The backend is the provided Boolean-style resource server, customized through a Model type and seeded JSON data."
    },
    apiDomains: [
      "GET /models",
      "GET /models?search=...",
      "GET /models?category=...",
      "GET /models/:id",
      "POST /models",
      "PUT /models/:id",
      "DELETE /models/:id"
    ],
    qualityIntro: {
      eyebrow: "Implementation decisions",
      title: "Readable constraints and explainable state",
      text: "The project is strongest as a clean implementation of required behaviour rather than a heavy framework exercise."
    },
    qualitySignals: [
      {
        title: "Requirement discipline",
        text: "The frontend keeps the public user experience read-only.",
        items: [
          "No create, edit, or delete controls are exposed in the SPA",
          "The core minimum requirements are represented as explicit routes and UI states",
          "The comparison flow stays focused on two records to keep the first version clear"
        ]
      },
      {
        title: "Frontend state structure",
        text: "Recent refactoring makes the data flow easier to explain and maintain.",
        items: [
          "GlobalProvider wraps the routes so favourites are available to list, detail, and favourites pages",
          "useModels centralizes API fetch logic for model lists and individual model details",
          "ModelList combines backend query loading with local sorting and two-model comparison selection"
        ]
      },
      {
        title: "Data modelling",
        text: "The Model resource includes enough fields to make comparison meaningful.",
        items: [
          "Required fields are title and category, matching the assignment contract",
          "Optional fields add provider, release year, modality, context window, price tier, image, intelligence index, strengths, and description",
          "Seeded JSON data gives the app real records for browsing and comparing"
        ]
      },
      {
        title: "User feedback",
        text: "The app handles the most visible API and route states.",
        items: [
          "List, favourites, details, and comparison pages show loading and error feedback",
          "The comparison panel communicates when two models are required",
          "The favourites page handles the empty collection state"
        ]
      }
    ],
    media: [
      {
        kind: "image",
        src: "/media/projects/ai-comparator/showcase/01.png",
        optimizedSrc: "/media/projects/ai-comparator/showcase/01.webp",
        alt: "AI Comparator model catalogue screenshot",
        width: 3172,
        height: 1816,
        featured: true,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/ai-comparator/showcase/02.png",
        optimizedSrc: "/media/projects/ai-comparator/showcase/02.webp",
        alt: "AI Comparator favourites screenshot",
        width: 3172,
        height: 1816,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/ai-comparator/showcase/03.png",
        optimizedSrc: "/media/projects/ai-comparator/showcase/03.webp",
        alt: "AI Comparator comparison screenshot",
        width: 3172,
        height: 1816,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/ai-comparator/showcase/04.png",
        optimizedSrc: "/media/projects/ai-comparator/showcase/04.webp",
        alt: "AI Comparator model detail screenshot",
        width: 3172,
        height: 1816,
        status: "ready"
      }
    ],
    links: [
      { label: "Case Study", href: "/projects/ai-comparator", kind: "case-study" }
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
    techStack: [
      "React 18",
      "Vite",
      "JavaScript",
      "JSX",
      "Tailwind CSS",
      "Custom CSS",
      "PostCSS",
      "Autoprefixer",
      "Local Storage",
      "Keyboard Events",
      "Pointer Events",
      "Dynamic Viewport Units"
    ],
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
    repositories: [{ label: "Game repository", href: "https://github.com/devTianaCodes/BrickDrop" }],
    repositoryRoots: [{ label: "Project", path: "https://github.com/devTianaCodes/BrickDrop" }],
    workflowIntro: {
      eyebrow: "Gameplay workflow",
      title: "Compact real-time puzzle system",
      text: "BrickDrop is strongest as a small but complete frontend game that combines game-loop thinking, collision logic, responsive controls, persistence, and polished feedback."
    },
    workflowHighlights: [
      {
        title: "Core falling-block logic",
        text: "The project implements the expected mechanics of a playable block-stacking game rather than stopping at a visual board.",
        items: [
          "The game uses a standard 10 x 20 board with seven tetromino pieces: I, O, T, S, Z, J, and L",
          "Piece movement, collision detection, rotation, locking, line clearing, pause/resume, hard drop, and soft drop are handled in the game loop",
          "Scoring supports single, double, triple, and four-line clears, with level progression every 10 cleared lines and increasing drop speed"
        ]
      },
      {
        title: "Fairness and player assistance",
        text: "Small gameplay choices make the clone feel more complete and more enjoyable to play.",
        items: [
          "A shuffled bag-style randomizer is used instead of purely random piece selection",
          "New games avoid opening with S or Z pieces, improving perceived quality at the start of play",
          "Ghost piece projection and next-piece preview help players plan instead of only react"
        ]
      },
      {
        title: "Mobile-first interaction",
        text: "Mobile is treated as its own play experience, not a squeezed desktop layout.",
        items: [
          "The mobile layout dedicates the upper 60% of the viewport to the board and the lower 40% to controls",
          "Large skeuomorphic buttons support real thumb play, including press-and-hold left/right movement",
          "Pause/Resume uses state-specific coloring, while invalid actions are disabled during pause, row clearing, or non-gameplay states"
        ]
      }
    ],
    apiIntro: {
      eyebrow: "Frontend systems",
      title: "Game architecture surfaces",
      text: "BrickDrop is a static frontend game, so the important technical surfaces are board logic, timing, input, persistence, and responsive rendering."
    },
    apiDomains: [
      "Game board",
      "Tetromino bag",
      "Next preview",
      "Ghost piece",
      "Collision checks",
      "Line clearing",
      "Score and level state",
      "High score storage",
      "Desktop keyboard input",
      "Mobile pointer controls",
      "Welcome overlay",
      "Game-over modal"
    ],
    qualityIntro: {
      eyebrow: "Engineering decisions",
      title: "State, timing, responsive play, and polish",
      text: "The interview value comes from explaining how real-time state, timers, browser input, and mobile layout constraints are kept understandable."
    },
    qualitySignals: [
      {
        title: "State management",
        text: "The implementation stays dependency-light by using React state and refs for gameplay instead of an external state library.",
        items: [
          "Board, active piece, next piece, status, score, level, lines, high score, and clearing state are separated",
          "Refs hold timers, clear animations, hold-to-move behavior, and the current piece bag",
          "localStorage persists high score under BrickDrop_high_score across browser sessions"
        ]
      },
      {
        title: "Game loop and timing",
        text: "Timing is treated as a core part of the game feel.",
        items: [
          "Automatic falling uses setInterval based on current level, with speed increasing as level rises",
          "Line clear animation uses a timeout before rows are removed and the next piece spawns",
          "Mobile hold-to-move starts with a timeout, then repeats with a faster interval and cleanup on release, cancel, pause, or game over"
        ]
      },
      {
        title: "Collision and board updates",
        text: "The core board operations are named and explainable, which makes the project easier to discuss in review.",
        items: [
          "canPlace centralizes boundary and collision checks",
          "mergePiece overlays the active piece onto the board, and clearLines removes full rows while prepending empty rows",
          "Rotation uses matrix transformation with simple wall-kick attempts"
        ]
      },
      {
        title: "Product polish and next steps",
        text: "The project has enough polish to feel playable while still offering clear future improvements.",
        items: [
          "The welcome and game-over overlays use the same branded visual language with mini piece shapes, score, level, lines, Play Again, and Quit Game actions",
          "The dark neon arcade system uses glass panels, glowing block colors, row-clear flashes, and skeuomorphic mobile buttons",
          "Good next steps include tests for board collision, line clearing, rotation, opening-piece selection, haptics, sound, leaderboard, PWA support, and richer wall-kick behavior"
        ]
      }
    ],
    media: [
      {
        kind: "image",
        src: "/media/projects/brickdrop/showcase/04.png",
        optimizedSrc: "/media/projects/brickdrop/showcase/04.webp",
        alt: "BrickDrop screenshot 1",
        width: 2704,
        height: 1762,
        featured: true,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/brickdrop/showcase/01.png",
        optimizedSrc: "/media/projects/brickdrop/showcase/01.webp",
        alt: "BrickDrop screenshot 2",
        width: 2944,
        height: 1808,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/brickdrop/showcase/02.png",
        optimizedSrc: "/media/projects/brickdrop/showcase/02.webp",
        alt: "BrickDrop screenshot 3",
        width: 2568,
        height: 1662,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/brickdrop/showcase/03.png",
        optimizedSrc: "/media/projects/brickdrop/showcase/03.webp",
        alt: "BrickDrop screenshot 4",
        width: 2704,
        height: 1762,
        status: "ready"
      }
    ],
    links: [
      { label: "Live Demo", href: "/demos/brickdrop.html", kind: "live" },
      { label: "Case Study", href: "/projects/brickdrop", kind: "case-study" }
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
    techStack: [
      "React 18",
      "Vite",
      "Framer Motion",
      "Zustand",
      "Tailwind CSS",
      "Custom CSS",
      "clsx",
      "React Context",
      "Local Storage",
      "ResizeObserver",
      "Node Test Runner"
    ],
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
    repositories: [{ label: "Game repository", href: "https://github.com/devTianaCodes/sea-battle" }],
    repositoryRoots: [{ label: "Project", path: "https://github.com/devTianaCodes/sea-battle" }],
    workflowIntro: {
      eyebrow: "Gameplay workflow",
      title: "Complete responsive Battleship loop",
      text: "Sea Battle is strongest as a compact but complete frontend system: game rules, AI, state, accessibility, animation, and mobile layout all work together."
    },
    workflowHighlights: [
      {
        title: "Full Battleship experience",
        text: "The game includes the complete loop expected from a playable single-player Battleship implementation.",
        items: [
          "10x10 player and opponent grids use the standard fleet: Carrier, Battleship, Cruiser, Submarine, and Destroyer",
          "Manual placement, horizontal/vertical rotation, random fleet placement, turn-based firing, hit/miss/sunk/win detection, and enemy fleet reveal are included",
          "Easy, Medium, and Hard AI modes change opponent behavior from forgiving random play to more efficient hunt/target strategy"
        ]
      },
      {
        title: "Responsive and mobile-first play",
        text: "The interface was shaped around the hard problem of keeping two board grids readable, square, and tappable across devices.",
        items: [
          "Phone portrait setup is simplified around clear Random, Clear, Play, and Rotate Ship actions",
          "Phone landscape has dedicated rules so both boards remain playable side by side",
          "Viewport-aware CSS variables keep board sizing stable, while removing the live timer avoided mobile header jitter"
        ]
      },
      {
        title: "Accessible interaction model",
        text: "The grid is built to be playable and understandable beyond mouse clicks.",
        items: [
          "Cells expose descriptive ARIA labels with coordinates and state",
          "Keyboard navigation supports arrow movement, Enter/Space confirmation, and Escape for modal-style flows",
          "Dialogs use focus management and body scroll lock, while live regions announce game status"
        ]
      }
    ],
    apiIntro: {
      eyebrow: "Frontend systems",
      title: "Game architecture surfaces",
      text: "The project is a static frontend app, so the important surfaces are game state, AI, rendering, persistence, and browser interaction layers."
    },
    apiDomains: [
      "GameShell",
      "GameBoard",
      "BoardCell",
      "StatusBar",
      "BattleActionBar",
      "ShipPlacementPanel",
      "ResultsModal",
      "GameProvider",
      "useSeaBattleGame",
      "useGameContext",
      "AI player logic",
      "Local history"
    ],
    qualityIntro: {
      eyebrow: "Engineering decisions",
      title: "State, polish, accessibility, and tests",
      text: "The interview value comes from separating rules, UI, AI, responsive layout, local persistence, animation, and accessibility concerns."
    },
    qualitySignals: [
      {
        title: "State and logic separation",
        text: "The game is organized so UI components do not own every gameplay rule directly.",
        items: [
          "GameProvider and useGameContext wrap the main game state",
          "useSeaBattleGame owns match lifecycle, phase transitions, fleet placement, turn handling, history, settings, and results",
          "Board rules, ship placement, AI move selection, stats/history formatting, sound, dialog behavior, and scroll locking are separated into hooks and utilities"
        ]
      },
      {
        title: "Animation and product polish",
        text: "Motion supports gameplay feedback instead of only decoration.",
        items: [
          "Framer Motion powers modal, menu, result, footer, and UI transitions",
          "CSS animations communicate hits, misses, sunk ships, opponent thinking, and victory moments",
          "Settings allow sound and ambient background effects to be controlled without overcrowding the battle screen"
        ]
      },
      {
        title: "Persistence and results",
        text: "The game remembers player progress and turns the final result into a useful summary.",
        items: [
          "Local storage persists match history, sound preference, background effects preference, and onboarding state",
          "The results modal shows victory/defeat, accuracy, moves, hits, misses, mission time, best streak, archive wins, best accuracy, and enemy reveal",
          "Play Again returns to difficulty selection so the next match can intentionally change challenge level"
        ]
      },
      {
        title: "Testing focus",
        text: "Tests target the core rule regressions that would break the game experience.",
        items: [
          "Node test runner coverage includes ship placement, required fleet completion, duplicate shot prevention, and win condition",
          "Keyboard navigation mapping and rotation shortcut behavior are covered as interaction rules",
          "Production validation is handled through npm run build"
        ]
      }
    ],
    media: [
      {
        kind: "image",
        src: "/media/projects/sea-battle/showcase/01.png",
        optimizedSrc: "/media/projects/sea-battle/showcase/01.webp",
        alt: "Sea Battle screenshot 1",
        width: 2856,
        height: 1802,
        featured: true,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/sea-battle/showcase/02.png",
        optimizedSrc: "/media/projects/sea-battle/showcase/02.webp",
        alt: "Sea Battle screenshot 2",
        width: 2856,
        height: 1802,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/sea-battle/showcase/03.png",
        optimizedSrc: "/media/projects/sea-battle/showcase/03.webp",
        alt: "Sea Battle screenshot 3",
        width: 2856,
        height: 1802,
        status: "ready"
      },
      {
        kind: "image",
        src: "/media/projects/sea-battle/showcase/04.png",
        optimizedSrc: "/media/projects/sea-battle/showcase/04.webp",
        alt: "Sea Battle screenshot 4",
        width: 2856,
        height: 1802,
        status: "ready"
      }
    ],
    links: [
      { label: "Live Demo", href: "/demos/sea-battle.html", kind: "live" },
      { label: "Case Study", href: "/projects/sea-battle", kind: "case-study" }
    ]
  }
];

export const featuredProjects = projects.filter((project) => project.flagship);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
