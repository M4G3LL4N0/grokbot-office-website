import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageHeader, SectionTitle } from '../../components/PagePrimitives';

export const metadata: Metadata = { title: 'Documentation', description: 'Canonical GrokBot Office documentation index.' };

const docs = [
  ['Quickstart', 'Local install and safe validation.', '/docs#quickstart'],
  ['Architecture', 'Control core, execution graph, and evidence boundary.', '/architecture'],
  ['Efficiency', 'Cache, delta, triage, and smallest-capable-team model.', '/efficiency'],
  ['Role model', '134 conceptual roles; role is not bot.', '/workforce'],
  ['Verification', 'Evidence, coach, lesson, and workflow maturity.', '/learning'],
  ['Security', 'Identity, accounts, scopes, and public boundary.', '/security'],
  ['Roadmap', 'Deliberate next steps.', '/roadmap']
] as const;

export default function DocsPage() {
  return <><PageHeader eyebrow="Documentation / canonical index" title="Read the system, not the hype." intro="These pages describe the public model, its boundaries, and the local checks that support the release." /><PageFrame><div className="grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2">{docs.map(([title, text, href]) => <Link className="focus-ring bg-[var(--paper)] p-6 transition hover:bg-[var(--mint)]" href={href} key={title}><p className="eyebrow text-[var(--signal)]">/docs</p><h2 className="font-display mt-5 text-3xl uppercase">{title}</h2><p className="mt-3 text-sm leading-6 text-black/65">{text}</p></Link>)}</div><div className="mt-16 grid gap-8 lg:grid-cols-2"><section id="source"><SectionTitle>Source boundary</SectionTitle><p className="mt-5 leading-8">The canonical workforce registry lives in the GrokBot Office runtime package. This site carries a sanitized build-time subset for exploration. Read the source at <a className="underline underline-offset-4" href="https://github.com/M4G3LL4N0/grokbot-office" rel="noreferrer" target="_blank">M4G3LL4N0/grokbot-office</a> and the execution substrate at <a className="underline underline-offset-4" href="https://github.com/M4G3LL4N0/agentos" rel="noreferrer" target="_blank">M4G3LL4N0/agentos</a>.</p></section><section id="security"><SectionTitle>Security boundary</SectionTitle><p className="mt-5 leading-8">The public package excludes private state and requires explicit review for third-party skills, repositories, MCP servers, and external workers. Start with the <a className="underline underline-offset-4" href="https://github.com/M4G3LL4N0/grokbot-office/blob/main/SECURITY.md" rel="noreferrer" target="_blank">runtime security policy</a> and the <a className="underline underline-offset-4" href="https://github.com/M4G3LL4N0/grokbot-office-website/blob/main/SECURITY.md" rel="noreferrer" target="_blank">website security policy</a>.</p></section></div><div className="mt-16 border-t border-black/15 pt-8"><SectionTitle>Run the local checks</SectionTitle><p className="mt-5 leading-8">The runtime uses pnpm for reproducible local validation. The website uses pnpm for install, lint, typecheck, tests, and build. Neither repository contains a deployment workflow.</p><div className="mt-6 flex flex-wrap gap-5 font-mono text-xs uppercase tracking-[0.1em]"><a className="underline underline-offset-4" href="https://github.com/M4G3LL4N0/grokbot-office#readme" rel="noreferrer" target="_blank">Runtime quickstart</a><a className="underline underline-offset-4" href="https://github.com/M4G3LL4N0/agentos#readme" rel="noreferrer" target="_blank">AgentOS quickstart</a></div></div></PageFrame></>;
}
