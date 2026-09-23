<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getResourcePost } from '$lib/blog';

	const post = getResourcePost('gemini-live-avatar')!;
</script>

<BlogPostLayout {post} pathname="/resources/{post.slug}">
	<p>
		<strong>If your conversational app already runs on the Gemini Live API, Liforma can turn Gemini's
		native audio responses into an animated character without replacing Gemini.</strong> Gemini remains
		the realtime multimodal brain; Liforma supplies the visual character and speech-to-animation layer.
	</p>

	<div class="callout">
		<strong>Architecture:</strong> User → Gemini Live API → native audio response → Liforma → animated
		character.
	</div>

	<h2>Can you add an avatar to Gemini Live?</h2>
	<p>
		Yes. Liforma provides <code>connectGeminiLive()</code> in <code>@liforma/client/google</code>.
		The helper streams microphone audio to your Gemini Live proxy, receives Gemini's generated PCM
		audio and drives the Liforma avatar in realtime.
	</p>

	<h2>Why Gemini Live is a natural fit for an avatar</h2>
	<p>
		Gemini Live is designed for realtime bidirectional interaction using audio and other modalities.
		That means the conversational system may already be capable of listening, reasoning and producing
		native spoken responses. The missing layer is often presentation: what does the user see while
		Gemini speaks?
	</p>
	<p>
		Liforma can provide that layer without forcing the Gemini interaction back through a separate
		text-only agent.
	</p>

	<h2>What stays in Gemini?</h2>
	<ul>
		<li>realtime audio input;</li>
		<li>Gemini reasoning and instructions;</li>
		<li>multimodal context you choose to send;</li>
		<li>tool/function behaviour in your Gemini application;</li>
		<li>native generated audio; and</li>
		<li>your existing Gemini Live conversation architecture.</li>
	</ul>

	<h2>What does Liforma add?</h2>
	<ul>
		<li>the animated character;</li>
		<li>realtime lip-sync / speech-to-animation;</li>
		<li>visual identity, hair, costumes and backdrops;</li>
		<li>browser-native rendering and playback;</li>
		<li>Experience scenes and state; and</li>
		<li>the option to use the same character across other experiences.</li>
	</ul>

	<h2>Minimal Gemini Live + Liforma integration</h2>
	<pre><code>npm install @liforma/client</code></pre>

	<pre><code>{`import { connectGeminiLive } from '@liforma/client/google';

const bridge = await connectGeminiLive(experience, {
  proxyUrl
  // captureMic: true // default
});

// Later:
await bridge.end();`}</code></pre>

	<p>
		The helper sends microphone PCM to Gemini Live and writes Gemini's generated PCM into Liforma
		utterances. It also consumes Gemini output transcription where available so Liforma can improve
		alignment between the speech and facial animation.
	</p>
	<p>
		See the
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice/google">Gemini Live →
		Liforma integration guide</a>.
	</p>

	<h2>Why do I need a WebSocket proxy?</h2>
	<p>
		The Gemini Live connection should be terminated by a trusted backend so that Google credentials are
		not exposed in the browser.
	</p>
	<p>
		The Liforma helper therefore connects to a same-origin WebSocket proxy in your application. That
		proxy talks to Gemini Live and forwards the relevant realtime messages.
	</p>
	<p>
		This is also operationally important: a long-lived WebSocket proxy needs hosting that supports
		long-running WebSocket connections. A conventional short-lived serverless function is not always the
		right place for it.
	</p>

	<h2>How does interruption work?</h2>
	<p>
		Gemini Live can indicate that a model turn has been interrupted. The Liforma bridge maps that event
		to the active avatar utterance so the visual speech stops with the agent rather than continuing after
		the conversation has moved on.
	</p>

	<h2>Does Liforma replace Gemini's native audio?</h2>
	<p>
		No. In this setup Gemini owns the spoken response. Liforma consumes the audio that Gemini generated
		and animates it.
	</p>

	<h2>Can Gemini's output transcription improve lip-sync?</h2>
	<p>
		Yes. Liforma can use the accompanying output transcription as additional alignment information. The
		audio remains authoritative, while the transcript helps the avatar's speech animation follow the
		spoken content more precisely.
	</p>

	<h2>Why use Gemini Live + Liforma instead of a chained STT / LLM / TTS stack?</h2>
	<p>
		If your product was built around Gemini Live specifically for realtime native-audio interaction or
		multimodality, replacing it with a conventional chained pipeline solely to add an avatar would throw
		away much of that architecture.
	</p>
	<p>
		Liforma Motion lets Gemini stay intact and treats the avatar as a composable output layer.
	</p>

	<h2>What if I only use Google Cloud Text-to-Speech?</h2>
	<p>
		That works too. Liforma's Google provider guide also covers one-shot and streamed Google Cloud TTS.
		For a realtime conversational agent, however, Gemini Live is the more relevant speech-to-speech path.
	</p>

	<h2>When is this a good fit?</h2>
	<ul>
		<li>you already built a voice agent with Gemini Live;</li>
		<li>you want to keep Google's native audio output;</li>
		<li>your agent also uses Gemini's multimodal capabilities;</li>
		<li>you want to add a face without replacing Gemini;</li>
		<li>you want a visual tutor, assistant, guide or fictional character driven by Gemini; or</li>
		<li>you want Gemini Live as the voice brain inside a larger Liforma Experience.</li>
	</ul>

	<div class="callout">
		<strong>Next step:</strong>
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice/google">follow the Gemini
		Live integration guide</a> or read
		<a href="/three-ways-to-build-with-liforma">Three Ways to Build With Liforma</a>.
	</div>
</BlogPostLayout>
