<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('multi-character-ai-conversations')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		<strong>Multi-character AI is not just several chatbots on the same screen.</strong> A convincing
		multi-character experience needs each character to have a distinct identity, know when to speak,
		understand who else is present, react to shared events and carry the right state from one scene to
		the next.
	</p>

	<p>
		Once you add those requirements, the problem changes. You are no longer building a single
		conversation with an avatar. You are orchestrating a cast.
	</p>

	<div class="callout">
		<strong>Short answer:</strong> multi-character AI works best when characters have separate identities
		and goals but participate in a shared experience state. The experience — not any single agent —
		decides who is present, what each character knows, what has happened and what should happen next.
	</div>

	<h2>What is multi-character AI?</h2>
	<p>
		Multi-character AI is an interactive system in which a user can encounter, speak with or observe
		more than one AI character inside the same experience.
	</p>
	<p>
		Those characters may appear together or at different times. They may cooperate, disagree, share
		information, know different facts or react differently to the user's behaviour.
	</p>
	<p>
		Examples include:
	</p>
	<ul>
		<li>a panel interview with three interviewers;</li>
		<li>a sales meeting with a buyer and procurement manager;</li>
		<li>a customer-service scenario involving a customer, supervisor and coach;</li>
		<li>a language lesson with a waiter, friend and shopkeeper;</li>
		<li>a mystery in which different witnesses know different facts;</li>
		<li>a role-playing game with a party of AI characters;</li>
		<li>a historical discussion involving several figures with different perspectives; or</li>
		<li>an interactive story in which characters enter and leave as the plot progresses.</li>
	</ul>

	<h2>Why one AI agent is often not enough</h2>
	<p>
		The standard conversational-AI architecture assumes one user and one agent. That makes sense for
		many assistants: ask a question, receive an answer, repeat.
	</p>
	<p>
		But real-world situations are frequently social rather than one-to-one.
	</p>
	<p>
		A candidate may face a hiring manager, technical interviewer and future colleague. A salesperson may
		need to persuade an enthusiastic champion while answering objections from a skeptical finance
		director. A manager may mediate between two employees whose accounts of a problem differ.
	</p>
	<p>
		Representing all of those people as one omniscient AI voice removes much of what makes the situation
		interesting.
	</p>
	<p>
		Multiple characters let the experience preserve conflicting goals, incomplete information,
		different personalities and changing relationships.
	</p>

	<h2>The experience should own the world</h2>
	<p>
		A useful architecture separates <strong>character state</strong> from
		<strong>experience state</strong>.
	</p>
	<p>
		A character needs to know things about itself: its identity, role, personality, voice, objectives
		and perhaps private knowledge.
	</p>
	<p>
		The experience needs to know things about the world: which scene is active, which characters are
		present, what the user has done, what shared facts have been discovered, what objectives have been
		completed and what should happen next.
	</p>
	<table>
		<thead>
			<tr>
				<th>Character owns</th>
				<th>Experience owns</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Identity and personality</td>
				<td>Current scene</td>
			</tr>
			<tr>
				<td>Voice and appearance</td>
				<td>Who is present</td>
			</tr>
			<tr>
				<td>Role and motives</td>
				<td>Shared history</td>
			</tr>
			<tr>
				<td>Private knowledge</td>
				<td>Stats and objectives</td>
			</tr>
			<tr>
				<td>Character-specific memories</td>
				<td>Progression and outcomes</td>
			</tr>
		</tbody>
	</table>
	<p>
		That separation is central to Liforma's
		<a href="/what-is-an-avatar-experience">Avatar Experience</a> model. Characters are reusable
		participants; the experience orchestrates what happens around them.
	</p>

	<h2>Shared state is what makes the cast feel like one world</h2>
	<p>
		Without shared state, multi-character AI can feel like opening several unrelated chat windows.
	</p>
	<p>
		Imagine telling Character A that you lost a key, then walking into another room and meeting
		Character B. If the second character is supposed to have been informed, the experience needs a
		shared representation of that event.
	</p>
	<p>
		That does not mean every character should know everything. In fact, selective knowledge is often
		what makes the experience interesting.
	</p>
	<p>
		A mystery might track:
	</p>
	<ul>
		<li><code>key_missing = true</code> as shared world state;</li>
		<li>Character A knows where it was last seen;</li>
		<li>Character B knows who entered the room;</li>
		<li>Character C is secretly responsible and should not reveal that fact unless confronted.</li>
	</ul>
	<p>
		The experience can decide which state each character is allowed to see.
	</p>

	<h2>Characters should not all know the same things</h2>
	<p>
		A common failure mode in multi-agent experiences is accidental omniscience. Every AI receives the
		same giant transcript and therefore behaves as though it heard every private conversation and knows
		every hidden fact.
	</p>
	<p>
		That may be convenient technically, but it damages the fiction.
	</p>
	<p>
		A stronger system separates information into categories such as:
	</p>
	<ul>
		<li><strong>public world state</strong> — facts everybody present can know;</li>
		<li><strong>scene state</strong> — events that occurred in the current location;</li>
		<li><strong>character knowledge</strong> — facts known only by one character;</li>
		<li><strong>user history</strong> — things the user has done or said;</li>
		<li><strong>hidden author state</strong> — variables used to control progression that characters should not expose.</li>
	</ul>
	<p>
		This gives creators something closer to dramatic structure than a shared group chat.
	</p>

	<h2>Who should speak next?</h2>
	<p>
		Turn-taking is one of the hardest parts of multi-character AI.
	</p>
	<p>
		If every character responds to every user utterance, the experience becomes noisy and unnatural. If
		the user has to manually select a character before every sentence, it can feel mechanical.
	</p>
	<p>
		There are several useful strategies.
	</p>

	<h3>Explicit addressing</h3>
	<p>
		The simplest rule is to respond when the user clearly addresses a character by name or selects them
		in the interface. This is deterministic and works well when precision matters.
	</p>

	<h3>Contextual turn selection</h3>
	<p>
		The experience can infer who should answer from the content. If the user asks the finance director
		about budget, that character is the natural respondent. If the user asks the whole group a question,
		one or more characters may respond.
	</p>

	<h3>Author-controlled turns</h3>
	<p>
		In structured training, the author may already know who should speak at a particular point. A manager
		can enter after an escalation threshold is reached, or a coach can speak only after the scenario is
		complete.
	</p>

	<h3>Character initiative</h3>
	<p>
		Some experiences benefit from characters deciding to interject. That can feel much more alive, but
		it needs restraint. A character should have a reason to speak: disagreement, urgency, new
		information, an emotional reaction or an objective that has become relevant.
	</p>
	<p>
		The best systems usually combine these approaches rather than relying on one universal rule.
	</p>

	<h2>Multi-character does not mean multi-LLM chaos</h2>
	<p>
		It is easy to imagine a system where five autonomous agents continuously talk to one another,
		consume tokens and independently decide what to do. That is not necessary for most interactive
		experiences.
	</p>
	<p>
		The useful abstraction is often much simpler: only invoke the intelligence that is needed for the
		current turn.
	</p>
	<p>
		If the user is speaking to the hotel guest, there may be no reason to run the manager and coach at
		all. They can remain dormant until the experience brings them into the scene.
	</p>
	<p>
		This makes multi-character experiences both more controllable and more economical.
	</p>

	<h2>Scenes make a cast manageable</h2>
	<p>
		Not every character should be present all the time.
	</p>
	<p>
		Scenes let an experience define a smaller active cast and a clear context. Moving to a new scene can
		change:
	</p>
	<ul>
		<li>the characters who are present;</li>
		<li>the backdrop or 3D environment;</li>
		<li>the current objective;</li>
		<li>the information available to characters;</li>
		<li>the tone of the interaction; and</li>
		<li>the rules governing what happens next.</li>
	</ul>
	<p>
		That is one reason Liforma supports multi-scene experiences rather than treating the whole session
		as one indefinitely long conversation.
	</p>

	<h2>Example: a multi-character sales simulation</h2>
	<p>
		Consider a sales-training experience with three AI characters.
	</p>
	<p>
		<strong>Maria, the internal champion</strong>, likes the product and wants the purchase to happen.
		She is helpful but does not have final authority.
	</p>
	<p>
		<strong>David, the finance director</strong>, cares about cost, payback and contractual risk. He
		starts skeptical and becomes more engaged only when the learner gives precise answers.
	</p>
	<p>
		<strong>Alex, the coach</strong>, does not participate in the sales meeting. Alex appears afterwards
		to review what happened.
	</p>
	<p>
		The experience might track:
	</p>
	<ul>
		<li>whether the learner uncovered the commercial objective;</li>
		<li>whether pricing was discussed too early;</li>
		<li>Maria's confidence in the salesperson;</li>
		<li>David's perception of financial risk;</li>
		<li>which objections were handled successfully; and</li>
		<li>whether a clear next step was agreed.</li>
	</ul>
	<p>
		Maria and David can hear the same conversation but react differently because their goals are
		different. Alex can later receive the relevant transcript and stats without pretending to have been
		physically present in the meeting.
	</p>
	<p>
		That is much closer to a real sales situation than collapsing all three roles into a single
		“sales-training chatbot.”
	</p>

	<h2>Example: a mystery with private knowledge</h2>
	<p>
		Multi-character design becomes even more interesting in entertainment.
	</p>
	<p>
		Imagine a mystery with four characters. Each witnessed a different part of an event. One is lying.
		The player can move between locations and question them in any order.
	</p>
	<p>
		The experience maintains the objective truth of the world, but each character sees only the subset
		they should know. When the player discovers a clue, a shared stat records it. That clue might unlock
		a new question, cause another character to become nervous or open a new scene.
	</p>
	<p>
		At that point, the AI is not merely generating dialogue. Dialogue is one interface into a stateful
		interactive system.
	</p>

	<h2>Example: panel interview practice</h2>
	<p>
		A panel interview demonstrates another advantage: different characters can evaluate different
		aspects of the same answer.
	</p>
	<p>
		A hiring manager might focus on leadership. A technical interviewer can probe expertise. A future
		colleague might care about communication and collaboration.
	</p>
	<p>
		The user experiences the social pressure of addressing a group rather than repeatedly answering one
		generic interviewer. The panel can also ask follow-up questions based on what other members heard.
	</p>
	<p>
		At the end, the experience can combine character-specific observations with shared stats to generate
		feedback.
	</p>

	<h2>Characters need motives, not just personalities</h2>
	<p>
		“Friendly,” “serious” and “sarcastic” are useful style cues, but they are not enough to create a
		convincing cast.
	</p>
	<p>
		Characters become interesting when they want different things.
	</p>
	<p>
		For each character, define:
	</p>
	<ul>
		<li>what they want from the situation;</li>
		<li>what they know;</li>
		<li>what they do not know;</li>
		<li>what they are willing to reveal;</li>
		<li>what changes their attitude;</li>
		<li>what would make them leave, interrupt or escalate; and</li>
		<li>how their objectives relate to the other characters.</li>
	</ul>
	<p>
		Conflict and cooperation then emerge from the structure instead of being simulated by random
		personality quirks.
	</p>

	<h2>Shared stats can coordinate characters without hard-coding dialogue</h2>
	<p>
		One of the most useful techniques is to let several characters react to the same small set of
		experience variables.
	</p>
	<p>
		Suppose a negotiation tracks <code>trust</code>, <code>budget_confidence</code> and
		<code>urgency</code>. Different characters can interpret those values differently.
	</p>
	<ul>
		<li>The champion becomes more supportive as trust rises.</li>
		<li>The finance director pushes harder when budget confidence is low.</li>
		<li>The CEO enters only when urgency becomes high enough.</li>
		<li>The coach later explains which user behaviours moved each variable.</li>
	</ul>
	<p>
		The author is not scripting every possible sentence. They are defining the dynamics of the
		experience.
	</p>

	<h2>Should AI characters talk to each other?</h2>
	<p>
		Sometimes.
	</p>
	<p>
		Character-to-character dialogue can make a scene feel alive, but it should serve the user rather
		than become an expensive AI conversation the user merely watches.
	</p>
	<p>
		Useful cases include:
	</p>
	<ul>
		<li>one character challenging another's claim;</li>
		<li>a manager interrupting an escalating customer interaction;</li>
		<li>two witnesses disagreeing about what happened;</li>
		<li>a panel briefly discussing the user's answer; or</li>
		<li>story characters reacting to an important event.</li>
	</ul>
	<p>
		In many cases the author can constrain these exchanges tightly. The point is not to create an
		infinite autonomous-agent simulation. It is to make the authored situation feel socially coherent.
	</p>

	<h2>How much context should each character receive?</h2>
	<p>
		Sending the entire history of the entire experience to every character is simple, but it is rarely
		optimal.
	</p>
	<p>
		It increases token usage, makes prompts harder to control and risks leaking information that a
		character should not know.
	</p>
	<p>
		A better context package can include:
	</p>
	<ul>
		<li>the character's identity and instructions;</li>
		<li>relevant recent dialogue;</li>
		<li>the current scene and objective;</li>
		<li>only the shared state the character is allowed to know;</li>
		<li>character-specific memories or facts; and</li>
		<li>the available tools or actions for this moment.</li>
	</ul>
	<p>
		This is similar to how modern game AI systems expose selected world state to characters rather than
		giving every non-player character a copy of the entire game database.
	</p>
	<p>
		Current character platforms are moving in this direction too. Convai, for example, documents
		“Dynamic Context” for exposing selected live game variables and events to AI characters rather than
		relying only on a static prompt.
		<a href="https://convai.com/blog/how-to-use-dynamic-context-in-convai-to-build-ai-characters-that-react-in-real-time">See Convai's Dynamic Context example</a>.
	</p>

	<h2>Multi-character AI is an orchestration problem</h2>
	<p>
		Once several characters exist, the most important intelligence may not belong to any character.
	</p>
	<p>
		The experience itself needs orchestration logic that can answer questions such as:
	</p>
	<ul>
		<li>Who is currently active?</li>
		<li>Who should respond to this turn?</li>
		<li>Which characters heard what was said?</li>
		<li>Which stats should change?</li>
		<li>Has an objective been completed?</li>
		<li>Should somebody enter or leave?</li>
		<li>Should the scene change?</li>
		<li>Has the experience reached an ending?</li>
	</ul>
	<p>
		That is why multi-character AI fits naturally with an experience or agent-platform model rather
		than a single prompt attached to a face.
	</p>

	<h2>Visual design matters more when there is a cast</h2>
	<p>
		With one avatar, the user only needs to recognise one person. With several characters, visual
		differentiation becomes part of usability.
	</p>
	<p>
		Distinct silhouettes, hairstyles, clothes, voices and positions can help the user immediately
		understand who is speaking and what role they play.
	</p>
	<p>
		This is one reason Liforma's reusable costumes, hairstyles and sets matter. They are not merely
		cosmetic customisation; they become part of how a cast is designed and understood.
	</p>
	<p>
		Stylised characters can be especially useful here because creators have more freedom to make
		characters visually distinct while keeping them inside the same art direction. See
		<a href="/photorealistic-vs-stylized-ai-avatars">Photorealistic vs Stylized AI Avatars</a>.
	</p>

	<h2>Multi-character experiences do not have to be expensive</h2>
	<p>
		A naïve multi-agent architecture can multiply costs quickly if every character runs continuously.
		But an authored experience does not need to work that way.
	</p>
	<p>
		Most of the time, only one character needs to generate a response. Other characters can remain
		inactive until the orchestration layer decides they should participate.
	</p>
	<p>
		The same is true across scenes. There is no reason to keep a coach, manager or future character
		actively connected while the user is talking to somebody else.
	</p>
	<p>
		This aligns well with Liforma's request-based architecture. Rather than maintaining a persistent
		voice session for every possible character, the system can invoke the STT → LLM → TTS → STA
		pipeline when a character actually needs to respond. For the architectural reasoning, see
		<a href="/does-conversational-ai-need-webrtc">Does Conversational AI Really Need WebRTC?</a>.
	</p>

	<h2>How to design your first multi-character experience</h2>
	<p>
		Keep the first version small. Three characters are enough to create dynamics that one agent cannot.
	</p>
	<p>
		For each character, write down:
	</p>
	<ol>
		<li><strong>Role:</strong> who are they in this situation?</li>
		<li><strong>Goal:</strong> what do they want?</li>
		<li><strong>Knowledge:</strong> what do they know that others may not?</li>
		<li><strong>Relationship:</strong> how do they feel about the user and the other characters?</li>
		<li><strong>Triggers:</strong> what makes them speak, change attitude, enter or leave?</li>
	</ol>
	<p>
		Then define the experience-level pieces:
	</p>
	<ol>
		<li>the initial scene and active characters;</li>
		<li>a small set of shared stats or facts;</li>
		<li>one meaningful transition to another scene;</li>
		<li>one consequence that depends on what the user did; and</li>
		<li>an ending or feedback phase.</li>
	</ol>
	<p>
		That is enough to create something that feels fundamentally different from a one-character chatbot.
	</p>

	<h2>When should you use multiple characters?</h2>
	<p>
		Use multiple characters when the differences between people are part of the problem the user is
		trying to navigate.
	</p>
	<p>
		If you only need a helpful product expert answering questions, one character is probably better.
		Adding three avatars does not automatically make the experience more sophisticated.
	</p>
	<p>
		But if the scenario contains different roles, incentives, perspectives, knowledge or relationships,
		collapsing them into one AI can remove the very thing you are trying to simulate.
	</p>

	<h2>Where Liforma fits</h2>
	<p>
		Liforma is built so that creators can treat AI characters as a cast rather than as isolated
		endpoints.
	</p>
	<p>
		Characters are reusable. They can have different appearances and voices. Experiences can contain
		multiple characters and multiple scenes. Stats and state can carry what happened forward. Nodes can
		change the progression of the experience. Feedback can be generated from the events that actually
		took place.
	</p>
	<p>
		And because the experience itself is the reusable unit, the author does not need to build a bespoke
		multi-agent application every time they want to create a panel interview, negotiation, training
		scenario or interactive story.
	</p>
	<p>
		That is the larger idea behind multi-character AI:
		<strong>the intelligence is not only in the characters; it is in the experience that coordinates
		them.</strong>
	</p>

	<div class="callout">
		<strong>Try the model yourself:</strong>
		<a href="https://www.liforma.ai/create">create or remix a Liforma experience</a>.
		For a practical single-scenario workflow, read
		<a href="/how-to-create-interactive-ai-role-play-without-coding">How to Create an Interactive AI
		Role-Play Without Coding</a>.
	</div>
</BlogPostLayout>
