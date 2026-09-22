<script lang="ts">
	import logo from '$lib/assets/liforma-logo.svg';

	type Variant = 'nav' | 'footer';
	type Tone = 'light' | 'dark';

	let {
		variant = 'nav',
		tone = 'light',
		href = 'https://www.liforma.ai/',
		class: className = ''
	}: {
		variant?: Variant;
		tone?: Tone;
		href?: string;
		class?: string;
	} = $props();
</script>

<a class="liforma-logo {variant} tone-{tone} {className}" {href} aria-label="Liforma home">
	<img src={logo} alt="" aria-hidden="true" class="mark" width="64" height="64" decoding="async" />
	<span class="wordmark">liforma</span>
</a>

<style>
	.liforma-logo {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		text-decoration: none;
	}

	.mark {
		display: block;
		flex: none;
		height: auto;
	}

	.wordmark {
		font-family: 'Comfortaa', sans-serif;
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1;
	}

	.liforma-logo.nav .mark {
		width: 1.75rem;
	}

	.liforma-logo.nav .wordmark {
		font-size: 1.5rem;
	}

	.liforma-logo.footer .mark {
		width: 1.35rem;
	}

	.liforma-logo.footer .wordmark {
		font-size: 1.25rem;
	}

	.liforma-logo.tone-light .wordmark {
		color: #171812;
	}

	.liforma-logo.tone-dark .wordmark {
		color: #f6f2ea;
	}
</style>
