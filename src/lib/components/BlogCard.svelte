<script lang="ts">
	import {
		formatDate,
		imageSrc,
		imageSrcset,
		resolvePostTags,
		type BlogPost
	} from '$lib/blog';

	let { post, eager = false }: { post: BlogPost; eager?: boolean } = $props();

	const tags = $derived(resolvePostTags(post));
</script>

<a class="card" href="/{post.slug}">
	<div class="cover">
		<img
			src={imageSrc(post.imageKey, 480)}
			srcset={imageSrcset(post.imageKey)}
			sizes="(max-width: 720px) 100vw, 360px"
			width="480"
			height="270"
			alt={post.imageAlt}
			loading={eager ? 'eager' : 'lazy'}
			decoding="async"
			{...(eager ? { fetchpriority: 'high' as const } : {})}
		/>
	</div>
	<div class="body">
		<h2>{post.title}</h2>
		<p class="desc">{post.description}</p>
		<div class="meta">
			<span class="pill">{formatDate(post.datePublished)}</span>
			{#each tags as tag (tag.slug)}
				<span class="pill">{tag.label}</span>
			{/each}
		</div>
	</div>
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		background: var(--card-bg);
		border: 1px solid var(--border);
		border-radius: 1rem;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		height: 100%;
		transition: transform 160ms ease, box-shadow 160ms ease;
	}

	.card:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 28px rgba(23, 24, 18, 0.08);
	}

	.cover {
		aspect-ratio: 16 / 9;
		background: #dde5e1;
		overflow: hidden;
	}

	.cover img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1.15rem 1.15rem 1.25rem;
		flex: 1;
	}

	h2 {
		margin: 0;
		font-size: 1.15rem;
		line-height: 1.3;
	}

	.desc {
		margin: 0;
		color: var(--muted);
		font-size: 0.95rem;
		flex: 1;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.pill {
		display: inline-flex;
		align-items: center;
		padding: 0.2rem 0.55rem;
		border-radius: 999px;
		background: var(--accent-soft);
		color: var(--accent);
		font-size: 0.78rem;
	}
</style>
