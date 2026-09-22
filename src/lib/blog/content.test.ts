import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import {
	blogPosts,
	getAuthor,
	getTag,
	listPublishedPosts,
	listPublishedResourcePosts,
	listSitemapEntries,
	listTags,
	resourcePosts,
	type BlogPost,
	type ResourcePost,
	type SitemapEntry
} from './index';
import { RESERVED_TOP_LEVEL_SLUGS } from '../site';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');

describe('blog content registries', () => {
	it('keeps published slugs unique within and across lanes', () => {
		const main = listPublishedPosts().map((post: BlogPost) => post.slug);
		const resources = listPublishedResourcePosts().map((post: ResourcePost) => post.slug);
		expect(new Set(main).size).toBe(main.length);
		expect(new Set(resources).size).toBe(resources.length);
		for (const slug of resources) {
			expect(main).not.toContain(slug);
		}
	});

	it('rejects reserved top-level main slugs', () => {
		for (const post of blogPosts) {
			expect(RESERVED_TOP_LEVEL_SLUGS).not.toContain(post.slug);
		}
	});

	it('pairs every registry entry with a route directory', () => {
		for (const post of blogPosts) {
			expect(existsSync(path.join(root, 'src/routes', post.slug, '+page.svelte'))).toBe(true);
		}
		for (const post of resourcePosts) {
			expect(
				existsSync(path.join(root, 'src/routes/resources', post.slug, '+page.svelte'))
			).toBe(true);
		}
	});

	it('resolves authors and tags', () => {
		for (const post of [...blogPosts, ...resourcePosts]) {
			expect(getAuthor(post.authorId)).toBeTruthy();
		}
		for (const post of blogPosts) {
			for (const tagSlug of post.tags) {
				expect(getTag(tagSlug)).toBeTruthy();
			}
		}
	});

	it('uses valid ISO dates and modified >= published', () => {
		for (const post of [...blogPosts, ...resourcePosts]) {
			expect(post.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
			if (post.dateModified) {
				expect(post.dateModified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
				expect(post.dateModified >= post.datePublished).toBe(true);
			}
		}
	});

	it('excludes drafts from public lists and keeps resources out of tags/search surfaces', () => {
		expect(listPublishedPosts().every((post: BlogPost) => !post.draft)).toBe(true);
		expect(listPublishedResourcePosts().every((post: ResourcePost) => !post.draft)).toBe(true);
		for (const tag of listTags()) {
			expect(tag.count).toBeGreaterThan(0);
		}
	});

	it('builds a sitemap without /search and with resources', () => {
		const locs = listSitemapEntries().map((entry: SitemapEntry) => entry.loc);
		expect(locs.some((loc: string) => loc.endsWith('/search'))).toBe(false);
		expect(locs.some((loc: string) => loc.includes('/resources/'))).toBe(true);
		expect(locs).toContain('https://blog.liforma.ai/');
	});

	it('requires image metadata files for published posts', () => {
		for (const post of [...listPublishedPosts(), ...listPublishedResourcePosts()]) {
			for (const width of [480, 960, 1440]) {
				expect(
					existsSync(path.join(root, 'static/images', `${post.imageKey}-${width}.webp`))
				).toBe(true);
			}
			expect(post.imageAlt.trim().length).toBeGreaterThan(0);
		}
	});
});
