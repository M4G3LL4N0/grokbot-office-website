import type { Metadata } from 'next';
import { PageFrame, PageHeader, SectionTitle } from '../../components/PagePrimitives';

export const metadata: Metadata = { title: 'Architecture', description: 'The GrokBot Office control-plane architecture and workforce boundaries.' };

export default function ArchitecturePage() {
  return <><PageHeader eyebrow="Architecture / control-plane boundaries" title="The core is small. The graph is not." intro="GrokBot Office keeps supervisory context, routing, evidence, and approval boundaries legible while the execution graph stays replaceable." /><PageFrame><SectionTitle>One request, explicit boundaries</SectionTitle><div className="mt-10 grid gap-5 lg:grid-cols-4"><Step n="01" title="Intent" text="A human or system states the outcome, constraints, data class, and deadline." /><Step n="02" title="Supervise" text="GrokBot retains context, tradeoffs, policy, and the smallest capable owner." /><Step n="03" title="Execute" text="AgentOS or a reviewed worker performs the bounded operation." /><Step n="04" title="Verify" text="A verifier records the result before it becomes reusable." /></div><div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div className="dark-panel p-6 sm:p-10"><pre className="overflow-x-auto font-mono text-xs leading-7 text-[var(--mint)]"><code>{`USER
  ↓
ChiefOfStaff
  ↓ intent + context + tradeoffs
AgentOS
  ↓ route + verify + recover
Workers
  ↓
Evidence → lesson → reuse`}</code></pre></div><div className="space-y-5"><Boundary title="GrokBot Office" text="Supervisory role catalog, persistent context, policy, and handoff." tone="signal" /><Boundary title="AgentOS" text="Provider-neutral capability execution, cache, routing, verification, and learning." tone="mint" /><Boundary title="Workers" text="Replaceable executors. A worker identity is not a security boundary." tone="ink" /></div></div><div className="mt-16 border-l-2 border-[var(--signal)] pl-5"><p className="eyebrow text-[var(--signal)]">Important boundary</p><p className="mt-3 text-xl leading-8">The diagrams on this site are architecture simulations. They do not claim a live external worker, paid usage, or a private account. Read the <a className="underline underline-offset-4" href="https://github.com/M4G3LL4N0/grokbot-office" rel="noreferrer" target="_blank">GrokBot Office source</a> and the <a className="underline underline-offset-4" href="https://github.com/M4G3LL4N0/agentos" rel="noreferrer" target="_blank">AgentOS source</a> for the canonical contracts.</p></div></PageFrame></>;
}

function Step({ n, title, text }: { n: string; title: string; text: string }) { return <article className="border-t-2 border-black pt-4"><p className="font-mono text-xs text-[var(--signal)]">{n}</p><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-black/65">{text}</p></article>; }
function Boundary({ title, text, tone }: { title: string; text: string; tone: 'signal' | 'mint' | 'ink' }) { const styles = { signal: 'bg-[var(--signal)]', mint: 'bg-[var(--mint)]', ink: 'bg-[var(--ink)] text-[var(--paper)]' }; return <div className={`${styles[tone]} p-5`}><h3 className="font-display text-2xl uppercase">{title}</h3><p className="mt-2 text-sm leading-6 opacity-80">{text}</p></div>; }
