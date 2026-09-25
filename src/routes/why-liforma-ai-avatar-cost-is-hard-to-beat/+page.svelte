<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('why-liforma-ai-avatar-cost-is-hard-to-beat')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		<strong>Liforma's cost advantage does not come from one cheap model or one cloud discount.</strong>
		It comes from four different layers of architecture that reduce the amount of server work, reduce
		the amount of always-on infrastructure, reduce inference cost and reduce the cost of the remaining
		GPU compute.
	</p>

	<div class="callout">
		<strong>The important point:</strong> the savings compound. A competitor cannot close the gap by
		swapping one model or negotiating one cheaper GPU contract, because the cost reduction happens
		across the whole STT → LLM → TTS → STA stack.
	</div>

	<h2>The normal cost structure of a conversational avatar</h2>
	<p>
		A realtime avatar usually needs four expensive stages: speech-to-text, an LLM or other intelligence,
		text-to-speech, and speech-to-animation. A conventional architecture may also keep a continuous
		media session alive and render the avatar on server GPUs.
	</p>
	<p>
		Liforma attacks those costs at four separate layers.
	</p>

	<table>
		<thead>
			<tr><th>Layer</th><th>Liforma approach</th></tr>
		</thead>
		<tbody>
			<tr><td><strong>1. Client compute</strong></td><td>Move speech recognition and speech-to-animation into the browser where practical.</td></tr>
			<tr><td><strong>2. Transport</strong></td><td>Use request-oriented HTTP for naturally turn-based experiences instead of requiring an always-on AI media session.</td></tr>
			<tr><td><strong>3. Models</strong></td><td>Operate and optimise open-source STT/LLM infrastructure rather than paying retail API margins on every turn.</td></tr>
			<tr><td><strong>4. GPU infrastructure</strong></td><td>Use Liforma's own multi-provider elastic GPU layer so remaining inference can run on attractive capacity without permanent over-provisioning.</td></tr>
		</tbody>
	</table>

	<h2>1. Move heavyweight work into the browser</h2>
	<p>
		Every Liforma user already arrives with a capable computer or phone. Where the browser can do useful
		work reliably, we prefer to use that compute rather than duplicate it in a data centre.
	</p>

	<h3>Speech-to-text at the edge</h3>
	<p>
		On supported paths, speech recognition can run in the browser rather than requiring every second of
		microphone audio to become a paid server-side inference workload. Server-side STT remains useful as
		a compatibility and fallback path, but it does not have to be the default cost for every user.
	</p>

	<h3>Proprietary speech-to-animation in the browser</h3>
	<p>
		The larger architectural saving is animation. Liforma's speech-to-animation technology is designed
		so the character can be animated and rendered on the user's device.
	</p>
	<p>
		That avoids the conventional pattern of paying a central GPU to render a realtime avatar, encode a
		video stream and continuously deliver that stream back to the browser.
	</p>
	<p>
		Once STT and STA have been pushed toward the client, the central server path is dramatically simpler:
		<strong>the expensive core is largely reduced to intelligence plus speech generation.</strong>
	</p>

	<h2>Why client-side compute changes scaling economics</h2>
	<p>
		If every additional user requires another server-rendered avatar stream, infrastructure cost rises
		with concurrency. If major parts of recognition and rendering run on the user's own device, those
		workloads scale with the devices users already own.
	</p>
	<p>
		This is not a small optimisation. It removes entire categories of centralised compute from the unit
		economics.
	</p>

	<h2>2. Use HTTP when the interaction is naturally turn-based</h2>
	<p>
		WebRTC is excellent for continuous full-duplex calls. But many AI character experiences are not
		continuous calls. Training, tutoring, role-play, games and website assistants are often naturally:
	</p>
	<p><strong>listen → think → speak → listen.</strong></p>

	<p>
		Liforma is designed so those experiences do not require a continuously provisioned AI media session
		for the entire period the user has the experience open.
	</p>

	<h3>Match infrastructure lifetime to actual AI work</h3>
	<p>
		When a turn needs server compute, the client makes a request. The server performs the work and
		streams or returns the result. Between turns, much of the application layer can remain stateless.
	</p>
	<p>
		This maps naturally to serverless infrastructure. Liforma uses Vercel for significant parts of the
		application layer, so compute can scale around actual requests rather than around the wall-clock
		length of every conversation.
	</p>
	<p>
		The cost advantage is not that HTTP is magically cheaper than WebRTC. It is that a request-oriented
		architecture can avoid paying for a continuously provisioned session when no AI work is happening.
	</p>
	<p>
		For more detail, see
		<a href="/does-conversational-ai-need-webrtc">Does Conversational AI Really Need WebRTC?</a>.
	</p>

	<h2>3. Self-host and optimise the models that matter</h2>
	<p>
		Hosted AI APIs are a fantastic way to launch quickly, but retail API pricing includes the provider's
		infrastructure costs and margin on every request.
	</p>
	<p>
		At scale, Liforma can do better by operating optimised open-source models for important server-side
		parts of the stack.
	</p>
	<p>
		The advantage is not simply “we use open source.” Anyone can download a model. The hard part is
		making that model deliver the right combination of quality, latency, throughput, memory efficiency
		and reliability under realtime traffic.
	</p>
	<p>
		We deliberately do not publish the specific models, serving configuration, quantisation choices or
		other optimisation details. Those change over time and form part of the engineering advantage.
	</p>

	<h2>Why model serving matters as much as model choice</h2>
	<p>
		Two companies can run the same model and have very different unit economics.
	</p>
	<p>
		Cost depends on how effectively hardware is used, how much concurrency is achieved, how idle
		capacity is handled, how quickly a workload becomes ready and how the service behaves during bursts.
	</p>
	<p>
		That is why simply moving from a frontier API to a smaller open-source model does not reproduce the
		Liforma cost structure.
	</p>

	<h2>4. Run the remaining GPU workload through our own elastic compute layer</h2>
	<p>
		After the first three layers have reduced the amount of work that still needs central compute, the
		remaining GPU workload is handled through Liforma's own orchestration layer across multiple compute
		providers.
	</p>
	<p>
		At a high level, that layer exists to find compatible GPU capacity at an attractive cost, bring it
		online quickly, make it ready for Liforma workloads and avoid paying for unnecessary idle capacity.
	</p>
	<p>
		We do not publish the provider-selection logic, bootstrap pipeline, model-loading strategy or other
		operational details behind it.
	</p>
	<p>
		The economic effect is what matters: Liforma is not permanently tied to one provider's standard
		on-demand GPU price.
	</p>

	<h2>Cold-start engineering is part of the moat</h2>
	<p>
		Cheap elastic GPU capacity is only useful if it can become productive quickly.
	</p>
	<p>
		One easy way to guarantee low latency is to keep large amounts of GPU capacity permanently warm.
		That also guarantees a large idle-compute bill.
	</p>
	<p>
		Liforma has invested heavily in reducing the time required to turn newly acquired GPU capacity into
		useful production capacity. That enables a more serverless GPU model: scale capacity up when it is
		needed and avoid keeping more expensive hardware warm than necessary.
	</p>

	<h2>The real advantage is multiplicative</h2>
	<p>
		The four layers reinforce one another:
	</p>
	<ol>
		<li>browser compute removes server workloads entirely;</li>
		<li>turn-based transport reduces idle application infrastructure;</li>
		<li>optimised self-hosted models lower the cost of the server work that remains; and</li>
		<li>the GPU layer lowers the hardware cost of running those already-optimised workloads.</li>
	</ol>
	<p>
		The fourth optimisation is therefore being applied to a cost base that has already been reduced by
		the first three.
	</p>

	<div class="callout">
		<strong>This is why the gap is hard to close:</strong> changing one vendor, one model or one hosting
		contract only attacks one layer. Liforma's economics come from the complete system.
	</div>

	<h2>Why cheaper APIs alone do not reproduce this</h2>
	<p>
		A platform built from third-party STT, LLM, TTS and server-rendered avatar services can negotiate
		better rates as volume grows. But discounts only reduce the price of workloads that still exist.
	</p>
	<p>
		Liforma removes some work from the server entirely, avoids keeping some infrastructure alive between
		turns, removes retail inference margin where appropriate and then shops the remaining GPU workload
		across an elastic compute layer.
	</p>
	<p>
		That is fundamentally different from negotiating a percentage discount on an otherwise unchanged
		stack.
	</p>

	<h2>Why a smaller LLM alone does not reproduce this either</h2>
	<p>
		A cheaper LLM does not remove server-side avatar rendering. It does not remove speech-recognition
		cost. It does not remove an always-on media session. And it does not make the GPU running the model
		itself cheaper.
	</p>
	<p>
		Model optimisation matters, but only as one part of an end-to-end cost architecture.
	</p>

	<h2>RAG can push the model cost down further</h2>
	<p>
		Many avatar experiences need deep expertise in a narrow domain rather than maximum general
		intelligence. Retrieval lets a smaller, faster model answer from the right domain evidence instead
		of relying on an expensive frontier model for every turn.
	</p>
	<p>
		That is another example of Liforma's broader philosophy: improve the whole system rather than
		throwing the largest available model at every problem.
	</p>
	<p>
		See
		<a href="/rag-for-ai-avatars-small-fast-llms-domain-experts">RAG for AI Avatars: Why Your Character
		Doesn't Always Need a Frontier LLM</a>.
	</p>

	<h2>Low cost does not mean customers are forced onto the cheapest components</h2>
	<p>
		Liforma is deliberately composable.
	</p>
	<p>
		Customers who want simplicity can use the complete managed stack. Developers who want their own LLM
		can use Liforma for STT, TTS and animation. Teams that already use a premium speech-to-speech system
		can keep that entire stack and use Liforma only for the visual layer.
	</p>
	<p>
		See <a href="/three-ways-to-build-with-liforma">Three Ways to Build With Liforma</a>.
	</p>

	<h2>What this means for Liforma's unit economics</h2>
	<p>
		Taken together, these architectural choices allow Liforma to generate a complete
		<strong>STT → LLM → TTS → STA</strong> conversational response at below one cent per conversational
		minute while still keeping room to improve the stack over time.
	</p>
	<p>
		We do not publish our underlying internal cost, model choices, serving configuration or orchestration
		logic. Those are deliberately private.
	</p>
	<p>
		What customers, investors and competitors can see is the architecture around them: client-side
		compute, request-oriented transport, self-hosted inference and elastic multi-provider GPU capacity.
	</p>

	<h2>The cost advantage should improve, not disappear</h2>
	<p>
		There is another useful property of this design: every layer can improve independently.
	</p>
	<ul>
		<li>Browsers and consumer hardware continue to become more capable.</li>
		<li>Open-source AI models continue to become smaller and stronger.</li>
		<li>Inference software continues to become more efficient.</li>
		<li>GPU markets continue to become more competitive.</li>
		<li>Liforma can continue improving its own animation and orchestration technology.</li>
	</ul>
	<p>
		Because Liforma owns the integration between these layers, improvements can flow directly into the
		unit economics rather than being captured entirely by an upstream provider.
	</p>

	<h2>The moat is the system</h2>
	<p>
		No individual piece described here is impossible for another engineering team to understand.
	</p>
	<p>
		The difficult part is making all four layers work together without sacrificing latency, quality,
		compatibility or reliability.
	</p>
	<p>
		That is why we think Liforma will remain difficult to beat on cost.
	</p>
	<p>
		The advantage is not one secret model or one clever hosting trick.
	</p>
	<p>
		<strong>It is an architecture designed from the beginning to avoid paying for work that does not
		need to happen on the server.</strong>
	</p>

	<div class="callout">
		<strong>Related:</strong>
		<a href="/how-much-do-interactive-ai-avatars-cost">How Much Do Interactive AI Avatars Cost?</a>,
		<a href="/does-conversational-ai-need-webrtc">HTTP vs WebRTC for AI Avatars</a>, and
		<a href="/three-ways-to-build-with-liforma">Three Ways to Build With Liforma</a>.
	</div>
</BlogPostLayout>
