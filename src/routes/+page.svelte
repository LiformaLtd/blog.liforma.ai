<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { listPublishedPosts } from '$lib/blog';
	import { DEFAULT_DESCRIPTION, SITE_NAME, absoluteUrl } from '$lib/site';

	const posts = listPublishedPosts();

	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Liforma',
			url: 'https://www.liforma.ai'
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Blog',
			name: SITE_NAME,
			url: absoluteUrl('/'),
			description: DEFAULT_DESCRIPTION,
			publisher: { '@type': 'Organization', name: 'Liforma', url: 'https://www.liforma.ai' }
		}
	];
</script>

<SEOHead pathname="/" jsonLd={jsonLd} />

<section class="page">
	<header class="header">
		<h1>Blog</h1>
		<p>
			Product updates, technical deep dives, and practical guides for Liforma avatar experiences.
		</p>
	</header>

	<div class="grid">
		{#each posts as post, index (post.slug)}
			<BlogCard {post} eager={index < 3} />
		{/each}
	</div>
</section>

<style>
	.page {
		max-width: var(--max);
		margin: 0 auto;
		padding: 2.5rem 1.25rem 3rem;
	}

	.header {
		max-width: 40rem;
		margin-bottom: 2rem;
	}

	h1 {
		margin: 0;
		font-size: clamp(2rem, 4vw, 2.8rem);
		letter-spacing: -0.03em;
	}

	p {
		margin: 0.75rem 0 0;
		color: var(--muted);
		font-size: 1.08rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(16.5rem, 1fr));
		gap: 1.25rem;
	}
</style>
