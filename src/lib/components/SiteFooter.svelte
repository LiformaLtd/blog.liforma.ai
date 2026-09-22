<script lang="ts">
	import LiformaLogo from './LiformaLogo.svelte';
	import { WWW_URL } from '$lib/site';

	const year = new Date().getFullYear();
</script>

<footer class="site-footer" aria-label="Liforma footer">
	<div class="inner">
		<LiformaLogo variant="footer" href="{WWW_URL}/" />
		<nav class="links" aria-label="Footer navigation">
			<a href="/">Blog</a>
			<a href="/tags">Tags</a>
			<a href="/search">Search</a>
			<a href="{WWW_URL}/pricing">Pricing</a>
			<a href="https://docs.liforma.ai/">Docs</a>
		</nav>
		<nav class="links secondary" aria-label="Company links">
			<a href="mailto:info@liforma.ai">Contact</a>
			<a href="{WWW_URL}/legal/privacy-policy">Privacy</a>
			<a href="{WWW_URL}/legal/terms-of-service">Terms</a>
			<a href="{WWW_URL}/legal/acceptable-use">Acceptable use</a>
		</nav>
		<p>© {year} Liforma</p>
	</div>
</footer>

<style>
	.site-footer {
		margin-top: 4rem;
		border-top: 1px solid var(--border);
		background: #f8f7f3;
		color: var(--muted);
	}

	.inner {
		max-width: var(--max);
		margin: 0 auto;
		padding: 2rem 1.25rem 2.5rem;
		display: grid;
		gap: 1rem;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem 1rem;
	}

	.links a {
		color: rgba(23, 24, 18, 0.66);
		text-decoration: none;
	}

	.links a:hover {
		color: var(--page-fg);
	}

	p {
		margin: 0;
		font-size: 0.9rem;
	}
</style>
