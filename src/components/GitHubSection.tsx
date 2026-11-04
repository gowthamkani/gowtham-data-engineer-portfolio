import { profile } from "@/data/profile";
import { getRepos, languageColors, type Repo } from "@/lib/github";
import { Section, Button, ArrowRight } from "./ui";
import { GitHubIcon, StarIcon } from "./Icons";

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-5 transition-colors hover:border-[var(--border-strong)]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-mono text-sm font-medium transition-colors group-hover:text-[var(--accent)]">
          {repo.name}
        </h3>
        {repo.stargazers_count > 0 && (
          <span className="inline-flex shrink-0 items-center gap-1 text-[11px] faint">
            <StarIcon className="h-3.5 w-3.5" />
            {repo.stargazers_count}
          </span>
        )}
      </div>

      <p className="mt-2 flex-1 text-[13px] leading-relaxed muted">
        {repo.description ?? "No description provided on GitHub yet."}
      </p>

      <div className="mt-4 flex items-center gap-4 text-[11px] faint">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: languageColors[repo.language] ?? "var(--fg-faint)" }}
            />
            {repo.language}
          </span>
        )}
        <span>
          Updated{" "}
          {new Date(repo.updated_at).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
    </a>
  );
}

function PlaceholderCard() {
  return (
    <div className="flex flex-col rounded-lg border border-dashed border-[var(--border-strong)] bg-[var(--bg-card)] p-5">
      <p className="font-mono text-sm faint">repository</p>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed faint">
        GitHub could not be reached right now. Browse the repositories directly on the
        profile.
      </p>
    </div>
  );
}

export async function GitHubSection() {
  const repos = await getRepos(6);

  return (
    <Section
      id="github"
      eyebrow="Open Source"
      title="Explore My Code"
      intro={
        <>
          Explore my projects, experiments, and Data Engineering work on GitHub. The
          repositories below are pulled live from{" "}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[var(--accent)] underline-offset-4 hover:underline"
          >
            github.com/{profile.githubUser}
          </a>{" "}
          and refresh hourly. The client work above is proprietary, so what is public here
          is the practice and experiment side of the same skill set.
        </>
      }
      subtle
    >
      {repos && repos.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
        </div>
      )}

      <div className="mt-8">
        <Button href={profile.github} external>
          <GitHubIcon /> View GitHub <ArrowRight />
        </Button>
      </div>
    </Section>
  );
}
