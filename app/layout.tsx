import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const runtimeRepository = 'https://github.com/M4G3LL4N0/grokbot-office';
const agentOsRepository = 'https://github.com/M4G3LL4N0/agentos';
const websiteRepository = 'https://github.com/M4G3LL4N0/grokbot-office-website';

export const metadata: Metadata = {
  title: {
    default: 'GrokBot Office — GrokBot should run your workforce',
    template: '%s — GrokBot Office'
  },
  description: 'A small persistent GrokBot supervisor core coordinates an external workforce through AgentOS and replaceable workers.',
  applicationName: 'GrokBot Office',
  keywords: ['GrokBot Office', 'workforce architecture', 'AgentOS', 'control plane', 'smallest capable team'],
  authors: [{ name: 'GrokBot Office contributors' }],
  openGraph: {
    title: 'GrokBot Office — GrokBot should run your workforce',
    description: 'Coordinate a large external workforce through a small persistent control core.',
    type: 'website',
    siteName: 'GrokBot Office',
    ...(siteUrl ? { url: siteUrl } : {})
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrokBot Office — GrokBot should run your workforce',
    description: 'Coordinate a large external workforce through a small persistent control core.'
  },
  icons: { icon: '/icon.svg' },
  manifest: '/manifest.webmanifest',
  metadataBase: new URL(siteUrl ?? 'http://localhost:3000'),
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[var(--signal)] focus:px-4 focus:py-3" href="#main">Skip to content</a>
        <header className="border-b border-black/15 bg-[var(--paper)]/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
            <Link className="font-mono text-sm font-bold tracking-tight" href="/">GROKBOT / OFFICE</Link>
            <nav aria-label="Primary navigation" className="hidden items-center gap-5 font-mono text-xs uppercase tracking-[0.12em] md:flex">
              <Link className="hover:text-[var(--signal)]" href="/architecture">Architecture</Link>
              <Link className="hover:text-[var(--signal)]" href="/efficiency">Efficiency</Link>
              <Link className="hover:text-[var(--signal)]" href="/workforce">Workforce</Link>
              <Link className="hover:text-[var(--signal)]" href="/learning">Learning</Link>
              <Link className="hover:text-[var(--signal)]" href="/security">Security</Link>
              <a className="hover:text-[var(--signal)]" href={runtimeRepository} rel="noreferrer" target="_blank">GitHub</a>
            </nav>
            <Link className="border border-black px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition hover:bg-[var(--ink)] hover:text-[var(--paper)] focus-ring" href="/docs">Read the docs</Link>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="border-t border-black/15 bg-[var(--ink)] text-[var(--paper)]">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 font-mono text-xs md:flex-row md:items-center md:justify-between lg:px-8">
            <span>GROKBOT OFFICE / REFERENCE PROJECT</span>
            <div className="flex flex-wrap gap-4 uppercase tracking-[0.1em]">
              <a className="hover:text-[var(--mint)]" href={runtimeRepository} rel="noreferrer" target="_blank">Runtime</a>
              <a className="hover:text-[var(--mint)]" href={agentOsRepository} rel="noreferrer" target="_blank">AgentOS</a>
              <a className="hover:text-[var(--mint)]" href={websiteRepository} rel="noreferrer" target="_blank">Website source</a>
            </div>
            <span>Role ≠ Bot · No fabricated metrics · No deployment</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
