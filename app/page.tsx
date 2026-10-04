import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ExperienceCard } from "@/components/experience-card";
import { IndependentProjectCard } from "@/components/independent-project-card";
import { MetricStrip } from "@/components/metric-strip";
import { SectionHeading } from "@/components/section-heading";
import { currentExperience, experienceProjects } from "@/content/experience";
import { independentProjects } from "@/content/projects";
import { engineeringQuality, profile } from "@/content/resume";
import { skillCategories } from "@/content/skills";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[.08]">
        <div className="grid-pattern absolute inset-0" />
        <div className="container relative grid min-h-[650px] items-center gap-14 py-24 lg:grid-cols-[.85fr_1.15fr] lg:py-28">
          <div className="relative mx-auto flex min-h-[540px] w-full max-w-[450px] items-end justify-center lg:order-1 lg:min-h-[610px]">
            <div className="hero-image-glow absolute bottom-5 h-[78%] w-[74%] rounded-[42%] bg-signal/[.08] blur-3xl" />
            <div className="hero-image-arc absolute bottom-0 h-[88%] w-[72%] rounded-t-[10rem] border border-white/[.08] bg-gradient-to-b from-white/[.06] to-transparent" />
            <Image
              src="/images/hari-om-pandey.png"
              alt="Hari Om Pandey in a navy suit"
              width={720}
              height={2048}
              priority
              className="relative z-10 h-[540px] w-auto object-contain object-bottom drop-shadow-[0_24px_35px_rgba(0,0,0,.38)] lg:h-[610px]"
            />
          </div>
          <div className="lg:order-2">
            <p className="eyebrow mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-signal" />
              Available for thoughtful engineering conversations
            </p>
            <h1 className="display max-w-4xl text-6xl font-semibold text-white sm:text-7xl lg:text-[6.8rem]">
              {profile.name}
              <span className="text-signal">.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {profile.title}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
              {profile.summary}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/experience" className="button button-primary">
                View experience <ArrowUpRight size={16} />
              </Link>
              <Link href="/ask-hari" className="button button-secondary">
                <Bot size={16} /> Ask Hari
              </Link>
              <Link href="/resume" className="button button-secondary">
                Resume
              </Link>
            </div>
            <div className="mt-14 flex items-center gap-3 text-xs text-slate-500">
              <ArrowDownRight size={15} className="text-signal" /> Scroll to
              explore the work
            </div>
            {/* <div className="panel mt-10 max-w-[360px] p-5"><div className="flex items-start justify-between"><div><p className="eyebrow">Current focus</p><p className="mt-2 text-lg font-bold text-white">Systems that connect</p></div><Sparkles className="text-signal" size={20} /></div><div className="mt-5 space-y-2"><div className="flex items-center gap-2.5 rounded-lg border border-white/[.09] bg-black/20 px-3 py-2.5"><Code2 size={15} className="text-electric" /><span className="text-xs text-slate-300">Frontend interfaces</span></div><div className="flex items-center gap-2.5 rounded-lg border border-white/[.09] bg-black/20 px-3 py-2.5"><Layers3 size={15} className="text-signal" /><span className="text-xs text-slate-300">Business automation</span></div><div className="flex items-center gap-2.5 rounded-lg border border-white/[.09] bg-black/20 px-3 py-2.5"><Bot size={15} className="text-violet-300" /><span className="text-xs text-slate-300">AI-assisted applications</span></div></div></div> */}
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <MetricStrip />
        </div>
      </section>
      <section className="section pt-12">
        <div className="container">
          <SectionHeading
            eyebrow="The toolkit"
            title="Where the work meets the stack."
            description="A working set across interface development, Microsoft business applications and grounded AI experiences."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {skillCategories.slice(0, 4).map((category) => (
              <Link
                href="/skills"
                key={category.name}
                className="panel panel-hover p-6"
              >
                <p className="eyebrow">{category.number}</p>
                <h3 className="mt-8 text-xl font-bold text-white">
                  {category.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {category.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.slice(0, 5).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[.1] px-2.5 py-1 text-[11px] text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section pt-12">
        <div className="container">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Featured engineering projects"
              title="Proof of frontend work beyond business platforms."
              description="Independent applications show how Hari approaches APIs, validation, reusable components, responsive UI and interaction-heavy product surfaces."
            />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary shrink-0"
            >
              GitHub profile <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {independentProjects.map((project) => (
              <IndependentProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section className="section border-y border-white/[.08] bg-white/[.018]">
        <div className="container">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected experience"
              title="From frontend foundations to professional engineering."
              description={`3+ years of building for the web. ${currentExperience.company} · ${currentExperience.role} · ${currentExperience.dates}`}
            />
            <Link
              href="/experience"
              className="button button-secondary shrink-0"
            >
              All experience <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {experienceProjects.map((project) => (
              <ExperienceCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>
      <section className="section pt-12">
        <div className="container">
          <SectionHeading
            eyebrow="Engineering quality"
            title="The portfolio is also an engineering sample."
            description="A compact view of the implementation qualities already present in the site and its interactive systems."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringQuality.map((item) => (
              <article key={item.name} className="panel p-5">
                <h3 className="text-base font-bold text-white">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="panel relative overflow-hidden p-8 md:p-14">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-signal/[.1] blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="eyebrow mb-4">For recruiters & hiring teams</p>
              <h2 className="display text-4xl font-semibold text-white md:text-6xl">
                Let&apos;s talk about the problem you&apos;re trying to solve.
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-400">
                Get a quick factual overview through Ask Hari, explore the AI
                approach, or reach out directly with context about your role or
                team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="button button-primary">
                  Start a conversation <ArrowUpRight size={16} />
                </Link>
                <Link href="/ask-hari" className="button button-secondary">
                  Ask Hari
                </Link>
                <Link href="/ai-lab" className="button button-secondary">
                  Explore AI work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
