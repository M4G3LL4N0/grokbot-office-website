# Contributing

Keep the website public-safe, accessible, and truthful.

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Before opening a pull request:

- keep diagrams and role data explicitly marked as reference or simulation;
- preserve role ≠ bot and the supervisor → AgentOS → worker boundary;
- keep navigation, footer, metadata, focus states, reduced motion, and 404 behavior working;
- do not add credentials, private state, personal information, deployment secrets, or unverified metrics;
- update both source repositories when a cross-link or operating-model statement changes.

No deployment workflow is required for a pull request.
