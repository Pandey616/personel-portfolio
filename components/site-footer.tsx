import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { profile } from "@/content/resume";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[.08] py-10">
      <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-3">Build useful things</p>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            A recruiter-facing portfolio about frontend engineering, AI and
            business automation.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <a
            className="focus-ring inline-flex items-center gap-2 hover:text-white"
            href={`mailto:${profile.email}`}
          >
            <Mail size={15} /> Email
          </a>
          <a
            className="focus-ring inline-flex items-center gap-2 hover:text-white"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={15} /> GitHub <ArrowUpRight size={13} />
          </a>
          <a
            className="focus-ring inline-flex items-center gap-2 hover:text-white"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
