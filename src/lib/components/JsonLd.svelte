<script lang="ts">
	/**
	 * Trusted JSON-LD from our own registries (not user input).
	 * Rendered as raw script tags so crawlers see structured data in prerendered HTML.
	 */
	let { data }: { data: Record<string, unknown> | Array<Record<string, unknown>> } = $props();

	const items = $derived(Array.isArray(data) ? data : [data]);

	function serialize(item: Record<string, unknown>): string {
		return JSON.stringify(item).replaceAll('<', '\\u003c');
	}
</script>

{#each items as item, index (index)}
	{@html '<script type="application/ld+json">' + serialize(item) + '<' + '/script>'}
{/each}
