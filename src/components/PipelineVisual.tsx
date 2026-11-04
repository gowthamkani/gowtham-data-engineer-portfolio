const stages = [
  { label: "Sources", detail: "SQL Server · Oracle · REST APIs", tone: "source" },
  { label: "CDC", detail: "Watermark tracking", tone: "process" },
  { label: "Processing", detail: "Lambda · PySpark", tone: "process" },
  { label: "Validation", detail: "Data quality gate", tone: "quality" },
  { label: "Cloud", detail: "AWS · Azure", tone: "store" },
  { label: "Data Platform", detail: "S3 · ADLS · Databricks", tone: "target" },
] as const;

const toneDot: Record<(typeof stages)[number]["tone"], string> = {
  source: "bg-sky-500",
  process: "bg-[var(--accent)]",
  quality: "bg-amber-500",
  store: "bg-violet-500",
  target: "bg-emerald-500",
};

/**
 * Lightweight CSS/SVG pipeline animation for the hero. No 3D library: the whole
 * thing is a handful of divs plus two keyframes, and it stops moving entirely
 * under prefers-reduced-motion.
 */
export function PipelineVisual({ className = "" }: { className?: string }) {
  return (
    <figure
      className={`grid-bg relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 ${className}`}
      aria-label="Data pipeline: sources, CDC, processing, validation, cloud, data platform"
    >
      <figcaption className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] faint">
          Pipeline flow
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] faint">
          <span
            aria-hidden="true"
            className="pipe-live h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
          />
          streaming
        </span>
      </figcaption>

      <ol className="relative">
        {stages.map((stage, i) => (
          <li key={stage.label}>
            <div className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5">
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${toneDot[stage.tone]}`}
              />
              <span className="min-w-0">
                <span className="block font-mono text-[12px] font-medium leading-tight">
                  {stage.label}
                </span>
                <span className="block truncate text-[11px] leading-snug faint">
                  {stage.detail}
                </span>
              </span>
            </div>

            {i < stages.length - 1 && (
              <div aria-hidden="true" className="relative mx-auto h-6 w-px bg-[var(--border-strong)]">
                <span
                  className="pipe-dot absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--accent)]"
                  style={{ animationDelay: `${i * 0.45}s` }}
                />
              </div>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
