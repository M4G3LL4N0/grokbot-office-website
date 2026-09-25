# GrokBot Office Website

> **GrokBot should run your workforce. It shouldn't be your entire workforce.**

This repository contains the public Next.js website for the GrokBot Office workforce architecture. It explains how a small persistent GrokBot supervisor core, AgentOS, and replaceable workers divide responsibility.

The site is a reference, not a live workforce console. Its diagrams and role data are sanitized reference material; they do not claim live workers, paid usage, private accounts, or autonomous execution.

## Source repositories

- [GrokBot Office](https://github.com/M4G3LL4N0/grokbot-office) — workforce registry and control-layer package.
- [AgentOS](https://github.com/M4G3LL4N0/agentos) — provider-neutral execution and orchestration substrate.
- [Website source](https://github.com/M4G3LL4N0/grokbot-office-website) — this site.

## What the site explains

- the supervisor → AgentOS → worker architecture;
- the 134 conceptual roles, 3 reference supervisors, and 131 virtual roles;
- the north star: verified useful output divided by total resource cost;
- the evidence, cache, verifier, coach, and learning loop;
- security boundaries and the difference between a role and a bot.

The site does not include private state, credentials, browser sessions, account exports, harvested material, or machine-specific paths.

## Local development

```bash
git clone https://github.com/M4G3LL4N0/grokbot-office-website.git
cd grokbot-office-website
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000` for the local site. `NEXT_PUBLIC_SITE_URL` is optional for local development; set it to the real deployed origin only after a deployment exists so metadata, robots, and sitemap URLs remain truthful.

## Verification

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

The production build has no required secrets and no deployment workflow. `pnpm build` generates the sanitized workforce subset from the checked-in reference data.

## Routes

- `/` — north star, architecture thesis, interactive control map, and learning loop.
- `/architecture` — supervisor, AgentOS, worker, and evidence boundaries.
- `/efficiency` — cache, triage, and smallest-capable-team model.
- `/workforce` — role explorer and count semantics.
- `/learning` — verification, coach, lesson, and reuse loop.
- `/security` — identity, credentials, approvals, and public packaging.
- `/docs` — canonical documentation index and source links.
- `/roadmap` — deliberate next steps.

Unknown routes render the accessible 404 page. The site includes skip navigation, visible focus states, semantic labels for interactive controls, reduced-motion handling, metadata, Open Graph/Twitter images, a manifest, robots metadata, and a sitemap.

## Contributing and security

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before changing the site. Do not add credentials, private state, personal information, deployment secrets, or unverified metrics. See [`SECURITY.md`](SECURITY.md) for reporting and boundaries.

## License

MIT. See [`LICENSE`](LICENSE).
