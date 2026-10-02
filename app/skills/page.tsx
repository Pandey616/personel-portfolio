import { SectionHeading } from "@/components/section-heading";
import { SkillsFilter } from "@/components/skills-filter";

export const metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <div>
      <section className="route-hero">
        <div className="container">
          <p className="eyebrow mb-5">Skills / toolkit</p>
          <h1 className="display max-w-4xl text-5xl font-semibold text-white md:text-7xl">
            A flexible stack for interfaces and workflows.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Search the approved skills matrix by technology or browse the way
            the capabilities are grouped in practice.
          </p>
        </div>
      </section>
      <section className="section-tight pt-8">
        <div className="container">
          <SectionHeading
            eyebrow="Interactive skill matrix"
            title="No arbitrary percentages. Just the tools."
          />
          <div className="mt-10">
            <SkillsFilter />
          </div>
        </div>
      </section>
    </div>
  );
}
