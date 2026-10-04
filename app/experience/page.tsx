import { ShieldCheck } from "lucide-react";
import { ExperienceCard } from "@/components/experience-card";
import { IndependentProjectCard } from "@/components/independent-project-card";
import {
  currentExperience,
  developmentJourney,
  experienceProjects,
} from "@/content/experience";
import { independentProjects } from "@/content/projects";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <div>
      <section className="route-hero">
        <div className="container">
          <p className="eyebrow mb-5">Experience / 01</p>
          <h1 className="display max-w-4xl text-5xl font-semibold text-white md:text-7xl">
            3+ years of building for the web.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            From frontend foundations and React applications to
            production-oriented business systems, workflow automation and
            AI-assisted applications.
          </p>
        </div>
      </section>
      <section className="section-tight pt-8">
        <div className="container">
          <div className="panel mb-5 flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="eyebrow mb-3">
                Foundation · {developmentJourney.dates}
              </p>
              <p className="max-w-2xl text-sm leading-7 text-slate-400">
                {developmentJourney.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {developmentJourney.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[.1] px-3 py-1.5 text-xs text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3 text-xs text-slate-500">
              <ShieldCheck className="text-signal" size={18} /> Development
              experience, not full-time employment
            </div>
          </div>
          <div className="mb-8 border-l border-signal/50 pl-5">
            <p className="eyebrow mb-2">
              Professional engineering · {currentExperience.company}
            </p>
            <p className="text-sm leading-7 text-slate-400">
              {currentExperience.role} · {currentExperience.department} ·{" "}
              {currentExperience.dates}. This is where frontend and application
              development moved into real business-system engineering.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {currentExperience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/[.1] px-3 py-1.5 text-xs text-slate-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            {experienceProjects.map((project, index) => (
              <div
                id={project.slug}
                key={project.slug}
                className="scroll-mt-24"
              >
                <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[.13em] text-slate-600">
                  <span className="text-signal">0{index + 1}</span>
                  <span className="h-px w-8 bg-white/[.1]" />
                  <span>Maruti case study</span>
                </div>
                <ExperienceCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="independent-frontend-work"
        className="section border-t border-white/[.08]"
      >
        <div className="container">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">Independent frontend work</p>
              <h2 className="display max-w-3xl text-4xl font-semibold text-white md:text-5xl">
                Modern application proof outside Power Platform.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
                These projects make the frontend and application-engineering
                foundation inspectable alongside the professional case studies.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {independentProjects.map((project) => (
              <div id={project.slug} key={project.slug} className="scroll-mt-24">
                <IndependentProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section border-t border-white/[.08]">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            [
              "Web foundations",
              "HTML5, CSS3, JavaScript, responsive UI and React application development.",
            ],
            [
              "Application engineering",
              "Interfaces, APIs, reusable logic, data workflows and automation working as one system.",
            ],
            [
              "Professional validation",
              "Maruti case studies show the move from frontend/application development into business-system engineering.",
            ],
          ].map(([title, text]) => (
            <div key={title}>
              <p className="eyebrow mb-4">{title}</p>
              <p className="text-sm leading-7 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
