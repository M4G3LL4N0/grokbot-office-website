import Link from 'next/link';
import { ControlMap } from '../components/ControlMap';
import { LearningLoop } from '../components/LearningLoop';
import { RoleExplorer } from '../components/RoleExplorer';
import data from '../data/workforce.json';

export default function HomePage() {
  return (
    <>
      <section className="grid-paper border-b border-black/15">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="eyebrow text-[var(--signal)]">Open-source workforce architecture / v0.1.0</p>
            <h1 className="font-display mt-6 max-w-4xl text-6xl uppercase leading-[0.88] sm:text-8xl">GrokBot should run your workforce.<br /><span className="text-[var(--signal)]">Not be your entire workforce.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/70 sm:text-xl">A low-usage workforce architecture for turning GrokBot into a persistent control plane instead of an expensive universal worker.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="focus-ring bg-[var(--ink)] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--paper)] transition hover:bg-[var(--signal)] hover:text-[var(--ink)]" href="https://github.com/M4G3LL4N0/grokbot-office" rel="noreferrer" target="_blank">Read the public source</a>
              <Link className="focus-ring border border-black px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] transition hover:bg-[var(--mint)]" href="/architecture">Explore architecture</Link>
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-black/50">Public source: <a className="underline underline-offset-4" href="https://github.com/M4G3LL4N0/grokbot-office" rel="noreferrer" target="_blank">M4G3LL4N0/grokbot-office</a> · AgentOS: <a className="underline underline-offset-4" href="https://github.com/M4G3LL4N0/agentos" rel="noreferrer" target="_blank">M4G3LL4N0/agentos</a></p>
          </div>
          <div className="relative min-h-[390px] overflow-hidden border border-black/20 bg-[var(--ink)] p-5 text-[var(--paper)] sm:p-8">
            <div className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">control core / external graph</div>
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(184,231,209,.3) 0 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(232,93,63,.35) 0 1px, transparent 1px)', backgroundSize: '28px 28px, 36px 36px' }} />
            <div className="relative flex h-full min-h-[350px] flex-col justify-between">
              <div className="flex justify-between font-mono text-xs uppercase tracking-[0.12em] text-[var(--mint)]"><span>persistent context</span><span>routing / evidence</span></div>
              <div className="relative mx-auto flex h-52 w-52 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[var(--signal)]/50" />
                <div className="absolute inset-8 rounded-full border border-white/15" />
                <div className="pulse relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--signal)] text-center font-mono text-[10px] font-bold uppercase leading-3 text-[var(--ink)]">smallest<br />control<br />core</div>
                {['top-0 left-1/2', 'right-2 top-1/2', 'bottom-0 left-1/2', 'left-2 top-1/2'].map((position) => <span className={`absolute ${position} h-4 w-4 rounded-full border-2 border-[var(--ink)] bg-[var(--mint)]`} key={position} />)}
                <span className="absolute left-1/2 top-0 h-28 w-px -translate-x-1/2 bg-white/20" /><span className="absolute left-1/2 top-1/2 h-px w-28 -translate-y-1/2 bg-white/20" />
              </div>
              <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/65"><span>cache</span><span className="text-center">triage</span><span className="text-right">reuse</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-[var(--signal)]">The thesis</p>
            <h2 className="font-display mt-3 text-5xl uppercase leading-[0.9] sm:text-6xl">A tiny core can coordinate a huge graph.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <article className="panel p-6"><p className="eyebrow text-[var(--signal)]">GrokBot supervises</p><p className="mt-4 text-lg leading-7">Intent, preferences, tradeoffs, context, and final decisions stay in a small persistent control layer.</p></article>
            <article className="panel p-6"><p className="eyebrow text-[var(--signal)]">AgentOS routes</p><p className="mt-4 text-lg leading-7">Capabilities, workers, retries, verification, and learning are selected at the execution boundary.</p></article>
            <article className="mint-panel p-6"><p className="eyebrow">Workers execute</p><p className="mt-4 text-lg leading-7">OpenCode, models, APIs, MCP, browser workers, and deterministic software remain replaceable.</p></article>
            <article className="dark-panel p-6"><p className="eyebrow text-[var(--mint)]">Evidence verifies</p><p className="mt-4 text-lg leading-7">The system learns and reuses only after a result crosses a real evidence boundary.</p></article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24"><ControlMap /></section>

      <section className="border-y border-black/15 bg-[var(--mint)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1.2fr] lg:px-8 lg:py-24">
          <div><p className="eyebrow">North star</p><p className="font-display mt-4 text-5xl uppercase leading-[0.9] sm:text-7xl">Verified useful output</p><div className="signal-line my-8" /><p className="font-mono text-sm uppercase tracking-[0.12em]">÷</p><p className="font-display mt-2 text-5xl uppercase leading-[0.9]">Total resource cost</p></div>
          <div><p className="max-w-2xl text-xl leading-8">The point is not to make every task expensive. It is to make the next equivalent task cheaper by retrieving the right artifact, reducing context, and keeping the smallest capable team in control.</p><div className="mt-10 grid grid-cols-2 gap-px border border-black/20 bg-black/20 sm:grid-cols-4"><Metric value={String(data.counts.conceptualRoles)} label="conceptual roles" /><Metric value={String(data.counts.referenceSupervisors)} label="reference supervisors" /><Metric value="0" label="fabricated benchmarks" /><Metric value="1" label="smallest-capable rule" /></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"><LearningLoop /></section>
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28"><RoleExplorer /></section>
      <section className="dark-panel"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 lg:flex-row lg:items-end lg:justify-between lg:px-8"><div><p className="eyebrow text-[var(--mint)]">Read the operating model</p><h2 className="font-display mt-3 text-5xl uppercase">Architecture you can audit.</h2></div><Link className="focus-ring border border-[var(--mint)] px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-[var(--mint)] hover:bg-[var(--mint)] hover:text-[var(--ink)]" href="/docs">Open documentation →</Link></div></section>
    </>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="bg-[var(--paper)] p-4"><p className="font-display text-3xl uppercase">{value}</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-black/60">{label}</p></div>;
}
