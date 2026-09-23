<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getResourcePost } from '$lib/blog';

	const post = getResourcePost('deepgram-voice-agent-avatar')!;
</script>

<BlogPostLayout {post} pathname="/resources/{post.slug}">
	<p>
		<strong>If you already use Deepgram's Voice Agent API, you can keep Deepgram's complete
		listen → think → speak loop and use Liforma only for the avatar.</strong> Liforma receives the
		Voice Agent's generated audio, plays it through the Experience and drives realtime facial animation
		and lip-sync.
	</p>

	<div class="callout">
		<strong>Architecture:</strong> User → Deepgram Voice Agent API → agent audio → Liforma → animated
		character.
	</div>

	<h2>Can you add an avatar to a Deepgram Voice Agent?</h2>
	<p>
		Yes. Liforma provides <code>connectDeepgramAgent()</code> in
		<code>@liforma/client/deepgram</code>.
	</p>
	<p>
		Deepgram continues to handle the voice-agent pipeline over its single realtime connection. Liforma
		adds the visual output layer.
	</p>

	<h2>Why Deepgram Voice Agent + Liforma?</h2>
	<p>
		Deepgram's Voice Agent API already combines speech recognition, an LLM integration and speech
		generation in one realtime agent API. If that system is already working for you, there is no need to
		unbundle it just to create a visual agent.
	</p>
	<p>
		Liforma Motion is designed for exactly this case: take the speech produced by the existing voice
		agent and animate a character from it.
	</p>

	<h2>What stays in Deepgram?</h2>
	<ul>
		<li>speech input;</li>
		<li>the Voice Agent session;</li>
		<li>your listen / think / speak configuration;</li>
		<li>LLM/provider choice;</li>
		<li>prompt and agent behaviour;</li>
		<li>function calls; and</li>
		<li>generated agent speech.</li>
	</ul>

	<h2>What does Liforma add?</h2>
	<ul>
		<li>an animated character with realtime lip-sync;</li>
		<li>avatar appearance, costumes and hair;</li>
		<li>backdrops and scenes;</li>
		<li>browser-native visual playback;</li>
		<li>Liforma Experience state and orchestration if required; and</li>
		<li>embedding into a website or application.</li>
	</ul>

	<h2>Minimal Deepgram + Liforma integration</h2>
	<pre><code>npm install @liforma/client</code></pre>

	<pre><code>{`import { connectDeepgramAgent } from '@liforma/client/deepgram';

const bridge = await connectDeepgramAgent(experience, {
  proxyUrl,
  // agent: { listen, think, speak }
});

// Later:
await bridge.end();`}</code></pre>

	<p>
		The Liforma helper manages Deepgram's realtime handshake, streams microphone audio and forwards the
		binary agent audio into Liforma utterances for playback and animation.
	</p>
	<p>
		See the
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice/deepgram">Deepgram →
		Liforma implementation guide</a>.
	</p>

	<h2>Why does the browser use a proxy?</h2>
	<p>
		The Deepgram Voice Agent endpoint expects authenticated WebSocket access. Browsers cannot attach the
		required Authorization header to an arbitrary WebSocket in the same way a server can.
	</p>
	<p>
		The recommended Liforma pattern is therefore a same-origin WebSocket proxy. Your server holds the
		Deepgram credential, and the browser connects to your proxy.
	</p>

	<h2>Does Liforma handle the Deepgram handshake?</h2>
	<p>
		Yes. The helper handles the required sequence: connect, wait for <code>Welcome</code>, send
		<code>Settings</code>, wait for <code>SettingsApplied</code>, then begin the realtime audio flow.
	</p>
	<p>
		It also requests headerless linear PCM output so the generated audio can flow directly into the
		Liforma utterance.
	</p>

	<h2>What happens when the user interrupts?</h2>
	<p>
		When Deepgram reports that the user has started speaking, the Liforma bridge cancels the active
		avatar utterance. The visual character therefore stops speaking with the voice agent rather than
		finishing stale audio.
	</p>

	<h2>Can I keep my own LLM in Deepgram?</h2>
	<p>
		Yes. Deepgram supports multiple LLM provider configurations for the Voice Agent API. Liforma does
		not need to know which intelligence provider produced the answer; it simply consumes the resulting
		speech.
	</p>

	<h2>Can I use Deepgram TTS without the Voice Agent API?</h2>
	<p>
		Yes. If you only use Deepgram speech synthesis, you can feed the resulting audio to Liforma directly
		through the generic speech API. This page focuses on Voice Agent because it is the most natural
		end-to-end speech-to-speech integration.
	</p>

	<h2>Why use Deepgram + Liforma instead of Liforma Live?</h2>
	<p>
		Use Deepgram + Liforma when the Deepgram Voice Agent is already part of your architecture or when
		its speech, telephony, models, provider configuration or agent behaviour are important to your
		product.
	</p>
	<p>
		Use Liforma Live when you want the simpler option: one managed STT → intelligence → TTS → animation
		stack without a second provider integration.
	</p>

	<h2>When is this a good fit?</h2>
	<ul>
		<li>you already have a Deepgram Voice Agent;</li>
		<li>you want a visual layer without changing the voice-agent architecture;</li>
		<li>you want to preserve your Deepgram model and voice configuration;</li>
		<li>you want a website avatar driven by Deepgram;</li>
		<li>you want the avatar to inherit Deepgram interruption behaviour; or</li>
		<li>you want Deepgram speech inside a Liforma Experience.</li>
	</ul>

	<div class="callout">
		<strong>Next step:</strong>
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice/deepgram">follow the
		Deepgram integration guide</a> or read
		<a href="/three-ways-to-build-with-liforma">Three Ways to Build With Liforma</a>.
	</div>
</BlogPostLayout>
