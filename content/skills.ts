export type SkillCategory = {
  name: string;
  number: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Core Frontend Engineering",
    number: "01",
    description:
      "The foundation for responsive, component-based web applications.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    name: "Application Engineering",
    number: "02",
    description:
      "The integration, architecture and delivery practices behind usable applications.",
    skills: [
      "REST APIs",
      "API Integration",
      "Component Architecture",
      "Responsive UI",
      "Reusable Components",
      "Git",
      "GitHub",
    ],
  },
  {
    name: "AI Engineering",
    number: "03",
    description:
      "Practical AI capabilities connected to useful application and business context.",
    skills: [
      "Generative AI",
      "OpenAI API",
      "Gemini",
      "Prompt Engineering",
      "Copilot Agents",
      "AI-assisted application workflows",
      "Chatbot Development",
    ],
  },
  {
    name: "Business Automation",
    number: "04",
    description:
      "Data-driven business applications and workflow automation with Microsoft tools.",
    skills: ["Power Apps", "Power Automate", "SharePoint", "Power BI"],
  },
  {
    name: "Supporting Tools & Data",
    number: "05",
    description: "Supporting tools used to build, inspect and communicate work.",
    skills: ["SQL", "JSON"],
  },
  {
    name: "Delivery Tools",
    number: "06",
    description: "A practical toolkit for shipping, testing and communicating work.",
    skills: [
      "VS Code",
      "Postman",
      "Figma",
      "Advanced Excel",
      "Advanced PowerPoint",
    ],
  },
];

export const allSkills = skillCategories.flatMap((category) => category.skills);
