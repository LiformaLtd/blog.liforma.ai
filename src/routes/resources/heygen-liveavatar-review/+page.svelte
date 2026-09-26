<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getResourcePost } from '$lib/blog';

	const post = getResourcePost('heygen-liveavatar-review')!;
</script>

<BlogPostLayout {post} pathname="/resources/{post.slug}">
	<p>
		<strong>HeyGen LiveAvatar is HeyGen's dedicated real-time avatar platform, separate from its
		pre-recorded AI video product.</strong> It is aimed at developers who want a photorealistic avatar
		that can respond live, with a choice between an integrated conversational stack and a more modular
		avatar mode.
	</p>

	<div class="callout">
		<strong>Disclosure:</strong> Liforma overlaps with HeyGen LiveAvatar in interactive-avatar use cases.
		This review is based on HeyGen's current LiveAvatar documentation and pricing, checked on
		26 September 2026. We have not yet run a controlled visual-quality or latency benchmark.
	</div>

	<h2>LiveAvatar is not the same thing as HeyGen's normal video avatars</h2>
	<p>
		HeyGen's standard product is best known for generating finished videos. LiveAvatar is a separate
		real-time service with its own plans and credits. HeyGen describes Custom LiveAvatars as avatars for
		live streaming that can respond to text or voice input, rather than assets for pre-rendered videos.
	</p>
	<p>
		This distinction matters when comparing prices: a normal HeyGen Creator subscription does not map
		directly to LiveAvatar usage.
	</p>

	<h2>Full mode vs Lite mode</h2>
	<p>
		HeyGen offers two main integration approaches.
	</p>

	<h3>Full mode</h3>
	<p>
		Full mode is the more complete managed experience. HeyGen provides the conversational pipeline around
		the avatar. One LiveAvatar credit represents about 30 seconds of Full-mode streaming.
	</p>

	<h3>Lite mode</h3>
	<p>
		Lite mode is intended for developers who want to supply more of their own agent stack. One credit
		represents about one minute of Lite-mode streaming, so avatar usage is materially cheaper than Full
		mode before accounting for the external voice/AI services you supply.
	</p>

	<h2>HeyGen LiveAvatar pricing in September 2026</h2>
	<table>
		<thead>
			<tr>
				<th>Plan</th>
				<th>Price</th>
				<th>Credits</th>
				<th>Approx. Full-mode minutes</th>
				<th>Approx. Lite-mode minutes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Free</td>
				<td>$0</td>
				<td>Test allowance</td>
				<td>About 5</td>
				<td>About 10</td>
			</tr>
			<tr>
				<td>Starter</td>
				<td>$19/mo</td>
				<td>200</td>
				<td>About 100</td>
				<td>About 200</td>
			</tr>
			<tr>
				<td>Essential</td>
				<td>$99/mo</td>
				<td>1,100</td>
				<td>About 550</td>
				<td>About 1,100</td>
			</tr>
			<tr>
				<td>Business</td>
				<td>$475/mo</td>
				<td>6,000</td>
				<td>About 3,000</td>
				<td>About 6,000</td>
			</tr>
		</tbody>
	</table>
	<p>
		HeyGen currently describes effective included pricing around <strong>$0.19/minute</strong> for Full
		mode and <strong>$0.10/minute</strong> for Lite mode on Starter, falling to roughly
		<strong>$0.16</strong> and <strong>$0.08</strong> respectively on Business. Overage credits are
		available on paid plans.
	</p>

	<h2>What LiveAvatar includes</h2>
	<ul>
		<li>public and custom real-time avatars;</li>
		<li>720p custom avatars on lower paid tiers and 1080p options on higher tiers;</li>
		<li>Full and Lite integration modes;</li>
		<li>voice and text interaction;</li>
		<li>API access for production integrations; and</li>
		<li>custom LiveAvatar creation separate from HeyGen's normal video-avatar workflow.</li>
	</ul>
	<p>
		HeyGen's FAQ says the managed voice stack currently uses ElevenLabs Flash v2.5 for text-to-speech
		with Deepgram and AssemblyAI involved in speech recognition.
	</p>

	<h2>Where HeyGen LiveAvatar looks strongest</h2>
	<h3>1. Photorealistic presentation</h3>
	<p>
		HeyGen already has a large ecosystem around realistic AI presenters and digital twins. LiveAvatar is
		the natural real-time extension of that visual identity.
	</p>

	<h3>2. A choice between managed and modular architectures</h3>
	<p>
		The Full/Lite split is sensible. Teams that want speed can use more of HeyGen's stack; teams with an
		existing voice-agent architecture can use the cheaper, more modular route.
	</p>

	<h3>3. Familiarity for existing HeyGen customers</h3>
	<p>
		Organisations already using HeyGen for generated video may value keeping real-time avatars in the
		same vendor ecosystem, even though LiveAvatar has separate plans and credits.
	</p>

	<h2>Where LiveAvatar may be less suitable</h2>
	<h3>When the experience is bigger than one avatar session</h3>
	<p>
		A training simulation, game or interactive story may need multiple characters, scene changes,
		structured state, stats and feedback. Those are application-layer concerns beyond a live avatar
		stream.
	</p>

	<h3>When non-human or highly stylised characters are central</h3>
	<p>
		HeyGen's strongest public identity remains photorealistic human avatars. If your product is built
		around fantasy characters, mascots, stylised animation or a broad character library, platforms with
		a different rendering model may fit better.
	</p>

	<h3>When cost is dominated by long open sessions</h3>
	<p>
		LiveAvatar credits are tied to streaming time. A system that charges only for generated character
		speech can have a different cost profile in turn-based experiences where the user spends substantial
		time speaking or thinking.
	</p>

	<h2>HeyGen LiveAvatar vs Liforma at a glance</h2>
	<table>
		<thead>
			<tr>
				<th>Question</th>
				<th>HeyGen LiveAvatar</th>
				<th>Liforma</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Visual emphasis</td>
				<td>Photorealistic human avatars</td>
				<td>Interactive characters, including stylised use cases</td>
			</tr>
			<tr>
				<td>Managed full stack</td>
				<td>Full mode</td>
				<td>Liforma Live</td>
			</tr>
			<tr>
				<td>Modular avatar mode</td>
				<td>Lite mode</td>
				<td>Liforma Motion / Relay</td>
			</tr>
			<tr>
				<td>Billing basis</td>
				<td>Streaming credits</td>
				<td>Generated speech/animation minutes</td>
			</tr>
			<tr>
				<td>Core authoring unit</td>
				<td>Live avatar session</td>
				<td>Reusable Avatar Experience</td>
			</tr>
		</tbody>
	</table>

	<h2>Who should shortlist HeyGen LiveAvatar?</h2>
	<p>
		Shortlist it when a polished photorealistic human is the primary requirement, especially if your team
		already knows HeyGen or wants the flexibility of both a managed conversational mode and a modular
		avatar mode.
	</p>

	<h2>Who should consider alternatives?</h2>
	<p>
		Consider other platforms if you need broader character styles, first-class multi-character
		authoring, stateful training/game mechanics, or a different usage model for predominantly turn-based
		conversations.
	</p>

	<div class="callout">
		<strong>Sources checked 26 September 2026:</strong>
		<a href="https://help.heygen.com/en/articles/10035615-how-to-get-started-with-liveavatar">HeyGen LiveAvatar getting started and pricing</a>
		and <a href="https://help.heygen.com/en/articles/12758866-liveavatar-faq">HeyGen LiveAvatar FAQ</a>.
	</div>
</BlogPostLayout>
