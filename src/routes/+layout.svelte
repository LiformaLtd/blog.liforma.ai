<script lang="ts">
	import '$lib/styles/global.css';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import ExperienceWidgetHost from '$lib/components/ExperienceWidgetHost.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="icon" href="/favicon.ico" sizes="32x32" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link
		rel="preload"
		href="/fonts/Comfortaa-Bold.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="shell">
	<SiteHeader />
	<main class="main">
		{@render children()}
	</main>
	<SiteFooter />
	<ExperienceWidgetHost />
</div>

<style>
	.shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		padding-bottom: 5.5rem;
	}

	.main {
		flex: 1;
	}
</style>
