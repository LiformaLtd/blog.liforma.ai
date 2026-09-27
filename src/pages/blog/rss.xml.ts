import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL | undefined }) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.datePublished.getTime() - a.data.datePublished.getTime()
  );

  return rss({
    title: 'Liforma Blog',
    description: 'Product updates, technical deep dives, and practical guides for Liforma avatar experiences.',
    site: context.site ?? 'https://www.liforma.ai',
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.datePublished,
      link: `/blog/${post.id}`,
      categories: post.data.tags
    }))
  });
}
