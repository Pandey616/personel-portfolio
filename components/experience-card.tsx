import { ArrowUpRight, LockKeyhole } from "lucide-react";
import Link from "next/link";
import type { ExperienceProject } from "@/content/experience";

export function ExperienceCard({
  project,
  compact = false,
}: {
  project: ExperienceProject;
  compact?: boolean;
}) {
  return (
    <article
      className={`panel panel-hover overflow-hidden ${compact ? "p-6" : "p-7 md:p-9"}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">{project.eyebrow}</p>
          <h3 className="display text-2xl font-semibold text-white md:text-3xl">
            {project.name}
          </h3>
        </div>
        {project.confidential && (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/[.1] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-slate-500">
            <LockKeyhole size={12} /> Abstracted
          </span>
        )}
      </div>
      {!compact && (
        <div className="mt-8 space-y-7">
          <div className="grid gap-7 md:grid-cols-[1.05fr_.95fr]">
            <div className="space-y-5">
              <div>
                <p className="eyebrow mb-2">What</p>
                <p className="text-sm leading-7 text-slate-300">
                  {project.context}
                </p>
              </div>
              <div>
                <p className="eyebrow mb-2">Why</p>
                <p className="text-sm leading-7 text-slate-400">
                  {project.problem}
                </p>
              </div>
              <div>
                <p className="eyebrow mb-2">How</p>
                <p className="text-sm leading-7 text-slate-300">
                  {project.solution}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[.1] px-3 py-1.5 text-xs text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/[.08] bg-black/20 p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-[.12em] text-slate-500">
                Technical flow
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {project.flow.map((step, index) => (
                  <span
                    key={step}
                    className="flex items-center gap-2 text-xs text-slate-300"
                  >
                    {index > 0 && <span className="text-signal">-&gt;</span>}
                    {step}
                  </span>
                ))}
              </div>
              <p className="mt-7 border-t border-white/[.08] pt-4 text-sm leading-6 text-slate-400">
                {project.impact}
              </p>
            </div>
          </div>
          <div className="grid gap-7 border-t border-white/[.08] pt-7 md:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">Complexity / capabilities</p>
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
            <div>
              <p className="eyebrow mb-3">Architecture / scale</p>
              <p className="text-sm leading-7 text-slate-400">
                {project.architecture.join(" -> ")}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                {project.scale.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
          {project.ai && (
            <div className="border-t border-white/[.08] pt-5">
              <p className="eyebrow mb-2">AI capability</p>
              <p className="text-sm leading-7 text-slate-400">{project.ai}</p>
            </div>
          )}
        </div>
      )}
      {compact && (
        <>
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-400">
            {project.context}
          </p>
          <Link
            href={`/experience#${project.slug}`}
            className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-bold text-signal"
          >
            Explore case <ArrowUpRight size={15} />
          </Link>
        </>
      )}
    </article>
  );
}
