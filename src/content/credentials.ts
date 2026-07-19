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
