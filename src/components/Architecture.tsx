import { pipelineStages, principles } from "@/data/architecture";
import { Section, Tag } from "./ui";

function PipelineStrip() {
  return (
    <div
      className="mb-12 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-5"
      aria-label="Pipeline stage overview"
    >
      <div className="flex min-w-max items-center gap-2">
        {pipelineStages.map((stage, i) => (
          <div key={stage.step} className="flex items-center gap-2">
            <span className="rounded-md border border-[var(--border)] bg-[var(--bg-subtle)] px-3 py-1.5 font-mono text-[11px] whitespace-nowrap">
              {stage.title}
            </span>
            {i < pipelineStages.length - 1 && (
              <span
                aria-hidden="true"
                className="pipe-track relative h-px w-8 shrink-0 bg-[var(--border-strong)]"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Architecture() {
  return (
    <Section
      id="architecture"
      eyebrow="Approach"
      title="How I Build Reliable Data Pipelines"
      intro="Every pipeline I ship follows the same eight stages. The order matters: nothing is trusted before it is validated, and nothing is marked done before it is reconciled."
    >
      <PipelineStrip />

      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <ol className="relative space-y-0">
          <span
            aria-hidden="true"
            className="absolute left-[15px] top-3 bottom-3 w-px bg-[var(--border)]"
          />
          {pipelineStages.map((stage) => (
            <li key={stage.step} className="relative flex gap-5 pb-8 last:pb-0">
              <span
                aria-hidden="true"
                className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] font-mono text-[11px] text-[var(--accent)]"
              >
                {stage.step}
              </span>
              <div className="min-w-0 pt-0.5">
                <h3 className="text-base font-semibold tracking-tight">{stage.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed muted">{stage.body}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {stage.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="h-fit lg:sticky lg:top-24">
          <h3 className="mb-1 text-base font-semibold tracking-tight">
            The concepts underneath
          </h3>
          <p className="mb-6 text-sm muted">
            These are the eight ideas I keep coming back to, whichever cloud the pipeline
            runs on.
          </p>
          <dl className="grid gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.name} className="bg-[var(--bg-card)] p-5">
                <dt className="font-mono text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                  {principle.name}
                </dt>
                <dd className="mt-2 text-[13px] leading-relaxed muted">{principle.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
