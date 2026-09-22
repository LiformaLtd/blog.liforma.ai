<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { listTags } from '$lib/blog';

	const tags = listTags();
</script>

<SEOHead
	title="All tags"
	description="Browse topics covered on the Liforma Blog."
	pathname="/tags"
/>

<section class="page">
	<header>
		<h1>All tags</h1>
		<p>Browse topics covered on the blog. Click a tag to see related posts.</p>
	</header>

	<ul class="list">
		{#each tags as tag (tag.slug)}
			<li>
				<a href="/tag/{tag.slug}">
					<span class="label">{tag.label}</span>
					<span class="count">{tag.count}</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.page {
		max-width: var(--max);
		margin: 0 auto;
		padding: 2.5rem 1.25rem 3rem;
	}

	header {
		max-width: 36rem;
		margin-bottom: 1.75rem;
	}

	h1 {
		margin: 0;
		font-size: clamp(1.8rem, 4vw, 2.4rem);
	}

	p {
		margin: 0.75rem 0 0;
		color: var(--muted);
	}

	.list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.65rem;
		max-width: 28rem;
	}

	a {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.85rem 1rem;
		border: 1px solid var(--border);
		border-radius: 0.85rem;
		background: var(--card-bg);
		text-decoration: none;
	}

	a:hover {
		border-color: rgba(31, 107, 92, 0.35);
	}

	.count {
		color: var(--muted);
		font-variant-numeric: tabular-nums;
	}
</style>
