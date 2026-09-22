import { blogPosts, type BlogPost } from './posts';
import { resourcePosts, type ResourcePost } from './resourcePosts';
import { getTag, tags, type TagDefinition } from './tags';
import { absoluteUrl } from '$lib/site';

export type { BlogPost, ResourcePost, TagDefinition };
export { authors, getAuthor } from './authors';
export { blogPosts } from './posts';
export { resourcePosts } from './resourcePosts';
export { tags, getTag } from './tags';

export function listPublishedPosts(): BlogPost[] {
	return blogPosts.filter((post) => !post.draft);
}

export function listPublishedResourcePosts(): ResourcePost[] {
	return resourcePosts.filter((post) => !post.draft);
}

export function getPost(slug: string): BlogPost | undefined {
	return listPublishedPosts().find((post) => post.slug === slug);
}

export function getResourcePost(slug: string): ResourcePost | undefined {
	return listPublishedResourcePosts().find((post) => post.slug === slug);
}

export function listTags(): Array<TagDefinition & { count: number }> {
	const published = listPublishedPosts();
	return tags
		.map((tag) => ({
			...tag,
			count: published.filter((post) => post.tags.includes(tag.slug)).length
		}))
		.filter((tag) => tag.count > 0);
}

export function listPostsByTag(tagSlug: string): BlogPost[] {
	return listPublishedPosts().filter((post) => post.tags.includes(tagSlug));
}

export function imageSrc(imageKey: string, width: 480 | 960 | 1440 = 960): string {
	return `/images/${imageKey}-${width}.webp`;
}

export function imageSrcset(imageKey: string): string {
	return [480, 960, 1440].map((width) => `${imageSrc(imageKey, width as 480 | 960 | 1440)} ${width}w`).join(', ');
}

export type SitemapEntry = {
	loc: string;
	lastmod: string;
};

export function listSitemapEntries(): SitemapEntry[] {
	const entries: SitemapEntry[] = [
		{ loc: absoluteUrl('/'), lastmod: newestDate(listPublishedPosts().map((p) => p.dateModified ?? p.datePublished)) }
	];

	for (const post of listPublishedPosts()) {
		entries.push({
			loc: absoluteUrl(`/${post.slug}`),
			lastmod: post.dateModified ?? post.datePublished
		});
	}

	entries.push({
		loc: absoluteUrl('/tags'),
		lastmod: newestDate(listPublishedPosts().map((p) => p.dateModified ?? p.datePublished))
	});

	for (const tag of listTags()) {
		const posts = listPostsByTag(tag.slug);
		entries.push({
			loc: absoluteUrl(`/tag/${tag.slug}`),
			lastmod: newestDate(posts.map((p) => p.dateModified ?? p.datePublished))
		});
	}

	for (const resource of listPublishedResourcePosts()) {
		entries.push({
			loc: absoluteUrl(`/resources/${resource.slug}`),
			lastmod: resource.dateModified ?? resource.datePublished
		});
	}

	return entries;
}

function newestDate(dates: string[]): string {
	if (dates.length === 0) return new Date().toISOString().slice(0, 10);
	return [...dates].sort().at(-1) ?? dates[0]!;
}

export function resolvePostTags(post: BlogPost): TagDefinition[] {
	return post.tags.map((slug) => getTag(slug)).filter((tag): tag is TagDefinition => Boolean(tag));
}

export function formatDate(isoDate: string): string {
	return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-GB', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timeZone: 'UTC'
	});
}
