import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  return ['/', '/architecture', '/efficiency', '/workforce', '/learning', '/docs', '/security', '/roadmap'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date('2026-09-25'),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7
  }));
}
