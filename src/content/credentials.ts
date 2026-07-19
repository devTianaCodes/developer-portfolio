export type CredentialCategory = "professional" | "degree" | "ux-ui";

export type CredentialEntry = {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  imageAlt: string;
  description: string;
  category: CredentialCategory;
};

export type DegreeCredential = {
  slug: string;
  level: "Bachelor’s degree" | "Master’s degree";
  field: string;
  specialization: string;
  image: string;
  imageAlt: string;
  category: "degree";
};

export type UxUiCredential = {
  slug: string;
  title: string;
  issuer: "Interaction Design Foundation";
  image: string;
  imageAlt: string;
  category: "ux-ui";
};

export const professionalCredentials = [
  {
    slug: "boolean-web-development",
    title: "Web Development Master",
    issuer: "Boolean",
    date: "28 June 2026",
    image: "/media/credentials/professional/boolean-web-development.png",
    imageAlt: "Boolean Web Development Master certificate awarded to Tatiana Oblasser",
    description: "Completed a 600-hour full-stack development program covering HTML, CSS, JavaScript, React, Node.js, Express, and MySQL.",
    category: "professional"
  },
  {
    slug: "boolean-ai-days",
    title: "AI Days",
    issuer: "Boolean",
    date: "12–14 May 2026",
    image: "/media/credentials/professional/boolean-ai-days.png",
    imageAlt: "Boolean AI Days participation certificate awarded to Tatiana Oblasser",
    description: "Completed a five-hour practical AI program combining three live sessions with the development of an AI project.",
    category: "professional"
  },
  {
    slug: "aulab-html-css",
    title: "HTML and CSS Fundamentals",
    issuer: "Aulab",
    date: "5 April 2024",
    image: "/media/credentials/professional/aulab-html-css.png",
    imageAlt: "Aulab HTML and CSS course certificate awarded to Tatiana Oblasser",
    description: "Completed Aulab’s five-day introductory course covering the foundations of HTML and CSS.",
    category: "professional"
  },
  {
    slug: "ntt-data-inspireher",
    title: "InspireHER",
    issuer: "NTT DATA Italia",
    date: "11–12 October 2024",
    image: "/media/credentials/professional/ntt-data-inspireher.png",
    imageAlt: "NTT DATA Italia InspireHER participation certificate awarded to Tatiana Oblasser",
    description: "Completed NTT DATA Italia’s InspireHER personal-development program focused on recognizing and strengthening individual talent.",
    category: "professional"
  }
] satisfies readonly CredentialEntry[];

export const degreeCredentials = [
  {
    slug: "economic-sciences-business-administration",
    level: "Bachelor’s degree",
    field: "Economic Sciences",
    specialization: "Business and Administration",
    image: "/media/credentials/education/economic-sciences-bachelor-redacted.png",
    imageAlt: "Privacy-redacted Bachelor’s degree diploma in Economic Sciences",
    category: "degree"
  },
  {
    slug: "economic-sciences-commercial-transactions",
    level: "Master’s degree",
    field: "Economic Sciences",
    specialization: "Commercial Transaction Administration",
    image: "/media/credentials/education/economic-sciences-master-redacted.png",
    imageAlt: "Privacy-redacted Master’s degree diploma in Economic Sciences",
    category: "degree"
  },
  {
    slug: "education-sciences-languages",
    level: "Bachelor’s degree",
    field: "Education Sciences",
    specialization: "Romanian Language and Literature and German Language",
    image: "/media/credentials/education/education-sciences-bachelor-redacted.png",
    imageAlt: "Privacy-redacted Bachelor’s degree diploma in Education Sciences",
    category: "degree"
  }
] satisfies readonly DegreeCredential[];

export const uxUiCredentials = [
  {
    slug: "design-for-the-21st-century",
    title: "Design for the 21st Century",
    issuer: "Interaction Design Foundation",
    image: "/media/credentials/ux-ui/course-certificate-design-for-the-21st-century.jpg",
    imageAlt: "Design for the 21st Century course certificate awarded to Tatiana Oblasser",
    category: "ux-ui"
  },
  {
    slug: "design-thinking-the-ultimate-guide",
    title: "Design Thinking: The Ultimate Guide",
    issuer: "Interaction Design Foundation",
    image: "/media/credentials/ux-ui/course-certificate-design-thinking-the-ultimate-guide.jpg",
    imageAlt: "Design Thinking: The Ultimate Guide course certificate awarded to Tatiana Oblasser",
    category: "ux-ui"
  },
  {
    slug: "emotional-design",
    title: "Emotional Design: How to Make Products People Will Love",
    issuer: "Interaction Design Foundation",
    image: "/media/credentials/ux-ui/course-certificate-emotional-design-how-to-make-products-people-will-love.jpg",
    imageAlt: "Emotional Design course certificate awarded to Tatiana Oblasser",
    category: "ux-ui"
  },
  {
    slug: "gestalt-psychology-and-web-design",
    title: "Gestalt Psychology and Web Design: The Ultimate Guide",
    issuer: "Interaction Design Foundation",
    image: "/media/credentials/ux-ui/course-certificate-gestalt-psychology-and-web-design-the-ultimate-guide.jpg",
    imageAlt: "Gestalt Psychology and Web Design course certificate awarded to Tatiana Oblasser",
    category: "ux-ui"
  },
  {
    slug: "hci-foundations-of-ux-design",
    title: "Human-Computer Interaction: The Foundations of UX Design",
    issuer: "Interaction Design Foundation",
    image: "/media/credentials/ux-ui/course-certificate-hci-foundations-of-ux-design.jpg",
    imageAlt: "Human-Computer Interaction course certificate awarded to Tatiana Oblasser",
    category: "ux-ui"
  },
  {
    slug: "journey-mapping",
    title: "Journey Mapping",
    issuer: "Interaction Design Foundation",
    image: "/media/credentials/ux-ui/course-certificate-journey-mapping.jpg",
    imageAlt: "Journey Mapping course certificate awarded to Tatiana Oblasser",
    category: "ux-ui"
  },
  {
    slug: "mobile-user-experience-design",
    title: "Mobile User Experience Design",
    issuer: "Interaction Design Foundation",
    image: "/media/credentials/ux-ui/course-certificate-mobile-user-experience-design.jpg",
    imageAlt: "Mobile User Experience Design course certificate awarded to Tatiana Oblasser",
    category: "ux-ui"
  },
  {
    slug: "ui-design-patterns",
    title: "UI Design Patterns for Successful Software",
    issuer: "Interaction Design Foundation",
    image: "/media/credentials/ux-ui/course-certificate-ui-design-patterns-for-successful-software.jpg",
    imageAlt: "UI Design Patterns for Successful Software course certificate awarded to Tatiana Oblasser",
    category: "ux-ui"
  },
  {
    slug: "user-experience-beginners-guide",
    title: "User Experience: The Beginner’s Guide",
    issuer: "Interaction Design Foundation",
    image: "/media/credentials/ux-ui/course-certificate-user-experience-the-beginner-s-guide.jpg",
    imageAlt: "User Experience: The Beginner’s Guide course certificate awarded to Tatiana Oblasser",
    category: "ux-ui"
  },
  {
    slug: "user-research-methods",
    title: "User Research: Methods and Best Practices",
    issuer: "Interaction Design Foundation",
    image: "/media/credentials/ux-ui/course-certificate-user-research-methods-and-best-practices.jpg",
    imageAlt: "User Research: Methods and Best Practices course certificate awarded to Tatiana Oblasser",
    category: "ux-ui"
  }
] satisfies readonly UxUiCredential[];
