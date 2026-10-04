import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { PrintResumeButton } from "@/components/print-resume-button";
import { certifications } from "@/content/certifications";
import { education } from "@/content/education";
import { currentExperience, experienceProjects } from "@/content/experience";
import { independentProjects } from "@/content/projects";
import { profile, previousExperience } from "@/content/resume";
import { skillCategories } from "@/content/skills";

export const metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <div className="print:bg-white print:text-black">
      <section className="route-hero print:hidden">
        <div className="container">
          <p className="eyebrow mb-5">Resume / snapshot</p>
          <h1 className="display max-w-4xl text-5xl font-semibold text-white md:text-7xl">
            The quick, printable version.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Use the button to print or save this current portfolio snapshot as a
            PDF.
          </p>
          <div className="mt-8">
            <PrintResumeButton />
          </div>
        </div>
      </section>
      <section className="section-tight pt-8 print:pt-10">
        <div className="container max-w-4xl">
          <div className="border-b border-white/[.15] pb-8 print:border-black/20">
            <p className="eyebrow print:text-black">{profile.location}</p>
            <h2 className="display mt-4 text-5xl font-semibold text-white print:text-black">
              {profile.name}
            </h2>
            <p className="mt-3 text-lg text-signal print:text-black">
              {profile.title}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400 print:text-black">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2"
              >
                <Mail size={14} />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-2"
              >
                <Phone size={14} />
                {profile.phone}
              </a>
              <a href={profile.linkedin} className="print:text-black">
                LinkedIn
              </a>
              <a href={profile.github} className="print:text-black">
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-10 grid gap-12 md:grid-cols-[1.3fr_.7fr]">
            <main>
              <ResumeSection title="Experience">
                <div>
                  <div className="flex flex-wrap justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-white print:text-black">
                        {currentExperience.role}
                      </h3>
                      <p className="text-sm text-slate-400 print:text-black">
                        {currentExperience.company}
                      </p>
                    </div>
                    <p className="text-sm text-slate-500 print:text-black">
                      {currentExperience.dates}
                    </p>
                  </div>
                  <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400 print:text-black">
                    {experienceProjects.map((project) => (
                      <li key={project.name}>
                        {project.name}: {project.solution} {project.impact}
                      </li>
                    ))}
                    <li>
                      Delivered 3 business applications and 12+ automated flows,
                      impacting 3+ departments and automating more than 50% of
                      targeted manual work.
                    </li>
                  </ul>
                </div>
                <div className="mt-8 border-t border-white/[.1] pt-6 print:border-black/20">
                  <div className="flex justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-white print:text-black">
                        {previousExperience.company}
                      </h3>
                      <p className="text-sm text-slate-400 print:text-black">
                        Front-End Developer
                      </p>
                    </div>
                    <p className="text-sm text-slate-500 print:text-black">
                      {previousExperience.dates}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-400 print:text-black">
                    {previousExperience.description}
                  </p>
                </div>
              </ResumeSection>
              <ResumeSection title="Independent projects">
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400 print:text-black">
                  {independentProjects.map((project) => (
                    <li key={project.slug}>
                      <span className="font-bold text-white print:text-black">
                        {project.name}:
                      </span>{" "}
                      {project.summary} Stack: {project.technologies.join(", ")}.
                    </li>
                  ))}
                </ul>
              </ResumeSection>
              <ResumeSection title="Education">
                {education.map((item) => (
                  <div key={item.institution} className="mb-6">
                    <div className="flex justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-white print:text-black">
                          {item.degree}
                        </h3>
                        <p className="mt-1 text-sm text-slate-400 print:text-black">
                          {item.institution}
                        </p>
                      </div>
                      <p className="text-sm text-slate-500 print:text-black">
                        {item.dates}
                      </p>
                    </div>
                    <p className="mt-3 text-sm text-slate-500 print:text-black">
                      {item.focus}
                    </p>
                  </div>
                ))}
              </ResumeSection>
            </main>
            <aside>
              <ResumeSection title="Skills">
                <div className="space-y-5">
                  {skillCategories.map((category) => (
                    <div key={category.name}>
                      <h3 className="text-sm font-bold text-white print:text-black">
                        {category.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500 print:text-black">
                        {category.skills.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </ResumeSection>
              <ResumeSection title="Certifications">
                {certifications.map((item) => (
                  <div key={item.name} className="mb-5">
                    <h3 className="text-sm font-bold text-white print:text-black">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 print:text-black">
                      {item.issuer} · {item.year}
                    </p>
                  </div>
                ))}
              </ResumeSection>
            </aside>
          </div>
          <div className="mt-10 border-t border-white/[.1] pt-7 print:border-black/20 print:hidden">
            <Link href="/contact" className="button button-secondary">
              Contact Hari <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="eyebrow mb-6 print:text-black">{title}</h2>
      {children}
    </section>
  );
}
