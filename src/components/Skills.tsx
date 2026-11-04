import { skillGroups } from "@/data/skills";
import { Section, Tag } from "./ui";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title="The toolkit"
      intro="Grouped by the part of the pipeline it belongs to, rather than by how well I think I know it."
    >
      {/* Spec-sheet rows rather than a card grid: the categories hold very
          different numbers of chips, so equal-width boxes always left ragged
          gaps. A label column keeps every row aligned whatever it contains. */}
      <dl className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-card)]">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="grid gap-3 border-b border-[var(--border)] p-6 last:border-b-0 md:grid-cols-[15rem_1fr] md:items-baseline md:gap-8 md:p-7"
          >
            <dt>
              <h3 className="text-sm font-semibold tracking-tight">{group.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed faint">{group.blurb}</p>
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
