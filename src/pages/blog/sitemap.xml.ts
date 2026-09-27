import { getCollection } from 'astro:content';
import { absoluteUrl } from '../../lib/site';

function escapeXml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function urlEntry(pathname: string, lastmod?: Date): string {
  const loc = `<loc>${escapeXml(absoluteUrl(pathname))}</loc>`;
  const modified = lastmod ? `<lastmod>${lastmod.toISOString()}</lastmod>` : '';
  return `<url>${loc}${modified}</url>`;
}

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const resources = await getCollection('resources', ({ data }) => !data.draft);
  const tags = [...new Set(posts.flatMap((post) => post.data.tags))].sort();

  const entries = [
    urlEntry('/blog'),
    urlEntry('/blog/tags'),
    ...tags.map((tag) => urlEntry(`/blog/tag/${tag}`)),
    ...posts.map((post) => urlEntry(`/blog/${post.id}`, post.data.dateModified ?? post.data.datePublished)),
    urlEntry('/resources'),
    ...resources.map((resource) =>
      urlEntry(`/resources/${resource.id}`, resource.data.dateModified ?? resource.data.datePublished)
    )
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
