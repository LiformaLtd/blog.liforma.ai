<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getResourcePost } from '$lib/blog';

	const post = getResourcePost('anam-ai-review')!;
</script>

<BlogPostLayout {post} pathname="/resources/{post.slug}">
	<p>
		<strong>Anam is a real-time AI avatar platform focused on fast, photorealistic digital humans that
		can be embedded into applications through an API or widget.</strong> It combines avatar rendering
		with an increasingly complete agent stack, including tool calling, knowledge retrieval and runtime
		configuration.
	</p>

	<div class="callout">
		<strong>Disclosure:</strong> Liforma overlaps with Anam in interactive-avatar use cases. This review
		is based on Anam's public product and pricing information checked on 26 September 2026. We have not
		yet run a controlled Anam-vs-Liforma latency or visual-quality benchmark, so Anam's published
		performance claims are identified as vendor claims.
	</div>

	<h2>What is Anam?</h2>
	<p>
		Anam provides real-time digital avatars for developers. Its current platform supports API access,
		website embedding, custom avatars, multilingual conversations and a hosted agent layer. The company
		positions its CARA model family as the technology behind its real-time avatar generation.
	</p>
	<p>
		Unlike products that are primarily pre-rendered AI video generators, Anam is designed around live
		conversation. Session time starts when a conversation begins and continues until the session ends.
	</p>

	<h2>What Anam currently offers</h2>
	<ul>
		<li>real-time interactive avatars;</li>
		<li>API access, including on the free tier;</li>
		<li>a website widget;</li>
		<li>image-upload custom avatars;</li>
		<li>text-to-avatar generation;</li>
		<li>70+ supported languages;</li>
		<li>custom voices on higher plans;</li>
		<li>tool calling;</li>
		<li>knowledge-base retrieval;</li>
		<li>runtime configuration; and</li>
		<li>increasing concurrency and session-length limits on higher plans.</li>
	</ul>

	<h2>Anam pricing and usage in September 2026</h2>
	<p>
		Anam's current plans are Free, Starter, Explorer, Growth, Professional and Enterprise. The most useful
		way to compare them is by included minutes, overage rate, avatar slots, concurrency and maximum
		conversation length.
	</p>

	<table>
		<thead>
			<tr>
				<th>Plan</th>
				<th>Included minutes</th>
				<th>Published overage</th>
				<th>Custom avatars</th>
				<th>Concurrent sessions</th>
				<th>Conversation limit</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Free</td>
				<td>30/month</td>
				<td>No overage</td>
				<td>1</td>
				<td>1</td>
				<td>3 min</td>
			</tr>
			<tr>
				<td>Starter</td>
				<td>50/month</td>
				<td>$0.16/min</td>
				<td>2</td>
				<td>1</td>
				<td>5 min</td>
			</tr>
			<tr>
				<td>Explorer</td>
				<td>250/month</td>
				<td>$0.14/min</td>
				<td>3</td>
				<td>3</td>
				<td>10 min</td>
			</tr>
			<tr>
				<td>Growth</td>
				<td>2,000/month</td>
				<td>$0.12/min</td>
				<td>5</td>
				<td>5</td>
				<td>2 hours</td>
			</tr>
			<tr>
				<td>Professional</td>
				<td>5,000/month</td>
				<td>$0.11/min</td>
				<td>10</td>
				<td>10</td>
				<td>2 hours</td>
			</tr>
		</tbody>
	</table>

	<p>
		Anam says usage is billed by the second and that a minute means the full elapsed conversation time,
		from session start until session end. That is an important distinction from systems that charge only
		while the avatar is actually speaking.
	</p>

	<h2>Where Anam looks strongest</h2>

	<h3>1. Straightforward developer adoption</h3>
	<p>
		The free plan already includes API access, one custom avatar and 30 minutes per month. That gives a
		developer enough room to prototype a real integration before committing to a paid plan.
	</p>

	<h3>2. Custom avatars from an image</h3>
	<p>
		Anam lets users upload an image or generate one from text, then turn it into a custom avatar. The
		company says custom-avatar generation takes under two minutes.
	</p>

	<h3>3. Broad language support</h3>
	<p>
		Anam advertises support for more than 70 languages, covering a large proportion of international
		voice-agent use cases without requiring a separate avatar vendor per market.
	</p>

	<h3>4. The product is moving beyond rendering</h3>
	<p>
		Tool calling, knowledge retrieval and runtime configurability mean Anam is no longer simply a
		video-face endpoint. Teams can use more of the agent stack without assembling every component
		themselves.
	</p>

	<h2>What about Anam's latency claims?</h2>
	<p>
		Anam currently advertises approximately <strong>180 ms average agent response time</strong> and says
		its CARA-4 model ranks first across the metrics in its 2026 Avatar Benchmark.
	</p>
	<p>
		Those are useful signals, but they are vendor-published measurements. Until we run the same scenario,
		network path, turn-detection logic and voice stack across products, we would not treat them as directly
		comparable with latency numbers published by another vendor.
	</p>

	<h2>Where Anam may be less suitable</h2>

	<h3>When the application is an authored experience</h3>
	<p>
		Anam's core unit is still a live avatar conversation. A training simulation, game or interactive
		story may additionally need multiple characters, shared and private state, scenes, scoring, feedback
		and explicit progression.
	</p>
	<p>
		Those application-layer systems can be built around an avatar API, but they are first-class concepts
		in Liforma's Experience model.
	</p>

	<h3>When connected-session economics matter</h3>
	<p>
		Because Anam bills the elapsed session from start to finish, a ten-minute interaction consumes roughly
		ten minutes even if the avatar speaks for only three minutes. That may be entirely acceptable for a
		full-duplex digital-human application, but it is a different cost model from generated-speech billing.
	</p>

	<h3>When you want a broad library of stylised or non-human characters</h3>
	<p>
		Anam's current positioning strongly emphasises human realism, although its site also demonstrates 3D,
		anime and comic styles. Teams building mascots, fantasy characters or game-like casts should test
		their actual desired visual styles rather than assume that a photorealistic-avatar benchmark predicts
		performance for those use cases.
	</p>

	<h2>Anam vs Liforma at a glance</h2>
	<table>
		<thead>
			<tr>
				<th>Question</th>
				<th>Anam</th>
				<th>Liforma</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Core product</td>
				<td>Real-time avatar / digital-human platform</td>
				<td>Reusable Avatar Experience platform</td>
			</tr>
			<tr>
				<td>Rendering model</td>
				<td>Hosted real-time avatar video</td>
				<td>Browser-native animated character</td>
			</tr>
			<tr>
				<td>Custom avatar input</td>
				<td>Image upload or generated image</td>
				<td>Reusable avatars with appearance, clothing, hair and scenes</td>
			</tr>
			<tr>
				<td>Agent features</td>
				<td>Knowledge retrieval, tools and runtime configuration</td>
				<td>Full stack or modular agent modes plus Experience state/tools</td>
			</tr>
			<tr>
				<td>Billing basis</td>
				<td>Elapsed connected session time</td>
				<td>Generated speech/animation time</td>
			</tr>
			<tr>
				<td>Multi-character authored scenarios</td>
				<td>Application developer can orchestrate them</td>
				<td>First-class Experience concept</td>
			</tr>
		</tbody>
	</table>

	<h2>Who should shortlist Anam?</h2>
	<p>
		Anam is worth shortlisting when you want a conventional hosted real-time avatar API, need a fast path
		from an image to a live digital human, value 70+ language support, or want agent capabilities without
		building the entire surrounding stack yourself.
	</p>

	<h2>Who should consider alternatives?</h2>
	<p>
		Look more broadly if your product is primarily a multi-character simulation, game or learning
		experience; if you want browser-native rather than streamed rendering; or if the economics of long,
		turn-based sessions make generated-speech billing more attractive than connected-minute billing.
	</p>

	<div class="callout">
		<strong>Sources checked 26 September 2026:</strong>
		<a href="https://anam.ai/">Anam product overview</a> and
		<a href="https://anam.ai/pricing">Anam pricing</a>.
	</div>
</BlogPostLayout>
