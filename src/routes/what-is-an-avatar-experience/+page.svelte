<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('what-is-an-avatar-experience')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		<strong>An Avatar Experience is more than an AI avatar having a conversation.</strong> It is a
		complete interactive scenario built from reusable characters, appearances, environments, behaviour,
		state and rules. The avatar is one part of the experience; the experience defines who is there,
		where it happens, what the characters are trying to do and what can happen next.
	</p>

	<p>
		That distinction matters because many products in the AI-avatar category still begin with a
		one-to-one model: choose a face, connect it to an AI agent and start a conversation. That is useful,
		but it is only one possible form of interactive AI.
	</p>

	<p>
		Liforma is built around a broader idea: <strong>AI characters should be reusable building blocks
		inside authored experiences</strong>. A character can appear in different roles, wear different
		costumes, move between scenes, interact with other characters and participate in experiences whose
		state changes as the user makes decisions.
	</p>

	<div class="callout">
		<strong>In one sentence:</strong> an avatar is how an AI appears; a character is who it is; an
		experience is what happens around it.
	</div>

	<h2>Why an avatar is not the same thing as an experience</h2>
	<p>
		An avatar answers an important question: <strong>what does the AI look like?</strong> It may be
		photorealistic, stylised, cartoon-like or something entirely fictional. It may represent a real
		person or an invented character.
	</p>
	<p>
		But appearance alone does not tell us much about the application. The same visual avatar could be
		used as a language tutor, a hotel receptionist, a fantasy character, a difficult customer in a
		training simulation or an interviewer.
	</p>
	<p>
		An Avatar Experience adds the rest of that context. It defines the character's role, behaviour and
		voice; the environment in which the interaction takes place; any other characters involved; the
		state carried through the session; and the rules that determine how the experience progresses.
	</p>
	<p>
		That is why we think the useful unit of creation is not the talking face. It is the
		<strong>experience</strong>.
	</p>

	<h2>The four building blocks: who, how they look, where and what happens</h2>
	<p>
		A useful way to understand Liforma is to separate an experience into four reusable layers.
	</p>

	<table>
		<thead>
			<tr>
				<th>Layer</th>
				<th>Question</th>
				<th>What it controls</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Character</strong></td>
				<td>Who?</td>
				<td>Identity, role, personality, voice, behaviour and intelligence.</td>
			</tr>
			<tr>
				<td><strong>Costume / appearance</strong></td>
				<td>How do they look?</td>
				<td>Clothing, hairstyle and other visual presentation choices.</td>
			</tr>
			<tr>
				<td><strong>Set / backdrop</strong></td>
				<td>Where?</td>
				<td>The visual environment in which the interaction takes place.</td>
			</tr>
			<tr>
				<td><strong>Experience</strong></td>
				<td>What happens?</td>
				<td>Scenes, characters, state, rules, objectives, progression and outcomes.</td>
			</tr>
		</tbody>
	</table>

	<p>
		This separation is deliberate. Instead of generating a new all-in-one avatar every time you need a
		new scenario, you can create useful pieces once and recombine them.
	</p>

	<h2>Create a character once, then cast them again</h2>
	<p>
		A Liforma character is intended to be reusable. You might create a character called Sofia once,
		define her appearance, voice and personality, and then use her across many different experiences.
	</p>
	<p>
		In one experience she might be a café assistant helping a language learner practise Spanish. In
		another she could be a receptionist. In a third she could appear as a customer in a training
		scenario. The underlying character can remain recognisable while her clothes, hairstyle, setting and
		role-specific behaviour change.
	</p>
	<p>
		This starts to look more like casting an actor than configuring a chatbot.
	</p>

	<h2>Change the appearance without rebuilding the character</h2>
	<p>
		Appearance is also reusable. Liforma separates the character from the costume and hairstyle so the
		same person can be presented differently for different situations.
	</p>
	<p>
		The current creator library includes hundreds of ready-made clothing and hairstyle options, and
		creators can generate custom ones with AI. That means a character can move from an office scenario
		to a restaurant, historical setting or fictional world without needing to be recreated from
		scratch.
	</p>
	<p>
		This matters for both speed and consistency. The creator is changing how the character is presented,
		not inventing a new identity every time.
	</p>

	<h2>The environment should be part of the experience too</h2>
	<p>
		A convincing interaction is not just a face floating over a generic background.
	</p>
	<p>
		The place in which a conversation happens changes its meaning. An interview room creates a
		different feeling from a café. A customer-service scenario feels different in a hotel lobby than it
		does in a call-centre office. A historical character is more convincing when the surrounding world
		supports the story.
	</p>
	<p>
		Liforma therefore treats sets and backdrops as reusable assets too. Creators can choose from a large
		library of ready-made environments or create their own, then reuse those environments across
		different scenarios.
	</p>
	<p>
		Some experiences can go further with 3D backdrops and environmental effects such as weather. The
		goal is not simply to decorate the conversation, but to make the environment part of the interactive
		world.
	</p>

	<h2>One character is useful. Multiple characters change the category.</h2>
	<p>
		Many real situations are not one-to-one conversations.
	</p>
	<p>
		A sales meeting may include a buyer and a procurement manager. A training exercise may involve a
		customer, a colleague and a coach. A story may have a cast of characters with different motivations.
		A role-playing game may require characters to enter and leave as the scene changes.
	</p>
	<p>
		Liforma experiences can contain multiple characters, each with their own appearance, voice,
		personality and behaviour. The characters can participate in the same experience rather than being
		isolated single-agent sessions.
	</p>
	<p>
		This is one of the points where an Avatar Experience starts to resemble a lightweight interactive
		world or agent application rather than a conventional talking-head product.
	</p>

	<h2>Scenes let the experience move somewhere</h2>
	<p>
		A long interaction does not have to take place in one endless conversation.
	</p>
	<p>
		Experiences can be divided into scenes or nodes. A scene can introduce a different setting,
		different characters, a different objective or a different phase of the interaction.
	</p>
	<p>
		For example, a sales-training experience might start with an initial meeting with a prospect. If
		the learner identifies the right needs, the experience moves to a negotiation scene with a second
		decision-maker. At the end, a coach appears in a final scene and explains what went well and what
		could be improved.
	</p>
	<p>
		The learner has not simply chatted with an AI person. They have completed an authored scenario.
	</p>

	<h2>State and stats make conversations affect what happens next</h2>
	<p>
		The other important difference is <strong>state</strong>.
	</p>
	<p>
		A normal conversation has history: the AI remembers what was said earlier. An interactive experience
		can go further by storing explicit stats or variables that represent what has happened.
	</p>
	<p>
		A training author might track things such as:
	</p>
	<ul>
		<li>customer trust;</li>
		<li>empathy shown by the learner;</li>
		<li>whether a critical question was asked;</li>
		<li>confidence or rapport;</li>
		<li>facts discovered during the conversation;</li>
		<li>objectives completed; or</li>
		<li>choices made earlier in the experience.</li>
	</ul>
	<p>
		Those values can then influence later scenes and characters. A manager might react differently if
		the learner mishandled the previous conversation. A customer might become more cooperative once
		trust passes a threshold. A coach can use the accumulated stats to produce structured feedback at
		the end.
	</p>
	<p>
		The important design goal is that authors should be able to create this behaviour without needing to
		build their own agent framework or application backend.
	</p>

	<h2>Example: a complete customer-service training experience</h2>
	<p>
		Imagine building a training exercise for a hotel group.
	</p>
	<p>
		The learner begins at reception. A frustrated guest says their room is not ready. The guest is one
		character, wearing a travel outfit and standing in a hotel-lobby set. The experience tracks empathy,
		problem diagnosis and whether the learner offers an appropriate remedy.
	</p>
	<p>
		If the conversation goes badly, a duty manager joins in the next scene. If it goes well, the guest's
		mood changes and the manager instead asks the learner to explain what they did.
	</p>
	<p>
		The final scene introduces a coach. Rather than giving generic advice, the coach can use the
		conversation history and accumulated stats to explain exactly where the learner succeeded or
		struggled.
	</p>
	<p>
		The same guest character could later be reused in a restaurant complaint, airport scenario or
		language-learning exercise. The same hotel lobby could be reused with other characters. The coach
		could be reused across an entire training programme.
	</p>
	<p>
		That reuse is one of the core ideas behind Liforma.
	</p>

	<h2>Remixing makes creation faster</h2>
	<p>
		You do not necessarily need to begin from an empty canvas.
	</p>
	<p>
		On Liforma, a remixable public experience can become a starting point for a new one. You can copy it
		into your workspace and then change the character, appearance, set, behaviour, content or structure.
		The original gives you something that already works; your version can diverge as much as you want.
	</p>
	<p>
		This is particularly useful for non-technical creators. Instead of learning every part of the
		platform before producing anything, you can begin with a working example and modify the pieces you
		understand.
	</p>
	<p>
		If you already know exactly what you want, you can still start from scratch in the Experience
		Studio. But for many creators,
		<a href="https://www.liforma.ai/create">remixing an existing experience</a> is the fastest way to
		understand the system.
	</p>

	<h2>What can you build with an Avatar Experience?</h2>
	<p>
		The format is deliberately broad because the same building blocks apply to very different kinds of
		interactive AI.
	</p>

	<h3>Training and role-play</h3>
	<p>
		Practise difficult workplace conversations, customer service, sales, interviews, management
		conversations, negotiation or other scenarios where behaviour matters. Stats and end-of-session
		feedback make this much richer than simply talking to a generic agent.
	</p>

	<h3>Learning and coaching</h3>
	<p>
		Create tutors, language partners, coaches and interactive teachers. Characters can adopt roles,
		remember state and move through structured exercises rather than answering isolated questions.
	</p>

	<h3>Entertainment and storytelling</h3>
	<p>
		Build fictional characters, companions, role-playing scenarios and interactive stories. Multiple
		characters, environments and scene progression make this closer to authored interactive
		entertainment than a standard chatbot.
	</p>

	<h3>Customer experiences</h3>
	<p>
		Create receptionists, guides, sales assistants, product experts and website agents. A simple
		customer-facing experience may use only one character, but it can still benefit from reusable
		appearance, a visual environment and the ability to publish or embed the same experience elsewhere.
	</p>

	<h2>Publish without building your own app</h2>
	<p>
		Traditional avatar APIs assume the avatar is one component inside an application that the customer
		will build and host.
	</p>
	<p>
		Liforma supports that model too, but it is not required. An experience can be published directly on
		<a href="https://www.liforma.ai/">www.liforma.ai</a>, where people can discover and play it without
		the creator building a separate website.
	</p>
	<p>
		The same experience can also be embedded into an existing website or integrated into another
		application. Creation and distribution are therefore separate decisions: build once, then decide
		where the experience should live.
	</p>

	<h2>Creators do not necessarily have to fund every minute</h2>
	<p>
		Interactive AI can become expensive if every creator has to pay for every minute used by every
		visitor.
	</p>
	<p>
		Liforma supports experiences where the author pays, but it can also support audience-funded use. That
		means a creator can publish an experience without necessarily accepting an unlimited inference bill
		if it becomes popular.
	</p>
	<p>
		This is especially important for entertainment, education and creator-led experiences, where the
		person making the experience may not be a company with an infrastructure budget.
	</p>

	<h2>The economics matter because experiences can be long</h2>
	<p>
		A generated avatar video might last two minutes. An interactive experience could last twenty,
		thirty or sixty minutes.
	</p>
	<p>
		Liforma is designed around a target price of roughly <strong>$0.01 per generated speech minute for
		the full STT → intelligence → TTS → speech-to-animation stack</strong>. Session orchestration and
		experience analytics do not have a separate per-connected-minute charge.
	</p>
	<p>
		That matters because much of an experience may be spent listening, thinking, reading feedback,
		watching a scene or navigating between interactions. Liforma's architecture is designed so the cost
		tracks useful generated speech rather than simply the amount of wall-clock time for which the user
		has the experience open.
	</p>
	<p>
		For more detail, see
		<a href="/how-much-do-interactive-ai-avatars-cost">How Much Do Interactive AI Avatars Cost?</a>
		and
		<a href="/does-conversational-ai-need-webrtc">Does Conversational AI Really Need WebRTC?</a>.
	</p>

	<h2>Why stylised characters fit this model particularly well</h2>
	<p>
		Photorealistic digital humans are excellent when the objective is to reproduce a real person or
		create the impression of a live human video call.
	</p>
	<p>
		But many experiences do not need that. Training simulations, language tutors, historical characters,
		games, fictional worlds and interactive stories often benefit from characters that are intentionally
		stylised.
	</p>
	<p>
		Stylisation gives creators more visual freedom and avoids setting the expectation that every detail
		of facial motion must be indistinguishable from a real webcam feed. It also works naturally with
		reusable costumes, hairstyles, environments and browser-native rendering.
	</p>
	<p>
		That is why Liforma does not treat non-photorealistic avatars as a compromise. In many experiences,
		they are the better medium.
	</p>

	<h2>How is an Avatar Experience different from a chatbot?</h2>
	<p>
		A chatbot is primarily a conversational interface. An Avatar Experience can include conversation,
		but also characters, visual presentation, scenes, explicit state, objectives, progression and
		outcomes.
	</p>
	<p>
		A chatbot asks, “What should the AI say next?” An authored experience can also ask, “Who is here?
		Where are we? What has happened? What should change now? Which character appears next? What outcome
		did the user achieve?”
	</p>
	<p>
		For a deeper terminology comparison, see
		<a href="/ai-avatar-vs-ai-character-vs-visual-agent-vs-chatbot">AI Avatar vs AI Character vs Visual
		Agent vs Chatbot</a>.
	</p>

	<h2>How is an Avatar Experience different from an AI agent?</h2>
	<p>
		An AI agent is usually defined by capability: it can reason, use tools or take actions. An Avatar
		Experience is the authored environment in which one or more characters or agents participate.
	</p>
	<p>
		An experience may contain a relatively simple conversational character, a sophisticated tool-using
		agent, or several of both. The experience coordinates them and gives the interaction structure.
	</p>

	<h2>The bigger idea: AI characters should be composable</h2>
	<p>
		The web did not become useful because every page had to be built as a completely new software
		product. Games did not become easier to create by baking every character, environment and rule into
		one inseparable asset.
	</p>
	<p>
		We think interactive AI will move in the same direction.
	</p>
	<p>
		Characters should be reusable. Appearance should be reusable. Sets and backdrops should be reusable.
		Working experiences should be remixable. State and behaviour should be authorable. Publishing should
		not require building another application first.
	</p>
	<p>
		That is the idea behind Liforma's Avatar Experiences: not simply AI avatars that talk, but a set of
		building blocks for creating interactive character experiences quickly enough that many more people
		can make them.
	</p>

	<div class="callout">
		<strong>Want to build one?</strong>
		<a href="https://www.liforma.ai/create">See how creation and remixing work</a>,
		<a href="https://www.liforma.ai/">browse public experiences</a>, or
		<a href="https://docs.liforma.ai/">read the developer documentation</a>.
	</div>
</BlogPostLayout>
