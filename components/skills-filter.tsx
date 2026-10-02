"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { skillCategories } from "@/content/skills";

export function SkillsFilter() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      skillCategories
        .map((category) => ({
          ...category,
          skills: category.skills.filter((skill) =>
            skill.toLowerCase().includes(query.toLowerCase()),
          ),
        }))
        .filter((category) => category.skills.length > 0),
    [query],
  );
  return (
    <div>
      <label className="relative mb-8 block max-w-md">
        <span className="sr-only">Filter skills</span>
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          size={17}
        />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="form-input pl-11"
          placeholder="Filter by skill, e.g. React"
        />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((category) => (
          <article key={category.name} className="panel panel-hover p-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="eyebrow mb-3">{category.number}</p>
                <h3 className="text-xl font-bold text-white">
                  {category.name}
                </h3>
              </div>
              <span className="text-xs text-slate-600">
                {category.skills.length} skills
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              {category.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-white/[.06] px-3 py-2 text-xs font-semibold text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="panel p-6 text-sm text-slate-400">
          No approved skill matches that search.
        </p>
      )}
    </div>
  );
}
