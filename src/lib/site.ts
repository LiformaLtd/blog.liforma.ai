/**
 * Canonical production origin for absolute URLs (sitemap, canonical, OG, JSON-LD).
 * Do not derive from the request host — previews must still emit production canonicals.
 * Optional PUBLIC_SITE_URL overrides for rare non-prod canonical testing only.
 */
import { env } from '$env/dynamic/public';

export const SITE_NAME = 'Liforma Blog';
export const SITE_URL = (env.PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://blog.liforma.ai');
export const DEFAULT_DESCRIPTION =
	'Product updates, technical deep dives, and practical guides for Liforma avatar experiences.';
export const WWW_URL = 'https://www.liforma.ai';
export const DOCS_URL = 'https://docs.liforma.ai';
export const APP_URL = 'https://app.liforma.ai';

export const RESERVED_TOP_LEVEL_SLUGS = [
	'tags',
	'tag',
	'search',
	'resources',
	'robots.txt',
	'sitemap.xml',
	'rss.xml',
	'fonts',
	'images',
	'favicon.ico',
	'favicon.svg',
	'favicon-32.png',
	'apple-touch-icon.png',
	'og-default.png'
] as const;

export function absoluteUrl(pathname: string): string {
	const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
	if (path === '/') return `${SITE_URL}/`;
	return `${SITE_URL}${path}`;
}

export function pageTitle(title: string): string {
	return title === SITE_NAME ? title : `${title} · ${SITE_NAME}`;
}
