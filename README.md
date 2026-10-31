# Ed Tremblay - Personal Website & Builder Log

## What It Is

Ed Tremblay - Personal Website & Builder Log is a personal portfolio site documenting small apps, prototypes, build logs, and lessons learned from hands-on AI-assisted product development.

The site is public for portfolio transparency and is meant to show the work behind Ed Tremblay's product experiments, not to serve as a reusable starter template.

## Project Status

This is an active personal website and portfolio project. It may change as new prototypes, experiments, and builder notes are added.

## What The Site Includes

- Small apps and product prototypes
- Build logs from hands-on AI-assisted development
- Notes on lessons learned while turning ideas into working software
- Links to selected demos and related project repositories
- Portfolio context for product judgment, execution style, and development workflow

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel Analytics

## Local Development

Use the patched Node.js version (`nvm install` if needed, then `nvm use`).

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

Run linting:

```bash
npm run lint
```

## Portfolio Positioning

This site is not just a resume. It is intended to demonstrate product judgment, prototype execution, AI-assisted development workflow, and lessons learned from building real small apps.

The tone and content are meant to be practical and credible: what was built, why it mattered, what worked, what was learned, and how the next iteration could improve.

## License / Reuse

No open-source license is currently provided. This repository is public for portfolio transparency, but the site content, design, written material, and source code are not licensed for reuse.

## Security validation

Use Node.js 24.22.2 or a newer patched Node 24 release. Local development and
production preview bind to localhost by default. No site content or domain rewrites
are changed by the security update.

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run start -- --port 3074
# In another terminal:
npm run test:site
```

`test:site` checks all 16 pages, their text, links, image and media URLs against a
pre-upgrade baseline, referenced asset responses, missing-page handling, security
headers, and Host-based routing for drvr8.band and the portfolio domains.
Use `SITE_URL=http://127.0.0.1:PORT` for a different local port. When intentionally
changing content, review the changes before updating the baseline with
`CAPTURE_BASELINE=1 npm run test:site`.

CSP starts in report-only mode to identify compatibility problems without blocking
scripts, styles, images or YouTube embeds. Violations appear in browser developer
tools; no remote reporting endpoint is configured. The separate enforced CSP
blocks objects, foreign base URLs and framing of these pages. X-Frame-Options,
MIME-sniffing, referrer and unused camera/microphone/geolocation restrictions are
also applied. Do not promote the full report-only policy to enforcement until
production analytics and media have been reviewed.

Before publishing, record the previous Vercel deployment for rollback, review a
preview on desktop and mobile, verify the deployed Node patch and image library,
and explicitly approve deployment. A local successful build does not verify cloud
runtime versions or deployment settings.
