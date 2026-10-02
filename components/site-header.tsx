"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Skills", "/skills"],
  ["AI Lab", "/ai-lab"],
  ["Ask Hari", "/ask-hari"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const nextTheme = savedTheme === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <header className="site-header fixed inset-x-0 top-0 z-20 border-b border-white/[.08]">
      <div className="container flex min-h-[76px] items-center justify-between gap-6">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-signal text-sm font-black text-ink">
            H
          </span>
          <span className="hidden text-sm font-bold tracking-tight sm:block">
            HARI OM PANDEY
          </span>
        </Link>
        <nav
          className="site-nav hidden items-center gap-2 text-sm text-slate-400 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map(([label, href]) => (
            <Link key={href} className="site-nav-link focus-ring" href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/resume"
            className="button button-secondary min-h-10 px-4 text-xs"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="button button-primary min-h-10 px-4 text-xs"
          >
            Let&apos;s talk
          </Link>
        </div>
        <button
          className="theme-toggle button button-secondary"
          type="button"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          onClick={toggleTheme}
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          <span className="hidden sm:inline">
            {theme === "light" ? "Dark" : "Light"}
          </span>
        </button>
        <button
          className="button button-secondary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <nav
          className="container grid gap-1 border-t border-white/[.08] py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          {[
            ...navItems,
            ["Contact", "/contact"],
            ["Resume", "/resume"] as const,
          ].map(([label, href]) => (
            <Link
              key={href}
              className="mobile-nav-link focus-ring"
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
