<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('best-interactive-ai-avatar-platforms-2026')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		<strong>The best interactive AI avatar platform in 2026 depends on what you are actually building.</strong>
		A photorealistic digital human for a customer-service call has very different requirements from a
		multi-character training simulation, a fictional game character or an avatar layer inside an
		existing voice-agent stack.
	</p>

	<p>
		The five platforms compared here — Liforma, HeyGen LiveAvatar, Tavus CVI, D-ID Visual Agents and
		Synthesia Interactive Avatars — overlap, but they are not interchangeable. They differ in visual
		style, how much of the conversational stack they provide, whether they support no-code authoring,
		how they charge and whether they think of the product as an avatar, an agent or a complete
		interactive experience.
	</p>

	<div class="callout">
		<strong>Quick guide:</strong> choose <strong>Liforma</strong> for low-cost, browser-native,
		multi-character or authored experiences; <strong>HeyGen LiveAvatar</strong> for polished
		photorealistic real-time avatars with either an integrated or BYO stack; <strong>Tavus CVI</strong>
		for high-fidelity conversational video with perception and a complete agent stack;
		<strong>D-ID</strong> for no-code visual agents with built-in knowledge/RAG; and
		<strong>Synthesia Interactive Avatars</strong> when you already own the LLM/STT/TTS stack and want
		Synthesia to provide the live avatar-rendering layer.
	</div>

	<h2>Interactive AI avatar platforms compared</h2>
	<table>
		<thead>
			<tr>
				<th>Platform</th>
				<th>Best fit</th>
				<th>Conversational stack</th>
				<th>Visual model</th>
				<th>Published pricing model</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Liforma</strong></td>
				<td>Training, learning, games, multi-character and embedded experiences</td>
				<td>Full STT → intelligence → TTS → animation, or modular BYO options</td>
				<td>Browser-native characters, including stylised/non-photorealistic use cases</td>
				<td><strong>$0.005–$0.010/generated speech min</strong> depending on mode</td>
			</tr>
			<tr>
				<td><strong>HeyGen LiveAvatar</strong></td>
				<td>Photorealistic real-time digital humans</td>
				<td>Full mode includes the conversational stack; Lite mode is more modular</td>
				<td>Photorealistic custom/public avatars</td>
				<td>Approximately <strong>$0.16–$0.19/streaming min</strong> in Full mode on paid tiers</td>
			</tr>
			<tr>
				<td><strong>Tavus CVI</strong></td>
				<td>High-fidelity conversational video, perception and enterprise agents</td>
				<td>End-to-end LLM, TTS and real-time video stack</td>
				<td>Photorealistic AI humans / replicas</td>
				<td>Starter overage <strong>$0.37/min</strong>; Growth overage <strong>$0.32/min</strong></td>
			</tr>
			<tr>
				<td><strong>D-ID Visual Agents</strong></td>
				<td>No-code visual agents, knowledge assistants and website embeds</td>
				<td>Integrated agent with knowledge/RAG</td>
				<td>Human-like visual agents</td>
				<td>Credit-based; speaking time billed in 15-second increments</td>
			</tr>
			<tr>
				<td><strong>Synthesia Interactive Avatars</strong></td>
				<td>Developers who already have their own AI voice stack</td>
				<td>Avatar rendering only; developer supplies LLM, STT and TTS</td>
				<td>Photorealistic / Style Avatars</td>
				<td><strong>$0.10/avatar usage min</strong></td>
			</tr>
		</tbody>
	</table>

	<p>
		Pricing and product capabilities in this article were checked in September 2026. These products
		change quickly, so always check the linked vendor pages before making a procurement decision.
	</p>

	<h2>1. Liforma: best for authored interactive character experiences</h2>
	<p>
		Liforma is the most structurally different platform in this comparison.
	</p>
	<p>
		Most avatar platforms begin with a real-time avatar session. Liforma begins with an
		<strong>Experience</strong>: a reusable unit containing characters, appearances, environments,
		behaviour, state, scenes, tools and progression.
	</p>
	<p>
		That makes it especially suited to:
	</p>
	<ul>
		<li>training role-plays;</li>
		<li>multi-character simulations;</li>
		<li>language learning and coaching;</li>
		<li>interactive stories and games;</li>
		<li>website assistants;</li>
		<li>experiences that move between scenes; and</li>
		<li>creators who want to publish or remix experiences without building a separate app.</li>
	</ul>

	<h3>What Liforma includes</h3>
	<p>
		<a href="https://www.liforma.ai/pricing">Liforma's published pricing</a> currently lists four
		increasingly modular modes:
	</p>
	<ul>
		<li><strong>Liforma Live — $0.010/speech minute:</strong> STT, intelligence, TTS and animation.</li>
		<li><strong>Liforma Relay — $0.008/speech minute:</strong> Liforma provides STT, TTS and animation while you supply the intelligence layer.</li>
		<li><strong>Liforma Motion — $0.005/speech minute:</strong> send your own speech audio and use Liforma for animation.</li>
		<li><strong>Liforma Speak — $0.005/speech minute:</strong> send text and receive spoken animated output.</li>
	</ul>
	<p>
		The unusual part is the billing basis. Liforma bills generated speech/animation time rather than the
		entire period for which the user has the experience open. If a character is silent, that time is not
		billed as generated speech.
	</p>

	<h3>Where Liforma is strongest</h3>
	<p>
		Liforma's strongest advantage is not merely that its published per-minute rate is lower. It is that
		it supports a different kind of product.
	</p>
	<p>
		Characters can be reusable. Experiences can include multiple characters and scenes. State can change
		during the interaction. Authors can track stats and generate feedback. Public experiences can be
		played, remixed and embedded.
	</p>
	<p>
		The developer surface follows the same philosophy.
		<a href="https://docs.liforma.ai/">Liforma's documentation</a> describes the Experience as the unit
		you integrate: session launch, audio, turns, rendering and lifecycle stay behind the SDK.
	</p>

	<h3>Where Liforma is not the obvious choice</h3>
	<p>
		If your primary requirement is a highly photorealistic digital twin that looks like a live webcam
		version of a specific real person, HeyGen, Tavus or Synthesia may be a more natural starting point.
	</p>
	<p>
		Liforma's product philosophy is deliberately broader and often more stylised: the aim is to create
		believable reusable characters inside interactive experiences rather than treat maximum human
		likeness as the only quality metric.
	</p>

	<h2>2. HeyGen LiveAvatar: best for polished photorealistic real-time avatars</h2>
	<p>
		HeyGen is already well known for generated avatar video, and LiveAvatar extends that model into
		real-time interaction.
	</p>
	<p>
		According to
		<a href="https://help.heygen.com/en/articles/10035615-how-to-get-started-with-liveavatar">HeyGen's
		LiveAvatar documentation</a>, developers can choose between two integration models.
	</p>

	<h3>Full mode</h3>
	<p>
		Full mode is the simpler end-to-end route. HeyGen provides the conversational pipeline around the
		avatar. One LiveAvatar credit represents 30 seconds of Full-mode streaming.
	</p>
	<p>
		On the current paid plans, HeyGen publishes approximate effective Full-mode rates of:
	</p>
	<ul>
		<li><strong>Starter:</strong> about $0.19/minute;</li>
		<li><strong>Essential:</strong> about $0.18/minute; and</li>
		<li><strong>Business:</strong> about $0.16/minute.</li>
	</ul>

	<h3>Lite mode</h3>
	<p>
		Lite mode uses one credit per minute and is intended for developers who want more control over the
		voice/intelligence side of the stack. Effective avatar-streaming cost is therefore roughly half the
		Full-mode rate, but the developer is responsible for the missing AI services.
	</p>

	<h3>Where HeyGen is strongest</h3>
	<p>
		HeyGen is compelling when the visual objective is straightforward: a polished, realistic human avatar
		that can hold a live conversation.
	</p>
	<p>
		Custom LiveAvatars can be created from a recorded video or from a photo, and HeyGen provides API/SDK
		integration for product teams.
	</p>

	<h3>Where HeyGen differs from Liforma</h3>
	<p>
		The conceptual unit is still primarily the avatar session. Liforma goes further into authored
		worlds, reusable characters, scenes, explicit state and remixable experiences.
	</p>
	<p>
		If you want one realistic digital human representing a salesperson, support agent or executive,
		HeyGen's approach may be exactly what you need. If you want a cast of characters moving through a
		training or game-like experience, the authoring problem is different.
	</p>

	<h2>3. Tavus CVI: best for high-fidelity conversational video and perception</h2>
	<p>
		Tavus's Conversational Video Interface (CVI) is one of the most complete high-end real-time
		digital-human stacks in this comparison.
	</p>
	<p>
		<a href="https://www.tavus.io/pricing">Tavus's pricing page</a> explicitly describes CVI as an
		end-to-end conversational video and audio pipeline. Its feature list includes LLM, TTS, WebRTC,
		1080p video, visual and audio perception, dynamic memories, RAG, objectives and guardrails,
		function calling, noise cancellation and transcripts/recordings.
	</p>

	<h3>Pricing</h3>
	<p>
		The current Starter plan is $59/month and includes 100 CVI minutes, with additional usage at
		<strong>$0.37/minute</strong>. Growth is $397/month with 1,250 included minutes and
		<strong>$0.32/minute</strong> overage.
	</p>
	<p>
		Tavus meters live conversation time from connection to disconnection, with a 30-second minimum and
		billing rounded in six-second increments.
	</p>

	<h3>Where Tavus is strongest</h3>
	<p>
		Tavus is particularly interesting when the AI needs to perceive more than speech. Its public CVI
		feature set includes visual perception as well as conversational video, making it a strong fit for
		applications where the user's camera or visual context is part of the interaction.
	</p>
	<p>
		The product is also unusually complete for developers who want one vendor to provide the real-time
		photorealistic agent stack rather than assembling the pieces themselves.
	</p>

	<h3>Trade-offs</h3>
	<p>
		That completeness and visual fidelity come with a substantially higher published per-minute cost than
		Liforma's generated-speech model.
	</p>
	<p>
		The products also optimise for different things. Tavus describes its product as real-time AI humans.
		Liforma is deliberately designed for broader interactive-character experiences where the browser can
		render the character and environment locally.
	</p>

	<h2>4. D-ID Visual Agents: best for no-code visual knowledge agents</h2>
	<p>
		D-ID sits in an interesting middle ground between avatar generation and no-code agent creation.
	</p>
	<p>
		<a href="https://www.d-id.com/ai-agents/">D-ID Visual Agents</a> lets a user create an agent by
		selecting a role, writing instructions and uploading knowledge. The platform uses RAG to retrieve
		information from uploaded knowledge sources, and agents can be shared via a hosted link or embedded
		on a website.
	</p>

	<h3>Where D-ID is strongest</h3>
	<p>
		The no-code workflow is one of D-ID's clearest strengths. A business user can create a visual
		knowledge agent without first building an application or choosing separate infrastructure providers.
	</p>
	<p>
		The platform supports human-like visual agents, multilingual interaction, knowledge documents and
		API access.
	</p>

	<h3>Pricing</h3>
	<p>
		D-ID's agent pricing is credit-based rather than expressed as one universal dollar-per-minute figure.
		Its current help documentation says an agent response of up to 15 seconds consumes 0.5 credit, with
		another 0.5 credit for each additional 15-second block.
		<a href="https://help.d-id.com/hc/en-us/articles/31262931985169-How-does-Agent-pricing-work">See
		D-ID's agent pricing documentation</a>.
	</p>
	<p>
		The dollar cost therefore depends on the underlying subscription/credit package.
	</p>

	<h3>How D-ID differs from Liforma</h3>
	<p>
		D-ID's no-code agent model is well suited to one visual agent connected to a knowledge base. Liforma
		pushes further toward authored experiences: reusable casts, scenes, sets, explicit stats and state,
		remixing and multi-character progression.
	</p>
	<p>
		For a company that wants to upload documents and deploy a visual Q&amp;A agent quickly, D-ID is a
		strong fit. For a scenario where several characters need different goals and knowledge, Liforma's
		experience model is more directly aligned with the problem.
	</p>

	<h2>5. Synthesia Interactive Avatars: best as a live avatar-rendering layer for your own agent stack</h2>
	<p>
		Synthesia is unusual in this comparison because its Interactive Avatar API is intentionally open and
		modular.
	</p>
	<p>
		<a href="https://docs.synthesia.io/reference/ia-operational-trust">Synthesia's production
		documentation</a> says the Interactive Avatar API costs <strong>$0.10 per avatar usage
		minute</strong>.
	</p>
	<p>
		But that $0.10 is not a complete conversational-agent price.
	</p>
	<p>
		Synthesia explicitly expects the developer to provide the LLM, STT and TTS stack. Its documentation
		also says production transport is currently LiveKit-only, and the avatar joins a LiveKit room
		controlled by the developer.
	</p>

	<h3>Where Synthesia is strongest</h3>
	<p>
		This is attractive if you already have a mature voice-agent or conversational stack and want to add
		a high-quality Synthesia avatar without replacing the rest of your architecture.
	</p>
	<p>
		It also makes sense for organisations already using Synthesia heavily for asynchronous generated
		video and wanting the same avatar ecosystem to extend into live interaction.
	</p>

	<h3>Current limitations to understand</h3>
	<p>
		Synthesia's own production documentation currently lists several limitations:
	</p>
	<ul>
		<li>no no-code embed;</li>
		<li>you build the UI wrapper;</li>
		<li>LLM, STT and TTS are not hosted as part of the interactive-avatar product;</li>
		<li>LiveKit is the only supported transport;</li>
		<li>session tooling such as transcripts, recordings and webhooks is limited; and</li>
		<li>the current product is bust-framed rather than full-body controlled.</li>
	</ul>
	<p>
		That makes Synthesia a particularly clear example of why headline “avatar price per minute” figures
		cannot be compared without checking what the price actually includes.
	</p>

	<h2>Which platforms provide the full conversational stack?</h2>
	<table>
		<thead>
			<tr>
				<th>Platform</th>
				<th>STT</th>
				<th>LLM / intelligence</th>
				<th>TTS</th>
				<th>Avatar animation</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Liforma Live</strong></td>
				<td>Included</td>
				<td>Included</td>
				<td>Included</td>
				<td>Included</td>
			</tr>
			<tr>
				<td><strong>HeyGen Full mode</strong></td>
				<td>Included in full integration</td>
				<td>Included in full integration</td>
				<td>Included in full integration</td>
				<td>Included</td>
			</tr>
			<tr>
				<td><strong>Tavus CVI</strong></td>
				<td>Part of end-to-end stack</td>
				<td>Included</td>
				<td>Included</td>
				<td>Included</td>
			</tr>
			<tr>
				<td><strong>D-ID Visual Agents</strong></td>
				<td>Integrated agent experience</td>
				<td>Integrated + RAG</td>
				<td>Integrated</td>
				<td>Included</td>
			</tr>
			<tr>
				<td><strong>Synthesia Interactive</strong></td>
				<td>Bring your own</td>
				<td>Bring your own</td>
				<td>Bring your own</td>
				<td>Included</td>
			</tr>
		</tbody>
	</table>

	<h2>Which platform is cheapest?</h2>
	<p>
		On published rates, Liforma is currently the least expensive complete stack in this comparison by a
		large margin — but the billing units are different enough that “cost per minute” needs context.
	</p>
	<p>
		Liforma Live charges <strong>$0.01 per generated speech minute</strong>. HeyGen Full mode publishes
		approximately $0.16–$0.19 per streaming minute on paid tiers. Tavus publishes $0.32–$0.37 overage per
		connected CVI minute on Starter/Growth. Synthesia charges $0.10 per avatar usage minute before your
		separate LLM/STT/TTS costs. D-ID uses credits tied to generated speaking time.
	</p>
	<p>
		Those numbers should not be compared blindly. A generated-speech minute is not the same thing as a
		connected session minute. A platform that charges only while the character speaks can be
		substantially cheaper in an experience where the user spends half the session talking, thinking or
		reading.
	</p>
	<p>
		For a more detailed cost model, see
		<a href="/how-much-do-interactive-ai-avatars-cost">How Much Do Interactive AI Avatars Cost? 2026
		Pricing Compared</a>.
	</p>

	<h2>Which platform is best for photorealistic avatars?</h2>
	<p>
		If photorealism is the primary requirement, HeyGen, Tavus and Synthesia are the platforms in this
		comparison most explicitly optimised around highly realistic human presentation.
	</p>
	<p>
		Which one is the better fit then depends on the stack you want around the avatar:
	</p>
	<ul>
		<li><strong>HeyGen:</strong> integrated Full mode or a more modular Lite mode.</li>
		<li><strong>Tavus:</strong> a broad end-to-end conversational-video stack including perception and agent features.</li>
		<li><strong>Synthesia:</strong> the avatar-rendering layer while you control the conversational stack.</li>
	</ul>
	<p>
		If the goal is a digital twin of a real presenter or representative, start with these three.
	</p>

	<h2>Which platform is best for training simulations?</h2>
	<p>
		Training requirements are broader than avatar rendering.
	</p>
	<p>
		A useful simulation may need explicit performance stats, multiple roles, scene progression, hidden
		information, conditional escalation and end-of-session coaching.
	</p>
	<p>
		That is where Liforma's experience model is particularly differentiated. The platform is built
		around characters participating in a stateful authored scenario rather than merely giving a single
		visual agent a training prompt.
	</p>
	<p>
		D-ID can also be attractive for simpler no-code training agents, while photorealistic Tavus or HeyGen
		characters may be preferable when visual human realism is itself important to the training scenario.
	</p>
	<p>
		See
		<a href="/ai-avatars-for-training-role-play-scoring-state-feedback">AI Avatars for Training:
		Building Role-Plays With Scoring, State and Feedback</a>.
	</p>

	<h2>Which platform is best for website assistants?</h2>
	<p>
		For a conventional visual knowledge assistant, D-ID offers a notably simple no-code route: create an
		agent, upload knowledge and embed it.
	</p>
	<p>
		Liforma is attractive when the website assistant should be part of a larger interactive experience
		or when cost, styling and reusable characters matter. Its Experience can be embedded as a full
		component or opened from a floating widget.
	</p>
	<p>
		HeyGen and Tavus are strong candidates when a highly realistic human face is important. Synthesia
		makes most sense when the website already has an agent stack and primarily needs the visual avatar
		layer.
	</p>
	<p>
		For implementation patterns, see
		<a href="/how-to-add-an-ai-character-to-your-website">How to Add an AI Character to Your Website</a>.
	</p>

	<h2>Which platform is best for multi-character AI?</h2>
	<p>
		This is one of the clearest differences in the comparison.
	</p>
	<p>
		Liforma explicitly treats multiple characters, scenes and experience state as first-class authoring
		concepts. A training simulation can contain a customer, manager and coach; a game can contain a cast;
		a character can enter or leave as the experience progresses.
	</p>
	<p>
		The other platforms can certainly be integrated into larger multi-agent applications by developers,
		but their core public product model is generally centred on one real-time visual agent or avatar
		session at a time.
	</p>
	<p>
		For the architectural details, see
		<a href="/multi-character-ai-conversations">Multi-Character AI: How to Build Conversations With
		Multiple AI Characters</a>.
	</p>

	<h2>Which platform is best if you already have a voice agent?</h2>
	<p>
		If you already have your own STT, LLM, TTS, turn detection and agent orchestration, paying for
		another full stack may be unnecessary.
	</p>
	<p>
		Synthesia's Interactive Avatar API is explicitly designed for this model. HeyGen Lite mode is also
		more modular, and Liforma Motion can take speech from platforms such as ElevenLabs, OpenAI, Gemini,
		Deepgram or LiveKit and add avatar animation.
	</p>
	<p>
		This is where you should compare the avatar-rendering layer on its own rather than compare full-stack
		prices.
	</p>

	<h2>Which platform is best for creators rather than developers?</h2>
	<p>
		There are two different forms of “no code.”
	</p>
	<p>
		D-ID makes it easy to configure one visual agent without code: select a role, provide instructions
		and add knowledge.
	</p>
	<p>
		Liforma's creator model is broader. Public experiences can be played, remixed and embedded. Creators
		can reuse characters, costumes, hairstyles and sets, then author scenarios around them.
	</p>
	<p>
		That makes Liforma closer to a creation platform for interactive character experiences than a
		developer API with a no-code configuration screen.
	</p>

	<h2>What about WebRTC?</h2>
	<p>
		The platforms also make different architectural choices.
	</p>
	<p>
		Photorealistic real-time video systems naturally tend toward persistent media sessions. Tavus
		explicitly uses WebRTC for CVI. Synthesia's Interactive Avatar API currently requires LiveKit.
		HeyGen LiveAvatar is designed around continuous streaming sessions.
	</p>
	<p>
		Liforma takes a request-oriented approach for its turn-based conversational experiences, allowing
		models to remain warm without requiring each experience to exist as a continuous AI media session.
	</p>
	<p>
		Neither model is universally better. WebRTC is excellent for full-duplex, interruption-heavy,
		continuous audio/video interaction. HTTP-style turn processing can be simpler and cheaper when the
		interaction is naturally listen → think → speak.
	</p>
	<p>
		We explore that distinction in
		<a href="/does-conversational-ai-need-webrtc">Does Conversational AI Really Need WebRTC?</a>.
	</p>

	<h2>How to choose an interactive AI avatar platform</h2>
	<p>
		Before comparing demos, answer these questions.
	</p>
	<ol>
		<li>
			<strong>Does the character need to look like a real human?</strong> If yes, prioritise
			photorealistic avatar quality and behavioural fidelity.
		</li>
		<li>
			<strong>Do you need one character or an authored cast?</strong> Multi-character scenarios require
			an experience/orchestration layer, not merely more avatar endpoints.
		</li>
		<li>
			<strong>Do you already have STT, LLM and TTS?</strong> If yes, compare modular avatar layers rather
			than paying twice for the full stack.
		</li>
		<li>
			<strong>Does the AI need continuous camera perception?</strong> Tavus's perceptive CVI model may be
			particularly relevant.
		</li>
		<li>
			<strong>Who authors the experience?</strong> Developer-only API integration is very different from
			no-code role-play or creator workflows.
		</li>
		<li>
			<strong>Does state affect what happens?</strong> Training, games and stories often need explicit
			state beyond conversation history.
		</li>
		<li>
			<strong>How long are sessions?</strong> Compare connected-minute pricing with generated-speech
			pricing using your real expected speaking ratio.
		</li>
		<li>
			<strong>Where will the experience live?</strong> Hosted link, public marketplace, widget, website
			embed, mobile app and custom product integration all have different requirements.
		</li>
	</ol>

	<h2>There is no single “best avatar” because these products are becoming different categories</h2>
	<p>
		The most important change in the market is that “AI avatar platform” is becoming too broad a label.
	</p>
	<p>
		One product is really a photorealistic video-agent infrastructure platform. Another is a digital
		presenter ecosystem. Another is a no-code knowledge agent with a face. Another is an avatar rendering
		API. Liforma is moving toward a platform for authored interactive character experiences.
	</p>
	<p>
		That makes feature checklists less useful than they first appear.
	</p>
	<p>
		The right question is not:
	</p>
	<p>
		<strong>“Which company has the best AI avatar?”</strong>
	</p>
	<p>
		It is:
	</p>
	<p>
		<strong>“What kind of interactive product am I actually trying to create?”</strong>
	</p>

	<h2>Our view at Liforma</h2>
	<p>
		We think the market will contain all of these models.
	</p>
	<p>
		There will be demand for extremely realistic digital twins, video-call-style AI humans and
		server-rendered photorealistic avatars. There will also be a much larger world of training
		simulations, tutors, fictional characters, games, coaches, website assistants and interactive
		stories where human photorealism is not the defining requirement.
	</p>
	<p>
		For that second category, we think the important primitives are different:
		<strong>characters, appearances, sets, scenes, state, tools, outcomes, remixing and distribution</strong>.
	</p>
	<p>
		That is why Liforma's unit of creation is the
		<a href="/what-is-an-avatar-experience">Avatar Experience</a>, not simply the avatar stream.
	</p>

	<div class="callout">
		<strong>Sources checked September 2026:</strong>
		<a href="https://www.liforma.ai/pricing">Liforma pricing</a>,
		<a href="https://help.heygen.com/en/articles/10035615-how-to-get-started-with-liveavatar">HeyGen LiveAvatar pricing</a>,
		<a href="https://www.tavus.io/pricing">Tavus CVI pricing</a>,
		<a href="https://www.d-id.com/ai-agents/">D-ID Visual Agents</a>,
		<a href="https://help.d-id.com/hc/en-us/articles/31262931985169-How-does-Agent-pricing-work">D-ID agent pricing</a>,
		and <a href="https://docs.synthesia.io/reference/ia-operational-trust">Synthesia Interactive Avatar documentation</a>.
	</div>
</BlogPostLayout>
