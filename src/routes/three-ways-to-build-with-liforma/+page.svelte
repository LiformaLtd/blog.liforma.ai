<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('three-ways-to-build-with-liforma')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		<strong>There are three fundamentally different ways to build an interactive avatar with Liforma.</strong>
		You can use the complete Liforma conversational stack, keep Liforma's speech and animation layers
		but bring your own intelligence, or keep your existing realtime voice agent and use Liforma only to
		give it a visual character.
	</p>

	<p>
		These are not merely different API options. They represent three different boundaries between what
		Liforma owns and what your application owns.
	</p>

	<div class="callout">
		<strong>In one line:</strong>
		<strong>Live</strong> = Liforma owns the whole conversation;
		<strong>Relay</strong> = you own the brain;
		<strong>Motion</strong> = you own the entire voice agent and Liforma adds the animated character.
	</div>

	<h2>The three Liforma integration layers</h2>
	<table>
		<thead>
			<tr>
				<th>Mode</th>
				<th>Liforma provides</th>
				<th>You provide</th>
				<th>Best when</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Liforma Live</strong></td>
				<td>STT + intelligence + TTS + speech-to-animation</td>
				<td>Your experience configuration</td>
				<td>You want the simplest complete solution</td>
			</tr>
			<tr>
				<td><strong>Liforma Relay</strong></td>
				<td>STT + TTS + speech-to-animation</td>
				<td>Your LLM / agent / dialogue logic</td>
				<td>You want complete control over what the character says</td>
			</tr>
			<tr>
				<td><strong>Liforma Motion</strong></td>
				<td>Speech-to-animation</td>
				<td>Your complete speech-to-speech stack</td>
				<td>You already have a voice agent and just need the visual layer</td>
			</tr>
		</tbody>
	</table>

	<p>
		Liforma also offers <strong>Liforma Speak</strong> for text-to-speech plus animation when your
		application already knows exactly what the character should say. But for open-ended conversational
		applications, Live, Relay and Motion are the three most important architectural choices.
	</p>

	<h2>1. Liforma Live: use the complete stack</h2>
	<p>
		Liforma Live is the default and simplest way to build.
	</p>
	<p>
		The flow is:
	</p>
	<p>
		<strong>User speech → Liforma STT → Liforma intelligence → Liforma TTS → Liforma animation</strong>
	</p>
	<p>
		Your application does not have to select a speech recogniser, call an LLM, stream text into a voice
		provider, synchronize generated speech with an avatar or manage the conversational pipeline between
		those systems.
	</p>
	<p>
		You create an Experience, define the characters, instructions, world, state and tools, and Liforma
		handles the live conversational path.
	</p>

	<h3>When should you use Liforma Live?</h3>
	<p>
		Use Live when you want:
	</p>
	<ul>
		<li>the fastest route from an idea to a working interactive character;</li>
		<li>one vendor for STT, intelligence, voice and animation;</li>
		<li>no additional AI-provider integration or billing;</li>
		<li>a predictable low operating cost;</li>
		<li>the Liforma authoring model for characters, scenes, state and tools; and</li>
		<li>good conversational quality without optimising every model individually.</li>
	</ul>

	<p>
		<a href="https://www.liforma.ai/pricing">Liforma's current published price</a> for Live is
		<strong>$0.010 per generated speech minute</strong>. That includes STT, intelligence, TTS and
		animation.
	</p>
	<p>
		There is no extra LLM bill or TTS-provider bill for the developer. That simplicity is a major part
		of the product.
	</p>

	<h3>The main advantage: fewer moving parts</h3>
	<p>
		Voice agents can become surprisingly complicated when each stage comes from a different provider.
	</p>
	<p>
		A typical assembled stack might require:
	</p>
	<ul>
		<li>microphone capture and turn detection;</li>
		<li>speech-to-text;</li>
		<li>conversation history;</li>
		<li>LLM inference;</li>
		<li>tools and state updates;</li>
		<li>text-to-speech;</li>
		<li>streaming audio;</li>
		<li>interruption handling;</li>
		<li>speech-to-animation;</li>
		<li>avatar playback; and</li>
		<li>error handling across all of those boundaries.</li>
	</ul>
	<p>
		With Live, that complexity stays behind the Experience interface.
		<a href="https://docs.liforma.ai/getting-started/quick-start">Liforma's Quick Start</a> describes
		the complete managed path: session creation, microphone capture, speech recognition, AI response,
		TTS and avatar rendering are handled by the runtime.
	</p>

	<h3>Is the included LLM and TTS always the absolute best available?</h3>
	<p>
		Not necessarily — and that is intentional.
	</p>
	<p>
		Liforma optimises the managed stack for a combination of quality, latency and very low cost. For many
		training, education, game and website-assistant experiences, the included models are more than good
		enough and the simplicity is worth far more than a marginal improvement from a more expensive model.
	</p>
	<p>
		But there are applications where a developer wants a particular frontier model, a particular voice
		provider or much richer emotional speech. That is why the other two integration layers exist.
	</p>

	<h2>2. Liforma Relay: keep the speech stack, bring your own intelligence</h2>
	<p>
		Liforma Relay moves one boundary.
	</p>
	<p>
		The flow becomes:
	</p>
	<p>
		<strong>User speech → Liforma STT → your intelligence → Liforma TTS → Liforma animation</strong>
	</p>
	<p>
		Liforma still handles the microphone-to-text side of the conversation and the text-to-spoken-avatar
		side. Your application decides exactly what the character should say next.
	</p>

	<h3>Why bring your own LLM?</h3>
	<p>
		For many developers, “the LLM” is not just a model choice. It is the application.
	</p>
	<p>
		Your intelligence layer may contain:
	</p>
	<ul>
		<li>a specific frontier or specialist LLM;</li>
		<li>your own system prompts;</li>
		<li>proprietary business rules;</li>
		<li>RAG over your own data;</li>
		<li>your own tool-calling framework;</li>
		<li>a game dialogue system;</li>
		<li>a tutoring engine;</li>
		<li>a deterministic rules engine;</li>
		<li>multiple model calls or agent steps; or</li>
		<li>logic that is not based on an LLM at all.</li>
	</ul>
	<p>
		Relay lets you keep all of that while avoiding the need to separately implement STT, TTS and avatar
		animation.
	</p>

	<h3>Example: a regulated customer-service agent</h3>
	<p>
		Imagine a financial-services company with an existing response engine.
	</p>
	<p>
		It may have carefully controlled prompts, policy retrieval, compliance checks, tool calls and a final
		response validator. Replacing that logic merely to add a visual character would make little sense.
	</p>
	<p>
		With Relay, Liforma can transcribe the customer, pass the text to the company's existing intelligence
		layer, then speak and animate the approved response.
	</p>

	<h3>Example: a game with its own dialogue engine</h3>
	<p>
		A game developer may already have explicit world state, quests, inventory, faction relationships and
		NPC logic.
	</p>
	<p>
		The game can decide what the character says while Liforma handles listening, voice generation and
		animation. The character therefore fits into the game's existing architecture instead of forcing the
		game to fit into a generic agent architecture.
	</p>

	<h3>How is Relay implemented?</h3>
	<p>
		Liforma exposes a custom conversation processor for this pattern. The SDK can continue to own turn
		orchestration while your function owns the response.
	</p>
	<p>
		For example:
	</p>
	<pre><code>{`const experience = await Experience.startSession({
  experienceId: 'exp_YOUR_EXPERIENCE_ID',
  mode: 'conversation',
  speechInputMode: 'auto',
  conversationProcessor: async ({ text, conversation, signal }) => {
    const response = await yourAgent.respond({
      text,
      conversation,
      signal
    });

    return response.text;
  }
});`}</code></pre>
	<p>
		The processor can also stream text incrementally rather than waiting for one complete response.
		<a href="https://docs.liforma.ai/guides/custom-conversation-processor">See the Custom Conversation
		Processor guide</a>.
	</p>

	<h3>What does Relay cost?</h3>
	<p>
		Liforma currently publishes Relay at <strong>$0.009 per generated speech minute</strong>.
	</p>
	<p>
		But unlike Live, that is not your complete AI cost. You also pay whatever your intelligence layer
		costs.
	</p>
	<p>
		That might be nearly zero for a small local model, or materially more if every turn uses a large
		frontier model with extensive context and tool calls.
	</p>
	<p>
		The benefit is control, not necessarily lower total cost.
	</p>

	<h2>3. Liforma Motion: keep your complete voice agent and add the visual layer</h2>
	<p>
		Liforma Motion moves the boundary again.
	</p>
	<p>
		The flow is:
	</p>
	<p>
		<strong>Your speech-to-speech stack → generated audio → Liforma speech-to-animation</strong>
	</p>
	<p>
		Your existing voice system owns listening, turn detection, reasoning and speech generation. Liforma
		receives the resulting audio and turns it into timed avatar speech and facial animation.
	</p>
	<p>
		This is the right model when your voice agent is already working and the missing piece is simply:
		<strong>give it a face.</strong>
	</p>

	<h3>Modern speech-to-speech systems are increasingly complete products</h3>
	<p>
		By 2026, several providers offer sophisticated realtime voice-agent stacks of their own.
	</p>
	<p>
		Examples include:
	</p>
	<ul>
		<li>
			<strong>ElevenLabs ElevenAgents</strong> — a realtime voice-agent platform with highly expressive
			voice technology, tool use and configurable LLMs.
		</li>
		<li>
			<strong>Google Gemini Live API</strong> — realtime bidirectional interaction with Gemini using
			audio, video and text input and native audio output.
		</li>
		<li>
			<strong>OpenAI Realtime API</strong> — native speech-to-speech conversation with realtime models,
			tool calling and low-latency audio input/output.
		</li>
		<li>
			<strong>Deepgram Voice Agent</strong> and other voice-agent systems that can produce streaming
			audio responses.
		</li>
	</ul>
	<p>
		If you are already using one of those platforms successfully, replacing it with another STT → LLM →
		TTS pipeline solely to add an avatar is unnecessary.
	</p>

	<h3>Liforma sits after the voice agent</h3>
	<p>
		In Motion, Liforma does not need to understand how your speech was generated.
	</p>
	<p>
		The audio may come from ElevenLabs, OpenAI, Gemini, Deepgram, LiveKit or your own system. Liforma
		accepts streamed PCM or other supported audio, handles playback timing and drives the avatar mouth
		and facial animation.
	</p>
	<p>
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice">The Bring Your Own Voice
		guide</a> documents the generic path, with dedicated integrations for the major realtime providers.
	</p>

	<h2>ElevenLabs ElevenAgents + Liforma</h2>
	<p>
		ElevenLabs is a particularly natural example because many teams already use ElevenAgents for voice
		conversation and specifically chose it for speech quality.
	</p>
	<p>
		You can keep that entire stack and use Liforma only for the visual character.
	</p>
	<p>
		Liforma provides a dedicated <code>connectElevenLabsAgent()</code> helper that receives ElevenLabs
		agent audio, forwards it to the Liforma character and handles the audio/transcript path needed for
		lip-sync.
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice/elevenlabs">See the
		ElevenLabs → Liforma integration guide</a>.
	</p>
	<p>
		Conceptually:
	</p>
	<p>
		<strong>ElevenAgents listens → ElevenAgents reasons → ElevenLabs speaks → Liforma animates</strong>
	</p>

	<h2>Gemini Live API + Liforma</h2>
	<p>
		Google's current product name is the <strong>Gemini Live API</strong>. It supports realtime
		bidirectional interaction with audio, video and text, with native spoken audio responses.
	</p>
	<p>
		Google currently positions Gemini 3.8 Live as its default low-latency model for many realtime voice
		agent experiences.
	</p>
	<p>
		Liforma's Google bridge keeps Gemini Live as the speech-to-speech brain and streams its generated
		audio into the avatar.
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice/google">See the Gemini Live
		→ Liforma guide</a>.
	</p>
	<p>
		Conceptually:
	</p>
	<p>
		<strong>Gemini Live listens → Gemini reasons → Gemini speaks → Liforma animates</strong>
	</p>

	<h2>OpenAI Realtime API + Liforma</h2>
	<p>
		OpenAI's product is the <strong>Realtime API</strong>. It provides native speech-to-speech
		conversation rather than requiring developers to separately chain speech recognition, a text model
		and TTS.
	</p>
	<p>
		Liforma provides helpers for both WebSocket and WebRTC Realtime integrations. The OpenAI session owns
		the realtime conversation and generated speech; Liforma receives that speech and turns it into the
		visual character.
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice/openai">See the OpenAI
		Realtime → Liforma guide</a>.
	</p>
	<p>
		Conceptually:
	</p>
	<p>
		<strong>OpenAI Realtime listens → OpenAI reasons → OpenAI speaks → Liforma animates</strong>
	</p>

	<h2>Why choose Motion instead of Liforma's included voice?</h2>
	<p>
		There are several strong reasons.
	</p>

	<h3>1. You already have a working voice agent</h3>
	<p>
		This is the most obvious case.
	</p>
	<p>
		If your application already has prompts, tools, RAG, analytics, turn-taking and a production voice
		agent, the cost of replacing all of that may be much higher than the cost of adding animation.
	</p>
	<p>
		Motion lets the avatar become another presentation layer over the system you already trust.
	</p>

	<h3>2. You want frontier-quality speech</h3>
	<p>
		The highest-end realtime voice models can produce richer prosody, emotion, pacing and conversational
		nuance than a TTS system optimised primarily around low cost.
	</p>
	<p>
		ElevenLabs, for example, now offers an Expressive mode in ElevenAgents built around
		Eleven v3 Conversational, which adapts tone and emotional delivery to conversational context.
	</p>
	<p>
		OpenAI's Realtime models and Gemini Live similarly generate native spoken responses rather than
		reducing every turn to text before speech synthesis.
	</p>
	<p>
		For a dramatic character, premium concierge, companion or emotionally rich experience, that extra
		expressiveness may be worth paying for.
	</p>

	<h3>3. You want frontier intelligence and voice in one realtime system</h3>
	<p>
		Speech-to-speech models can preserve information that a traditional STT → text LLM → TTS chain may
		lose: tone of voice, hesitation, emotion, emphasis and other acoustic cues.
	</p>
	<p>
		That can matter when the quality of the spoken interaction itself is central to the product.
	</p>

	<h3>4. You already have startup or cloud credits</h3>
	<p>
		This can change the economics dramatically.
	</p>
	<p>
		A startup may have substantial promotional credits with an AI or cloud provider. If those credits
		cover a realtime voice stack, your effective STT/LLM/TTS cost may temporarily be close to zero.
	</p>
	<p>
		In that situation, there is little reason to pay Liforma to reproduce capabilities that another
		provider is already giving you under your credit allowance. Use the credits for the expensive
		frontier intelligence and speech, then use Liforma Motion for the visual layer.
	</p>
	<p>
		The important caveat is that those economics change once the credits expire, so the production cost
		should still be modelled at normal provider pricing.
	</p>

	<h3>5. You need a provider-specific capability</h3>
	<p>
		Your existing voice stack may provide something Liforma's managed pipeline is not intended to
		replace: a particular cloned voice, provider-specific compliance setup, sophisticated telephony,
		multimodal video input or another specialised feature.
	</p>
	<p>
		Motion allows you to keep that capability and add animation independently.
	</p>

	<h2>Is frontier-quality TTS always necessary?</h2>
	<p>
		No.
	</p>
	<p>
		There is a danger in assuming the most expressive available voice is automatically the right voice
		for every application.
	</p>
	<p>
		For many experiences, Liforma's included TTS is already entirely adequate:
	</p>
	<ul>
		<li>workplace training;</li>
		<li>product assistants;</li>
		<li>educational tutors;</li>
		<li>information guides;</li>
		<li>many game NPCs;</li>
		<li>role-play scenarios; and</li>
		<li>high-volume applications where cost matters.</li>
	</ul>
	<p>
		In these cases the quality of the scenario, character behaviour, latency and response content can be
		more important than obtaining the last increment of vocal expressiveness.
	</p>
	<p>
		But there are also applications where voice performance is a central part of the character. Motion
		means you do not have to choose between Liforma's avatar system and a premium external voice stack.
	</p>

	<h2>Motion also avoids forcing speech-to-speech systems back into text</h2>
	<p>
		This is an important technical point.
	</p>
	<p>
		If your existing system is genuinely native speech-to-speech, inserting a separate text-only
		intelligence layer just to drive an avatar can throw away some of the reason you chose the system in
		the first place.
	</p>
	<p>
		With Motion, the generated audio can remain the authoritative output. Liforma consumes the audio
		stream directly for playback and animation.
	</p>
	<p>
		When a transcript is available, it can also be supplied to improve alignment, but the voice provider
		still owns the spoken performance.
	</p>

	<h2>What does Motion cost?</h2>
	<p>
		Liforma currently publishes Motion at <strong>$0.008 per generated speech minute</strong>.
	</p>
	<p>
		That buys the avatar animation layer, not the external voice-agent service.
	</p>
	<p>
		Your true total cost is therefore:
	</p>
	<p>
		<strong>your voice-agent cost + $0.008/min for Liforma Motion</strong>
	</p>
	<p>
		That can be more expensive than Liforma Live at normal provider prices. Motion is primarily about
		control, reuse of an existing stack and access to capabilities or quality levels that matter to your
		application.
	</p>

	<h2>Live vs Relay vs Motion: who owns each layer?</h2>
	<table>
		<thead>
			<tr>
				<th>Layer</th>
				<th>Live</th>
				<th>Relay</th>
				<th>Motion</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Microphone / speech input</td>
				<td>Liforma</td>
				<td>Liforma</td>
				<td>Your voice stack</td>
			</tr>
			<tr>
				<td>Speech-to-text</td>
				<td>Liforma</td>
				<td>Liforma</td>
				<td>Your voice stack</td>
			</tr>
			<tr>
				<td>Conversation intelligence</td>
				<td>Liforma</td>
				<td><strong>You</strong></td>
				<td><strong>You / your provider</strong></td>
			</tr>
			<tr>
				<td>Text-to-speech / native audio output</td>
				<td>Liforma</td>
				<td>Liforma</td>
				<td><strong>Your voice stack</strong></td>
			</tr>
			<tr>
				<td>Speech playback</td>
				<td>Liforma</td>
				<td>Liforma</td>
				<td>Liforma receives your audio</td>
			</tr>
			<tr>
				<td>Speech-to-animation</td>
				<td>Liforma</td>
				<td>Liforma</td>
				<td>Liforma</td>
			</tr>
			<tr>
				<td>Avatar / scene rendering</td>
				<td>Liforma</td>
				<td>Liforma</td>
				<td>Liforma</td>
			</tr>
		</tbody>
	</table>

	<h2>Which mode should you choose?</h2>

	<h3>Choose Live if...</h3>
	<ul>
		<li>you want the simplest integration;</li>
		<li>you do not already have a conversational stack;</li>
		<li>you want predictable end-to-end pricing;</li>
		<li>Liforma's included LLM and voice quality meet your needs; and</li>
		<li>you would rather spend engineering time on the experience than on AI infrastructure.</li>
	</ul>

	<h3>Choose Relay if...</h3>
	<ul>
		<li>you want your own prompts, LLMs, tools or business logic;</li>
		<li>you already have an agent or dialogue engine that consumes and returns text;</li>
		<li>you want Liforma to continue handling STT and voice generation;</li>
		<li>you need deterministic or specialist processing between transcription and speech; or</li>
		<li>your intelligence layer is a core piece of proprietary technology.</li>
	</ul>

	<h3>Choose Motion if...</h3>
	<ul>
		<li>you already use ElevenAgents, Gemini Live, OpenAI Realtime or another voice-agent stack;</li>
		<li>you want premium or especially expressive external speech;</li>
		<li>you want native speech-to-speech rather than a chained text pipeline;</li>
		<li>startup credits make a frontier voice stack economically attractive;</li>
		<li>you need provider-specific voice, telephony or multimodal capabilities; or</li>
		<li>you simply want to add an animated character to a system that already works.</li>
	</ul>

	<h2>The modes are a migration path, not three separate products</h2>
	<p>
		An important consequence of this architecture is that your decision does not have to be permanent.
	</p>
	<p>
		A team can begin with Live to launch quickly. Later, it may move the intelligence layer into its own
		backend and use Relay. If it eventually adopts a specialist realtime speech provider, it can use
		Motion while retaining the Liforma characters and experience layer.
	</p>
	<p>
		Or the direction can go the other way: a prototype built around an expensive third-party voice stack
		can move to Live when credits expire or when unit economics become more important.
	</p>
	<p>
		The avatar should not force the rest of your AI architecture.
	</p>

	<h2>The visual layer should be composable</h2>
	<p>
		This is the larger design principle.
	</p>
	<p>
		There is no single “best” LLM, speech recogniser or voice model for every application. The frontier
		will keep moving, pricing will keep changing and developers will have different provider
		relationships.
	</p>
	<p>
		A visual character platform should therefore work at more than one level of the stack.
	</p>
	<p>
		If you want everything managed, use everything. If your intelligence is special, keep it. If your
		voice stack is special, keep that too.
	</p>
	<p>
		Liforma's job at the narrowest layer is simply to take the speech your AI already produces and turn
		it into a character that can exist inside an interactive visual experience.
	</p>

	<div class="callout">
		<strong>Choose your stack:</strong>
		<a href="https://www.liforma.ai/pricing">compare Live, Relay and Motion pricing</a>,
		<a href="https://docs.liforma.ai/guides/custom-conversation-processor">bring your own intelligence</a>,
		or
		<a href="https://docs.liforma.ai/avatar-experiences/bring-your-own-voice">connect an existing
		speech-to-speech system to a Liforma avatar</a>.
	</div>
</BlogPostLayout>
