<script lang="ts">
	import SEOHead from './SEOHead.svelte';
	import {
		formatDate,
		getAuthor,
		imageSrc,
		imageSrcset,
		resolvePostTags,
		type BlogPost,
		type ResourcePost
	} from '$lib/blog';
	import { absoluteUrl, SITE_URL } from '$lib/site';

	type Article = BlogPost | ResourcePost;

	let {
		post,
		pathname,
		children
	}: {
		post: Article;
		pathname: string;
		children: import('svelte').Snippet;
	} = $props();

	const author = $derived(getAuthor(post.authorId));
	const tags = $derived('tags' in post ? resolvePostTags(post) : []);
	const published = $derived(post.datePublished);
	const modified = $derived(post.dateModified ?? post.datePublished);
	const ogImage = $derived(absoluteUrl(imageSrc(post.imageKey, 1440)));

	const jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.description,
		datePublished: published,
		dateModified: modified,
		author: {
			'@type': 'Person',
			name: author?.name ?? 'Liforma',
			url: author?.url
		},
		publisher: {
			'@type': 'Organization',
			name: 'Liforma',
			url: 'https://www.liforma.ai',
			logo: {
				'@type': 'ImageObject',
				url: `${SITE_URL}/favicon-32.png`
			}
		},
		image: [ogImage],
		mainEntityOfPage: absoluteUrl(pathname),
		url: absoluteUrl(pathname)
	});
</script>

<SEOHead
	title={post.title}
	description={post.description}
	{pathname}
	ogType="article"
	{ogImage}
	ogImageAlt={post.imageAlt}
	ogImageWidth={1440}
	ogImageHeight={810}
	publishedTime={published}
	modifiedTime={modified}
	jsonLd={jsonLd}
/>

<article class="article">
	<header class="header">
		<p class="eyebrow">{'tags' in post ? 'Article' : 'Resource'}</p>
		<h1>{post.title}</h1>
		<p class="lede">{post.description}</p>
		<div class="byline">
			<span>{author?.name ?? 'Liforma'}</span>
			{#if author?.role}
				<span class="sep">·</span>
				<span>{author.role}</span>
			{/if}
			<span class="sep">·</span>
			<time datetime={published}>{formatDate(published)}</time>
		</div>
		{#if tags.length}
			<div class="tags">
				{#each tags as tag (tag.slug)}
					<a class="pill" href="/tag/{tag.slug}">{tag.label}</a>
				{/each}
			</div>
		{/if}
	</header>

	<figure class="hero">
		<img
			src={imageSrc(post.imageKey, 1440)}
			srcset={imageSrcset(post.imageKey)}
			sizes="(max-width: 900px) 100vw, 720px"
			width="1440"
			height="810"
			alt={post.imageAlt}
			loading="eager"
			decoding="async"
			fetchpriority="high"
		/>
	</figure>

	<div class="body">
		{@render children()}
	</div>
</article>

<style>
	.article {
		max-width: var(--content);
		margin: 0 auto;
		padding: 2.5rem 1.25rem 4rem;
	}

	.eyebrow {
		margin: 0 0 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--accent);
	}

	h1 {
		margin: 0;
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		line-height: 1.15;
		letter-spacing: -0.02em;
	}

	.lede {
		margin: 1rem 0 0;
		color: var(--muted);
		font-size: 1.08rem;
	}

	.byline {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
		color: var(--muted);
		font-size: 0.92rem;
	}

	.sep {
		opacity: 0.5;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-top: 1rem;
	}

	.pill {
		display: inline-flex;
		padding: 0.2rem 0.55rem;
		border-radius: 999px;
		background: var(--accent-soft);
		color: var(--accent);
		text-decoration: none;
		font-size: 0.8rem;
	}

	.hero {
		margin: 1.75rem 0 0;
		border-radius: 1rem;
		overflow: hidden;
		aspect-ratio: 16 / 9;
		background: #dde5e1;
	}

	.hero img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.body {
		margin-top: 2rem;
		font-size: 1.05rem;
	}

	.body :global(p) {
		margin: 0 0 1.15rem;
	}

	.body :global(h2) {
		margin: 2rem 0 0.75rem;
		font-size: 1.35rem;
		line-height: 1.25;
	}

	.body :global(ul),
	.body :global(ol) {
		margin: 0 0 1.15rem;
		padding-left: 1.2rem;
	}

	.body :global(li + li) {
		margin-top: 0.35rem;
	}

	.body :global(a) {
		color: var(--accent);
	}

	.body :global(.callout) {
		margin: 1.5rem 0;
		padding: 1rem 1.1rem;
		border-radius: 0.85rem;
		background: var(--accent-soft);
	}

	.body :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: 0 0 1.25rem;
		font-size: 0.95rem;
	}

	.body :global(th),
	.body :global(td) {
		border: 1px solid var(--border);
		padding: 0.55rem 0.65rem;
		text-align: left;
		vertical-align: top;
	}
</style>
