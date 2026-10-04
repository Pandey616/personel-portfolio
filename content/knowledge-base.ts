import { certifications } from "@/content/certifications";
import { education } from "@/content/education";
import {
  currentExperience,
  developmentJourney,
  experienceProjects,
} from "@/content/experience";
import { independentProjects } from "@/content/projects";
import { profile, previousExperience, impactMetrics } from "@/content/resume";
import { skillCategories } from "@/content/skills";

/**
 * A plain-language summary is kept alongside the typed records so that the
 * assistant has the same context a recruiter gets from reading the profile
 * and resume from top to bottom.
 */
export const resumeProfileContext = `
Hari Om Pandey is a Front-End Developer and AI & Automation Engineer based in
Gurugram, Haryana. He has 3+ years of continuous frontend development, from
2023 to 2025, and 1+ year of professional application development. His frontend
foundation covers HTML5, CSS3, JavaScript, React, Next.js, Bootstrap, REST APIs,
API integration, responsive UI, reusable components and Git/GitHub.

Since September 2025, Hari has worked at Maruti Suzuki India Limited as a Fixed
Term Graduate Executive in the Interior Lighting & Accessories department. His
professional work applies frontend and application-development skills to
business applications, workflow automation, data workflows, dashboards and
AI-assisted retrieval. He has delivered three business applications, contributed
to 12+ automated flows, impacted 3+ departments and automated more than 50% of
targeted manual work.

The three documented applications are: a Benchmarking Data Platform for
structured data entry, validation, SharePoint persistence, retrieval, comparison,
dashboard reporting and Copilot-assisted benchmark retrieval; a Training
Operations Platform for trainee onboarding, training plans, dynamic scheduling,
hierarchical approvals, completion tracking and department-level reporting; and
an Engineering Cost Computation System for parameterized inputs, dynamic
business-rule-based calculations, cost-saving analysis, model/variant
aggregation, part-level costing, retrieval/editing and Excel export.

His professional application stack includes Power Apps, Power Automate, Power BI,
SharePoint, Copilot Agents, React, JavaScript, Excel, SQL and JSON. His AI and
generative-AI toolkit also includes prompt engineering, the OpenAI API, Gemini
and chatbot development. Other tools listed in the profile are VS Code, Postman,
Figma, Advanced Excel and Advanced PowerPoint.

  His independent frontend work includes this portfolio website, a Next.js,
  TypeScript and React application with centralized content modules, reusable
  components, responsive UI, an approved knowledge base, API-backed Ask Hari
  interaction, deterministic fallback behaviour and an optional server-side
  OpenAI API fallback. He also built Zooflix as a responsive React frontend
  application with reusable components, navigation, routing and interactive UI.

Hari is pursuing a Master of Computer Applications in Artificial Intelligence &
Machine Learning at Amity University, Noida, expected December 2027. He
completed a Bachelor of Computer Applications at Maharishi Dayanand University,
Rohtak, from 2022 to 2025, with focus areas including Data Structures, Web
Development, AI Fundamentals and Object-Oriented Programming. His certifications
are Prompt Engineering for AI from DeepLearning.AI (2024), Front-End Developer
Certification from One Roadmap (2025), and ChatGPT and Generative AI from Udemy
(2025).
`.trim();

