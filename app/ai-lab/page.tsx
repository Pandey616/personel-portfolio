import {
  ArrowRight,
  Bot,
  Braces,
  Database,
  Sparkles,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export const metadata = { title: "AI Lab" };

const layers = [
  {
    icon: Sparkles,
    label: "Generative AI",
    text: "The capability to create, summarize and transform language or structured information.",
  },
  {
    icon: Braces,
    label: "Prompt Engineering",
    text: "The discipline of giving a model clear context, constraints and an outcome to target.",
  },
  {
    icon: Bot,
    label: "Copilot Agents",
    text: "A focused interface that helps people retrieve approved business information in a useful format.",
  },
  {
    icon: Workflow,
    label: "Business automation",
    text: "The workflow layer that turns the answer or decision into an action.",
  },
];

export default function AiLabPage() {
  return (
    <div>
      <section className="route-hero">
        <div className="container">
          <p className="eyebrow mb-5">AI lab / concepts</p>
          <h1 className="display max-w-4xl text-5xl font-semibold text-white md:text-7xl">
            AI should clarify the workflow, not obscure it.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            A concept-led showcase of how Generative AI, prompting, Copilot
            Agents and business automation can fit together without pretending a
            live integration exists.
          </p>
        </div>
      </section>
      <section className="section-tight pt-8">
        <div className="container">
          <SectionHeading
            eyebrow="The relationship"
            title="From context to action."
            description="The most useful AI experiences have a clear boundary: approved context in, concise assistance out, human-owned action next."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {layers.map(({ icon: Icon, label, text }, index) => (
              <article key={label} className="panel panel-hover p-6">
                <div className="flex items-start justify-between">
                  <Icon className="text-signal" size={22} />
                  <span className="text-xs text-slate-600">0{index + 1}</span>
                </div>
                <h3 className="mt-10 text-lg font-bold text-white">{label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 panel overflow-hidden">
            <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
              {[
                ["Input", "Approved business context"],
                ["Process", "Grounded prompt + agent"],
                ["Output", "Structured answer or workflow"],
              ].map(([label, text], index) => (
                <div key={label} className="contents">
                  <div className="p-7">
                    <p className="eyebrow">{label}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {text}
                    </p>
                  </div>
                  {index < 2 && (
                    <ArrowRight
                      className="mx-7 hidden text-signal md:block"
                      size={18}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section border-t border-white/[.08]">
        <div className="container grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4">Live status</p>
            <h2 className="display text-4xl font-semibold text-white">
              Grounded by design.
            </h2>
          </div>
          <div className="panel p-7">
            <Database className="text-electric" size={22} />
            <p className="mt-6 text-base leading-7 text-slate-300">
              Ask Hari is backed by a typed, approved knowledge base. When an
              API key is configured, the server-side route may use a language
              model with that context. Without one, the assistant uses
              deterministic FAQ matching and clearly states when information is
              unavailable.
            </p>
            <Link href="/ask-hari" className="button button-secondary mt-7">
              Try Ask Hari <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
