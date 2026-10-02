import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/content/resume";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  const lines = [
    [Mail, "Email", profile.email, `mailto:${profile.email}`],
    [Phone, "Phone", profile.phone, `tel:${profile.phone}`],
    [MapPin, "Based in", profile.location, "#"],
    [Linkedin, "LinkedIn", "Connect on LinkedIn", profile.linkedin],
    [Github, "GitHub", "View GitHub", profile.github],
  ] as const;
  return (
    <div>
      <section className="route-hero">
        <div className="container">
          <p className="eyebrow mb-5">Contact / next step</p>
          <h1 className="display max-w-4xl text-5xl font-semibold text-white md:text-7xl">
            Have a role, workflow or problem in mind?
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Share the context and the conversation can start with something
            concrete.
          </p>
        </div>
      </section>
      <section className="section-tight pt-8">
        <div className="container grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow mb-5">Direct lines</p>
            <div className="space-y-3">
              {lines.map(([Icon, label, value, href]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="panel panel-hover flex items-center gap-4 p-4 focus-ring"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[.06] text-signal">
                    <Icon size={17} />
                  </span>
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[.12em] text-slate-600">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm text-slate-300">
                      {value}
                    </span>
                  </span>
                  {label !== "Based in" && (
                    <ArrowUpRight
                      className="ml-auto text-slate-600"
                      size={15}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-5">Email shortcut</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
