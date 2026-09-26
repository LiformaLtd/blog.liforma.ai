<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getResourcePost } from '$lib/blog';

	const post = getResourcePost('tavus-review')!;
</script>

<BlogPostLayout {post} pathname="/resources/{post.slug}">
	<p>
		<strong>Tavus CVI is one of the most complete platforms for building photorealistic, real-time AI humans.</strong>
		It combines conversational video, speech, language models, perception, memory and developer APIs in
		one stack. That makes it particularly attractive when a realistic digital human is central to the
		product rather than simply a visual layer on top of an existing voice agent.
	</p>

	<div class="callout">
		<strong>Disclosure:</strong> Liforma is an interactive AI character platform and overlaps with Tavus
		in some use cases. This review is based on Tavus's current public product information and pricing,
		checked on 26 September 2026. We have not yet run a controlled cross-platform benchmark, so we do not
		present subjective claims about visual quality or latency as measured facts.
	</div>

	<h2>What is Tavus?</h2>
	<p>
		Tavus's core developer product is the <strong>Conversational Video Interface (CVI)</strong>. Rather
		than providing only avatar rendering, CVI is designed as an end-to-end real-time conversational
		system. Tavus's pricing page describes a stack that includes speech recognition, language-model
		reasoning, text-to-speech, turn taking and WebRTC video delivery.
	</p>
	<p>
		The visual identity is a <strong>Replica</strong>: a photorealistic AI human. Tavus provides stock
		replicas and, on paid plans, tools for creating custom replicas from an image or short recording.
	</p>

	<h2>What Tavus CVI includes</h2>
	<ul>
		<li>real-time conversational video;</li>
		<li>stock and custom photorealistic AI humans;</li>
		<li>speech recognition and text-to-speech;</li>
		<li>LLM-driven conversation;</li>
		<li>WebRTC delivery;</li>
		<li>turn-taking and interruption handling;</li>
		<li>conversation transcripts and recordings on higher tiers;</li>
		<li>memory, objectives and guardrails;</li>
		<li>knowledge-base / RAG features;</li>
		<li>function calling; and</li>
		<li>visual and audio perception features.</li>
	</ul>
	<p>
		That breadth is important. A buyer comparing Tavus with an avatar-rendering API should not compare
		the headline per-minute prices without accounting for the additional STT, LLM, TTS and orchestration
		services that Tavus includes.
	</p>

	<h2>Tavus pricing in September 2026</h2>
	<table>
		<thead>
			<tr>
				<th>Plan</th>
				<th>Monthly price</th>
				<th>Included CVI minutes</th>
				<th>Published overage</th>
				<th>Concurrency</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Basic</td>
				<td>Free</td>
				<td>25</td>
				<td>—</td>
				<td>1</td>
			</tr>
			<tr>
				<td>Starter</td>
				<td>$59</td>
				<td>100</td>
				<td>$0.37/min</td>
				<td>Up to 3</td>
			</tr>
			<tr>
				<td>Growth</td>
				<td>$397</td>
				<td>1,250</td>
				<td>$0.32/min</td>
				<td>Up to 10</td>
			</tr>
			<tr>
				<td>Enterprise</td>
				<td>Custom</td>
				<td>Custom</td>
				<td>Volume pricing</td>
				<td>Custom</td>
			</tr>
		</tbody>
	</table>
	<p>
		Tavus says conversational video usage is billed with a 30-second minimum and additional usage rounded
		in six-second increments. Starter includes three custom Replica trainings per month; Growth includes
		seven and expands the stock library.
	</p>

	<h2>Where Tavus looks strongest</h2>
	<h3>1. Photorealistic digital humans</h3>
	<p>
		Tavus is clearly designed around realistic human presence. If the product requirement is "make this
		person appear to be on a live video call", that is much closer to Tavus's centre of gravity than a
		stylised-character or game-oriented avatar platform.
	</p>

	<h3>2. A complete conversational stack</h3>
	<p>
		CVI can remove a large amount of integration work. Teams do not necessarily need to assemble a
		separate speech recogniser, LLM, voice engine, turn detector, video renderer and real-time media
		transport before they can ship.
	</p>

	<h3>3. Perception</h3>
	<p>
		Tavus places unusual emphasis on visual perception as well as speech. That can matter for coaching,
		interviews, customer interactions and other applications where the agent should react to what it can
		see, not only what it hears.
	</p>

	<h3>4. Enterprise production features</h3>
	<p>
		Concurrency controls, transcripts, recordings, enterprise security options, white-labelling and
		guaranteed service levels make Tavus look designed for teams that intend to put conversational video
		into production rather than simply generate a demo.
	</p>

	<h2>Where Tavus may be less suitable</h2>
	<h3>When maximum photorealism is not the goal</h3>
	<p>
		A realistic human video stream is unnecessary for many tutors, fictional characters, mascots,
		role-play simulations and games. In those cases, a browser-rendered character can offer more visual
		flexibility and a different cost profile.
	</p>

	<h3>When you already own the voice-agent stack</h3>
	<p>
		If your application already has carefully tuned STT, LLM, tools and TTS, an end-to-end CVI may duplicate
		parts of your infrastructure. A more modular avatar layer may be easier to justify.
	</p>

	<h3>When the product is an authored experience rather than one agent session</h3>
	<p>
		Liforma's model is built around an <a href="/what-is-an-avatar-experience">Avatar Experience</a>:
		reusable characters, world rules, locations, explicit state, tools and potentially multiple
		characters. Tavus is more naturally understood as infrastructure for highly realistic conversational
		AI humans.
	</p>

	<h2>Tavus vs Liforma at a glance</h2>
	<table>
		<thead>
			<tr>
				<th>Question</th>
				<th>Tavus</th>
				<th>Liforma</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Primary visual goal</td>
				<td>Photorealistic AI humans / replicas</td>
				<td>Interactive characters, including stylised use cases</td>
			</tr>
			<tr>
				<td>Core unit</td>
				<td>Conversational video / AI human session</td>
				<td>Reusable Avatar Experience</td>
			</tr>
			<tr>
				<td>Full conversational stack</td>
				<td>Yes</td>
				<td>Yes in Liforma Live; modular modes also available</td>
			</tr>
			<tr>
				<td>Real-time transport</td>
				<td>WebRTC</td>
				<td>Browser-native, request-oriented turn processing for core experiences</td>
			</tr>
			<tr>
				<td>Published usage model</td>
				<td>Connected conversational-video minutes</td>
				<td>Generated speech/animation minutes</td>
			</tr>
			<tr>
				<td>Multi-character authored scenarios</td>
				<td>Can be orchestrated by developers</td>
				<td>First-class Experience model</td>
			</tr>
		</tbody>
	</table>

	<h2>Who should shortlist Tavus?</h2>
	<p>
		Tavus deserves a close look when you need a highly realistic human-facing agent and want one vendor
		to provide most of the live conversational stack. It is especially relevant for customer-facing
		conversations, digital representatives, interview-style applications and products where visual
		perception is part of the agent experience.
	</p>

	<h2>Who should look at alternatives?</h2>
	<p>
		Consider alternatives when your priority is a stylised or non-human character, a lower-cost avatar
		layer for an existing voice stack, no-code authored training/learning experiences, or a product with
		multiple characters and explicit scene/state progression.
	</p>
	<p>
		See <a href="/resources/tavus-alternatives">Best Tavus Alternatives in 2026</a> for a use-case-based
		comparison.
	</p>

	<div class="callout">
		<strong>Sources checked 26 September 2026:</strong>
		<a href="https://www.tavus.io/pricing">Tavus pricing</a>,
		<a href="https://www.tavus.io/blog/introducing-the-worlds-fastest-conversational-video-interface-for-developers">Tavus CVI overview</a>,
		and <a href="https://www.tavus.io/lp/knowledge-base">Tavus Knowledge Base</a>.
	</div>
</BlogPostLayout>
