"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { DownloadIcon } from "./Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded border border-[var(--border-strong)] font-mono text-[13px] font-semibold text-[var(--accent)]"
          >
            GK
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {profile.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-md px-3 py-2 text-sm muted transition-colors hover:text-[var(--fg)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumePath}
            download
            className="hidden items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-sm muted transition-colors hover:border-[var(--border-strong)] hover:text-[var(--fg)] sm:inline-flex"
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-[var(--border)] muted lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
              {open ? (
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-[var(--border)] py-3 text-sm muted transition-colors hover:text-[var(--fg)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={profile.resumePath}
                download
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-[var(--accent)]"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
