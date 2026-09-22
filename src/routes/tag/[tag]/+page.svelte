<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';

	let { data } = $props();
</script>

<SEOHead
	title={`Posts tagged ${data.tag.label}`}
	description={`Articles tagged “${data.tag.label}” on the Liforma Blog.`}
	pathname={`/tag/${data.tag.slug}`}
/>

<section class="page">
	<header>
		<p class="eyebrow">Tag</p>
		<h1>{data.tag.label}</h1>
		<p>{data.posts.length} post{data.posts.length === 1 ? '' : 's'}</p>
	</header>

	<div class="grid">
		{#each data.posts as post, index (post.slug)}
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

	.eyebrow {
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--accent);
	}

	h1 {
		margin: 0.35rem 0 0;
		font-size: clamp(1.8rem, 4vw, 2.4rem);
	}

	header p:last-child {
		margin: 0.5rem 0 0;
		color: var(--muted);
	}

	.grid {
		margin-top: 1.75rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(16.5rem, 1fr));
		gap: 1.25rem;
	}
</style>
