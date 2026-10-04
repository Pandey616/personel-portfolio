import { ArrowUpRight, ChevronDown, ExternalLink } from "lucide-react";
import type { IndependentProject } from "@/content/projects";

export function IndependentProjectCard({
  project,
}: {
  project: IndependentProject;
}) {
  return (
    <article className="panel panel-hover flex h-full flex-col overflow-hidden p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">{project.eyebrow}</p>
          <h3 className="display text-2xl font-semibold text-white md:text-3xl">
            {project.name}
          </h3>
        </div>
        <span className="rounded-full border border-signal/30 bg-signal/[.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-signal">
          Built independently
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-300">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/[.1] px-3 py-1.5 text-xs text-slate-400"
          >
            {technology}
          </span>
        ))}
      </div>

      <details className="project-details mt-7 border-t border-white/[.08] pt-5">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-white focus-ring">
          Technical details
          <ChevronDown className="text-signal" size={17} aria-hidden="true" />
        </summary>
        <div className="mt-6 space-y-6">
          <ProjectDetail label="Overview" text={project.overview} />
          <ProjectDetail label="Problem" text={project.problem} />
          <div>
            <p className="eyebrow mb-3">Architecture</p>
            <div className="flex flex-wrap items-center gap-2">
              {project.architecture.map((step, index) => (
                <span
                  key={step}
                  className="flex items-center gap-2 text-xs text-slate-300"
                >
                  {index > 0 && <span className="text-signal">-&gt;</span>}
                  {step}
                </span>
              ))}
            </div>
          </div>
          <ProjectDetail
            label="Engineering decisions"
            text={project.engineeringDecisions}
          />
          <ProjectDetail label="Implementation" text={project.implementation} />
          <div>
            <p className="eyebrow mb-3">Capabilities</p>
            <div className="flex flex-wrap gap-2">
              {project.capabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-lg bg-white/[.06] px-3 py-2 text-xs font-semibold text-slate-300"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
          <ProjectDetail label="Outcome" text={project.outcome} />
        </div>
      </details>

      {project.links && project.links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-3 border-t border-white/[.08] pt-6">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-signal focus-ring"
            >
              {link.label}
              {link.placeholder ? " (placeholder)" : ""}
              {link.label === "GitHub" ? (
                <ExternalLink size={14} />
              ) : (
                <ArrowUpRight size={15} />
              )}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function ProjectDetail({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-sm leading-7 text-slate-400">{text}</p>
    </div>
  );
}
