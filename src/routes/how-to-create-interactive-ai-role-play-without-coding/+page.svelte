<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('how-to-create-interactive-ai-role-play-without-coding')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		<strong>You can build a useful AI role-play without writing code.</strong> The key is to stop
		thinking of the experience as “a chatbot with a prompt” and instead design it as a scenario:
		who is involved, where the interaction happens, what each character wants, what the learner needs to
		achieve, what should be tracked during the conversation and what happens afterwards.
	</p>

	<p>
		That is the model behind Liforma's Avatar Experiences. A creator can combine reusable characters,
		costumes, sets, scenes, conversational behaviour, stats and feedback into an interactive role-play,
		then publish it directly or embed it elsewhere.
	</p>

	<div class="callout">
		<strong>Short answer:</strong> start with a clear scenario, create or reuse the characters and set,
		define what each character should do, add a few meaningful stats, decide how the experience should
		progress, and generate feedback from what actually happened.
	</div>

	<h2>What is an AI role-play?</h2>
	<p>
		An AI role-play is an interactive scenario in which the user speaks or chats with one or more AI
		characters playing defined roles.
	</p>
	<p>
		Unlike a general-purpose chatbot, the AI is not simply waiting for arbitrary questions. The user is
		inside a situation with an objective.
	</p>
	<p>
		Examples include:
	</p>
	<ul>
		<li>a salesperson handling a skeptical buyer;</li>
		<li>a manager giving difficult feedback to an employee;</li>
		<li>a hotel receptionist dealing with an unhappy guest;</li>
		<li>a candidate practising a job interview;</li>
		<li>a learner ordering food in another language;</li>
		<li>a clinician practising a difficult conversation;</li>
		<li>a student questioning a historical character; or</li>
		<li>a player negotiating with characters in an interactive story.</li>
	</ul>
	<p>
		The common element is that the AI character has a role, the user has a goal and the conversation is
		part of a larger scenario.
	</p>

	<h2>Why a system prompt is not enough</h2>
	<p>
		You can create a basic role-play by giving an LLM a prompt such as:
	</p>
	<p>
		<em>“You are an unhappy customer. The user is a customer-service employee. Stay in character and
		make the conversation difficult.”</em>
	</p>
	<p>
		That is useful, but it leaves most of the experience undefined.
	</p>
	<p>
		What does the customer look like? Where are they? How upset are they? What facts can the learner
		discover? What counts as a good response? Should the customer become calmer if the learner shows
		empathy? What happens if the learner makes the situation worse? Does a manager join? What feedback
		should the learner receive at the end?
	</p>
	<p>
		Those are not prompt-writing questions. They are <strong>experience-design questions</strong>.
	</p>

	<h2>A simple no-code workflow</h2>
	<p>
		In Liforma, a role-play can be thought of as seven steps:
	</p>
	<ol>
		<li>Choose the scenario and learning objective.</li>
		<li>Create or reuse the characters.</li>
		<li>Choose costumes, hairstyles and the set or backdrop.</li>
		<li>Define each character's behaviour and knowledge.</li>
		<li>Add stats that capture what matters during the interaction.</li>
		<li>Use scenes or nodes to control progression.</li>
		<li>Generate feedback and publish the experience.</li>
	</ol>
	<p>
		You can start from scratch, but the fastest route is often to remix something that already works.
		Liforma's
		<a href="https://www.liforma.ai/create">Create page</a> recommends finding a similar public
		experience, copying it into your workspace and changing the parts you need.
	</p>

	<h2>Step 1: start with the outcome, not the character</h2>
	<p>
		Before choosing an avatar, decide what the user should practise or achieve.
	</p>
	<p>
		A vague goal such as “practise customer service” is difficult to author and difficult to assess. A
		more useful scenario might be:
	</p>
	<p>
		<strong>“A hotel guest's room is not ready. The learner must acknowledge the frustration, discover
		what the guest needs, explain the available options and reach an acceptable resolution.”</strong>
	</p>
	<p>
		Now the role-play has structure. We know who the user is, who the other character is, what the
		problem is and what successful behaviour roughly looks like.
	</p>

	<h2>Step 2: create or reuse the characters</h2>
	<p>
		The next question is <strong>who is in the scene?</strong>
	</p>
	<p>
		For the hotel scenario, you might need:
	</p>
	<ul>
		<li><strong>Guest</strong> — frustrated, tired, in a hurry and initially skeptical;</li>
		<li><strong>Duty manager</strong> — appears only if the situation escalates; and</li>
		<li><strong>Coach</strong> — reviews the learner's performance at the end.</li>
	</ul>
	<p>
		These do not have to be newly generated characters for every experience. Liforma treats characters
		as reusable assets. A character can be created once and then cast in different scenarios.
	</p>
	<p>
		That makes authoring much faster. The same coach can appear across an entire training programme. The
		same difficult-customer character could later appear in a restaurant, retail or travel scenario.
	</p>

	<h2>Step 3: dress the character and choose the environment</h2>
	<p>
		A role-play becomes easier to understand when the visual context matches the scenario.
	</p>
	<p>
		Liforma separates character identity from appearance. You can give the same character different
		costumes and hairstyles for different experiences rather than creating a completely new person each
		time.
	</p>
	<p>
		Sets and backdrops are reusable too. The
		<a href="https://www.liforma.ai/create">Liforma creator library</a> includes ready-made clothes,
		hairstyles and sets, while custom assets can also be generated with AI.
	</p>
	<p>
		For the hotel example, the first scene might use a reception set. A later coaching scene could move
		to a staff office. The environment immediately tells the learner that the situation has changed.
	</p>

	<h2>Step 4: define behaviour, not just personality</h2>
	<p>
		A good role-play character needs more than adjectives.
	</p>
	<p>
		“Frustrated, impatient and demanding” describes a personality state, but it does not describe how the
		character should behave as the learner responds.
	</p>
	<p>
		A stronger authoring specification might say:
	</p>
	<ul>
		<li>the guest begins frustrated because the room should have been ready 45 minutes ago;</li>
		<li>they need somewhere quiet to take an important video call within 20 minutes;</li>
		<li>they will not reveal that requirement unless the learner asks what they need immediately;</li>
		<li>an apology without a practical solution does not calm them down;</li>
		<li>a clear temporary workspace plus a realistic room estimate improves trust;</li>
		<li>if the learner blames another department, the guest becomes more frustrated.</li>
	</ul>
	<p>
		Now the character has a model of the situation, not merely a tone of voice.
	</p>

	<h2>Step 5: track a few meaningful stats</h2>
	<p>
		This is where an authored AI role-play becomes much more useful than an open-ended conversation.
	</p>
	<p>
		During the interaction, Liforma can track simple stats or state variables. They can represent
		behaviour, facts discovered, objectives completed or the current emotional state of the scenario.
	</p>
	<p>
		For our hotel example, useful stats might be:
	</p>
	<table>
		<thead>
			<tr>
				<th>Stat</th>
				<th>What it represents</th>
				<th>Possible effect</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Empathy</strong></td>
				<td>Did the learner acknowledge the guest's frustration?</td>
				<td>Influences how cooperative the guest becomes.</td>
			</tr>
			<tr>
				<td><strong>Needs discovered</strong></td>
				<td>Did the learner uncover the upcoming video call?</td>
				<td>Unlocks a better solution.</td>
			</tr>
			<tr>
				<td><strong>Trust</strong></td>
				<td>Does the guest believe the learner is taking ownership?</td>
				<td>Changes tone and escalation risk.</td>
			</tr>
			<tr>
				<td><strong>Resolution</strong></td>
				<td>Was a workable solution agreed?</td>
				<td>Determines the ending.</td>
			</tr>
		</tbody>
	</table>
	<p>
		The goal is not to turn every sentence into a score. Track only things that should affect the
		experience or the feedback.
	</p>

	<h2>Stats are not just analytics</h2>
	<p>
		This distinction is important.
	</p>
	<p>
		Traditional conversation analytics happen after the interaction: the system examines the transcript
		and produces a score or report.
	</p>
	<p>
		Experience state can matter <strong>during</strong> the interaction.
	</p>
	<p>
		If trust falls too low, the guest can demand a manager. If the learner discovers the video-call
		requirement, a new solution becomes possible. If the learner resolves the issue well, the manager
		might appear later to praise the approach instead of handling an escalation.
	</p>
	<p>
		The conversation therefore changes the scenario, not merely the report generated afterwards.
	</p>

	<h2>Step 6: use scenes and nodes to control progression</h2>
	<p>
		Not every role-play needs branching. A simple interview practice experience might be one scene from
		start to finish.
	</p>
	<p>
		But scenes become powerful when the scenario has phases.
	</p>
	<p>
		Our hotel example might use:
	</p>
	<ol>
		<li><strong>Scene 1 — Reception:</strong> handle the initial complaint.</li>
		<li><strong>Scene 2A — Escalation:</strong> the duty manager joins if the interaction went badly.</li>
		<li><strong>Scene 2B — Resolution:</strong> the learner confirms the solution if the interaction went well.</li>
		<li><strong>Scene 3 — Coaching:</strong> review the learner's decisions and performance.</li>
	</ol>
	<p>
		Nodes or progression rules let the author decide which scene follows which conditions. That creates
		a structured experience without requiring the author to program an agent workflow from scratch.
	</p>

	<h2>Step 7: give feedback based on what actually happened</h2>
	<p>
		Good feedback should not be a generic paragraph appended to every conversation.
	</p>
	<p>
		The coach can use the transcript, outcomes and accumulated stats to explain:
	</p>
	<ul>
		<li>what the learner did well;</li>
		<li>what they missed;</li>
		<li>where the customer's reaction changed and why;</li>
		<li>which objective was or was not achieved;</li>
		<li>what a stronger response could have done differently; and</li>
		<li>what to practise next.</li>
	</ul>
	<p>
		That makes the experience useful for training rather than simply entertaining.
	</p>

	<h2>A complete role-play can involve several AI characters</h2>
	<p>
		Many real situations involve more than one other person, yet most conversational AI products still
		assume a one-user-to-one-agent session.
	</p>
	<p>
		Liforma experiences can be multi-character. That makes scenarios such as panel interviews, team
		meetings, family conversations, sales committees, negotiations and interactive stories possible
		without pretending that every situation is a private call with one AI.
	</p>
	<p>
		Each character can have a distinct role, personality, appearance and voice. Characters can also
		enter or leave as the experience moves between scenes.
	</p>
	<p>
		This is one reason we describe Liforma as an
		<a href="/what-is-an-avatar-experience">Avatar Experience platform</a> rather than simply an AI
		avatar service.
	</p>

	<h2>Do role-play avatars need to be photorealistic?</h2>
	<p>
		Often, no.
	</p>
	<p>
		For role-play, the user's learning usually depends more on the character's behaviour, emotional
		state, objectives and reactions than on whether every pore looks photographic.
	</p>
	<p>
		Stylised characters can also be easier to differentiate across a large cast, more flexible to dress
		and place in different worlds, and less likely to create an expectation that the interaction is a
		literal webcam conversation with a real person.
	</p>
	<p>
		Photorealism can still be valuable when human likeness is central to the scenario. The important
		thing is to choose deliberately rather than assume realism is always the highest-quality option.
		See
		<a href="/photorealistic-vs-stylized-ai-avatars">Photorealistic vs Stylized AI Avatars</a>.
	</p>

	<h2>What does “without coding” actually mean?</h2>
	<p>
		It does not mean the underlying system is simple. Speech recognition, language models, voice
		generation, character animation, state management and session orchestration are still happening
		underneath.
	</p>
	<p>
		It means the <strong>experience author does not need to implement those systems</strong> in order to
		create the scenario.
	</p>
	<p>
		The author works at the level of characters, scenes, behaviour, stats, outcomes and feedback rather
		than APIs, databases and orchestration code.
	</p>
	<p>
		That separation matters because the people who understand a training scenario are often not the
		people who write software. A sales trainer understands a difficult prospect. A teacher understands a
		language exercise. A manager understands a performance conversation. They should be able to author
		the interaction directly.
	</p>

	<h2>Start by remixing instead of starting from zero</h2>
	<p>
		A blank editor is not always the easiest way to learn an authoring system.
	</p>
	<p>
		Liforma therefore supports remixing. Find a public experience close to what you need, copy it into
		your workspace, then change the character, set, appearance, behaviour or content.
	</p>
	<p>
		This is useful for role-play because structure is highly reusable. A well-designed difficult-customer
		experience might become a hotel complaint, a retail return or an airline disruption simply by
		changing the situation, characters and success criteria.
	</p>
	<p>
		The
		<a href="https://www.liforma.ai/create">Create page</a> recommends remixing as the easiest starting
		point for exactly this reason.
	</p>

	<h2>Publish the role-play without building a website</h2>
	<p>
		Once the experience is ready, you do not necessarily need a developer for distribution either.
	</p>
	<p>
		A Liforma experience can be published directly on
		<a href="https://www.liforma.ai/">www.liforma.ai</a>, where people can discover and play it.
	</p>
	<p>
		If the experience needs to live inside a company website, LMS, application or product, it can also
		be embedded or integrated. Liforma's developer documentation describes the Experience as the
		reusable integration unit, with session launch, audio, turns and avatar rendering handled by the
		platform.
	</p>

	<h2>Who should author the experience?</h2>
	<p>
		Because the scenario can be authored without writing application code, ownership can move closer to
		the subject-matter expert.
	</p>
	<p>
		That might be:
	</p>
	<ul>
		<li>a sales enablement lead creating objection-handling practice;</li>
		<li>an L&amp;D team creating management simulations;</li>
		<li>a teacher designing language role-plays;</li>
		<li>a recruiter creating interview practice;</li>
		<li>a game or narrative designer creating interactive characters;</li>
		<li>a support team modelling difficult customer situations; or</li>
		<li>a creator building entertainment experiences for an audience.</li>
	</ul>
	<p>
		Developers may still integrate the resulting experience into a larger product, but they do not need
		to be in the loop every time somebody wants to change a character, scenario or scoring rule.
	</p>

	<h2>How to design a good AI role-play</h2>
	<p>
		The technology is only part of the job. A few design principles make the experience much stronger.
	</p>
	<ul>
		<li><strong>Give every character a motive.</strong> “Angry customer” is weaker than “customer who needs a quiet place for an urgent call.”</li>
		<li><strong>Hide some information.</strong> Make the user ask useful questions rather than giving away the whole situation immediately.</li>
		<li><strong>Track only meaningful state.</strong> If a stat never affects behaviour or feedback, it probably does not need to exist.</li>
		<li><strong>Let behaviour change.</strong> A customer who remains equally angry after an excellent response does not feel intelligent.</li>
		<li><strong>Use scenes for genuine changes.</strong> Move scene when the objective, location or participating characters change.</li>
		<li><strong>Make failure productive.</strong> A bad outcome should lead to useful consequences and feedback, not simply “You lost.”</li>
		<li><strong>Keep the character in role.</strong> The simulation is less useful if the character turns into a helpful tutor halfway through.</li>
	</ul>

	<h2>A reusable template for your first role-play</h2>
	<p>
		For a simple first experience, define these seven things:
	</p>
	<table>
		<thead>
			<tr>
				<th>Question</th>
				<th>Example answer</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Who is the user?</td>
				<td>Hotel receptionist</td>
			</tr>
			<tr>
				<td>Who is the AI character?</td>
				<td>Frustrated guest</td>
			</tr>
			<tr>
				<td>What does the character want?</td>
				<td>A quiet place for an urgent video call and certainty about the room</td>
			</tr>
			<tr>
				<td>What should the user discover?</td>
				<td>The video call starts in 20 minutes</td>
			</tr>
			<tr>
				<td>What should be tracked?</td>
				<td>Empathy, needs discovered, trust, resolution</td>
			</tr>
			<tr>
				<td>What changes during the scenario?</td>
				<td>Guest mood and whether the situation escalates</td>
			</tr>
			<tr>
				<td>What happens at the end?</td>
				<td>Coach gives feedback using transcript + stats</td>
			</tr>
		</tbody>
	</table>
	<p>
		If you can answer those questions, you have enough structure to build a surprisingly rich
		interactive experience.
	</p>

	<h2>The bigger shift: subject-matter experts can author behaviour</h2>
	<p>
		No-code AI role-play is interesting for a reason beyond convenience.
	</p>
	<p>
		Historically, turning a training idea into an interactive simulation meant translating the expert's
		knowledge into software requirements, handing them to developers, implementing a branching
		scenario, recording or animating characters, and repeating the process whenever the content changed.
	</p>
	<p>
		Generative AI removes much of the need to pre-script every possible sentence. An experience layer
		can remove much of the need to program the scenario around it.
	</p>
	<p>
		That means the person who understands the interaction can increasingly author the interaction.
	</p>
	<p>
		We think that is the more important promise of AI role-play: not just cheaper simulations, but many
		more people being able to create them.
	</p>

	<div class="callout">
		<strong>Build your first role-play:</strong>
		<a href="https://www.liforma.ai/create">find an experience to remix or start from scratch</a>.
		For the underlying concept, read
		<a href="/what-is-an-avatar-experience">What Is an Avatar Experience?</a>.
	</div>
</BlogPostLayout>
