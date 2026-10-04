export type ExperienceProject = {
  slug: string;
  name: string;
  eyebrow: string;
  context: string;
  problem: string;
  solution: string;
  capabilities: string[];
  technologies: string[];
  architecture: string[];
  scale: string[];
  impact: string;
  ai?: string;
  flow: string[];
  confidential: boolean;
};

export const developmentJourney = {
  title: "3+ years of frontend development",
  dates: "2023 - 2025",
  description:
    "Built and iterated on web applications while developing strong foundations in frontend architecture, responsive interfaces, API integration and component-based development.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "REST APIs",
    "Responsive UI",
    "Component Architecture",
    "Git / GitHub",
  ],
} as const;

export const currentExperience = {
  company: "Maruti Suzuki India Limited",
  role: "Fixed Term Graduate Executive",
  department: "Interior Lighting & Accessories",
  dates: "Sep 2025 - Present",
  description:
    "Professional application engineering: applying frontend foundations to business applications, workflow automation, data workflows, dashboards and AI-assisted retrieval.",
  technologies: [
    "Power Apps",
    "Power Automate",
    "SharePoint",
    "Power BI",
    "Copilot Agents",
    "JavaScript / web technologies",
    "Data workflows",
    "Business process automation",
  ],
} as const;

export const experienceProjects: ExperienceProject[] = [
  {
    slug: "benchmarking-data-platform",
    name: "Benchmarking Data Platform",
    eyebrow: "Case study 01 / Data workflow",
    context:
      "A structured benchmarking data platform connecting custom data-entry interfaces, automated workflows, centralized SharePoint persistence, retrieval, comparison and dashboard reporting.",
    problem:
      "Benchmark information needed a structured way to be entered, validated, persisted, retrieved, edited, compared and surfaced for reporting.",
    solution:
      "Designed a connected data workflow that moves benchmark inputs through validation and automation into SharePoint, then supports retrieval, editing, comparison and dashboard reporting.",
    capabilities: [
      "Structured data entry",
      "Data persistence",
      "Automated workflows",
      "Retrieval and editing",
      "Benchmark comparison",
      "Dashboard reporting",
      "AI-assisted retrieval",
      "Structured tabular responses",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "SharePoint",
      "Power Automate",
      "Copilot Agent",
    ],
    architecture: [
      "Data entry",
      "Validation / input logic",
      "Power Automate",
      "SharePoint",
      "Retrieval / edit / comparison",
      "Dashboard",
      "Copilot-assisted retrieval",
    ],
    scale: [
      "One of 3 delivered business applications",
      "Contributes to 12+ automated flows",
    ],
    impact:
      "One of 3 delivered business applications contributing to 12+ automated flows.",
    ai: "AI-assisted benchmark retrieval: a Copilot Agent designed to retrieve relevant benchmark information and return it in structured tabular form.",
    flow: [
      "Data entry",
      "Validate",
      "Automate",
      "Persist",
      "Compare",
      "Report",
      "Retrieve",
    ],
    confidential: true,
  },
  {
    slug: "training-operations-platform",
    name: "Training Operations Platform",
    eyebrow: "Case study 02 / People operations",
    context:
      "A configurable training operations platform designed around reusable workflow logic, dynamic scheduling, hierarchical approvals and department-level reporting.",
    problem:
      "Training operations needed a reusable system for onboarding, training plans, scheduling, approvals, completion tracking and visibility across departments.",
    solution:
      "Built a Power Apps workflow around configurable business logic, dynamic training scheduling, hierarchical approvals and dashboard aggregation rather than a one-off onboarding form.",
    capabilities: [
      "Configurable workflows",
      "Reusable business logic",
      "Trainee onboarding",
      "Dynamic scheduling",
      "Training modules",
      "Hierarchical approvals",
      "Role and process management",
      "Dashboard aggregation",
      "Workflow automation",
    ],
    technologies: ["Power Apps", "Power Automate", "SharePoint", "Power BI"],
    architecture: [
      "Trainee",
      "Onboarding",
      "Training plan",
      "Dynamic scheduling",
      "Training modules",
      "Hierarchical approval",
      "Status / completion",
      "Dashboard",
    ],
    scale: [
      "Currently supports 3 departments",
      "Structured to scale toward 9+ departments with limited changes to the underlying logic",
    ],
    impact:
      "Reusable core logic currently supporting 3 departments and structured to scale toward 9+ departments with limited changes to the underlying logic.",
    flow: ["Onboard", "Plan", "Schedule", "Approve", "Complete", "Report"],
    confidential: true,
  },
  {
    slug: "engineering-cost-computation-system",
    name: "Engineering Cost Computation System",
    eyebrow: "Case study 03 / Engineering analysis",
    context:
      "An interactive engineering-cost computation system that translates parameterized costing inputs into dynamic calculations, cost-saving analysis and model/variant-level aggregation.",
    problem:
      "Engineering cost work needed a more consistent way to calculate, revisit, edit and summarize part-level costing across models and variants.",
    solution:
      "Translated dimensions, raw materials and costing factors into an interactive computation workflow with data retrieval, editing, cost-saving analysis, model/variant aggregation and Excel export.",
    capabilities: [
      "Parameterized inputs",
      "Dynamic computation",
      "Business-rule-based calculation",
      "Cost-saving analysis",
      "Data persistence",
      "Retrieval and editing",
      "Model-level aggregation",
      "Variant-level aggregation",
      "Part-level costing",
      "Excel export",
    ],
    technologies: ["React", "JavaScript", "SharePoint", "Excel"],
    architecture: [
      "Dimensions + raw material + costing factors",
      "Cost computation",
      "Cost-saving analysis",
      "Data retrieval / editing",
      "Model + variant aggregation",
      "Export",
    ],
    scale: [
      "One of 3 delivered business applications at Maruti Suzuki India Limited",
    ],
    impact:
      "A focused business application within the 3-application delivery at Maruti Suzuki India Limited.",
    flow: ["Define", "Compute", "Analyze", "Edit", "Aggregate", "Export"],
    confidential: true,
  },
];
