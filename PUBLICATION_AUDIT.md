# Publication Audit

Status: **pre-publication verification**
Project: GrokBot Office website 0.1.0
Target: `M4G3LL4N0/grokbot-office-website`

## Public boundary

The public repository contains the Next.js source, sanitized reference data, tests, public documentation, metadata assets, and CI configuration. It does not contain credentials, cookies, sessions, browser profiles, account exports, harvested material, personal information, machine-specific paths, or deployment secrets.

The website has no deployment workflow. `NEXT_PUBLIC_SITE_URL` is optional and must only be set to a real deployed origin after one exists.

## Truthful content boundary

The site describes an architecture and a sanitized role model. It does not claim live workers, paid usage, private account state, autonomous execution, or a deployed production URL. Role counts remain 134 conceptual, 3 reference supervisors, and 131 virtual.

## Verification checklist

- [x] Public README, license, security, contributing, roadmap, changelog, and audit
- [x] Cross-links to both source repositories
- [x] Sanitized workforce data and route smoke tests
- [x] Ignore rules for local state, credentials, and deployment artifacts
- [x] CI with frozen pnpm install, lint, typecheck, tests, and build
- [ ] Dedicated public remote pushed and verified
- [ ] GitHub Actions run verified on the pushed commit
- [ ] Deployed origin intentionally not configured