export const recruiterFaqs = [
  {
    question: "Who is Hari Om Pandey?",
    answer:
      "Hari Om Pandey is a Front-End Developer and AI & Automation Engineer based in Gurugram, Haryana. He has 3+ years of continuous frontend development experience and currently applies that foundation to business applications, workflow automation, dashboards and AI-assisted systems.",
    href: "/about",
    label: "View Hari's profile",
  },
  {
    question: "Can you summarize Hari's resume?",
    answer:
      "Hari is a Front-End Developer and AI & Automation Engineer with 3+ years of frontend development. His current role at Maruti Suzuki India Limited involves business applications, automation, dashboards and AI-assisted retrieval. He is pursuing an MCA in Artificial Intelligence & Machine Learning and has documented frontend, Power Platform and AI skills.",
    href: "/resume",
    label: "View the resume",
  },
  {
    question: "What does Hari do professionally?",
    answer:
      "Hari combines frontend development with business application engineering. He builds interfaces and data workflows, automates processes, supports dashboards and connects useful AI experiences to approved business context.",
    href: "/about",
    label: "View profile",
  },
  {
    question: "How much frontend experience does Hari have?",
    answer:
      "Hari has 3+ years of continuous frontend development experience, spanning HTML, CSS, JavaScript, React, APIs and modern application development. His most recent professional work at Maruti Suzuki extends this foundation into business applications, workflow automation and AI-assisted systems.",
    href: "/experience",
    label: "View the development journey",
  },
  {
    question: "What did Hari do at Maruti?",
    answer:
      "At Maruti Suzuki India Limited, Hari works as a Fixed Term Graduate Executive in Interior Lighting & Accessories. He has developed business applications involving benchmarking data, training operations and engineering cost computation, combining application interfaces, Power Platform automation, SharePoint, dashboards and Copilot-assisted retrieval.",
    href: "/experience",
    label: "View Maruti case studies",
  },
  {
    question: "Is Hari only a Power Apps developer?",
    answer:
      "No. His development journey is broader. His frontend foundation includes HTML, CSS, JavaScript, React, Next.js and REST APIs. His professional work expanded into Power Apps, Power Automate, SharePoint, Power BI and Copilot Agents for business-system development.",
    href: "/skills",
    label: "Explore the skills",
  },
  {
    question: "What technologies does Hari use?",
    answer:
      "Hari works with HTML5, CSS3, JavaScript, React, Next.js, Bootstrap, REST APIs, API integration, responsive UI and reusable components. His professional application work also uses Power Apps, Power Automate, Power BI, SharePoint, Generative AI, Copilot Agents, SQL and JSON.",
    href: "/skills",
    label: "Explore skills",
  },
  {
    question: "What did Hari build at Maruti Suzuki India Limited?",
    answer:
      "He developed a Benchmarking Data Platform, a Training Operations Platform and an Engineering Cost Computation System, alongside automated flows, dashboard reporting and AI-assisted benchmark retrieval.",
    href: "/experience",
    label: "View experience",
  },
  {
    question: "What is Hari's React experience?",
    answer:
      "From 2023 to 2025, Hari built and iterated on web applications using HTML, CSS, JavaScript and React, with responsive interfaces, reusable components, API integration and frontend architecture. This was development experience, not three years of full-time React employment.",
    href: "/about",
    label: "Read background",
  },
  {
    question: "What Power Platform experience does Hari have?",
    answer:
      "His Power Platform experience includes Power Apps, Power Automate, Power BI and SharePoint, used across business applications, training operations, benchmark workflows and dashboard reporting.",
    href: "/skills",
    label: "See Power Platform",
  },
  {
    question: "What is Hari's education?",
    answer:
      "Hari is pursuing an MCA in Artificial Intelligence & Machine Learning at Amity University, Noida, expected Dec 2027. He completed a BCA at Maharishi Dayanand University, Rohtak, from 2022 to 2025.",
    href: "/about",
    label: "View education",
  },
  {
    question: "What are Hari's certifications?",
    answer:
      "Hari holds Prompt Engineering for AI from DeepLearning.AI (2024), Front-End Developer Certification from One Roadmap (2025), and ChatGPT and Generative AI from Udemy (2025).",
    href: "/about",
    label: "View credentials",
  },
  {
    question: "Where is Hari located?",
    answer: "Hari Om Pandey is based in Gurugram, Haryana.",
    href: "/about",
    label: "View profile",
  },
  {
    question: "What is Hari's current role?",
    answer:
      "Hari works as a Fixed Term Graduate Executive at Maruti Suzuki India Limited in the Interior Lighting & Accessories department. He has been there since September 2025.",
    href: "/experience",
    label: "View current role",
  },
  {
    question: "What are Hari's main strengths?",
    answer:
      "Hari's strongest areas are frontend and application development, AI-assisted application development, business process automation and data-driven business systems.",
    href: "/skills",
    label: "Explore the toolkit",
  },
  {
    question: "What independent frontend projects has Hari built?",
    answer:
      "Hari's independent frontend projects include this portfolio website and Zooflix. The portfolio demonstrates Next.js, TypeScript, React, centralized content, reusable components, responsive UI and a safe API-backed assistant. Zooflix demonstrates React, JavaScript, responsive design, reusable components, navigation and interactive UI.",
    href: "/experience#independent-frontend-work",
    label: "View independent projects",
  },
  {
    question: "What did Hari build for this portfolio?",
    answer:
      "Hari built a Next.js App Router portfolio with TypeScript, React and Tailwind CSS. It uses centralized content modules, reusable UI components, responsive layouts, interactive skill filtering, a print-friendly resume, theme support and an Ask Hari API route that uses deterministic approved-FAQ matching before an optional server-side OpenAI API fallback.",
    href: "/experience#portfolio-website",
    label: "View portfolio details",
  },
  {
    question: "What is Zooflix?",
    answer:
      "Zooflix is an independent React frontend application built with JavaScript and HTML/CSS. It demonstrates responsive design, reusable components, navigation, routing and interactive UI rather than functioning only as a static portfolio exercise.",
    href: "/experience#zooflix",
    label: "View Zooflix details",
  },
  {
    question: "What is Hari's freelance frontend experience?",
    answer:
      "From 2023 to 2025, Hari worked as a Freelance Front-End Developer, building and iterating on web applications with HTML5, CSS3, JavaScript, React, REST APIs, responsive UI, component architecture and Git/GitHub.",
    href: "/experience",
    label: "View the development journey",
  },
  {
    question: "What is the Benchmarking Data Platform?",
    answer:
      "It is a structured data workflow with custom entry interfaces, validation, automated workflows, SharePoint persistence, retrieval, editing, comparison and dashboard reporting. A Copilot Agent provides AI-assisted benchmark retrieval in structured tabular form.",
    href: "/experience#benchmarking-data-platform",
    label: "View the case study",
  },
  {
    question: "What is the Training Operations Platform?",
    answer:
      "It is a configurable Power Apps workflow for trainee onboarding, training plans, dynamic scheduling, training modules, hierarchical approvals, completion tracking and dashboard aggregation. Its reusable logic currently supports 3 departments and is structured to scale toward 9+ departments with limited changes.",
    href: "/experience#training-operations-platform",
    label: "View the case study",
  },
  {
    question: "What is the Engineering Cost Computation System?",
    answer:
      "It is an interactive system that turns dimensions, raw materials and costing factors into dynamic business-rule-based calculations, cost-saving analysis, retrieval/editing, model and variant aggregation, part-level costing and Excel export.",
    href: "/experience#engineering-cost-computation-system",
    label: "View the case study",
  },
  {
    question: "How can someone contact Hari?",
    answer:
      "Hari can be contacted at thehariompandey@gmail.com or 9310288080. His portfolio also links to LinkedIn and GitHub from the resume and contact sections.",
    href: "/contact",
    label: "Contact Hari",
  },
  {
    question: "What AI experience does Hari have?",
    answer:
      "Hari's documented AI experience includes Generative AI, prompt engineering, Copilot Agents, OpenAI API, Gemini and chatbot development. At Maruti, a Copilot Agent supports structured benchmark retrieval, while his MCA focuses on Artificial Intelligence & Machine Learning.",
    href: "/skills",
    label: "Explore AI skills",
  },
  {
    question: "What measurable impact has Hari had?",
    answer:
      "The portfolio records 3 delivered business applications, 12+ automated flows, impact across 3+ departments and more than 50% of targeted manual work automated.",
    href: "/experience",
    label: "View impact",
  },
  {
    question: "What tools are in Hari's toolkit?",
    answer:
      "Hari's documented toolkit includes HTML5, CSS3, JavaScript, React, Next.js, Bootstrap, REST APIs, Power Apps, Power Automate, Power BI, SharePoint, Generative AI, Copilot Agents, OpenAI API, Gemini, SQL, JSON, Git, GitHub, VS Code, Postman, Figma, Advanced Excel and Advanced PowerPoint.",
    href: "/skills",
    label: "Explore all skills",
  },
] as const;

