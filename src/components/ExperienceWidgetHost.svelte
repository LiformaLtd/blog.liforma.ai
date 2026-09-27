<script lang="ts">
	import { ExperienceWidget } from '@liforma/client/svelte';
	import { onMount } from 'svelte';

	let { experienceId }: { experienceId: string } = $props();
	let ready = $state(false);

	onMount(() => {
		ready = true;
	});
</script>

{#if ready && experienceId}
	<ExperienceWidget
		{experienceId}
		alt="Talk with Liforma"
		position="bottom-right"
		offset={16}
		prefetch="onExpand"
		websiteAssistant={true}
	/>
{/if}
