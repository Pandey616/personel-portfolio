import { ShieldCheck } from "lucide-react";
import { AskHariChat } from "@/components/ask-hari-chat";

export const metadata = { title: "Ask Hari" };

export default function AskHariPage() {
  return (
    <div>
      <section className="route-hero">
        <div className="container">
          <p className="eyebrow mb-5">Ask Hari / factual assistant</p>
          <h1 className="display max-w-4xl text-5xl font-semibold text-white md:text-7xl">
            A faster route to the right portfolio detail.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Ask concise questions about Hari&apos;s experience, skills,
            education and certifications. Answers stay within the approved
            portfolio knowledge base.
          </p>
        </div>
      </section>
      <section className="section-tight pt-8">
        <div className="container grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 text-signal" size={20} />
              <div>
                <h2 className="text-lg font-bold text-white">
                  Recruiter-safe by default
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  No invented claims, private data or confidential Maruti
                  details. If it is not in the knowledge base, the assistant
                  says so.
                </p>
              </div>
            </div>
          </div>
          <AskHariChat />
        </div>
      </section>
    </div>
  );
}
