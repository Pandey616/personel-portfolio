export type SkillCategory = {
  name: string;
  number: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    number: "01",
    description:
      "Frontend foundations for responsive, component-based applications.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Bootstrap",
      "REST APIs",
      "API Integration",
      "Responsive UI",
      "Reusable Components",
    ],
  },
  {
    name: "Power Platform",
    number: "02",
    description:
      "Business applications and workflow automation with Microsoft tools.",
    skills: ["Power Apps", "Power Automate", "Power BI", "SharePoint"],
  },
  {
    name: "AI & GenAI",
    number: "03",
    description:
      "Grounded AI experiences connected to useful business context.",
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "Copilot Agents",
      "OpenAI API",
      "Gemini",
      "Chatbot Development",
    ],
  },
  {
    name: "Programming & Data",
    number: "04",
    description: "The data and integration layer behind reliable workflows.",
    skills: ["JavaScript", "SQL", "JSON"],
  },
  {
    name: "Tools",
    number: "05",
    description:
      "A practical toolkit for shipping, testing and communicating work.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Advanced Excel",
      "Advanced PowerPoint",
    ],
  },
];

export const allSkills = skillCategories.flatMap((category) => category.skills);
