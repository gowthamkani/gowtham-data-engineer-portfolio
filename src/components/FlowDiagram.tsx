import type { FlowNode } from "@/data/projects";

const kindStyles: Record<FlowNode["kind"], { dot: string; label: string }> = {
  source: { dot: "bg-sky-500", label: "Source" },
  process: { dot: "bg-[var(--accent)]", label: "Process" },
  store: { dot: "bg-violet-500", label: "Store" },
  quality: { dot: "bg-amber-500", label: "Quality" },
  target: { dot: "bg-emerald-500", label: "Target" },
};

function Connector() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center py-1 md:py-0">
      <svg viewBox="0 0 12 24" className="h-5 w-3 md:hidden" fill="none">
        <path d="M6 2v16m0 0 3.5-3.5M6 18l-3.5-3.5" stroke="var(--border-strong)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg viewBox="0 0 24 12" className="hidden h-3 w-6 md:block" fill="none">
        <path d="M2 6h16m0 0-3.5-3.5M18 6l-3.5 3.5" stroke="var(--border-strong)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function FlowDiagram({
  nodes,
  compact = false,
}: {
  nodes: FlowNode[];
  compact?: boolean;
}) {
  const usedKinds = Array.from(new Set(nodes.map((n) => n.kind)));

  return (
    <figure className="not-prose">
      <div
        className={`grid-bg rounded-lg border border-[var(--border)] p-4 md:p-6 ${
          compact ? "" : "bg-[var(--bg)]"
        }`}
        style={compact ? { backgroundColor: "var(--bg-subtle)" } : undefined}
      >
        <ol className="flex flex-col md:flex-row md:flex-wrap md:items-stretch md:gap-y-3">
          {nodes.map((node, i) => {
            const style = kindStyles[node.kind];
            return (
              <li key={node.label} className="contents">
                <div
                  className={`flex min-w-0 flex-col justify-center rounded-md border border-[var(--border)] bg-[var(--bg-card)] px-3 py-2.5 ${
                    compact ? "md:max-w-[13rem]" : "md:max-w-[15rem]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`}
                    />
                    <span className="font-mono text-[11px] font-medium leading-tight md:text-xs">
                      {node.label}
                    </span>
                  </div>
                  {node.note && !compact && (
                    <span className="mt-1 pl-3.5 text-[11px] leading-snug faint">
                      {node.note}
                    </span>
                  )}
                </div>
                {i < nodes.length - 1 && <Connector />}
              </li>
            );
          })}
        </ol>
      </div>

      <figcaption className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {usedKinds.map((kind) => (
          <span key={kind} className="inline-flex items-center gap-1.5 text-[11px] faint">
            <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${kindStyles[kind].dot}`} />
            {kindStyles[kind].label}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
