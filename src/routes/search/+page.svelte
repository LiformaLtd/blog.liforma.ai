<script lang="ts">
	import { page } from '$app/stores';
	import { replaceState } from '$app/navigation';
	import { resolve } from '$app/paths';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { listPublishedPosts, resolvePostTags, type BlogPost } from '$lib/blog';

	const allPosts = listPublishedPosts();

	let query = $state('');

	$effect(() => {
		const q = $page.url.searchParams.get('q') ?? '';
		query = q;
	});

	function matches(post: BlogPost, q: string): boolean {
		const needle = q.trim().toLowerCase();
		if (!needle) return false;
		const tagLabels = resolvePostTags(post)
			.map((tag) => tag.label)
			.join(' ');
		const haystack = `${post.title} ${post.description} ${tagLabels}`.toLowerCase();
		return haystack.includes(needle);
	}

	const results = $derived(query.trim() ? allPosts.filter((post) => matches(post, query)) : []);

	function onInput(event: Event) {
		const value = (event.currentTarget as HTMLInputElement).value;
		query = value;
		const trimmed = value.trim();
		const href = trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : '/search';
		void replaceState(resolve(href as '/'), {});
	}
</script>

<SEOHead
	title="Search"
	description="Search articles on the Liforma Blog."
	pathname="/search"
	noindex={true}
/>

<section class="page">
	<header>
		<h1>Search</h1>
		<p>Find articles about avatar experiences, product updates, and engineering.</p>
	</header>

	<label class="search">
		<span class="sr-only">Search blog posts</span>
		<input
			type="search"
			placeholder="Search articles, topics…"
			value={query}
			oninput={onInput}
			autocomplete="off"
		/>
	</label>

	{#if query.trim()}
		<p class="status">
			{results.length} result{results.length === 1 ? '' : 's'} for “{query.trim()}”
		</p>
		{#if results.length}
			<div class="grid">
				{#each results as post (post.slug)}
					<BlogCard {post} />
				{/each}
			</div>
		{:else}
			<p class="empty">No matching posts. Try a broader term or browse <a href="/tags">tags</a>.</p>
		{/if}
	{:else}
		<p class="empty">Type a keyword to search published posts.</p>
	{/if}
</section>

<style>
	.page {
		max-width: var(--max);
		margin: 0 auto;
		padding: 2.5rem 1.25rem 3rem;
	}

	header {
		max-width: 36rem;
		margin-bottom: 1.5rem;
	}

	h1 {
		margin: 0;
		font-size: clamp(1.8rem, 4vw, 2.4rem);
	}

	header p {
		margin: 0.75rem 0 0;
		color: var(--muted);
	}

	.search input {
		width: min(100%, 28rem);
		padding: 0.85rem 1rem;
		border: 1px solid var(--border);
		border-radius: 0.85rem;
		background: var(--card-bg);
	}

	.status,
	.empty {
		margin: 1.25rem 0 0;
		color: var(--muted);
	}

	.grid {
		margin-top: 1.25rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(16.5rem, 1fr));
		gap: 1.25rem;
	}

	a {
		color: var(--accent);
	}
</style>
