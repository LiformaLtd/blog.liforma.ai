<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('what-is-an-avatar-experience')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		An <strong>interactive AI character</strong> is more than an animated face attached to a chatbot.
		It is a character that can listen, understand, speak, react and participate in an experience.
		When characters can share state, move between scenes and influence what happens next, the result
		starts to look less like a video call and more like an interactive world.
	</p>

	<p>
		That distinction is important. The first generation of AI avatar products largely focused on making
		a digital person talk. Liforma is built around a different idea: <strong>the experience is the
		product, and characters are participants in it.</strong>
	</p>

	<h2>What is an interactive AI character?</h2>
	<p>
		An interactive AI character combines a visual character with conversational intelligence, speech
		recognition, a voice and real-time animation. Unlike a pre-recorded avatar video, the character can
		respond to each user differently.
	</p>
	<p>
		But conversation alone is only the beginning. A character can have a role, personality, appearance,
		knowledge and objectives. It can appear in different scenes, wear different costumes, interact with
		other characters and respond to state accumulated during an experience.
	</p>

	<h2>AI avatar, AI character or interactive experience?</h2>
	<p>
		The terms are often used interchangeably, but they describe different layers of the product.
	</p>
	<ul>
		<li><strong>AI avatar</strong> — the visual representation: a face or body that can speak and animate.</li>
		<li><strong>AI character</strong> — an avatar combined with identity, personality, voice and intelligence.</li>
		<li><strong>Interactive experience</strong> — one or more characters placed into scenes with rules, state, objectives and outcomes.</li>
	</ul>
	<p>
		A customer-service avatar answering questions on a website may need only one character and one
		scene. A sales-training simulation might involve a prospect, a manager and a coach across several
		scenes, with the learner's decisions changing what happens next.
	</p>

	<h2>From conversations to experiences</h2>
	<p>
		Most conversational avatar systems begin with a simple model: connect a user to an AI agent and
		represent that agent with a talking face. That is useful, but it treats the conversation itself as
		the application.
	</p>
	<p>
		Liforma treats conversation as one component of a larger experience. An experience can contain
		multiple characters and multiple scenes. Nodes determine how the experience progresses, while
		stats can record what happened during the conversation and influence later behaviour.
	</p>
	<p>
		For example, a training experience could begin with an unhappy customer. The learner's responses
		could change hidden or visible stats such as empathy, accuracy and customer confidence. The
		experience could then move to a second scene with a manager who reacts to what happened, before a
		coach provides feedback at the end.
	</p>
	<p>
		That would normally require someone to build an application around an AI agent. The goal of Liforma
		is to make experiences like this authorable by people who are not software developers.
	</p>

	<h2>Multiple characters change what is possible</h2>
	<p>
		Real situations rarely contain one person. Interviews have interviewers and candidates. Sales
		meetings can involve buyers, colleagues and decision-makers. Stories have casts. Games have
		characters with competing goals.
	</p>
	<p>
		Supporting multiple AI characters means an experience can model those situations directly. Each
		character can have its own appearance, voice, personality and role while participating in the same
		experience and sharing relevant state.
	</p>
	<p>
		This moves AI characters closer to actors in an interactive production than isolated talking heads.
	</p>

	<h2>The environment is part of the experience</h2>
	<p>
		Where a conversation happens affects how it feels. A job interview in an office, a history lesson
		inside a castle and a fantasy conversation during a storm should not all look like the same video
		call with a different background image.
	</p>
	<p>
		Liforma experiences can use reusable backdrops and 3D environments, with effects such as weather.
		Characters can also use reusable hairstyles and costumes, making it possible to create distinct
		characters quickly without generating an entirely new avatar for every role.
	</p>

	<h2>Why stylised characters can be better than photorealistic avatars</h2>
	<p>
		Photorealism is valuable when the objective is to reproduce a real person: an executive, presenter
		or digital twin. It is not automatically the best choice for every interactive experience.
	</p>
	<p>
		Stylised and non-photorealistic characters give creators more freedom. A language tutor can have a
		distinct visual personality. A historical or fictional character does not need to masquerade as a
		real human on a webcam. Training simulations can use memorable characters without implying that
		they represent real people.
	</p>
	<p>
		They can also avoid some of the expectations created by near-photorealistic humans: tiny errors in
		lip movement, gaze or expression are much more noticeable when a character is presented as
		indistinguishable from a real person.
	</p>

	<h2>Interactive AI needs different economics</h2>
	<p>
		Generating a two-minute avatar video and running an interactive character for an hour are very
		different economic problems. If AI characters are going to become part of education, entertainment,
		games, training and everyday websites, the cost per minute matters.
	</p>
	<p>
		Liforma is designed around a target cost of roughly <strong>one US cent per minute for the complete
		conversational stack</strong>: speech recognition, intelligence, speech generation and character
		animation. Some avatar services quote low prices for animation alone, leaving developers to provide
		and pay separately for speech and intelligence. We think the useful comparison is the cost of the
		whole experience.
	</p>
	<p>
		That architecture is also why Liforma does not assume every conversational experience needs a
		permanently open WebRTC session. Modern speech and AI models can make turn-based
		<strong>STT → LLM → TTS → speech-to-animation</strong> interactions fast enough to use ordinary
		HTTP requests for many experiences. The connection does not have to remain open while the user is
		thinking, watching a character speak or moving through a scene.
	</p>

	<h2>Create, publish and discover</h2>
	<p>
		An interactive character should not require a developer to build a website before anyone can meet
		it. Liforma experiences can be published directly to
		<a href="https://www.liforma.ai/">www.liforma.ai</a>, where other people can discover and play them.
	</p>
	<p>
		Creators can also embed experiences in their own websites or integrate Liforma into an application.
		The same underlying experience can therefore be distributed as a destination on Liforma or as part
		of another product.
	</p>
	<p>
		Publishing can be free to the creator too. Instead of requiring every author to fund every minute
		of audience usage, an experience can use an audience-pays model in which Liforma handles end-user
		monetisation. That makes experimentation possible without giving a popular experience an
		open-ended infrastructure bill.
	</p>

	<h2>What can interactive AI character experiences be used for?</h2>
	<p>
		The model applies anywhere the user benefits from interacting with a person or character rather than
		a text box. Examples include role-play training, language learning, interview practice, sales
		simulations, customer-service scenarios, tutoring, interactive stories, games, fictional characters,
		museum and historical experiences, onboarding and website assistants.
	</p>
	<p>
		Some of these applications need photorealistic digital humans. Some need continuous, full-duplex
		voice. Others are better served by stylised characters, structured turns, multiple scenes and state.
		There is no single avatar architecture that is best for every use case.
	</p>

	<h2>Where Liforma fits</h2>
	<p>
		Liforma is not trying simply to make a cheaper talking head. We are building a platform for
		<strong>interactive character experiences</strong>: characters you can create and reuse, worlds to
		put them in, tools for defining what happens during an interaction, and a place to publish the
		result.
	</p>
	<p>
		The simplest Liforma experience can still be one character answering questions. But the platform is
		designed so that the same creator can go much further — multiple characters, multiple scenes,
		state, feedback, costumes, environments and branching experiences — without having to build the
		underlying AI application from scratch.
	</p>

	<div class="callout">
		<strong>Explore interactive character experiences:</strong>
		<a href="https://www.liforma.ai/">browse Liforma</a>.
	</div>
</BlogPostLayout>
