<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getResourcePost } from '$lib/blog';

	const post = getResourcePost('openai-realtime-avatar')!;
</script>

<BlogPostLayout {post} pathname="/resources/{post.slug}">
	<p>
		<strong>If your voice agent already uses the OpenAI Realtime API, Liforma can add the animated
		character without replacing the realtime speech-to-speech stack.</strong> OpenAI continues to handle
		audio input, conversation state, reasoning, tools and native spoken output. Liforma consumes that
		output and turns it into the visual avatar experience.
	</p>

	<div class="callout">
		<strong>Architecture:</strong> User → OpenAI Realtime API → native spoken response → Liforma →
		animated character.
	</div>

	<h2>Can you add an avatar to the OpenAI Realtime API?</h2>
	<p>
		Yes. Liforma provides two dedicated bridges in <code>@liforma/client/openai</code>:
	</p>
	<ul>
		<li><code>connectOpenAiRealtimeWebRtc()</code> for the preferred browser media path; and</li>
		<li><code>connectOpenAiRealtime()</code> when you want the Realtime WebSocket path and direct PCM control.</li>
	</ul>
	<p>
		Both let OpenAI remain the speech-to-speech agent while Liforma handles the visual character,
		playback and speech-to-animation.
	</p>

	<h2>Why keep OpenAI Realtime intact?</h2>
	<p>
		The Realtime API works directly with audio and is designed for low-latency conversational voice
		agents with natural turn-taking, barge-in and tool use. If your application already relies on those
		behaviours, decomposing it back into a separate STT → text LLM → TTS pipeline just to add an avatar
		would be unnecessary.
	</p>
	<p>
		Liforma can sit after the realtime model instead.
	</p>

	<h2>What stays in OpenAI?</h2>
	<ul>
		<li>audio input and turn handling;</li>
		<li>Realtime conversation state;</li>
		<li>the model and instructions;</li>
		<li>tool calling;</li>
		<li>native generated speech; and</li>
		<li>your existing Realtime architecture.</li>
	</ul>

	<h2>What does Liforma add?</h2>
	<ul>
		<li>a reusable animated character;</li>
		<li>realtime lip-sync / speech-to-animation;</li>
		<li>appearance, costumes and backdrops;</li>
		<li>browser-native rendering;</li>
		<li>Experience scenes and visual context; and</li>
		<li>the option to use the same character elsewhere in Liforma.</li>
	</ul>

	<h2>Preferred browser integration: OpenAI Realtime over WebRTC</h2>
	<p>
		For browser-based Realtime applications, Liforma's WebRTC helper maps the OpenAI remote audio track
		directly to a Liforma utterance and uses transcript events on the data channel to improve lip-sync.
	</p>
	<pre><code>{`import { connectOpenAiRealtimeWebRtc } from '@liforma/client/openai';

const bridge = await connectOpenAiRealtimeWebRtc(experience, {
  ephemeralKey,
  // instructions: 'You are a helpful voice assistant…',
  // captureMic: true
});

// Later:
await bridge.end();`}</code></pre>

	<p>
		Do not also attach the OpenAI remote track to a separate HTML audio element, or you can end up
		hearing the agent twice.
	</p>
	<p>
		See the
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice/openai">OpenAI → Liforma
		integration guide</a>.
	</p>

	<h2>Mint the Realtime client secret on your server</h2>
	<p>
		The browser should receive an ephemeral Realtime client secret. Your long-lived OpenAI API key
		belongs on the server, not in frontend JavaScript.
	</p>
	<p>
		Once the browser receives the ephemeral value, the Liforma bridge can establish the Realtime
		connection and route the resulting speech into the character.
	</p>

	<h2>When should I use the WebSocket helper instead?</h2>
	<p>
		Use <code>connectOpenAiRealtime()</code> when your application already terminates Realtime over a
		WebSocket or you specifically need access to PCM chunks.
	</p>
	<pre><code>{`import { connectOpenAiRealtime } from '@liforma/client/openai';

const bridge = await connectOpenAiRealtime(experience, {
  ephemeralKey,
  // captureMic: true,
  // mediaStream,
  // instructions,
  // model,
  // voice
});`}</code></pre>
	<p>
		The helper turns each OpenAI response into a Liforma utterance, writes the audio chunks, forwards
		transcript information for alignment and cancels avatar playback on unexpected disconnects or
		interruption.
	</p>

	<h2>Can I keep OpenAI tool calling and my existing application logic?</h2>
	<p>
		Yes. Liforma does not need to become the agent brain. OpenAI can continue to decide what to say and
		which tools to call. Liforma receives the resulting spoken response and provides the character layer.
	</p>

	<h2>Why use OpenAI Realtime + Liforma instead of Liforma Live?</h2>
	<p>
		Use this configuration when OpenAI Realtime itself is important to your product — for example because
		you want native speech-to-speech behaviour, a specific Realtime model, an existing tool stack,
		provider credits or a voice experience you have already tuned.
	</p>
	<p>
		If you do not need those things and primarily want a simple complete interactive avatar, Liforma
		Live can be substantially simpler because STT, intelligence, TTS and animation are included as one
		managed path.
	</p>

	<h2>Can I use classic OpenAI TTS instead of Realtime?</h2>
	<p>
		Yes. Liforma can also play one-shot or streamed audio generated by OpenAI TTS. The provider guide
		includes a PCM example for this path. But if you are building a live voice agent, the Realtime API
		bridge is the more direct architecture.
	</p>

	<h2>Does Liforma change the OpenAI voice?</h2>
	<p>
		No. In the Realtime integration, the OpenAI-generated audio is the authoritative spoken output.
		Liforma animates that exact speech.
	</p>

	<h2>When is this a good fit?</h2>
	<ul>
		<li>you already have an OpenAI Realtime voice agent;</li>
		<li>you want to preserve native speech-to-speech interaction;</li>
		<li>you use OpenAI tools and Realtime conversation state;</li>
		<li>you want a visual layer without rebuilding the agent;</li>
		<li>you want an avatar for a browser-based Realtime experience; or</li>
		<li>you want OpenAI speech inside a larger Liforma character experience.</li>
	</ul>

	<div class="callout">
		<strong>Next step:</strong>
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice/openai">follow the OpenAI
		Realtime integration guide</a> or read
		<a href="/three-ways-to-build-with-liforma">Three Ways to Build With Liforma</a>.
	</div>
</BlogPostLayout>
