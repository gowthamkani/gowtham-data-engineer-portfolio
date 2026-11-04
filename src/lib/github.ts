import { profile } from "@/data/profile";

export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  updated_at: string;
};

/**
 * Fetches the user's public repositories. Cached for an hour by the Next.js
 * data cache so a burst of visitors does not hit the GitHub rate limit.
 * Returns null on any failure so the UI can fall back to placeholder cards.
 */
export async function getRepos(limit = 6): Promise<Repo[] | null> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`,
      { headers, next: { revalidate: 3600 } },
    );

    if (!response.ok) return null;

    const repos = (await response.json()) as Repo[];
    if (!Array.isArray(repos)) return null;

    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          Date.parse(b.updated_at) - Date.parse(a.updated_at),
      )
      .slice(0, limit);
  } catch {
    return null;
  }
}

export const languageColors: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Java: "#b07219",
  HCL: "#844FBA",
  Shell: "#89e051",
  SQL: "#e38c00",
  "Jupyter Notebook": "#DA5B0B",
  Dockerfile: "#384d54",
  HTML: "#e34c26",
  CSS: "#563d7c",
};
