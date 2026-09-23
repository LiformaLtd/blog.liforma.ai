<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import {
		formatDate,
		imageSrc,
		imageSrcset,
		listPublishedResourcePosts
	} from '$lib/blog';
	import { absoluteUrl } from '$lib/site';

	const resources = listPublishedResourcePosts();
	const description =
		'Practical Liforma resources for adding realtime avatars to ElevenLabs, OpenAI Realtime, Gemini Live, Deepgram and LiveKit, plus platform comparisons and implementation guides.';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Liforma Resources',
		url: absoluteUrl('/resources'),
		description,
		hasPart: resources.map((resource) => ({
			'@type': 'BlogPosting',
			name: resource.title,
			url: absoluteUrl(`/resources/${resource.slug}`)
		}))
	};
</script>

<SEOHead title="Resources" {description} pathname="/resources" jsonLd={jsonLd} />

<section class="page">
	<header class="header">
		<p class="eyebrow">Liforma Resources</p>
		<h1>Build a face for the voice agent you already have</h1>
		<p>
			Provider-specific guides for adding Liforma realtime characters to leading voice and
			speech-to-speech stacks, plus practical platform comparisons.
		</p>
	</header>

	<div class="grid">
		{#each resources as resource, index (resource.slug)}
			<a class="card" href="/resources/{resource.slug}">
				<div class="cover">
					<img
						src={imageSrc(resource.imageKey, 480)}
						srcset={imageSrcset(resource.imageKey)}
						sizes="(max-width: 720px) 100vw, 360px"
						width="480"
						height="270"
						alt={resource.imageAlt}
						loading={index < 3 ? 'eager' : 'lazy'}
						decoding="async"
					/>
				</div>
				<div class="body">
					<span class="kind">{resource.purpose === 'comparison' ? 'Comparison' : 'Integration guide'}</span>
					<h2>{resource.title}</h2>
					<p>{resource.description}</p>
					<time datetime={resource.datePublished}>{formatDate(resource.datePublished)}</time>
				</div>
			</a>
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
		max-width: 46rem;
		margin-bottom: 2rem;
	}

	.eyebrow {
		margin: 0 0 0.45rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--accent);
	}

	h1 {
		margin: 0;
		font-size: clamp(2rem, 4vw, 2.8rem);
		line-height: 1.12;
		letter-spacing: -0.03em;
	}

	.header > p:last-child {
		margin: 0.8rem 0 0;
		color: var(--muted);
		font-size: 1.08rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
		gap: 1.25rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		background: var(--card-bg);
		border: 1px solid var(--border);
		border-radius: 1rem;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
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
		gap: 0.7rem;
		padding: 1.15rem 1.15rem 1.25rem;
		flex: 1;
	}

	.kind {
		color: var(--accent);
		font-size: 0.78rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	h2 {
		margin: 0;
		font-size: 1.15rem;
		line-height: 1.3;
	}

	.body p {
		margin: 0;
		color: var(--muted);
		font-size: 0.95rem;
		flex: 1;
	}

	time {
		color: var(--muted);
		font-size: 0.82rem;
	}
</style>
