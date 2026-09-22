<script lang="ts">
	import { browser } from '$app/environment';
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import { ExperienceWidget } from '@liforma/client/svelte';

	const experienceId = env.PUBLIC_BLOG_EXPERIENCE_ID?.trim() ?? '';
	let ready = $state(false);

	onMount(() => {
		ready = true;
	});
</script>

{#if browser && ready && experienceId}
	<ExperienceWidget
		{experienceId}
		alt="Talk with Liforma"
		position="bottom-right"
		offset={16}
		prefetch="onExpand"
	/>
{/if}
