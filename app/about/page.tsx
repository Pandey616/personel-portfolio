import { ArrowUpRight, GraduationCap, Medal } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/content/certifications";
import { developmentJourney } from "@/content/experience";
import { education } from "@/content/education";
import { previousExperience, profile } from "@/content/resume";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div>
      <section className="route-hero">
        <div className="container">
          <p className="eyebrow mb-5">About Hari</p>
          <h1 className="display max-w-4xl text-5xl font-semibold text-white md:text-7xl">
            A frontend lens on practical automation.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            {profile.summary}
          </p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container grid gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow mb-4">The development journey</p>
            <p className="text-xl leading-9 text-slate-200">
              From web fundamentals and React applications to professional
              business-system engineering.
            </p>
            <p className="mt-6 text-base leading-8 text-slate-500">
              Hari Om Pandey is a Front-End Developer and AI & Automation
              Engineer in Gurugram, Haryana. His 3+ years of continuous frontend
              development now inform work across business applications, workflow
              automation, dashboards and AI-assisted retrieval.
            </p>
            <Link href="/experience" className="button button-secondary mt-8">
              See the work <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="panel p-7">
            <p className="eyebrow mb-5">Frontend development</p>
            <h2 className="text-2xl font-bold text-white">
              {developmentJourney.title}
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              {developmentJourney.dates}
            </p>
            <p className="mt-6 text-sm leading-7 text-slate-400">
              {developmentJourney.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
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
        </div>
      </section>
      <section className="section border-t border-white/[.08]">
        <div className="container">
          <SectionHeading
            eyebrow="Education & credentials"
            title="Learning with a practical edge."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {education.map((item) => (
              <article key={item.institution} className="panel p-7">
                <GraduationCap className="text-signal" size={22} />
                <p className="mt-7 text-sm text-slate-500">{item.dates}</p>
                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {item.institution}
                </p>
                <p className="mt-5 text-sm leading-6 text-slate-500">
                  {item.focus}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {certifications.map((item) => (
              <article key={item.name} className="panel p-6">
                <Medal size={20} className="text-electric" />
                <h3 className="mt-7 text-base font-bold leading-6 text-white">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm text-slate-500">
                  {item.issuer} · {item.year}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
