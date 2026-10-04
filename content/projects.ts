export type ProjectLink = {
  label: "Live Demo" | "GitHub";
  href: string;
  placeholder?: boolean;
};

export type IndependentProject = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  overview: string;
  problem: string;
  technologies: string[];
  capabilities: string[];
  architecture: string[];
  engineeringDecisions: string;
  implementation: string;
  outcome: string;
  links?: ProjectLink[];
};

export const independentProjects: IndependentProject[] = [
  {
    slug: "portfolio-website",
    name: "Hari Om Pandey Portfolio",
    eyebrow: "Independent project 01 / Portfolio engineering",
    summary:
      "A recruiter-facing Next.js application that makes frontend capability, professional systems and AI-assisted workflows inspectable in one place.",
    overview:
      "Built a responsive portfolio website with Next.js App Router, TypeScript, React and Tailwind CSS, with centralized content modules powering the UI and Ask Hari assistant.",
    problem:
      "The portfolio needed to explain frontend foundations, professional business systems and AI work without duplicating facts or exposing confidential Maruti details.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Next.js App Router",
      "Zod",
      "React Hook Form",
      "API route",
      "OpenAI API fallback",
      "Git / GitHub",
    ],
    capabilities: [
      "Centralized content architecture",
      "Recruiter-facing case studies",
      "Interactive skill filtering",
      "Responsive UI",
      "Reusable components",
      "Light / dark theme",
      "Print-friendly resume",
      "Ask Hari assistant",
      "Loading and error states",
    ],
    architecture: [
      "Next.js App Router",
      "Content modules",
      "Page + UI components",
      "API route",
      "Approved knowledge base",
      "Optional OpenAI fallback",
    ],
    engineeringDecisions:
      "Portfolio facts live in typed content modules so pages and Ask Hari can share one source of truth. The existing assistant flow remains deterministic first, with an optional server-side model fallback and explicit confidentiality boundaries.",
    implementation:
      "Reusable cards, metric strips, skill filters, navigation, contact validation and print-resume UI compose the experience. The chat route validates questions with Zod and reads only the approved knowledge base.",
    outcome:
      "A complete engineering portfolio that demonstrates application architecture through its own content system, responsive interface, API integration, safe AI assistant and technical case-study presentation.",
    links: [{ label: "Live Demo", href: "https://personel-portfolio-seven.vercel.app/" }],
  },
  {
    slug: "zooflix",
    name: "Zooflix",
    eyebrow: "Independent project 02 / Frontend application",
    summary:
      "A responsive React frontend application built around reusable components, navigation and interactive content discovery.",
    overview:
      "Built a complete frontend application with React, JavaScript and HTML/CSS rather than presenting it as a static portfolio exercise.",
    problem:
      "The experience needed to feel like a usable application: clear navigation, responsive layouts, reusable UI and interactive states across screen sizes.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3"],
    capabilities: [
      "Responsive design",
      "Reusable components",
      "Navigation and routing",
      "Interactive UI",
      "Frontend application structure",
      "Deployment",
    ],
    architecture: [
      "React application",
      "Reusable UI components",
      "Navigation / routing",
      "Interactive content views",
      "Responsive presentation",
    ],
    engineeringDecisions:
      "The project is presented as an application so the focus stays on component reuse, navigation and interaction quality across mobile and desktop layouts.",
    implementation:
      "The UI is organised around React components and responsive HTML/CSS patterns, with navigation and interactive views forming the primary user flow.",
    outcome:
      "A deployed frontend application that demonstrates independent React development, responsive implementation and interactive UI composition.",
    links: [
      {
        label: "Live Demo",
        href: "https://example.com/zooflix",
        placeholder: true,
      },
    ],
  },
];
