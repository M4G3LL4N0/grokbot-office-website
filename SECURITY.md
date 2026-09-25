# Security

The website is a static reference surface. It must not contain credentials, cookies, sessions, browser profiles, private account data, harvested material, personal information, machine-specific paths, or fabricated live-worker claims.

## Runtime boundary

The site has no required secrets and no deployment workflow. `NEXT_PUBLIC_SITE_URL` is optional and must only be set to a real deployed origin. Do not place private values in `NEXT_PUBLIC_*` variables; public environment variables are shipped to the browser.

## Dependencies and content

Review third-party packages and generated images. Keep the workforce dataset synthetic and do not turn illustrative diagrams into claims about a live account, paid usage, or autonomous execution.

## Reporting

Do not open a public issue containing sensitive information. Use GitHub's private vulnerability reporting for this repository when available, with a sanitized reproduction and impact description.
