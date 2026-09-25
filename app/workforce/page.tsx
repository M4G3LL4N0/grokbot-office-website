import type { Metadata } from 'next';
import { PageFrame, PageHeader, SectionTitle } from '../../components/PagePrimitives';
import { RoleExplorer } from '../../components/RoleExplorer';

export const metadata: Metadata = { title: 'Workforce', description: 'Explore the sanitized GrokBot Office role catalog.' };

export default function WorkforcePage() {
  return <><PageHeader eyebrow="Workforce / role catalog" title="Many responsibilities. Few persistent identities." intro="The registry is a data model for ownership and escalation. It is not a request to create one bot per role." /><PageFrame><div className="mb-12 grid gap-5 md:grid-cols-3"><Stat value="134" label="conceptual roles" /><Stat value="3" label="local reference supervisors" /><Stat value="131" label="virtual by default" /></div><RoleExplorer /><div className="mt-16 grid gap-8 lg:grid-cols-2"><div><SectionTitle>Role 133 / specialization</SectionTitle><p className="mt-5 leading-8">Location intelligence is a good example of role ≠ bot. A skill or deterministic workflow can retrieve place context and calculate options while the supervisor owns judgment and confirmation.</p></div><div><SectionTitle>Role 134 / ecosystem</SectionTitle><p className="mt-5 leading-8">The ecosystem scout discovers and inspects candidates without installing or executing them. Third-party tools remain untrusted until reviewed.</p></div></div></PageFrame></>;
}

function Stat({ value, label }: { value: string; label: string }) { return <div className="border border-black/20 p-5"><p className="font-display text-5xl uppercase text-[var(--signal)]">{value}</p><p className="mt-2 font-mono text-xs uppercase tracking-[0.1em]">{label}</p></div>; }
