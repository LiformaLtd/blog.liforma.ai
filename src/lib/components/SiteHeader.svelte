<script lang="ts">
	import { page } from '$app/stores';
	import LiformaLogo from './LiformaLogo.svelte';
	import { DOCS_URL, WWW_URL } from '$lib/site';

	const links = [
		{ href: '/', label: 'Blog' },
		{ href: '/resources', label: 'Resources' },
		{ href: '/tags', label: 'Tags' },
		{ href: '/search', label: 'Search' }
	];
</script>

<header class="site-header">
	<div class="inner">
		<LiformaLogo href="{WWW_URL}/" />
		<nav aria-label="Primary">
			{#each links as link (link.href)}
				<a href={link.href} aria-current={$page.url.pathname === link.href ? 'page' : undefined}
					>{link.label}</a
				>
			{/each}
			<a href={DOCS_URL} rel="noreferrer">Docs</a>
			<a href="{WWW_URL}/" rel="noreferrer">Experiences</a>
		</nav>
	</div>
</header>

<style>
	.site-header {
		border-bottom: 1px solid var(--border);
		background: rgba(248, 247, 243, 0.92);
		backdrop-filter: blur(8px);
		position: sticky;
		top: 0;
		z-index: 20;
	}

	.inner {
		max-width: var(--max);
		margin: 0 auto;
		padding: 0.9rem 1.25rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem 1.1rem;
		align-items: center;
	}

	nav a {
		text-decoration: none;
		color: var(--muted);
		font-size: 0.95rem;
	}

	nav a:hover,
	nav a[aria-current='page'] {
		color: var(--page-fg);
	}

	@media (max-width: 720px) {
		.inner {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
