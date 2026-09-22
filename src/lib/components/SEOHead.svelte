<script lang="ts">
	import JsonLd from './JsonLd.svelte';
	import { absoluteUrl, pageTitle, SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION } from '$lib/site';

	type Props = {
		title?: string;
		description?: string;
		pathname?: string;
		ogType?: 'website' | 'article';
		ogImage?: string;
		ogImageAlt?: string;
		ogImageWidth?: number;
		ogImageHeight?: number;
		noindex?: boolean;
		publishedTime?: string;
		modifiedTime?: string;
		jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
	};

	let {
		title = SITE_NAME,
		description = DEFAULT_DESCRIPTION,
		pathname = '/',
		ogType = 'website',
		ogImage = `${SITE_URL}/og-default.png`,
		ogImageAlt = 'Liforma Blog',
		ogImageWidth = 1200,
		ogImageHeight = 630,
		noindex = false,
		publishedTime,
		modifiedTime,
		jsonLd
	}: Props = $props();

	const canonical = $derived(absoluteUrl(pathname));
	const fullTitle = $derived(pageTitle(title));
	const robots = $derived(noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large');
	const ld = $derived(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta name="robots" content={robots} />
	<link rel="alternate" type="application/rss+xml" title="{SITE_NAME} RSS" href="{SITE_URL}/rss.xml" />

	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content={ogType} />
	<meta property="og:site_name" content="Liforma" />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content={String(ogImageWidth)} />
	<meta property="og:image:height" content={String(ogImageHeight)} />
	<meta property="og:image:alt" content={ogImageAlt} />
	{#if publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	{#if modifiedTime}
		<meta property="article:modified_time" content={modifiedTime} />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	{#each ld as item (JSON.stringify(item))}
		<JsonLd data={item} />
	{/each}
</svelte:head>
