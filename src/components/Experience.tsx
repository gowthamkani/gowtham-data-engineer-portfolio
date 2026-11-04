import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { Section, Tag, Button, ArrowRight } from "./ui";
import { DownloadIcon } from "./Icons";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I have done it" subtle>
      <div className="space-y-8">
        {experience.map((role) => (
          <article
            key={`${role.company}-${role.period}`}
            className="rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8"
          >
            <header className="flex flex-col gap-1 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                  {role.title}
                </h3>
                <p className="mt-1 text-sm muted">
                  {role.company} &middot; {role.location}
                </p>
              </div>
              <p className="shrink-0 font-mono text-xs faint">{role.period}</p>
            </header>

            <ul className="mt-5 space-y-3">
              {role.bullets.map((bullet) => (
                <li key={bullet.slice(0, 30)} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                  />
                  <span className="text-sm leading-relaxed muted">{bullet}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-[var(--border)] pt-5">
              {role.tags.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Button href={profile.resumePath} download>
          <DownloadIcon /> View Full Resume <ArrowRight />
        </Button>
      </div>
    </Section>
  );
}
