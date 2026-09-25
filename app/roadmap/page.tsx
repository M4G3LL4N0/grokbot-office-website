import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageHeader, SectionTitle } from '../../components/PagePrimitives';

export const metadata: Metadata = { title: 'Roadmap', description: 'The next deliberate steps for GrokBot Office.' };

const items = ['Keep the role catalog and public website synchronized.', 'Improve evidence visualizations without implying live execution.', 'Expand keyboard and screen-reader coverage for reference components.', 'Add reviewed deployment documentation after a real deployment origin exists.', 'Improve mobile and low-bandwidth presentation for the role explorer.'];

export default function RoadmapPage() {
  return <><PageHeader eyebrow="Roadmap / deliberate next steps" title="Make the boundary stronger before making it bigger." intro="The roadmap favors evidence, portability, accessibility, and explicit approvals over autonomous surface area." /><PageFrame><div className="grid gap-0 border border-black/15">{items.map((item, index) => <div className="grid gap-4 border-b border-black/15 p-5 last:border-b-0 sm:grid-cols-[80px_1fr] sm:p-7" key={item}><span className="font-mono text-sm text-[var(--signal)]">{String(index + 1).padStart(2, '0')}</span><div><SectionTitle>{item}</SectionTitle><p className="mt-3 max-w-2xl text-sm leading-6 text-black/65">This is a planned direction, not a claim that the capability is already live.</p></div></div>)}</div><div className="mt-12 flex flex-wrap gap-5"><Link className="focus-ring bg-[var(--ink)] px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-[var(--paper)] hover:bg-[var(--signal)] hover:text-[var(--ink)]" href="/docs">Read the docs →</Link><a className="focus-ring border border-black px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] hover:bg-[var(--mint)]" href="https://github.com/M4G3LL4N0/grokbot-office-website" rel="noreferrer" target="_blank">View website source →</a></div></PageFrame></>;
}
