import Link from 'next/link';

export default function NotFound() {
  return <main className="grid min-h-[70vh] place-items-center px-5 py-20"><div className="max-w-xl text-center"><p className="eyebrow text-[var(--signal)]">404 / route not found</p><h1 className="font-display mt-5 text-7xl uppercase">No such edge.</h1><p className="mt-5 text-lg leading-8">The control layer could not route that page.</p><Link className="focus-ring mt-8 inline-block bg-[var(--ink)] px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-[var(--paper)] hover:bg-[var(--signal)] hover:text-[var(--ink)]" href="/">Return to control map</Link></div></main>;
}
