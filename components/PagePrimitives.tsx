import type { ReactNode } from 'react';
import Link from 'next/link';

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <header className="grid-paper border-b border-black/15 px-5 py-16 lg:px-8 lg:py-24"><p className="eyebrow text-[var(--signal)]">{eyebrow}</p><h1 className="font-display mt-5 max-w-5xl text-6xl uppercase leading-[0.88] sm:text-8xl">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-black/70">{intro}</p></header>;
}

export function PageFrame({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">{children}</div>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-4xl uppercase leading-[0.9] sm:text-5xl">{children}</h2>;
}

export function BackToDocs() {
  return <Link className="font-mono text-xs uppercase tracking-[0.12em] underline underline-offset-4 hover:text-[var(--signal)]" href="/docs">← documentation index</Link>;
}
