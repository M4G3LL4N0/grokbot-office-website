# Publication Audit

Status: **public repository; verified code release**
Project: GrokBot Office website 0.1.0
Repository: https://github.com/M4G3LL4N0/grokbot-office-website

## Public boundary

The public repository contains the Next.js source, sanitized reference data, tests, public documentation, metadata assets, and CI configuration. It does not contain credentials, cookies, sessions, browser profiles, account exports, harvested material, personal information, machine-specific paths, or deployment secrets.

The website has no deployment workflow. `NEXT_PUBLIC_SITE_URL` is optional and must only be set to a real deployed origin after one exists.

## Truthful content boundary

The site describes an architecture and a sanitized role model. It does not claim live workers, paid usage, private account state, autonomous execution, or a deployed production URL. Role counts remain 134 conceptual, 3 reference supervisors, and 131 virtual.

## Verified release evidence

- Verified code commit: `57c102e5f10f00b7918a9d11115e8a8943528b5d`.
- GitHub Actions `validate`: passed; run `https://github.com/M4G3LL4N0/grokbot-office-website/actions/runs/36159015159`.
- `pnpm lint`: PASS.
- `pnpm typecheck`: PASS.
- `pnpm test`: 2 passed, 0 failed, 0 skipped.
- `pnpm build`: PASS; 14 static routes generated.
- `pnpm audit --prod --audit-level=high`: no known vulnerabilities found.
- No deployment or paid provider call was used.

## Release checklist

- [x] Public README, license, security, contributing, roadmap, changelog, and audit.
- [x] Cross-links to both source repositories.
- [x] Sanitized workforce data and route smoke tests.
- [x] Ignore rules for local state, credentials, and deployment artifacts.
- [x] CI with frozen pnpm install, lint, typecheck, tests, and build.
- [x] Dedicated public remote created, pushed, and verified.
- [x] GitHub Actions validation passed on the verified code commit.
- [x] v0.1.0 release tag and GitHub release created from verified commit `ab3b4ae859ee938fe15640ba9a000d243dda4509`.
- Release: https://github.com/M4G3LL4N0/grokbot-office-website/releases/tag/v0.1.0
- [x] Deployed origin intentionally not configured.
