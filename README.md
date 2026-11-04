# Gowtham Kani — Data Engineer Portfolio

Personal portfolio site built with Next.js 15 (App Router), TypeScript and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # the exact build Vercel runs
npm run typecheck
```

## Deploying

See **[DEPLOY_TO_VERCEL.txt](./DEPLOY_TO_VERCEL.txt)** for the full step-by-step guide.

## Where the content lives

All copy is in plain data files — no component edits needed to update the site.

| File | Contains |
| --- | --- |
| `src/data/profile.ts` | Name, title, summary, links, email, `siteUrl`, About text |
| `src/data/skills.ts` | Skill groups |
| `src/data/projects.ts` | The four projects, including architecture flow diagrams |
| `src/data/experience.ts` | Role bullets, certifications, education |
| `src/data/architecture.ts` | The 8 pipeline stages and 8 engineering principles |
| `src/data/nav.ts` | Navbar and footer links |
| `public/` | Downloadable resume |

Adding an object to the `projects` array generates its card, its `/projects/<slug>`
detail page and its sitemap entry automatically.

## Notes

- **`siteUrl` in `src/data/profile.ts`** must be updated to the real deployed URL —
  it drives canonical tags, Open Graph metadata, `sitemap.xml` and `robots.txt`.
- The GitHub section pulls live from the public GitHub API, cached for one hour, and
  falls back to placeholder cards if the API is unreachable. `GITHUB_TOKEN` is
  optional and only raises the rate limit.
- The contact form composes a `mailto:` draft rather than posting to a backend, so
  there is no mail service to configure and nothing silently fails.
