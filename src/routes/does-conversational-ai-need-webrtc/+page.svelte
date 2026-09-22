<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('does-conversational-ai-need-webrtc')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		<strong>Conversational AI does not always need a continuously open WebRTC connection.</strong>
		WebRTC is an excellent fit for applications that genuinely need continuous, full-duplex,
		low-latency media: phone calls, video calls, natural interruption, live perception and unstable
		mobile networks. But many AI character experiences are fundamentally turn-based. In those cases,
		modern speech and AI models can be fast enough to process each turn over ordinary HTTP.
	</p>

	<p>
		That sounds like an implementation detail. It is not. The transport model affects infrastructure
		complexity, session costs, scaling, failure modes and which business models are economically viable.
	</p>

	<div class="callout">
		<strong>Short answer:</strong> use WebRTC when you need a continuous real-time media session. Use
		request-based HTTP when the product is naturally <strong>listen → think → speak → animate</strong>
		and the user does not need a permanently open media channel.
	</div>

	<h2>Why WebRTC became the default for voice AI</h2>
	<p>
		WebRTC was designed for real-time communication. Browser APIs such as
		<code>RTCPeerConnection</code> can carry continuous audio, video and data with low latency, while
		ICE, STUN and TURN help establish connections across firewalls and network-address translation.
		That makes WebRTC a natural foundation for video conferencing, internet calling and voice agents.
	</p>
	<p>
		Mozilla's
		<a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API">WebRTC documentation</a>
		describes it as a set of browser technologies for exchanging live media and data. Google's
		<a href="https://webrtc.org/getting-started/turn-server">WebRTC documentation</a> also notes that
		TURN relays are needed when peers cannot establish a direct connection.
	</p>
	<p>
		For a traditional call, this architecture is exactly what you want. Audio is continuously flowing
		in both directions, the caller may interrupt at any moment, network quality may vary, and the
		application needs to preserve a live session until somebody hangs up.
	</p>

	<h2>Voice AI inherited the architecture of a phone call</h2>
	<p>
		Many modern voice-agent systems therefore model an AI conversation as a call.
	</p>
	<p>
		A browser or phone joins a room. An AI agent joins as another participant. The user's microphone is
		streamed continuously to the agent. Speech-to-text, turn detection, an LLM and text-to-speech run
		inside that stateful session. The response audio is streamed back over the same real-time transport.
	</p>
	<p>
		<a href="https://docs.livekit.io/agents/">LiveKit's Agents documentation</a>, for example, describes
		its agent as a stateful real-time bridge between the user and AI models. The frontend communicates
		with the agent over WebRTC, while the agent itself may talk to model providers over HTTP or
		WebSockets.
	</p>
	<p>
		This is a good architecture when the AI experience really behaves like a call.
	</p>

	<h2>But not every AI conversation is a call</h2>
	<p>
		Consider a role-play training experience:
	</p>
	<ol>
		<li>A virtual customer asks a question.</li>
		<li>The learner listens.</li>
		<li>The learner thinks for several seconds.</li>
		<li>The learner gives a six-second answer.</li>
		<li>The system transcribes and evaluates the answer.</li>
		<li>The character replies for eight seconds.</li>
		<li>The learner watches the character and considers what to say next.</li>
	</ol>
	<p>
		There is a conversation, but there is not necessarily a continuous stream of useful media in both
		directions.
	</p>
	<p>
		The same pattern appears in language learning, interview practice, tutoring, interactive stories,
		games, historical characters and many website assistants. The user speaks in turns. The character
		replies in turns. Much of the wall-clock session is silence, thinking, playback, animation or scene
		progression.
	</p>
	<p>
		For these products, the useful engineering question is not “How do we make a cheaper call?” It is:
		<strong>do we need a call at all?</strong>
	</p>

	<h2>The alternative: STT → LLM → TTS → STA over HTTP</h2>
	<p>
		Liforma is built around a request-based model for many conversational experiences:
	</p>
	<ol>
		<li>The browser captures the user's turn.</li>
		<li>The audio is sent for <strong>speech-to-text (STT)</strong>.</li>
		<li>The transcript and experience state are sent to the <strong>LLM</strong>.</li>
		<li>The response is converted to speech with <strong>text-to-speech (TTS)</strong>.</li>
		<li>The speech drives <strong>speech-to-animation (STA)</strong>.</li>
		<li>The browser plays the audio and animation.</li>
	</ol>
	<p>
		Each turn can be treated as a discrete request rather than one segment of a permanently open media
		session.
	</p>
	<p>
		That does not mean every stage must wait for the previous stage to finish completely. The server can
		stream partial results, start TTS as text becomes available, generate animation as audio arrives and
		deliver the first playable data before the full response is complete. HTTP is a request/response
		model, but the response itself can still be streamed.
	</p>

	<h2>Modern model speed changes the architectural trade-off</h2>
	<p>
		A request-based architecture would feel terrible if every turn required several seconds just to
		initialize models and establish processing. Historically, that was a strong argument for keeping
		everything connected and warm.
	</p>
	<p>
		The trade-off changes as STT, LLM, TTS and animation models become faster and as inference systems
		keep models warm independently of an individual user's session.
	</p>
	<p>
		The important distinction is between <strong>keeping inference capacity warm</strong> and
		<strong>keeping a per-user media session open</strong>. You can do the former without necessarily
		doing the latter.
	</p>
	<p>
		A shared speech or animation service can remain hot and serve many short HTTP jobs from many users.
		The expensive model stays resident; the user's connection does not have to.
	</p>

	<h2>HTTP does not mean “slow polling”</h2>
	<p>
		When developers hear “HTTP instead of WebRTC,” they sometimes imagine a browser uploading a WAV
		file, waiting for a complete MP3 and then starting playback several seconds later.
	</p>
	<p>
		That is not the architecture we mean.
	</p>
	<p>
		Modern HTTP supports streamed request and response bodies. A turn can therefore begin processing as
		audio arrives and the response can begin returning before generation is complete. Server-Sent
		Events, fetch streams, chunked responses and ordinary API calls can also carry control events and
		incremental data.
	</p>
	<p>
		The difference is not “streaming versus no streaming.” The difference is
		<strong>session-oriented transport versus request-oriented transport</strong>.
	</p>

	<h2>What does WebRTC actually cost?</h2>
	<p>
		It is important to be precise here because several different costs are often collapsed into
		“WebRTC cost.”
	</p>
	<p>
		As of <strong>22 September 2026</strong>,
		<a href="https://livekit.com/pricing">LiveKit's public pricing</a> lists WebRTC participant minutes
		at far less than one cent per minute after the plan allowance: $0.0005/min on Ship and $0.0004/min on
		Scale. So it would be incorrect to say that LiveKit charges one cent per minute simply for a WebRTC
		connection.
	</p>
	<p>
		However, the same pricing page lists <strong>LiveKit-hosted agent session time at $0.01/min</strong>
		after the included allowance on paid plans. LiveKit's billing documentation defines agent session
		time as the period for which the deployed agent is actively connected to a WebRTC or SIP session.
	</p>
	<p>
		Those are different resources:
	</p>
	<ul>
		<li><strong>WebRTC participant time</strong> — network connection time;</li>
		<li><strong>agent session time</strong> — a hosted stateful agent connected to that session;</li>
		<li><strong>inference</strong> — STT, LLM and TTS model usage;</li>
		<li><strong>bandwidth and optional services</strong> — depending on the architecture and provider.</li>
	</ul>
	<p>
		A self-hosted WebRTC stack also avoids a managed-provider agent-session fee, but it is not free.
		There are still SFU resources, TURN relay traffic when required, bandwidth, orchestration,
		observability, regional capacity and operational overhead. The cost depends heavily on traffic
		patterns and scale, so there is no universal self-hosted cost-per-minute figure.
	</p>

	<h2>Why session-based billing can dominate cheap AI inference</h2>
	<p>
		This matters most when the underlying AI stack becomes inexpensive.
	</p>
	<p>
		<a href="https://www.liforma.ai/pricing">Liforma Live is currently priced at $0.01 per generated
		speech minute</a> for STT, intelligence, TTS and animation. Liforma charges when speech and animation
		are generated, rather than for the whole period the user has the experience open.
	</p>
	<p>
		If the avatar speaks for half of a 30-minute experience, that is roughly 15 generated speech
		minutes: about $0.15 at the published Liforma Live rate.
	</p>
	<p>
		A separate infrastructure layer that charged one cent for every wall-clock session minute would
		cost another $0.30 for the same 30-minute session — twice the example inference-and-animation cost.
		This is why seemingly small session costs can become strategically important once model costs fall.
	</p>
	<p>
		To be clear, the example above is about the economics of <strong>session-based metering in
		general</strong>; LiveKit's basic WebRTC participant charge itself is much lower. Its $0.01/min
		published rate applies to hosted agent session time after allowance, not to the WebRTC connection
		alone.
	</p>

	<h2>Request-based architecture changes what you pay for</h2>
	<p>
		With a turn-based request architecture, infrastructure can more closely follow useful work.
	</p>
	<table>
		<thead>
			<tr>
				<th>During the experience</th>
				<th>Persistent real-time session</th>
				<th>Turn-based HTTP model</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>User speaking</td>
				<td>Live media session</td>
				<td>Capture / stream turn to STT</td>
			</tr>
			<tr>
				<td>AI thinking</td>
				<td>Session remains open</td>
				<td>LLM request</td>
			</tr>
			<tr>
				<td>Character speaking</td>
				<td>Session remains open</td>
				<td>TTS + animation response</td>
			</tr>
			<tr>
				<td>User thinking silently</td>
				<td>Session remains open</td>
				<td>No conversational request required</td>
			</tr>
			<tr>
				<td>Watching scene / reading feedback</td>
				<td>Session remains open</td>
				<td>Browser can continue locally</td>
			</tr>
		</tbody>
	</table>
	<p>
		This is particularly attractive for visual character experiences because the browser can do useful
		work independently: render a 3D backdrop, play animation, display captions, apply weather effects,
		show UI and progress between scenes without requiring a live media server to remain involved.
	</p>

	<h2>When WebRTC is clearly the better choice</h2>
	<p>
		There are important cases where we would choose WebRTC.
	</p>
	<ul>
		<li><strong>Natural barge-in:</strong> the user should be able to interrupt the AI at any instant.</li>
		<li><strong>Full-duplex conversation:</strong> both sides may speak and listen simultaneously.</li>
		<li><strong>Continuous visual perception:</strong> the agent is constantly receiving webcam or screen video.</li>
		<li><strong>Telephony:</strong> the product fundamentally behaves like a phone call.</li>
		<li><strong>Challenging networks:</strong> adaptive real-time media handling and TURN fallback matter.</li>
		<li><strong>Very rapid turn-taking:</strong> conversation is fluid enough that discrete turns become artificial.</li>
	</ul>
	<p>
		LiveKit explicitly optimises for these conditions. Its documentation describes WebRTC as the
		frontend-to-agent transport because it provides reliable real-time communication even on unstable
		networks, along with turn detection and interruption handling.
	</p>
	<p>
		If those properties are central to the product, replacing WebRTC merely to save infrastructure
		money would be a poor trade.
	</p>

	<h2>When HTTP is often enough</h2>
	<p>
		A turn-based HTTP architecture becomes attractive when:
	</p>
	<ul>
		<li>users naturally take turns speaking;</li>
		<li>the character can finish a response before the user replies;</li>
		<li>mid-sentence barge-in is not essential;</li>
		<li>most of the experience is interaction, playback or thinking rather than continuous media;</li>
		<li>the browser can handle presentation and animation locally;</li>
		<li>sessions may be long but actual generated speech is relatively short; and</li>
		<li>cost at consumer or educational scale matters.</li>
	</ul>
	<p>
		Many role-playing, training, education, entertainment and website-assistant experiences fit this
		pattern.
	</p>

	<h2>WebRTC vs HTTP for conversational AI</h2>
	<table>
		<thead>
			<tr>
				<th>Capability</th>
				<th>WebRTC session</th>
				<th>Turn-based HTTP</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Continuous bidirectional audio</td>
				<td>Excellent</td>
				<td>Not the primary model</td>
			</tr>
			<tr>
				<td>Mid-sentence interruption</td>
				<td>Excellent</td>
				<td>Possible, but more constrained</td>
			</tr>
			<tr>
				<td>Turn-based interaction</td>
				<td>Excellent</td>
				<td>Excellent</td>
			</tr>
			<tr>
				<td>Continuous webcam/video input</td>
				<td>Excellent</td>
				<td>Less suitable</td>
			</tr>
			<tr>
				<td>Long silent periods</td>
				<td>Session remains active</td>
				<td>No active conversational request needed</td>
			</tr>
			<tr>
				<td>Connection/NAT complexity</td>
				<td>ICE/STUN/TURN/SFU handled by stack</td>
				<td>Ordinary web infrastructure</td>
			</tr>
			<tr>
				<td>Scaling model</td>
				<td>Concurrent sessions</td>
				<td>Concurrent requests/jobs</td>
			</tr>
			<tr>
				<td>Best fit</td>
				<td>Calls and continuous real-time media</td>
				<td>Structured conversational turns</td>
			</tr>
		</tbody>
	</table>

	<h2>What about latency?</h2>
	<p>
		Transport is only one part of perceived conversational latency.
	</p>
	<p>
		For a turn-based system, the important timeline is usually:
	</p>
	<p>
		<strong>end of user speech → transcript ready → first useful LLM output → first TTS audio → first
		animation frames → playback</strong>.
	</p>
	<p>
		If those stages are streamed and overlapped, the user does not need to wait for the complete answer
		to exist before the character begins responding.
	</p>
	<p>
		WebRTC can reduce transport friction and is especially valuable at the edges of a turn: continuous
		uplink, turn detection and interruption. But it cannot make a slow LLM, TTS model or avatar renderer
		fast. Conversely, sufficiently fast models can make request-based transport feel conversational for
		use cases that do not require full duplex.
	</p>
	<p>
		This is why architecture should be chosen from the required interaction model, not from the
		assumption that “real-time AI” automatically means WebRTC.
	</p>

	<h2>State does not require a stateful media connection</h2>
	<p>
		Another common assumption is that a persistent experience needs a persistent network connection.
		Those are separate concerns.
	</p>
	<p>
		An interactive experience can keep durable state on the server: conversation history, character
		state, scores, stats, current scene, inventory, objectives or tool results. Each HTTP turn can
		reference the same session state even though the media connection itself is short-lived.
	</p>
	<p>
		This distinction is particularly useful for multi-scene experiences. The user may spend time reading
		feedback, navigating a scene or interacting with the environment without needing an AI media stream
		at all. When the next conversational turn happens, the backend simply resumes from the stored
		experience state.
	</p>

	<h2>The browser can be more than a video player</h2>
	<p>
		Photorealistic avatar systems often stream a rendered video feed to the user. That makes real-time
		media transport central to the product.
	</p>
	<p>
		Liforma takes a different approach. The browser is an active runtime for the experience. It can
		render characters, play generated speech and animation, display scenes and 3D backdrops, apply
		environmental effects and manage interaction UI.
	</p>
	<p>
		That allows the network to carry the information needed to produce the experience rather than
		necessarily carrying a continuous rendered video call.
	</p>
	<p>
		It is one reason non-photorealistic and browser-native characters can have an economic advantage:
		the client can perform more of the presentation work locally.
	</p>

	<h2>A better rule: pay for capabilities you actually need</h2>
	<p>
		WebRTC is not legacy technology. It is mature technology solving a difficult problem extremely well.
		The mistake is using it by default for products that do not have that problem.
	</p>
	<p>
		The same applies in the opposite direction. HTTP should not be chosen merely because it is simpler
		or cheaper if the product needs continuous real-time media.
	</p>
	<p>
		A useful architecture decision starts with the experience:
	</p>
	<ul>
		<li>Does the user need to interrupt naturally at any time?</li>
		<li>Do both sides need to speak simultaneously?</li>
		<li>Is microphone or video input continuously meaningful?</li>
		<li>How much of a typical session is actual inference versus silence and playback?</li>
		<li>Can generated speech and animation be streamed quickly enough to feel responsive?</li>
		<li>Does the browser already own most of the presentation layer?</li>
	</ul>
	<p>
		If the answers point toward a call, use a call architecture. If they point toward structured turns,
		a request architecture may be the better abstraction.
	</p>

	<h2>Our thesis at Liforma</h2>
	<p>
		We think a large class of embodied-AI products have inherited a call architecture from the first
		generation of voice agents even though their actual interaction model is closer to an interactive
		application.
	</p>
	<p>
		As model latency falls, that distinction becomes increasingly important. The user can still
		experience an intelligent character that listens, thinks, speaks and animates in real time without
		requiring every second of the experience to be represented by a continuously open AI media session.
	</p>
	<p>
		That is particularly important when the goal is not merely a one-to-one voice assistant, but
		multi-character, multi-scene experiences that people might use for 20, 30 or 60 minutes at a time.
	</p>
	<p>
		The result is a different optimisation target:
		<strong>keep the models warm, not necessarily the connection.</strong>
	</p>

	<div class="callout">
		<strong>Related:</strong>
		read <a href="/how-much-do-interactive-ai-avatars-cost">How Much Do Interactive AI Avatars Cost?</a>
		for a comparison of complete-stack pricing, or
		<a href="https://docs.liforma.ai/">see how Liforma Avatar Experiences work</a>.
	</div>
</BlogPostLayout>