export const knowledgeBase = {
  assistantPurpose:
    "Answer recruiter and visitor questions about Hari's approved resume and profile facts using concise, plain language.",
  resumeProfileContext,
  profile,
  developmentJourney,
  impactMetrics,
  currentExperience,
  experienceProjects,
  independentProjects,
  previousExperience,
  skillCategories,
  education,
  certifications,
  recruiterFaqs,
  boundaries: [
    "3+ years refers to continuous frontend development, not three years of full-time employment or three years at Maruti.",
    "Only approved portfolio facts may be used.",
    "Do not disclose confidential Maruti information, internal URLs, records, screenshots, formulas or company-sensitive data.",
    "Do not claim technologies or architecture patterns that are not documented here.",
    "If a fact is not present, say that it is not available in the portfolio knowledge base.",
    "Treat dates as portfolio dates: frontend development is 2023-2025 and the Maruti role is Sep 2025-present.",
    "Do not turn a listed skill into a claim of professional employment, proficiency level, ownership or production scale unless the portfolio explicitly says so.",
    "When a question asks for a comparison, summarize only the documented difference between the frontend foundation and the Maruti application-engineering work.",
    "Independent-project links are only shown when a verified project URL is available; do not invent Live Demo or GitHub URLs.",
    "Distinguish verified portfolio facts from unsupported details and confidential Maruti information. For unsupported or confidential specifics, say they are not available in the portfolio knowledge base.",
  ],
} as const;

export type KnowledgeBase = typeof knowledgeBase;

export function knowledgeBaseForModel() {
  return JSON.stringify(knowledgeBase);
}
