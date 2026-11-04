import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./ui";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Systems I have built and operated"
      intro="Four production data systems, each with its own architecture, failure modes and reconciliation story. Open any one for the full problem, solution and engineering detail."
      subtle
    >
      <div className="space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
