<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getResourcePost } from '$lib/blog';

	const post = getResourcePost('livekit-agent-avatar')!;
</script>

<BlogPostLayout {post} pathname="/resources/{post.slug}">
	<p>
		<strong>If your voice agent already lives in a LiveKit room, Liforma can turn the agent's remote
		audio track into an animated character.</strong> You can keep LiveKit Agents, rooms, telephony,
		model plugins and realtime transport exactly where they are. Liforma becomes the visual participant
		layer.
	</p>

	<div class="callout">
		<strong>Architecture:</strong> LiveKit Agent / remote participant → audio track → Liforma →
		animated character.
	</div>

	<h2>Can you add an avatar to a LiveKit Agent?</h2>
	<p>
		Yes. Liforma provides <code>connectLiveKitAgent()</code> in
		<code>@liforma/client/livekit</code>. The helper joins the LiveKit room, selects the agent audio
		track and routes that <code>MediaStreamTrack</code> into the Liforma Experience.
	</p>

	<h2>Why LiveKit is different from the other integrations</h2>
	<p>
		LiveKit is not one specific speech-to-speech model. It is a realtime media and agent framework.
		Your LiveKit Agent might use a traditional STT → LLM → TTS pipeline, OpenAI Realtime, Gemini Live or
		another realtime model.
	</p>
	<p>
		That makes the Liforma integration especially general: Liforma can sit at the media boundary and
		animate whatever speech the LiveKit agent ultimately publishes into the room.
	</p>

	<h2>What stays in LiveKit?</h2>
	<ul>
		<li>the room and realtime media transport;</li>
		<li>your LiveKit Agent process;</li>
		<li>STT / LLM / TTS or realtime-model selection;</li>
		<li>tool logic and workflows;</li>
		<li>telephony if you use it;</li>
		<li>participant lifecycle; and</li>
		<li>the agent's published audio track.</li>
	</ul>

	<h2>What does Liforma add?</h2>
	<ul>
		<li>the visible animated character;</li>
		<li>speech-to-animation and lip-sync;</li>
		<li>character identity and appearance;</li>
		<li>backdrops and scenes;</li>
		<li>browser-native visual rendering; and</li>
		<li>the wider Liforma Experience layer around the LiveKit voice agent.</li>
	</ul>

	<h2>Minimal LiveKit + Liforma integration</h2>
	<pre><code>npm install @liforma/client livekit-client</code></pre>

	<pre><code>import { connectLiveKitAgent } from '@liforma/client/livekit';

const bridge = await connectLiveKitAgent(experience, {
  url,
  token,
  // enableTranscript: true,
  // shouldBridgeParticipant: (p) =&gt; p.identity.startsWith('agent')
});

// Later:
await bridge.end();</code></pre>

	<p>
		The helper joins the room, bridges the selected remote audio track directly into a Liforma
		utterance, and can consume LiveKit transcription streams for improved alignment.
	</p>
	<p>
		See the
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice/livekit">LiveKit →
		Liforma integration guide</a>.
	</p>

	<h2>Mint the LiveKit participant token on your server</h2>
	<p>
		The browser needs a participant token appropriate for the room. Generate that token server-side,
		then pass the LiveKit URL and token to the Liforma bridge.
	</p>

	<h2>Do not play the agent track twice</h2>
	<p>
		This is the most important implementation detail.
	</p>
	<p>
		Once Liforma owns playback of the remote agent audio track, do not also attach that same track to a
		LiveKit <code>&lt;audio&gt;</code> element. Otherwise the user will hear two copies of the agent
		speech.
	</p>

	<h2>How does lip-sync work with a long-lived media track?</h2>
	<p>
		LiveKit commonly exposes one long-lived remote audio track rather than a series of separate PCM
		files. Liforma can create an utterance directly from the <code>MediaStreamTrack</code>.
	</p>
	<p>
		If your agent publishes text on the standard LiveKit transcription stream, the bridge can forward
		that text to the utterance as alignment information while the media track remains the authoritative
		audio source.
	</p>

	<h2>Can I use OpenAI Realtime or Gemini Live inside LiveKit?</h2>
	<p>
		Yes. LiveKit Agents supports both chained voice pipelines and realtime speech models. If your agent
		already wraps OpenAI Realtime, Gemini Live or another supported realtime provider inside LiveKit,
		Liforma does not need a separate provider-specific connection. It can simply animate the LiveKit
		remote track.
	</p>

	<h2>What if ElevenLabs is connected through WebRTC?</h2>
	<p>
		This is also the right path when an ElevenLabs configuration delivers the agent speech as a LiveKit
		remote track rather than as PCM callbacks. Bridge the media track with
		<code>connectLiveKitAgent()</code>.
	</p>

	<h2>Can I keep LiveKit telephony?</h2>
	<p>
		Yes. Liforma is only consuming the resulting agent media for the visual experience. Your LiveKit
		room, SIP/telephony setup and backend agent lifecycle can stay intact.
	</p>

	<h2>Why use LiveKit + Liforma?</h2>
	<p>
		LiveKit is a strong foundation when realtime media infrastructure is already part of your product.
		Liforma lets you add a visible character without replacing that infrastructure or tying the avatar
		to one particular model provider.
	</p>

	<h2>When is this a good fit?</h2>
	<ul>
		<li>your voice agent already joins LiveKit rooms;</li>
		<li>you want to preserve LiveKit transport and telephony;</li>
		<li>you want model-provider flexibility behind the avatar;</li>
		<li>your agent audio already exists as a remote media track;</li>
		<li>you want to add a face to an existing LiveKit application; or</li>
		<li>you want the LiveKit voice agent inside a richer Liforma Experience.</li>
	</ul>

	<div class="callout">
		<strong>Next step:</strong>
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice/livekit">follow the LiveKit
		integration guide</a> or read
		<a href="/three-ways-to-build-with-liforma">Three Ways to Build With Liforma</a>.
	</div>
</BlogPostLayout>
