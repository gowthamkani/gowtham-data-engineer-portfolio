import Link from "next/link";
import type { Project } from "@/data/projects";
import { FlowDiagram } from "./FlowDiagram";
import { Tag, ArrowRight } from "./ui";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-card)]">
      <div className="grid lg:grid-cols-[1fr_1.05fr]">
        <div className="border-b border-[var(--border)] p-6 md:p-8 lg:border-b-0 lg:border-r">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs faint">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-[var(--border)]" aria-hidden="true" />
            <span className="rounded border border-[var(--border)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
              {project.cloud}
            </span>
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-balance md:text-2xl">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-[var(--accent)]"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm leading-relaxed muted">{project.summary}</p>

          <div className="mt-6 rounded-md border-l-2 border-[var(--accent)] bg-[var(--bg-subtle)] p-4">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)]">
              {project.highlight.title}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed muted">{project.highlight.body}</p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 8).map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
            {project.stack.length > 8 && (
              <li>
                <Tag>+{project.stack.length - 8} more</Tag>
              </li>
            )}
          </ul>

          <Link
            href={`/projects/${project.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition-opacity hover:opacity-80"
          >
            Read the full breakdown <ArrowRight />
          </Link>
        </div>

        <div className="flex flex-col p-6 md:p-8" style={{ backgroundColor: "var(--bg-subtle)" }}>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] faint">
            Architecture
          </p>
          <FlowDiagram nodes={project.flow} compact />
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.concepts.slice(0, 6).map((concept) => (
              <li
                key={concept}
                className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] faint"
              >
                {concept}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
