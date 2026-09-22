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

	<h2>What does the LiveKit real-time agent layer actually cost?</h2>
	<p>
		For a developer building a conversational AI product with LiveKit, the economically relevant
		starting point is the <strong>hosted agent session</strong>. As of
		<strong>22 September 2026</strong>,
		<a href="https://livekit.com/pricing">LiveKit's pricing calculator</a> shows
		<strong>$0.0100 per connected minute for the agent session</strong>.
	</p>
	<p>
		That is essentially the managed real-time session layer around the conversation: the agent process
		is kept attached to the live WebRTC session and LiveKit handles the connection and session
		orchestration. LiveKit separately meters raw WebRTC participant usage at a much lower rate, but that
		is not the meaningful cost comparison for an AI agent using LiveKit's hosted agent runtime.
	</p>
	<p>
		If LiveKit observability is enabled in the calculator, that adds another
		<strong>$0.0100 per connected minute</strong>. Before any STT, LLM or TTS is selected, the hosted
		agent-session plus observability layer is therefore about <strong>$0.0200 per connected minute</strong>.
	</p>
	<p>
		The AI pipeline is then added separately. Using the exact example currently shown in LiveKit's
		calculator:
	</p>
	<table>
		<thead>
			<tr>
				<th>Component</th>
				<th>Published example cost</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Agent session</td>
				<td><strong>$0.0100/min</strong></td>
			</tr>
			<tr>
				<td>Observability</td>
				<td><strong>$0.0100/min</strong></td>
			</tr>
			<tr>
				<td>LLM — Gemma 4 31B</td>
				<td>$0.0014/min</td>
			</tr>
			<tr>
				<td>STT — AssemblyAI Universal-3.5 Pro Streaming</td>
				<td>$0.0075/min</td>
			</tr>
			<tr>
				<td>TTS — Fish Audio S2.1 Pro</td>
				<td>$0.0090/min</td>
			</tr>
			<tr>
				<td><strong>Total before avatar animation</strong></td>
				<td><strong>$0.0379/min</strong></td>
			</tr>
		</tbody>
	</table>
	<p>
		If the user connects by phone through a LiveKit US local number, the calculator adds another
		<strong>$0.0100/min</strong> for telephony, bringing that example to
		<strong>$0.0479/min</strong>. For a web or mobile avatar experience, the telephony line is not
		relevant.
	</p>
	<p>
		The important point is that LiveKit is providing a real-time agent platform, not a complete visual
		avatar stack. STT, LLM and TTS are chosen and priced separately. The quoted stack also has no
		<strong>speech-to-animation (STA)</strong> component, so a developer who wants an animated visual
		character needs to add a separate avatar rendering or animation system on top.
	</p>
	<p>
		LiveKit observability includes capabilities such as recordings, transcripts, trace spans and logs.
		Liforma's analytics and diagnostics are not identical, but Liforma includes its experience analytics
		as part of the platform rather than adding a separate per-minute observability charge.
	</p>

	<h2>Why this is different from Liforma's pricing model</h2>
	<p>
		<a href="https://www.liforma.ai/pricing">Liforma Live is currently priced at $0.01 per generated
		speech minute</a> for the complete <strong>STT → intelligence → TTS → STA</strong> pipeline.
		Session orchestration and experience analytics do not have a separate per-connected-minute charge.
	</p>
	<p>
		That creates a very different cost structure:
	</p>
	<table>
		<thead>
			<tr>
				<th>Layer</th>
				<th>LiveKit example</th>
				<th>Liforma</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Hosted real-time agent/session layer</td>
				<td><strong>$0.0100 / connected min</strong></td>
				<td><strong>No separate per-minute charge</strong></td>
			</tr>
			<tr>
				<td>Observability / analytics</td>
				<td><strong>$0.0100 / connected min</strong> when enabled</td>
				<td><strong>Included</strong></td>
			</tr>
			<tr>
				<td>STT</td>
				<td>Selected and priced separately</td>
				<td>Included</td>
			</tr>
			<tr>
				<td>LLM / intelligence</td>
				<td>Selected and priced separately</td>
				<td>Included</td>
			</tr>
			<tr>
				<td>TTS</td>
				<td>Selected and priced separately</td>
				<td>Included</td>
			</tr>
			<tr>
				<td>Speech-to-animation / avatar rendering</td>
				<td>Not included in quoted voice-agent stack</td>
				<td>Included</td>
			</tr>
			<tr>
				<td>Complete conversational character stack</td>
				<td>Depends on selected services + avatar provider</td>
				<td><strong>$0.01 / generated speech min</strong></td>
			</tr>
		</tbody>
	</table>
	<p>
		If a Liforma character speaks for half of a 30-minute experience, that is roughly 15 generated
		speech minutes, or about <strong>$0.15</strong> at the published Liforma Live rate.
	</p>
	<p>
		The LiveKit calculator example, by contrast, is about <strong>3.79¢ for every connected
		minute before any avatar animation is added</strong>. Over 30 connected minutes, that is about
		<strong>$1.14</strong> before the visual-character layer.
	</p>
	<p>
		This is the architectural point behind Liforma's HTTP approach. We do not need to charge a
		per-user real-time session fee simply to keep a conversational connection alive. Instead, the
		platform can charge primarily for the useful AI work performed when the character actually responds.
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
