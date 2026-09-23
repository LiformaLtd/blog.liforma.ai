<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getResourcePost } from '$lib/blog';

	const post = getResourcePost('elevenlabs-ai-agent-avatar')!;
</script>

<BlogPostLayout {post} pathname="/resources/{post.slug}">
	<p>
		<strong>If you already have an ElevenLabs ElevenAgent, you do not need to rebuild it to add a face.</strong>
		Keep ElevenLabs handling the realtime conversation, voice, prompts, tools and knowledge. Liforma can
		take the agent's generated audio and turn it into a realtime animated character with lip-sync,
		appearance, backdrop and the wider Liforma Experience layer.
	</p>

	<div class="callout">
		<strong>Architecture:</strong> User → ElevenLabs ElevenAgent → generated speech → Liforma →
		animated character.
	</div>

	<h2>Can you add an avatar to an ElevenLabs voice agent?</h2>
	<p>
		Yes. Liforma provides a dedicated ElevenLabs bridge:
		<code>connectElevenLabsAgent()</code> from <code>@liforma/client/elevenlabs</code>.
		It connects an existing ElevenAgent to a Liforma Experience without replacing the ElevenLabs agent.
	</p>
	<p>
		This is useful if you already chose ElevenLabs because of its voices, agent tooling or existing
		production setup and simply want to put a visual character on top of it.
	</p>

	<h2>What stays in ElevenLabs?</h2>
	<ul>
		<li>speech input and turn handling;</li>
		<li>your ElevenAgent configuration;</li>
		<li>LLM / reasoning configuration;</li>
		<li>system prompts and conversation rules;</li>
		<li>knowledge and tools;</li>
		<li>ElevenLabs voice generation; and</li>
		<li>the conversational audio stream.</li>
	</ul>

	<h2>What does Liforma add?</h2>
	<ul>
		<li>the visual character;</li>
		<li>realtime speech-to-animation and lip-sync;</li>
		<li>character appearance, hair and costumes;</li>
		<li>backdrops and scenes;</li>
		<li>browser-native avatar playback;</li>
		<li>multi-character / multi-scene Experience features if you need them; and</li>
		<li>the ability to embed the resulting character experience in a website or application.</li>
	</ul>

	<h2>Minimal ElevenLabs + Liforma integration</h2>
	<p>
		Install the Liforma and ElevenLabs clients:
	</p>
	<pre><code>npm install @liforma/client @elevenlabs/client</code></pre>

	<p>
		Once your Liforma Experience has started, connect the existing ElevenAgent:
	</p>
	<pre><code>import { connectElevenLabsAgent } from '@liforma/client/elevenlabs';

const bridge = await connectElevenLabsAgent(experience, {
  signedUrl
});

// Later:
await bridge.end();</code></pre>

	<p>
		The Liforma helper receives the ElevenLabs agent audio, determines the configured PCM output format,
		streams it into the active Liforma utterance and forwards transcript information for improved
		lip-sync. It also maps interruption events so avatar playback stops when the user barges in.
	</p>
	<p>
		See the
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice/elevenlabs">complete
		ElevenLabs → Liforma implementation guide</a>.
	</p>

	<h2>Use a signed URL in production</h2>
	<p>
		Do not put an ElevenLabs API key in a production browser. Mint the ElevenLabs signed URL on your
		server and pass that short-lived URL to the browser integration.
	</p>
	<pre><code>const signedUrl = await fetch('/api/elevenlabs-signed-url', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ agentId: 'YOUR_AGENT_ID' })
}).then((r) =&gt; r.json()).then((x) =&gt; x.signedUrl);

const bridge = await connectElevenLabsAgent(experience, {
  signedUrl
});</code></pre>

	<h2>Why keep ElevenLabs as the speech-to-speech brain?</h2>
	<p>
		ElevenLabs is often chosen specifically for voice quality and expressive speech. If that is already
		working for your application, there is little value in replacing the entire conversational stack
		just because you now want an avatar.
	</p>
	<p>
		This is the Liforma Motion model: your existing voice agent remains authoritative and Liforma becomes
		the visual layer.
	</p>
	<p>
		It is particularly attractive when you have an existing production ElevenAgent, cloned or carefully
		chosen voices, provider credits, established tools or prompts, or simply want the most expressive
		voice ElevenLabs can provide.
	</p>

	<h2>How is this different from ElevenLabs' HeyGen LiveAvatar integration?</h2>
	<p>
		ElevenLabs also documents an integration with HeyGen LiveAvatar. In that configuration ElevenLabs
		handles the conversational audio while HeyGen renders a realtime photorealistic video avatar.
	</p>
	<p>
		Liforma solves the same high-level problem — adding a visual character to an ElevenAgent — but with
		a different visual and product architecture. Liforma is designed around browser-native interactive
		characters and complete Experiences, including scenes, state, reusable appearances and
		multi-character experiences.
	</p>
	<p>
		If your main requirement is a photorealistic video-call-style digital human, compare both approaches.
		If you want the avatar to become part of a larger interactive character experience, Liforma's model
		is deliberately broader.
	</p>
	<p>
		See
		<a href="https://elevenlabs.io/docs/eleven-agents/guides/integrations/live-avatar">ElevenLabs'
		LiveAvatar integration documentation</a> for the alternative architecture.
	</p>

	<h2>What if my ElevenLabs Agent uses WebRTC?</h2>
	<p>
		The direct <code>connectElevenLabsAgent()</code> path is designed around the PCM audio emitted by the
		ElevenLabs client. When ElevenLabs is running over WebRTC, the agent audio arrives as a LiveKit
		remote media track instead.
	</p>
	<p>
		In that case, bridge the remote track with Liforma's LiveKit integration. The voice still comes from
		ElevenLabs; Liforma simply consumes the audio track at the media layer.
	</p>
	<p>
		See <a href="/resources/livekit-agent-avatar">How to Add an Avatar to a LiveKit Agent</a>.
	</p>

	<h2>Can I keep my existing ElevenLabs voice?</h2>
	<p>
		Yes. In this architecture Liforma does not synthesize the speech. Whatever voice ElevenLabs produces
		is the audio Liforma animates.
	</p>

	<h2>Does Liforma replace my ElevenLabs prompts, tools or knowledge?</h2>
	<p>
		No. Your ElevenAgent stays in control of the conversation. You can keep the existing prompts,
		knowledge, function calls and agent logic unchanged.
	</p>

	<h2>Does this work with interruptions?</h2>
	<p>
		Yes. The bridge maps ElevenLabs interruption events to Liforma so the active avatar utterance is
		cancelled when the user interrupts.
	</p>

	<h2>Is Liforma streaming another video?</h2>
	<p>
		No. The Liforma integration is not simply a second server-rendered talking-head video stream.
		Liforma uses the speech to drive the character and visual experience, which makes it possible to
		combine the avatar with scenes, state and other browser-native experience features.
	</p>

	<h2>When is this a good fit?</h2>
	<ul>
		<li>you already have an ElevenLabs ElevenAgent in production;</li>
		<li>you want to keep ElevenLabs' voice quality;</li>
		<li>you want to add a face without rebuilding the conversational agent;</li>
		<li>you want a website character or visual assistant driven by ElevenLabs;</li>
		<li>you want a reusable character rather than only an audio interface; or</li>
		<li>you want ElevenLabs speech inside a larger Liforma Experience.</li>
	</ul>

	<div class="callout">
		<strong>Next step:</strong>
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice/elevenlabs">follow the
		ElevenLabs integration guide</a> or read
		<a href="/three-ways-to-build-with-liforma">Three Ways to Build With Liforma</a>.
	</div>
</BlogPostLayout>
