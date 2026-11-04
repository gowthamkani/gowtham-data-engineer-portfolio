import { about } from "@/data/profile";
import { Section, Tag } from "./ui";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="What I Actually Do"
      intro="Four things show up in almost every pipeline I ship, whichever cloud it runs on."
      subtle
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] md:grid-cols-2">
        {about.cards.map((card) => (
          <article key={card.id} className="flex flex-col bg-[var(--bg-card)] p-6 md:p-7">
            <h3 className="text-base font-semibold tracking-tight md:text-lg">{card.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed muted">{card.body}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {card.tags.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <details className="group rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-6">
          <summary className="cursor-pointer list-none font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] marker:content-none">
            <span className="group-open:hidden">Read more &mdash; the longer version</span>
            <span className="hidden group-open:inline">Show less</span>
          </summary>
          <div className="mt-5 space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-sm leading-relaxed muted">
                {paragraph}
              </p>
            ))}
          </div>
        </details>

        <aside className="h-fit rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-6">
          <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] faint">
            At a glance
          </h3>
          <dl className="space-y-4">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[11px] uppercase tracking-wide faint">{fact.label}</dt>
                <dd className="mt-0.5 text-sm leading-snug">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  );
}
