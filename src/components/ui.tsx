import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  subtle = false,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
  children: ReactNode;
  subtle?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`border-t border-[var(--border)] py-20 md:py-28 ${className}`}
      style={subtle ? { backgroundColor: "var(--bg-subtle)" } : undefined}
    >
      <Reveal className="container-page">
        {(eyebrow || title) && (
          <header className="mb-12 max-w-3xl md:mb-16">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                {title}
              </h2>
            )}
            {intro && (
              <div className="mt-4 text-base leading-relaxed muted md:text-lg">{intro}</div>
            )}
          </header>
        )}
        {children}
      </Reveal>
    </section>
  );
}

export function Tag({ children, mono = true }: { children: ReactNode; mono?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded border border-[var(--border)] bg-[var(--bg-subtle)] px-2 py-1 text-[11px] leading-none muted ${
        mono ? "font-mono" : ""
      }`}
    >
      {children}
    </span>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1 text-xs muted">
      {children}
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-200";

const variants = {
  primary:
    "bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 border border-transparent",
  secondary:
    "surface hover:border-[var(--border-strong)] text-[var(--fg)]",
  ghost:
    "border border-transparent muted hover:text-[var(--fg)]",
};

export function Button({
  href,
  children,
  variant = "secondary",
  external = false,
  download = false,
  className = "",
}: ButtonProps) {
  const classes = `${buttonBase} ${variants[variant]} ${className}`;

  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: "" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`h-3.5 w-3.5 ${className}`}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
