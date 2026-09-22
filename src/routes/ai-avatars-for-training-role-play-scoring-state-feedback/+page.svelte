<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('ai-avatars-for-training-role-play-scoring-state-feedback')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		<strong>AI avatars can turn training from something employees watch into something they practise.</strong>
		The most useful systems go beyond an animated character asking questions. They create a role-play
		with explicit objectives, state that changes during the conversation, measurable behaviours and
		feedback based on what the learner actually did.
	</p>

	<p>
		That makes them particularly useful for skills that are hard to learn from slides alone: sales,
		customer service, management, interviewing, negotiation, language learning and other situations where
		performance depends on what somebody says and how another person responds.
	</p>

	<div class="callout">
		<strong>Short answer:</strong> a good AI training simulation combines a believable character with
		authored scenario state, a small number of meaningful performance measures and feedback tied to the
		actual interaction. The goal is not to score every sentence. It is to create repeatable practice with
		consequences and useful coaching.
	</div>

	<h2>Why AI avatars are useful for training</h2>
	<p>
		Many workplace skills are social. You cannot fully learn them by reading what a good conversation
		looks like.
	</p>
	<p>
		A salesperson needs to practise handling an objection. A manager needs to experience the discomfort
		of giving difficult feedback. A receptionist needs to stay calm while a guest becomes frustrated. A
		candidate benefits from answering a follow-up question they did not know was coming.
	</p>
	<p>
		Traditional role-play can do this well, but it is difficult to provide consistently at scale.
		Learners need another person, instructors need time, different partners behave differently and some
		people are uncomfortable practising sensitive scenarios with colleagues.
	</p>
	<p>
		AI makes another model possible: a learner can practise with a character whenever they want, repeat
		the scenario and receive structured feedback immediately afterwards.
	</p>

	<h2>What the research says</h2>
	<p>
		The research base is still developing, and AI role-play should not be treated as a proven replacement
		for human instruction in every domain. But recent results are encouraging.
	</p>
	<p>
		A 2025 pilot randomized trial in medical education compared an AI chatbot simulation with peer
		role-play for clinical-exam preparation. The differences in overall performance were not statistically
		significant, but learners using the AI system particularly valued the autonomy, repeatability and
		structured feedback, while peer role-play was valued for authenticity and exam-like interaction.
		<a href="https://link.springer.com/article/10.1186/s12909-025-08308-y">Read the BMC Medical Education study</a>.
	</p>
	<p>
		A larger 2026 randomized controlled trial involving 346 participants training for child-helpline
		conversations found that simulation improved task knowledge, while adding guidance feedback produced
		additional gains in knowledge and conversational performance.
		<a href="https://www.sciencedirect.com/science/article/pii/S1071581926001989">Read the study in the
		International Journal of Human-Computer Studies</a>.
	</p>
	<p>
		The practical lesson is not that AI should replace trainers. It is that
		<strong>repeatable simulation plus well-designed feedback can become a useful additional practice
		layer</strong>.
	</p>

	<h2>A talking avatar is not yet a training simulation</h2>
	<p>
		Suppose you create a virtual customer and prompt it:
	</p>
	<p>
		<em>“You are an angry customer. Have a difficult conversation with the learner.”</em>
	</p>
	<p>
		You now have a role-playing chatbot. You do not yet have a robust training experience.
	</p>
	<p>
		For training, you also need to define:
	</p>
	<ul>
		<li>what the learner is supposed to practise;</li>
		<li>what the character wants;</li>
		<li>what information the learner must discover;</li>
		<li>which behaviours matter;</li>
		<li>how the character should react to those behaviours;</li>
		<li>what should change as the conversation progresses;</li>
		<li>what counts as a successful or unsuccessful outcome; and</li>
		<li>what feedback the learner should receive afterwards.</li>
	</ul>
	<p>
		Those are the pieces that turn conversation into simulation.
	</p>

	<h2>The most important concept: state</h2>
	<p>
		A training scenario should not behave the same way regardless of what the learner does.
	</p>
	<p>
		Imagine a customer-service simulation. The customer begins frustrated. If the learner listens,
		acknowledges the problem and finds a workable solution, the customer's trust should improve. If the
		learner becomes defensive or blames another department, frustration should rise.
	</p>
	<p>
		That change can be represented as explicit experience state:
	</p>
	<ul>
		<li><code>trust</code></li>
		<li><code>frustration</code></li>
		<li><code>needs_discovered</code></li>
		<li><code>ownership_shown</code></li>
		<li><code>resolution_reached</code></li>
	</ul>
	<p>
		The character can react to those variables during the role-play, and the feedback system can use
		them afterwards.
	</p>
	<p>
		This is much more useful than treating the entire interaction as an unstructured transcript that is
		only evaluated at the end.
	</p>

	<h2>State and scoring are not the same thing</h2>
	<p>
		This distinction is worth making explicitly.
	</p>
	<p>
		<strong>State</strong> represents what is currently true inside the scenario. It can affect what
		happens next.
	</p>
	<p>
		<strong>Scoring</strong> evaluates the learner's performance.
	</p>
	<p>
		Sometimes the same variable can serve both purposes, but they do not have to.
	</p>
	<p>
		For example, <code>customer_trust</code> may be state because it changes the customer's behaviour.
		A separate <code>empathy_score</code> might contribute to the final assessment but never be visible
		to the customer.
	</p>
	<p>
		Keeping those concepts separate prevents training simulations from turning into crude point systems.
	</p>

	<h2>Do not score everything</h2>
	<p>
		One of the easiest mistakes is to create a long rubric containing every desirable behaviour and ask
		the AI to score all of it continuously.
	</p>
	<p>
		That creates several problems:
	</p>
	<ul>
		<li>the scoring becomes difficult to explain;</li>
		<li>small model errors can create apparently precise but unstable numbers;</li>
		<li>learners may optimise for the score instead of the skill;</li>
		<li>feedback becomes a checklist rather than coaching; and</li>
		<li>authors lose track of which measures actually affect the experience.</li>
	</ul>
	<p>
		For many scenarios, three to six well-defined dimensions are enough.
	</p>

	<h2>Example: a sales role-play scorecard</h2>
	<p>
		Suppose the learner is practising a discovery call with a skeptical prospective customer.
	</p>
	<table>
		<thead>
			<tr>
				<th>Dimension</th>
				<th>What good performance looks like</th>
				<th>How it can affect the scenario</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Discovery</strong></td>
				<td>Asks useful questions before pitching</td>
				<td>Unlocks the customer's real business problem</td>
			</tr>
			<tr>
				<td><strong>Listening</strong></td>
				<td>Responds to what the customer actually said</td>
				<td>Raises trust</td>
			</tr>
			<tr>
				<td><strong>Value articulation</strong></td>
				<td>Connects the product to the discovered problem</td>
				<td>Makes the customer more receptive</td>
			</tr>
			<tr>
				<td><strong>Objection handling</strong></td>
				<td>Addresses concerns without becoming defensive</td>
				<td>Reduces perceived risk</td>
			</tr>
			<tr>
				<td><strong>Next step</strong></td>
				<td>Ends with a clear, mutually agreed action</td>
				<td>Determines whether the scenario succeeds</td>
			</tr>
		</tbody>
	</table>
	<p>
		This scorecard is simple enough that the learner can understand it, but rich enough to drive both
		behaviour and feedback.
	</p>

	<h2>Feedback should explain cause and effect</h2>
	<p>
		The weakest feedback looks like this:
	</p>
	<p>
		<em>“You scored 7/10 for empathy and 6/10 for communication.”</em>
	</p>
	<p>
		That tells the learner almost nothing.
	</p>
	<p>
		Stronger feedback connects an observable behaviour to its effect:
	</p>
	<p>
		<em>“When the customer said they had an important call in 20 minutes, you apologised but did not ask
		what they needed immediately. Because that requirement was never discovered, you kept discussing the
		room delay instead of solving the urgent problem.”</em>
	</p>
	<p>
		That is useful because the learner can see the moment where the conversation changed.
	</p>
	<p>
		The best feedback can draw from several sources:
	</p>
	<ul>
		<li>the transcript;</li>
		<li>explicit stats or state changes;</li>
		<li>objectives completed or missed;</li>
		<li>character reactions;</li>
		<li>important turning points in the conversation; and</li>
		<li>the final outcome.</li>
	</ul>

	<h2>Feedback does not need to be delivered by a report</h2>
	<p>
		One advantage of character-based training is that feedback can itself be part of the experience.
	</p>
	<p>
		A coach can appear after the role-play. The customer can leave, the scene can change and a training
		coach can talk through what happened.
	</p>
	<p>
		That makes the transition from simulation to reflection much more natural than dropping the learner
		onto a dashboard full of scores.
	</p>
	<p>
		The coach can still show structured data, but the learner can also ask follow-up questions:
	</p>
	<p>
		<em>“Why did the customer get more frustrated there?”</em>
	</p>
	<p>
		or:
	</p>
	<p>
		<em>“What could I have said instead?”</em>
	</p>
	<p>
		This turns assessment into a second conversation rather than a dead-end result screen.
	</p>

	<h2>Multiple characters make training scenarios more realistic</h2>
	<p>
		Many workplace situations involve several stakeholders.
	</p>
	<p>
		A sales simulation might begin with a supportive internal champion and later introduce a finance
		director. A customer-service role-play may escalate to a manager. An interview can involve a panel
		rather than one generic interviewer.
	</p>
	<p>
		The different characters can have different goals and different information. That matters because a
		learner may need to adapt communication style rather than repeat the same answer to everyone.
	</p>
	<p>
		Liforma supports this through multi-character and multi-scene Avatar Experiences. For the underlying
		design model, see
		<a href="/multi-character-ai-conversations">Multi-Character AI: How to Build Conversations With
		Multiple AI Characters</a>.
	</p>

	<h2>Scenes let training have phases</h2>
	<p>
		A good simulation does not have to be one long conversation.
	</p>
	<p>
		Scenes are useful when the training objective changes.
	</p>
	<p>
		A management simulation might use:
	</p>
	<ol>
		<li><strong>Preparation:</strong> learner receives context about the employee and issue.</li>
		<li><strong>Conversation:</strong> learner speaks with the employee.</li>
		<li><strong>Escalation:</strong> another character joins if the discussion goes badly.</li>
		<li><strong>Reflection:</strong> coach reviews the interaction.</li>
		<li><strong>Retry:</strong> learner repeats the difficult section with a different strategy.</li>
	</ol>
	<p>
		The learner is still inside one training experience, but each phase can have a different purpose,
		character cast and environment.
	</p>

	<h2>Retries are one of AI role-play's biggest advantages</h2>
	<p>
		In a classroom role-play, repeating the exact scenario three times can be awkward and expensive.
	</p>
	<p>
		With an AI simulation, retrying can be the default.
	</p>
	<p>
		A learner can make a poor choice, receive feedback and immediately try the situation again. The
		character can keep the same underlying motives while generating a fresh conversation rather than
		repeating a script word for word.
	</p>
	<p>
		This is where AI can complement human-led training particularly well: instructors can focus their
		time on higher-value coaching while learners get more repetitions between sessions.
	</p>

	<h2>Consistency matters for assessment</h2>
	<p>
		Generative AI introduces variation, which is useful for practice but potentially problematic for
		formal assessment.
	</p>
	<p>
		If two learners receive completely different levels of difficulty, comparing their scores becomes
		harder.
	</p>
	<p>
		For higher-stakes use, authors should control the parts that matter:
	</p>
	<ul>
		<li>the character's underlying objectives;</li>
		<li>facts that must remain true;</li>
		<li>difficulty level;</li>
		<li>the important objections or events;</li>
		<li>the scoring rubric; and</li>
		<li>conditions for success or escalation.</li>
	</ul>
	<p>
		The wording can remain generative while the structure stays comparable.
	</p>

	<h2>Training simulations should separate practice from certification</h2>
	<p>
		AI-generated scoring is useful for practice, coaching and formative assessment, but organisations
		should be cautious about using an opaque model-generated score as the sole basis for consequential
		employment decisions.
	</p>
	<p>
		A sensible pattern is:
	</p>
	<ul>
		<li><strong>practice:</strong> frequent AI role-play with automatic feedback;</li>
		<li><strong>progress tracking:</strong> trends across repeated attempts;</li>
		<li><strong>manager or trainer review:</strong> important sessions can be sampled or reviewed; and</li>
		<li><strong>formal assessment:</strong> use validated rubrics and appropriate human oversight where the stakes are high.</li>
	</ul>
	<p>
		That keeps AI in the role where it is particularly strong: providing scalable opportunities to
		practise.
	</p>

	<h2>What should an L&D team measure?</h2>
	<p>
		It is useful to distinguish three levels of measurement.
	</p>

	<h3>1. Experience metrics</h3>
	<ul>
		<li>Did the learner complete the scenario?</li>
		<li>How long did it take?</li>
		<li>Did they retry?</li>
		<li>Where did they stop?</li>
	</ul>

	<h3>2. Behaviour metrics</h3>
	<ul>
		<li>Did they ask the right questions?</li>
		<li>Did they acknowledge the other person's concern?</li>
		<li>Did they identify the underlying need?</li>
		<li>Did they reach the intended outcome?</li>
	</ul>

	<h3>3. Learning metrics</h3>
	<ul>
		<li>Does performance improve across attempts?</li>
		<li>Do learners transfer the behaviour to another scenario?</li>
		<li>Can managers observe improvement on the job?</li>
		<li>Does the intervention improve a meaningful business or learning outcome?</li>
	</ul>

	<p>
		The first two are easy to collect inside the experience. The third is what ultimately tells you
		whether the training works.
	</p>

	<h2>Example: difficult management conversation</h2>
	<p>
		Imagine a new manager needs to practise addressing repeated missed deadlines with a team member.
	</p>
	<p>
		The employee character begins defensive because they believe the deadlines were unrealistic. They
		also have a legitimate but undisclosed problem: work has been arriving from two different managers
		with conflicting priorities.
	</p>
	<p>
		The learner's task is not simply to “be empathetic.” They need to:
	</p>
	<ul>
		<li>state the performance issue clearly;</li>
		<li>ask enough questions to understand the cause;</li>
		<li>avoid making assumptions;</li>
		<li>discover the conflicting priorities;</li>
		<li>take appropriate ownership; and</li>
		<li>agree a concrete next step.</li>
	</ul>
	<p>
		The simulation might track <code>clarity</code>, <code>psychological_safety</code>,
		<code>root_cause_found</code> and <code>action_plan_quality</code>.
	</p>
	<p>
		If the learner is accusatory, psychological safety falls and the employee reveals less. If the
		learner asks good questions, the hidden cause becomes available. The learner's behaviour therefore
		changes the information they can access.
	</p>
	<p>
		That is a meaningful simulation mechanic, not merely a score at the end.
	</p>

	<h2>Example: customer complaint training</h2>
	<p>
		A customer arrives frustrated because a delivery is late. The obvious training goal is to resolve
		the complaint, but the scenario can be designed around more specific behaviours.
	</p>
	<p>
		The customer may care less about a refund than about receiving one component before an event
		tomorrow. If the learner asks good discovery questions, the experience reveals that need. If they
		immediately offer a generic discount, the customer remains dissatisfied.
	</p>
	<p>
		A training author can therefore measure the difference between
		<strong>appeasing the customer</strong> and <strong>understanding the customer</strong>.
	</p>

	<h2>Example: language learning</h2>
	<p>
		The same architecture works outside corporate soft-skills training.
	</p>
	<p>
		A learner practising Spanish can enter a café, order food from one character, ask another character
		for directions and then receive coaching afterwards.
	</p>
	<p>
		State can track whether key vocabulary was used, whether the learner understood a correction and
		which communication goals were completed. The environment and character roles make the language
		practice contextual rather than abstract.
	</p>

	<h2>Why avatars can matter beyond the LLM</h2>
	<p>
		The language model generates the conversation, but the visual character affects the experience.
	</p>
	<p>
		A learner can see who they are addressing. Different characters can have recognisable roles. A
		customer can visibly become calmer or more frustrated. A scene change can mark the transition from
		simulation to coaching.
	</p>
	<p>
		This does not mean every training experience needs photorealistic digital humans. In many cases a
		stylised character can be more practical, less uncanny and easier to reuse across a programme.
		See
		<a href="/photorealistic-vs-stylized-ai-avatars">Photorealistic vs Stylized AI Avatars</a>.
	</p>

	<h2>Training content should be reusable too</h2>
	<p>
		A training team rarely wants one isolated simulation. It wants a library.
	</p>
	<p>
		That is where reusable characters, sets and experience structure become valuable.
	</p>
	<p>
		A single coach can appear across an entire programme. A customer character can be reused with
		different problems. The same meeting-room set can host a management conversation, interview and
		negotiation. A successful scenario can be remixed into a new one instead of rebuilt from zero.
	</p>
	<p>
		Liforma's
		<a href="https://www.liforma.ai/create">creator model</a> is designed around this reuse: characters,
		costumes, hairstyles, sets and experiences are separate building blocks.
	</p>

	<h2>Subject-matter experts should be able to author the simulation</h2>
	<p>
		The person who understands a difficult customer conversation is often a trainer, sales leader or
		operations manager rather than a software engineer.
	</p>
	<p>
		That is why no-code authoring matters.
	</p>
	<p>
		The author should be able to define:
	</p>
	<ul>
		<li>the scenario;</li>
		<li>character roles and motives;</li>
		<li>the behaviours that matter;</li>
		<li>stats and state;</li>
		<li>scene transitions;</li>
		<li>success conditions; and</li>
		<li>feedback.</li>
	</ul>
	<p>
		The underlying STT, LLM, TTS, animation and session infrastructure should not have to be rebuilt for
		every training module.
	</p>
	<p>
		For the practical creation workflow, see
		<a href="/how-to-create-interactive-ai-role-play-without-coding">How to Create an Interactive AI
		Role-Play Without Coding</a>.
	</p>

	<h2>What does an AI avatar training platform need?</h2>
	<p>
		If you are evaluating platforms for role-play training, look beyond avatar quality.
	</p>
	<table>
		<thead>
			<tr>
				<th>Capability</th>
				<th>Why it matters</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Natural conversation</strong></td>
				<td>The learner should be able to respond in their own words.</td>
			</tr>
			<tr>
				<td><strong>Character control</strong></td>
				<td>The AI needs stable motives, knowledge and behaviour.</td>
			</tr>
			<tr>
				<td><strong>Explicit state</strong></td>
				<td>The learner's actions should affect what happens next.</td>
			</tr>
			<tr>
				<td><strong>Scoring / stats</strong></td>
				<td>Important behaviours need to be measurable.</td>
			</tr>
			<tr>
				<td><strong>Feedback</strong></td>
				<td>Learners need to understand what happened and how to improve.</td>
			</tr>
			<tr>
				<td><strong>Multiple characters</strong></td>
				<td>Many real scenarios involve more than one stakeholder.</td>
			</tr>
			<tr>
				<td><strong>Multiple scenes</strong></td>
				<td>Training can move through phases and consequences.</td>
			</tr>
			<tr>
				<td><strong>Repeatability</strong></td>
				<td>Learners need to retry without rebuilding the scenario.</td>
			</tr>
			<tr>
				<td><strong>Authoring by non-developers</strong></td>
				<td>Subject-matter experts should be able to change the training directly.</td>
			</tr>
			<tr>
				<td><strong>Analytics</strong></td>
				<td>Teams need to see usage and performance trends.</td>
			</tr>
		</tbody>
	</table>

	<h2>Cost matters more than it first appears</h2>
	<p>
		Training experiences can be much longer than ordinary support interactions.
	</p>
	<p>
		A ten-minute practice conversation may be repeated several times by every employee in a programme.
		At hundreds or thousands of learners, per-connected-minute pricing becomes significant.
	</p>
	<p>
		Liforma Live is currently priced at approximately
		<strong>$0.01 per generated speech minute for STT, intelligence, TTS and speech-to-animation</strong>,
		without a separate per-connected-minute session charge.
	</p>
	<p>
		That means silent thinking time, reading feedback or moving between scenes does not automatically
		create the same cost as generated character speech.
	</p>
	<p>
		For a detailed comparison of current avatar pricing models, see
		<a href="/how-much-do-interactive-ai-avatars-cost">How Much Do Interactive AI Avatars Cost?</a>.
	</p>

	<h2>AI role-play is strongest as a practice layer</h2>
	<p>
		The most useful way to think about AI avatar training is not as a complete replacement for trainers,
		managers or instructors.
	</p>
	<p>
		It is a scalable practice layer between learning and real-world performance.
	</p>
	<p>
		A learner can receive instruction, practise privately with an AI character, get immediate feedback,
		try again, discuss the result with a coach or manager and then apply the skill in the real world.
	</p>
	<p>
		That combination uses AI for what it can do unusually well: provide an interactive counterpart on
		demand and repeat the experience as many times as needed.
	</p>

	<h2>Liforma's model: train through experiences, not just conversations</h2>
	<p>
		Liforma treats the conversation as one part of a larger
		<a href="/what-is-an-avatar-experience">Avatar Experience</a>.
	</p>
	<p>
		A training author can combine reusable characters, different appearances, sets, multiple scenes,
		state, stats and feedback into one experience. The learner can interact naturally, while the
		experience still has structure and outcomes.
	</p>
	<p>
		That is the core idea:
		<strong>the character creates the conversation; the experience creates the training.</strong>
	</p>

	<div class="callout">
		<strong>Build a training scenario:</strong>
		<a href="https://www.liforma.ai/create">create or remix an experience on Liforma</a>, or read
		<a href="/how-to-create-interactive-ai-role-play-without-coding">How to Create an Interactive AI
		Role-Play Without Coding</a> for a practical authoring workflow.
	</div>
</BlogPostLayout>
