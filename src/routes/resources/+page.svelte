<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import {
		formatDate,
		imageSrc,
		imageSrcset,
		listPublishedResourcePosts,
		type ResourcePost
	} from '$lib/blog';
	import { absoluteUrl } from '$lib/site';

	const resources = listPublishedResourcePosts();
	const reviews = resources.filter((resource) => resource.purpose === 'review');
	const comparisons = resources.filter(
		(resource) =>
			resource.purpose === 'alternatives' ||
			resource.purpose === 'comparison' ||
			resource.purpose === 'category'
	);
	const integrations = resources.filter((resource) => resource.purpose === 'integration');

	const description =
		'Independent-minded reviews, comparisons and practical integration guides for interactive AI avatars, conversational video platforms and voice-agent avatar stacks.';

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

	function kindLabel(resource: ResourcePost): string {
		switch (resource.purpose) {
			case 'review':
				return 'Review';
			case 'alternatives':
				return 'Alternatives';
			case 'comparison':
				return 'Comparison';
			case 'category':
				return 'Buyer guide';
			case 'integration':
				return 'Integration guide';
		}
	}
</script>

<SEOHead title="Interactive AI Avatar Resources" {description} pathname="/resources" jsonLd={jsonLd} />

<section class="page">
	<header class="header">
		<p class="eyebrow">Liforma Resources</p>
		<h1>Compare avatar platforms. Connect the stack you already use.</h1>
		<p>
			Practical reviews, alternatives and integration guides for teams building interactive AI
			characters, real-time avatars and conversational experiences.
		</p>
	</header>

	{#if reviews.length}
		<section class="resource-section">
			<div class="section-heading">
				<p class="eyebrow">Platform reviews</p>
				<h2>Understand the major interactive-avatar platforms</h2>
				<p>Current pricing, architecture, strengths, trade-offs and the use cases each platform fits best.</p>
			</div>
			<div class="grid">
				{#each reviews as resource, index (resource.slug)}
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
							<span class="kind">{kindLabel(resource)}</span>
							<h3>{resource.title}</h3>
							<p>{resource.description}</p>
							<time datetime={resource.datePublished}>{formatDate(resource.datePublished)}</time>
						</div>
					</a>
				{/each}
			</div>
		</section>
	{/if}

	{#if comparisons.length}
		<section class="resource-section">
			<div class="section-heading">
				<p class="eyebrow">Compare platforms</p>
				<h2>Choose the right architecture for your use case</h2>
				<p>Alternatives and head-to-head comparisons organised around what you are actually trying to build.</p>
			</div>
			<div class="grid">
				{#each comparisons as resource (resource.slug)}
					<a class="card" href="/resources/{resource.slug}">
						<div class="cover">
							<img
								src={imageSrc(resource.imageKey, 480)}
								srcset={imageSrcset(resource.imageKey)}
								sizes="(max-width: 720px) 100vw, 360px"
								width="480"
								height="270"
								alt={resource.imageAlt}
								loading="lazy"
								decoding="async"
							/>
						</div>
						<div class="body">
							<span class="kind">{kindLabel(resource)}</span>
							<h3>{resource.title}</h3>
							<p>{resource.description}</p>
							<time datetime={resource.datePublished}>{formatDate(resource.datePublished)}</time>
						</div>
					</a>
				{/each}
			</div>
		</section>
	{/if}

	{#if integrations.length}
		<section class="resource-section">
			<div class="section-heading">
				<p class="eyebrow">Integration guides</p>
				<h2>Add an animated character to the AI stack you already have</h2>
				<p>Keep your existing agent, model and voice provider, and connect Liforma as the visual character layer.</p>
			</div>
			<div class="grid">
				{#each integrations as resource (resource.slug)}
					<a class="card" href="/resources/{resource.slug}">
						<div class="cover">
							<img
								src={imageSrc(resource.imageKey, 480)}
								srcset={imageSrcset(resource.imageKey)}
								sizes="(max-width: 720px) 100vw, 360px"
								width="480"
								height="270"
								alt={resource.imageAlt}
								loading="lazy"
								decoding="async"
							/>
						</div>
						<div class="body">
							<span class="kind">{kindLabel(resource)}</span>
							<h3>{resource.title}</h3>
							<p>{resource.description}</p>
							<time datetime={resource.datePublished}>{formatDate(resource.datePublished)}</time>
						</div>
					</a>
				{/each}
			</div>
		</section>
	{/if}
</section>

<style>
	.page {
		max-width: var(--max);
		margin: 0 auto;
		padding: 2.5rem 1.25rem 3rem;
	}

	.header {
		max-width: 52rem;
		margin-bottom: 3rem;
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

	.header > p:last-child,
	.section-heading > p:last-child {
		margin: 0.8rem 0 0;
		color: var(--muted);
		font-size: 1.08rem;
	}

	.resource-section + .resource-section {
		margin-top: 3.5rem;
	}

	.section-heading {
		max-width: 46rem;
		margin-bottom: 1.4rem;
	}

	.section-heading h2 {
		margin: 0;
		font-size: clamp(1.4rem, 2.5vw, 1.9rem);
		line-height: 1.2;
		letter-spacing: -0.02em;
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
		transition:
			transform 160ms ease,
			box-shadow 160ms ease;
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

	h3 {
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
