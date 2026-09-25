import type { Metadata } from 'next';
import { PageFrame, PageHeader, SectionTitle } from '../../components/PagePrimitives';
import { LearningLoop } from '../../components/LearningLoop';

export const metadata: Metadata = { title: 'Learning', description: 'How evidence, coaching, and workflow memory reduce repeated work.' };

export default function LearningPage() {
  return <><PageHeader eyebrow="Learning / the compounding advantage" title="A result is only an asset after it survives verification." intro="The learning layer records evidence, failures, human corrections, and workflow maturity without turning assumptions into facts." /><PageFrame><LearningLoop /><div className="mt-16 grid gap-8 lg:grid-cols-2"><div><SectionTitle>First task</SectionTitle><p className="mt-5 text-lg leading-8">The first request may need research, a specialist, or a fresh execution. The control layer records what happened instead of pretending the work was free.</p></div><div><SectionTitle>Equivalent task</SectionTitle><p className="mt-5 text-lg leading-8">The next request can retrieve a verified artifact, compute a delta, and route only the changed work.</p></div></div><div className="mt-16 border-l-2 border-[var(--signal)] pl-5"><p className="eyebrow text-[var(--signal)]">No fabricated token savings</p><p className="mt-3 text-xl leading-8">Relative diagrams are architectural claims. Numeric savings require a measured benchmark and a documented method.</p></div></PageFrame></>;
}
