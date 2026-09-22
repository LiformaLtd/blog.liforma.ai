<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('what-is-an-avatar-experience')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		An <strong>Avatar Experience</strong> is a reusable Liforma configuration that turns characters,
		agents, voices, sets, and rules into a live interactive session someone can open in a browser.
	</p>
	<p>
		Think of it as the product unit between “an avatar asset” and “a one-off demo page.” You author an
		experience once (<code>exp_…</code>), publish a revision, then mint a Session Launch whenever a
		user starts it — on <a href="https://www.liforma.ai/">www.liforma.ai</a>, in your app via the SDK,
		or through a corner widget like the one on this blog.
	</p>

	<h2>What it composes</h2>
	<ul>
		<li><strong>Character</strong> — who the visitor talks to</li>
		<li><strong>Avatar</strong> — how they look and animate</li>
		<li><strong>Agent</strong> — conversational intelligence and tools</li>
		<li><strong>Voice</strong> — text-to-speech settings</li>
		<li><strong>World / set / backdrop</strong> — situation and visual plate</li>
	</ul>

	<p>
		The public integrator contract is the Session Launch (<code>{'{ session, launch }'}</code>), consumed
		by <code>@liforma/client</code>. Runtime speech and rendering happen on
		<code>player.liforma.ai</code>; your site stays a thin host.
	</p>

	<div class="callout">
		<strong>Try one:</strong>
		<a href="https://www.liforma.ai/">Browse public experiences on www.liforma.ai</a>
		or read the
		<a href="https://docs.liforma.ai/getting-started/concepts">concepts guide</a>.
	</div>

	<h2>Why the distinction matters</h2>
	<p>
		Teams evaluating avatar products often compare video generators with interactive runtimes. Liforma
		is built for the latter: low-latency conversation, browser-native animation, and experiences you
		can embed. For a factual side-by-side with a video-oriented alternative, see
		<a href="/resources/liforma-vs-d-id">Liforma vs D-ID</a>.
	</p>
</BlogPostLayout>
