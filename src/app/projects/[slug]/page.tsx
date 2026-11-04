import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { FlowDiagram } from "@/components/FlowDiagram";
import { Tag, Button, ArrowRight } from "@/components/ui";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.tagline,
      url: `/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pt-28 pb-20 md:pt-36">
      <header className="container-page">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm muted transition-colors hover:text-[var(--fg)]"
        >
          <ArrowRight className="rotate-180" /> All projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded border border-[var(--border)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
            {project.cloud}
          </span>
          <span className="font-mono text-xs faint">
            Project {String(index + 1).padStart(2, "0")} of{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed muted md:text-lg">
          {project.tagline}
        </p>

        <ul className="mt-7 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </header>

      <section className="container-page mt-14">
        <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] faint">
          Architecture
        </h2>
        <FlowDiagram nodes={project.flow} />
      </section>

      <div className="container-page mt-16 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              The problem
            </h2>
            <ul className="mt-5 space-y-3">
              {project.problem.map((item) => (
                <li key={item.slice(0, 30)} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-amber-500"
                  />
                  <span className="leading-relaxed muted">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              What I built
            </h2>
            <ul className="mt-5 space-y-3">
              {project.solution.map((item) => (
                <li key={item.slice(0, 30)} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                  />
                  <span className="leading-relaxed muted">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border-l-2 border-[var(--accent)] bg-[var(--bg-subtle)] p-6 md:p-7">
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)]">
              Engineering highlight &middot; {project.highlight.title}
            </h2>
            <p className="mt-3 leading-relaxed muted">{project.highlight.body}</p>
          </section>
        </div>

        <aside className="h-fit space-y-8 lg:sticky lg:top-24">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-6">
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] faint">
              Key concepts
            </h2>
            <ul className="space-y-2.5">
              {project.concepts.map((concept) => (
                <li key={concept} className="flex items-start gap-2.5 text-[13px] muted">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--fg-faint)]"
                  />
                  {concept}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-6">
            <h2 className="mb-2 text-sm font-semibold tracking-tight">Next project</h2>
            <p className="text-[13px] leading-relaxed muted">{next.title}</p>
            <Link
              href={`/projects/${next.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-[var(--accent)] hover:opacity-80"
            >
              Read it <ArrowRight />
            </Link>
          </div>
        </aside>
      </div>

      <div className="container-page mt-16 border-t border-[var(--border)] pt-10">
        <Button href="/#contact" variant="primary">
          Get in touch <ArrowRight />
        </Button>
      </div>
    </article>
  );
}
