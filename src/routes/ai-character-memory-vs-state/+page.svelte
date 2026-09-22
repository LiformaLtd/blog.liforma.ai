<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('ai-character-memory-vs-state')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		<strong>An AI character that remembers the conversation is not necessarily stateful.</strong>
		Memory tells the character what happened before. State tells the experience what is true now:
		who is present, what has been discovered, how a relationship has changed, which objectives are
		complete and what should happen next.
	</p>

	<p>
		That distinction matters because many “memory” implementations simply keep more chat history or
		retrieve old conversations. That can make an AI feel more continuous, but it does not automatically
		give you a training simulation, game, story or multi-character experience with consequences.
	</p>

	<div class="callout">
		<strong>Short answer:</strong> use <strong>memory</strong> for relevant past interactions,
		<strong>knowledge</strong> for external facts, and <strong>state</strong> for the current condition
		of the experience. A believable AI character often needs all three, but they solve different
		problems.
	</div>

	<h2>Memory and state are not the same thing</h2>
	<p>
		Consider a learner speaking with a difficult customer.
	</p>
	<p>
		The transcript may contain:
	</p>
	<p>
		<em>“The customer said their delivery is late. The learner apologised. The customer explained that
		they need the package before an event tomorrow.”</em>
	</p>
	<p>
		That is history. A model can read it and infer what has happened.
	</p>
	<p>
		But the experience might also maintain explicit variables:
	</p>
	<ul>
		<li><code>urgent_need_discovered = true</code></li>
		<li><code>customer_trust = 62</code></li>
		<li><code>resolution_offered = false</code></li>
		<li><code>escalation_required = false</code></li>
	</ul>
	<p>
		Those values are state. They can directly change how the customer behaves, which scene appears next
		and what feedback the learner receives.
	</p>
	<p>
		The transcript describes the past. The state represents the current situation.
	</p>

	<h2>A useful framework: history, memory, knowledge and state</h2>
	<table>
		<thead>
			<tr>
				<th>Layer</th>
				<th>Question it answers</th>
				<th>Example</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Conversation history</strong></td>
				<td>What was just said?</td>
				<td>Recent user and character turns</td>
			</tr>
			<tr>
				<td><strong>Memory</strong></td>
				<td>What from the past is worth remembering?</td>
				<td>The user dislikes aggressive sales tactics</td>
			</tr>
			<tr>
				<td><strong>Knowledge</strong></td>
				<td>What external facts should the character know?</td>
				<td>Product documentation or company policies</td>
			</tr>
			<tr>
				<td><strong>State</strong></td>
				<td>What is true in the experience right now?</td>
				<td>The customer is frustrated; the key has been found; scene 3 is active</td>
			</tr>
		</tbody>
	</table>

	<p>
		These layers can overlap, but treating them separately produces much cleaner systems.
	</p>

	<h2>Conversation history is working context, not long-term memory</h2>
	<p>
		The simplest “memory” system is to keep the chat transcript in the prompt.
	</p>
	<p>
		That works for short conversations because the model can see earlier turns. But as the history grows,
		several problems appear:
	</p>
	<ul>
		<li>context becomes expensive;</li>
		<li>irrelevant turns compete with important information;</li>
		<li>models can overlook details buried in long histories;</li>
		<li>private information can accidentally leak into contexts where it does not belong; and</li>
		<li>the system still lacks explicit variables that other parts of the application can rely on.</li>
	</ul>
	<p>
		Modern agent frameworks therefore distinguish short-term thread context from longer-lived memory.
		LangChain, for example, describes long-term memory as durable context that persists beyond a single
		run, while recent messages and intermediate state belong to short-term working context.
		<a href="https://www.langchain.com/blog/how-to-give-your-agent-memory">See LangChain's overview of
		agent memory</a>.
	</p>

	<h2>Long-term memory should be selective</h2>
	<p>
		A useful character should not permanently remember every sentence ever spoken.
	</p>
	<p>
		Human memory is selective, and AI memory should usually be selective too.
	</p>
	<p>
		Useful long-term memories might include:
	</p>
	<ul>
		<li>the user's name or preferred form of address;</li>
		<li>a preference established over several interactions;</li>
		<li>an important event that changed the relationship;</li>
		<li>a promise the character made;</li>
		<li>a fact that will matter in a later session; or</li>
		<li>a learned preference about how the user wants help delivered.</li>
	</ul>
	<p>
		A raw transcript is evidence from which memories can be extracted. It is not automatically a good
		memory store.
	</p>
	<p>
		This is also how current character platforms increasingly approach the problem. Convai's long-term
		memory architecture retrieves selected memories rather than blindly replaying every prior
		conversation, while Inworld's guidance for character apps recommends keeping cross-session memory in
		an external store keyed to the user and character and injecting only the relevant summary into new
		sessions.
		<a href="https://convai.com/blog/long-term-memeory">See Convai's long-term memory overview</a>.
	</p>

	<h2>State is more deterministic than memory</h2>
	<p>
		Memory is usually probabilistic. A retrieval system decides which old information is relevant, and
		the LLM decides how to use it.
	</p>
	<p>
		State can be explicit.
	</p>
	<p>
		If <code>door_unlocked = true</code>, the door is unlocked. If
		<code>customer_trust = 18</code>, the scenario can treat trust as low. If
		<code>objective_payment_discussed = true</code>, the experience knows that objective has been met.
	</p>
	<p>
		You do not need the language model to rediscover those facts by rereading 40 turns of dialogue.
	</p>
	<p>
		That makes state particularly valuable when the result affects control flow.
	</p>

	<h2>State should control consequences</h2>
	<p>
		The strongest use of state is not simply to give the AI more context. It is to let the user's actions
		change the experience.
	</p>
	<p>
		Suppose a sales simulation tracks:
	</p>
	<ul>
		<li><code>trust</code></li>
		<li><code>problem_discovered</code></li>
		<li><code>budget_confirmed</code></li>
		<li><code>risk_resolved</code></li>
	</ul>
	<p>
		Those variables can affect:
	</p>
	<ul>
		<li>which objections the buyer raises;</li>
		<li>whether another stakeholder joins the meeting;</li>
		<li>whether the buyer reveals sensitive information;</li>
		<li>which scene comes next;</li>
		<li>whether the deal progresses; and</li>
		<li>what the coach discusses afterwards.</li>
	</ul>
	<p>
		The experience now has consequences even though the dialogue itself remains generative.
	</p>

	<h2>Dynamic context is becoming a standard pattern for AI characters</h2>
	<p>
		The distinction between dialogue and world state is increasingly visible in AI-character platforms.
	</p>
	<p>
		Convai's 2026 Dynamic Context system, for example, lets developers expose named live variables such
		as score, objects collected or other game events to a character. Its own description makes the same
		core distinction: dialogue alone tells the character what was said; dynamic state tells the
		character what is actually happening in the world.
		<a href="https://delta.convai.com/blog/how-to-use-dynamic-context-in-convai-to-build-ai-characters-that-react-in-real-time">See Convai's Dynamic Context example</a>.
	</p>
	<p>
		This pattern applies far beyond games. A training simulation, website assistant, tutor or interactive
		story can all benefit from explicit state.
	</p>

	<h2>There are several kinds of state</h2>
	<p>
		It is useful to break state into categories instead of keeping one large bag of variables.
	</p>

	<h3>World state</h3>
	<p>
		Facts that describe the environment or scenario:
	</p>
	<ul>
		<li>the door is open;</li>
		<li>the meeting has started;</li>
		<li>the customer has received a refund;</li>
		<li>the learner has discovered the hidden requirement; or</li>
		<li>the player currently possesses the key.</li>
	</ul>

	<h3>Character state</h3>
	<p>
		Facts about an individual character:
	</p>
	<ul>
		<li>mood;</li>
		<li>trust in the user;</li>
		<li>current objective;</li>
		<li>health or energy in a game;</li>
		<li>willingness to reveal information; or</li>
		<li>relationship to another character.</li>
	</ul>

	<h3>User state</h3>
	<p>
		Facts about the participant:
	</p>
	<ul>
		<li>objectives completed;</li>
		<li>skills demonstrated;</li>
		<li>choices made;</li>
		<li>language level;</li>
		<li>inventory or progress; or</li>
		<li>permissions supplied by the host application.</li>
	</ul>

	<h3>Experience state</h3>
	<p>
		Control-flow facts:
	</p>
	<ul>
		<li>current scene or node;</li>
		<li>which characters are active;</li>
		<li>whether an escalation has triggered;</li>
		<li>which ending is currently possible; or</li>
		<li>whether the experience is complete.</li>
	</ul>

	<h2>Relationship state deserves special treatment</h2>
	<p>
		For long-running characters, one of the most interesting forms of state is the relationship between
		the user and the character.
	</p>
	<p>
		A relationship is not well represented by a pile of remembered transcripts.
	</p>
	<p>
		You may want explicit dimensions such as:
	</p>
	<ul>
		<li>trust;</li>
		<li>familiarity;</li>
		<li>respect;</li>
		<li>affection;</li>
		<li>fear;</li>
		<li>professional confidence; or</li>
		<li>shared history milestones.</li>
	</ul>
	<p>
		Memories can explain <em>why</em> the relationship changed; state records <em>where the relationship
		currently stands</em>.
	</p>
	<p>
		That combination gives a character much more continuity than simply telling the LLM “remember that
		you like this user.”
	</p>

	<h2>Private state matters in multi-character experiences</h2>
	<p>
		When several AI characters share an experience, not every piece of state should be visible to every
		character.
	</p>
	<p>
		A mystery might contain:
	</p>
	<ul>
		<li><strong>public state:</strong> a painting has been stolen;</li>
		<li><strong>character A's private state:</strong> they saw someone leave through the side door;</li>
		<li><strong>character B's private state:</strong> they stole the painting;</li>
		<li><strong>hidden experience state:</strong> the player has enough evidence to unlock an accusation scene.</li>
	</ul>
	<p>
		If every character receives all four facts, the scenario collapses.
	</p>
	<p>
		This is why multi-character AI needs an orchestration layer that decides not only what the world
		knows, but what each character is allowed to know.
	</p>
	<p>
		For more on that architecture, see
		<a href="/multi-character-ai-conversations">Multi-Character AI: How to Build Conversations With
		Multiple AI Characters</a>.
	</p>

	<h2>Memory can be private too</h2>
	<p>
		The same privacy boundary applies to long-term memory.
	</p>
	<p>
		If a character speaks with thousands of users, memories from one person's conversations should not
		become available to another person's session merely because they share the same character definition.
	</p>
	<p>
		Convai describes this explicitly in its long-term-memory system: memories are tied to speaker
		profiles so interactions remain compartmentalised.
		<a href="https://convai.com/blog/long-term-memeory">See Convai's memory architecture</a>.
	</p>
	<p>
		Any product that adds persistent user memory therefore needs identity, retention and privacy rules
		alongside the retrieval technology.
	</p>

	<h2>Knowledge is neither memory nor state</h2>
	<p>
		A third source of confusion is RAG.
	</p>
	<p>
		Suppose a website assistant can answer questions from a company's documentation. The documentation
		is not the character's memory, and it is not the current state of the experience. It is
		<strong>knowledge</strong>.
	</p>
	<p>
		A useful separation is:
	</p>
	<ul>
		<li><strong>Knowledge/RAG:</strong> “What does the refund policy say?”</li>
		<li><strong>Memory:</strong> “Last time, this user said they prefer annual billing.”</li>
		<li><strong>State:</strong> “This user is currently on the Business plan and has already requested a refund.”</li>
	</ul>
	<p>
		Putting all three into one undifferentiated prompt makes systems harder to reason about.
	</p>

	<h2>Tools and state work together</h2>
	<p>
		Tools let a character do things. State records the consequences.
	</p>
	<p>
		A hotel concierge character might call a booking tool. If the tool succeeds, the experience can set:
	</p>
	<p>
		<code>restaurant_booking_confirmed = true</code>
	</p>
	<p>
		That explicit result can then affect later dialogue, UI and scenes.
	</p>
	<p>
		Likewise, a training character might call a scoring tool or a website assistant might look up an
		order. The tool result does not need to remain buried in chat history. Important outcomes can become
		structured state.
	</p>

	<h2>Explicit state makes systems easier to debug</h2>
	<p>
		There is another advantage that is less visible to the end user.
	</p>
	<p>
		If the experience behaves incorrectly, explicit state gives the developer or author something to
		inspect.
	</p>
	<p>
		Instead of asking:
	</p>
	<p>
		<em>“Why did the model suddenly decide the customer trusted the learner?”</em>
	</p>
	<p>
		You can inspect:
	</p>
	<ul>
		<li>when <code>customer_trust</code> changed;</li>
		<li>which event caused the update;</li>
		<li>which character saw the new value; and</li>
		<li>which transition rule fired afterwards.</li>
	</ul>
	<p>
		This becomes increasingly important as experiences grow beyond one prompt and one model call.
	</p>

	<h2>State can reduce prompt size</h2>
	<p>
		Explicit state is not only more controllable. It can also be more efficient.
	</p>
	<p>
		Imagine a 30-minute role-play where the learner established five important facts during a long
		conversation. The next scene may not need the entire transcript. It may only need:
	</p>
	<ul>
		<li>the five extracted facts;</li>
		<li>the relevant relationship values;</li>
		<li>the outcome of the previous scene; and</li>
		<li>a short summary of what happened.</li>
	</ul>
	<p>
		That creates a much cleaner context package than repeatedly sending every word spoken since the
		experience began.
	</p>

	<h2>When should state persist across sessions?</h2>
	<p>
		Not all state should live forever.
	</p>
	<p>
		A useful persistence model separates:
	</p>
	<table>
		<thead>
			<tr>
				<th>Scope</th>
				<th>Example</th>
				<th>Typical lifetime</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Turn</strong></td>
				<td>Current tool result</td>
				<td>Seconds</td>
			</tr>
			<tr>
				<td><strong>Scene</strong></td>
				<td>Who is currently present</td>
				<td>Minutes</td>
			</tr>
			<tr>
				<td><strong>Experience session</strong></td>
				<td>Trust, objectives, discovered facts</td>
				<td>Until the experience ends</td>
			</tr>
			<tr>
				<td><strong>User progress</strong></td>
				<td>Completed lessons or unlocked chapters</td>
				<td>Across sessions</td>
			</tr>
			<tr>
				<td><strong>Long-term relationship</strong></td>
				<td>Persistent character-user history</td>
				<td>Potentially long-lived</td>
			</tr>
		</tbody>
	</table>
	<p>
		The longer the lifetime, the more carefully you need to think about identity, privacy, correction and
		deletion.
	</p>

	<h2>Example: training role-play</h2>
	<p>
		A learner is practising a difficult management conversation.
	</p>
	<p>
		The employee character has a hidden concern: two managers are assigning conflicting work.
	</p>
	<p>
		During the conversation:
	</p>
	<ul>
		<li>conversation history records what was said;</li>
		<li>state tracks <code>psychological_safety</code>, <code>root_cause_found</code> and
		<code>action_plan_quality</code>;</li>
		<li>character knowledge contains the undisclosed workload conflict;</li>
		<li>experience rules decide when that fact can be revealed; and</li>
		<li>a coaching scene later receives the relevant state plus selected transcript evidence.</li>
	</ul>
	<p>
		The learner's questions can therefore change the simulation itself.
	</p>
	<p>
		This is the model described in more detail in
		<a href="/ai-avatars-for-training-role-play-scoring-state-feedback">AI Avatars for Training:
		Building Role-Plays With Scoring, State and Feedback</a>.
	</p>

	<h2>Example: an AI companion</h2>
	<p>
		A long-running companion character has a different problem.
	</p>
	<p>
		It may need:
	</p>
	<ul>
		<li>recent conversation context for continuity;</li>
		<li>long-term memory of important prior events;</li>
		<li>relationship state that changes slowly over time;</li>
		<li>stable character identity and personality;</li>
		<li>knowledge about its fictional world; and</li>
		<li>current experience state, such as location or active task.</li>
	</ul>
	<p>
		Trying to encode all of that as one endless conversation transcript is brittle. Separate layers make
		the character easier to control and more believable.
	</p>

	<h2>Example: a website sales assistant</h2>
	<p>
		A website character may need almost no long-term memory at all.
	</p>
	<p>
		Instead it might need:
	</p>
	<ul>
		<li>knowledge of the company's products;</li>
		<li>current-page context;</li>
		<li>session state such as which needs the visitor has already described;</li>
		<li>tool results from pricing or availability lookups; and</li>
		<li>a small amount of interaction history.</li>
	</ul>
	<p>
		This is a good example of why “add memory” is often the wrong requirement. The real need may be
		structured context and current state, not permanent recollection.
	</p>
	<p>
		For the website pattern, see
		<a href="/how-to-add-an-ai-character-to-your-website">How to Add an AI Character to Your Website</a>.
	</p>

	<h2>How Liforma thinks about state</h2>
	<p>
		Liforma's developer documentation describes Avatar Experiences as a platform for
		<strong>characters, worlds, state and tools</strong>.
		<a href="https://docs.liforma.ai/">See the Liforma developer documentation</a>.
	</p>
	<p>
		That wording is deliberate.
	</p>
	<p>
		The character is not expected to carry the entire world inside its prompt. The Experience is the
		larger container. It can coordinate characters, scenes, stats, tools and progression while the
		character focuses on behaving convincingly in the current situation.
	</p>
	<p>
		This is particularly important for:
	</p>
	<ul>
		<li>multi-character experiences;</li>
		<li>training role-plays;</li>
		<li>interactive stories;</li>
		<li>games;</li>
		<li>learning experiences; and</li>
		<li>website assistants with tools or page context.</li>
	</ul>

	<h2>The experience should remember facts; the character should remember meaning</h2>
	<p>
		A useful design principle is to make important operational facts explicit while allowing character
		memory to remain semantic.
	</p>
	<p>
		For example:
	</p>
	<ul>
		<li><strong>State:</strong> <code>proposal_accepted = true</code></li>
		<li><strong>Memory:</strong> “The user surprised me by trusting my plan when everyone else doubted it.”</li>
	</ul>
	<p>
		Both refer to the same event, but they serve different purposes.
	</p>
	<p>
		The state is reliable for control flow. The memory gives the event emotional meaning when the
		character refers to it later.
	</p>

	<h2>Five rules for building believable stateful characters</h2>
	<ol>
		<li>
			<strong>Do not use transcripts as your database.</strong> Extract important facts into explicit
			state or durable memory.
		</li>
		<li>
			<strong>Keep control-flow state deterministic.</strong> If an event determines what happens next,
			do not rely on the LLM rediscovering it from prose.
		</li>
		<li>
			<strong>Give characters only the state they should know.</strong> Multi-character experiences
			become much more believable when knowledge is scoped.
		</li>
		<li>
			<strong>Make long-term memory selective.</strong> Remember important events and preferences rather
			than every utterance.
		</li>
		<li>
			<strong>Decide persistence explicitly.</strong> A scene variable, a training score and a
			multi-year relationship memory should not all have the same lifetime.
		</li>
	</ol>

	<h2>Memory makes a character continuous. State makes an experience consequential.</h2>
	<p>
		Long-term memory is important because it lets a character recognise continuity across time.
	</p>
	<p>
		State is important because it lets actions change the world.
	</p>
	<p>
		The most interesting AI character experiences will use both.
	</p>
	<p>
		The character can remember that you once helped them. The world can also know that the door you
		unlocked is still open, that the customer now trusts you, that the training objective has been
		completed or that a different character should appear in the next scene.
	</p>
	<p>
		That is the difference between an AI that can continue a conversation and an experience that can
		actually evolve.
	</p>

	<div class="callout">
		<strong>Related:</strong>
		read <a href="/what-is-an-avatar-experience">What Is an Avatar Experience?</a> and
		<a href="/multi-character-ai-conversations">Multi-Character AI: How to Build Conversations With
		Multiple AI Characters</a>, or
		<a href="https://www.liforma.ai/create">create or remix a Liforma experience</a>.
	</div>
</BlogPostLayout>
