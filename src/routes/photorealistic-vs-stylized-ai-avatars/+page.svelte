<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('photorealistic-vs-stylized-ai-avatars')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		<strong>More realistic does not automatically mean better.</strong> Photorealistic AI avatars are
		valuable when the goal is to reproduce a real person, create a digital twin or make an interaction
		feel like a video call. But for training, education, games, role-play, fictional characters and many
		long-form interactive experiences, a stylised character can be the stronger design choice.
	</p>

	<p>
		The important question is not “How close can this avatar get to a real human?” It is
		<strong>“What visual style best supports the experience we are trying to create?”</strong>
	</p>

	<div class="callout">
		<strong>Short answer:</strong> choose photorealism when human likeness is itself part of the product.
		Choose stylisation when character identity, expressiveness, reuse, creative freedom or world-building
		matter more than reproducing a real person.
	</div>

	<h2>Photorealism is not a quality scale</h2>
	<p>
		It is tempting to think of avatar technology as a line from “bad cartoon” to “perfect human,” with
		photorealism at the top. That is the wrong mental model.
	</p>
	<p>
		Photorealism and stylisation are different visual strategies. Each creates different expectations
		for motion, expression, identity and behaviour.
	</p>
	<p>
		A Pixar character is not an unsuccessful attempt to make a photograph. A game character is not
		inferior because nobody mistakes it for a webcam feed. Visual style is part of the design language.
		The same principle applies to interactive AI characters.
	</p>

	<h2>The real distinction: visual fidelity vs behavioural fidelity</h2>
	<p>
		There are at least two kinds of realism in an interactive avatar:
	</p>
	<ul>
		<li><strong>Visual fidelity</strong> — how closely the character resembles a real human in shape, skin, hair, eyes, lighting and rendering.</li>
		<li><strong>Behavioural fidelity</strong> — how naturally the character speaks, pauses, looks, listens, moves, reacts and expresses emotion.</li>
	</ul>
	<p>
		These two things do not always improve together.
	</p>
	<p>
		A face can look almost photographic in a still image but feel wrong as soon as it speaks. Tiny timing
		errors in lip movement, rigid eye behaviour, an expression that arrives half a second too late or
		unnatural stillness become highly visible because the viewer expects the behaviour of a real human.
	</p>
	<p>
		By contrast, a deliberately stylised character tells the viewer from the outset that they are
		interacting with an artificial character. The animation still needs to be good, but it does not have
		to imitate every microscopic feature of human movement to remain coherent.
	</p>
	<p>
		A 2024 study of social VR found that increasing human resemblance did not significantly improve
		enjoyment or perceived realism in the interaction, while animation realism played an important role.
		That does not prove stylisation is always better, but it reinforces the idea that
		<strong>how a character behaves can matter at least as much as how photographic it looks</strong>.
		See
		<a href="https://www.sciencedirect.com/science/article/pii/S2949882124000422">the study in
		Computers in Human Behavior: Artificial Humans</a>.
	</p>

	<h2>The uncanny valley is partly an expectation problem</h2>
	<p>
		The “uncanny valley” describes the discomfort people can feel when something looks very human but
		not quite human enough. In interactive avatars, the problem can extend beyond appearance.
	</p>
	<p>
		The closer a character gets to a real human, the more precisely people judge its eyes, mouth,
		blinks, facial timing, breathing, posture and emotional responses. A stylised character has a wider
		range of behaviour that still feels consistent with its appearance.
	</p>
	<p>
		Recent research illustrates that the relationship is not simply “more realism equals more presence.”
		A 2025 study involving 40 participants compared stylised, semi-realistic and realistic avatars in a
		collaborative VR task. In that study, stylised characters produced greater co-presence than the
		realistic version and were perceived as less eerie and more trustworthy. The authors also caution
		that the result may depend on the playful context of the task.
		<a href="https://link.springer.com/article/10.1007/s10055-025-01238-6">Read the study in Virtual
		Reality</a>.
	</p>
	<p>
		That caveat matters. There is no universal winning style. The lesson is that realism should be
		chosen for the application, not treated as a default objective.
	</p>

	<h2>When photorealistic AI avatars are the right choice</h2>
	<p>
		There are situations where human likeness is central to the value of the product.
	</p>

	<h3>Digital twins of real people</h3>
	<p>
		If the objective is to reproduce a specific executive, creator, teacher or spokesperson, a stylised
		version may defeat the purpose. The likeness itself is part of the product.
	</p>

	<h3>Virtual presenters</h3>
	<p>
		A photorealistic presenter can work extremely well for generated video, corporate communications,
		product explainers and content where the desired visual language is deliberately close to recorded
		video.
	</p>

	<h3>Telepresence-style interfaces</h3>
	<p>
		If the product is intended to feel like a remote conversation with a human representative, a highly
		realistic avatar can reinforce that metaphor.
	</p>

	<h3>Brand or celebrity likeness</h3>
	<p>
		Where the identity of a real person is commercially or narratively important, preserving facial
		likeness may outweigh the flexibility of a stylised design.
	</p>

	<p>
		In all of these cases, photorealism is doing a specific job. The goal is not simply “better
		graphics”; it is <strong>recognition and human likeness</strong>.
	</p>

	<h2>When stylised AI avatars can be better</h2>
	<p>
		The balance changes when the character is not pretending to be a particular real person.
	</p>

	<h3>Training and role-play</h3>
	<p>
		A difficult customer, interviewer, patient, manager or sales prospect does not need to look
		indistinguishable from a webcam feed to create a meaningful role-play.
	</p>
	<p>
		In many training scenarios the important things are the character's behaviour, tone, objectives,
		emotional state and reaction to the learner. A distinctive stylised character can make the scenario
		memorable while keeping attention on the interaction rather than on whether the skin rendering is
		perfect.
	</p>

	<h3>Education and coaching</h3>
	<p>
		A language partner, tutor or coach benefits from warmth, clarity and a recognisable personality.
		There is no inherent reason that personality has to be expressed through a photorealistic human.
	</p>
	<p>
		Stylisation also gives creators freedom to design characters for different subjects, ages, worlds and
		teaching styles without implying that the character is a real person on a video call.
	</p>

	<h3>Games and interactive stories</h3>
	<p>
		Here the argument is even stronger. Fictional worlds already have an art direction. A photorealistic
		video avatar dropped into a stylised game can feel less coherent than a deliberately designed
		character that belongs in that world.
	</p>
	<p>
		Fantasy characters, historical reinterpretations, science-fiction characters and non-human
		characters all benefit from a medium that is not constrained by present-day human appearance.
	</p>

	<h3>Multi-character experiences</h3>
	<p>
		An experience with several AI characters needs each one to be visually distinct and immediately
		readable. Stylisation gives the creator more freedom to exaggerate silhouette, costume, hair,
		colour, age and other visual cues while keeping the cast coherent.
	</p>

	<h3>Consumer and creator experiences</h3>
	<p>
		If ordinary creators are going to make thousands of characters, they need flexibility more than
		perfect digital-human capture. Reusable clothes, hairstyles, sets and character designs are easier
		to think of as a creative system when the product does not assume every character must begin with a
		real human scan.
	</p>

	<h2>Stylisation gives creators more room to design identity</h2>
	<p>
		Photorealism tends to ask: <strong>which human are we reproducing?</strong>
	</p>
	<p>
		Stylisation can ask a broader question: <strong>who should this character be?</strong>
	</p>
	<p>
		That shift matters. A creator can design a character around role, personality and story rather than
		starting from a real person's likeness. Clothing, hairstyle, body shape, facial proportions and
		visual style become part of character design rather than constraints imposed by a source video.
	</p>
	<p>
		On Liforma, this is why characters, costumes and sets are separate reusable building blocks. A
		character can keep their identity while changing appearance for a new scenario. The same costume or
		set can also be reused elsewhere.
		<a href="https://www.liforma.ai/create">See how Liforma's reusable creator model works</a>.
	</p>

	<h2>A character should fit its world</h2>
	<p>
		Realism is also relational. A character does not exist in isolation; it exists inside an
		environment.
	</p>
	<p>
		A highly realistic face can feel out of place in a stylised 3D world. Likewise, a cartoon character
		may be inappropriate in an experience whose whole purpose is to reproduce a board member delivering
		a formal message.
	</p>
	<p>
		Research into mixed groups of realistic and stylised avatars suggests that visual congruence can
		matter to the overall experience. A 2024 VR study found that more realistic virtual others were
		perceived as more human-like and could increase aspects of co-presence, while also showing that the
		interaction between self-avatar and surrounding avatar styles is complex.
		<a href="https://www.frontiersin.org/journals/virtual-reality/articles/10.3389/frvir.2024.1417066/full">Read the study in Frontiers in Virtual Reality</a>.
	</p>
	<p>
		For creators, the practical lesson is simple: <strong>choose a coherent art direction for the whole
		experience</strong>, not the most realistic face you can generate in isolation.
	</p>

	<h2>Stylised characters can create more forgiving animation</h2>
	<p>
		This does not mean stylised characters can be badly animated. Eye contact, turn-taking, lip
		synchronisation and expression still matter enormously.
	</p>
	<p>
		But stylisation gives animation a different target. Expressions can be slightly exaggerated.
		Movement can be simplified. The face can communicate emotion without reproducing every muscle
		movement of a real human.
	</p>
	<p>
		That freedom can be especially useful for real-time AI, where animation must be generated quickly
		and continuously rather than polished frame by frame by an animator.
	</p>

	<h2>Realistic avatars can raise expectations faster than they raise quality</h2>
	<p>
		A useful way to think about the problem is as an expectation curve.
	</p>
	<p>
		Every improvement in visual realism tells the user to expect more human-like behaviour. Better skin
		invites closer scrutiny of the eyes. Better eyes invite closer scrutiny of gaze. Better lip
		synchronisation makes an unnatural pause more obvious. Eventually, the product is competing not with
		other avatars but with the user's lifelong familiarity with real people.
	</p>
	<p>
		A 2025 longitudinal study of colleagues using realistic and cartoon-faced avatars in mixed-reality
		meetings found that realistic avatars could create higher expectations and more errors in reading
		mood, while cartoon avatars could become more comfortable and easier to identify with over time.
		The study was small, with 14 participants, so it should not be treated as a universal rule, but it
		illustrates the expectation problem well.
		<a href="https://www.sciencedirect.com/science/article/pii/S1071581925001892">Read the study in the
		International Journal of Human-Computer Studies</a>.
	</p>

	<h2>Stylisation can make the artificial nature of the character clearer</h2>
	<p>
		There is also a product-design benefit to being visibly artificial.
	</p>
	<p>
		A stylised AI character is unlikely to be mistaken for a real employee on a webcam. That can make the
		interaction's nature obvious before any disclosure text is read.
	</p>
	<p>
		This does not remove the need for clear disclosure where appropriate, and it does not solve every
		identity or consent issue. But it reduces one particular ambiguity: the interface is presenting a
		character, not attempting to pass generated video off as an ordinary live human.
	</p>

	<h2>Browser-native rendering changes the economics too</h2>
	<p>
		The visual choice can affect infrastructure architecture.
	</p>
	<p>
		Many photorealistic real-time avatars are rendered as server-generated video. That can require
		continuous GPU rendering and a low-latency media stream for each active user.
	</p>
	<p>
		A browser-native stylised character can use a different model. The server can generate the speech
		and animation parameters while the browser performs much of the visual rendering locally.
	</p>
	<p>
		Liforma uses that approach as part of its effort to make interactive characters inexpensive enough
		for long-form experiences. It complements the request-based architecture described in
		<a href="/does-conversational-ai-need-webrtc">Does Conversational AI Really Need WebRTC?</a>.
	</p>
	<p>
		This is not an inherent property of every stylised avatar or every photorealistic avatar. It is an
		architectural opportunity that becomes much easier when the product does not require a continuously
		server-rendered photorealistic video stream.
	</p>

	<h2>Photorealistic vs stylised AI avatars: a practical comparison</h2>
	<table>
		<thead>
			<tr>
				<th>Consideration</th>
				<th>Photorealistic</th>
				<th>Stylised</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Digital twin of a real person</td>
				<td><strong>Excellent fit</strong></td>
				<td>Usually not the goal</td>
			</tr>
			<tr>
				<td>Video-presenter metaphor</td>
				<td><strong>Excellent fit</strong></td>
				<td>Depends on art direction</td>
			</tr>
			<tr>
				<td>Fictional characters</td>
				<td>Possible</td>
				<td><strong>Excellent fit</strong></td>
			</tr>
			<tr>
				<td>Games / interactive stories</td>
				<td>Depends on world style</td>
				<td><strong>Often a natural fit</strong></td>
			</tr>
			<tr>
				<td>Training role-play</td>
				<td>Useful where realism is important</td>
				<td><strong>Often sufficient or preferable</strong></td>
			</tr>
			<tr>
				<td>Creative character design</td>
				<td>More constrained by human likeness</td>
				<td><strong>High freedom</strong></td>
			</tr>
			<tr>
				<td>Tolerance for simplified animation</td>
				<td>Lower</td>
				<td><strong>Higher</strong></td>
			</tr>
			<tr>
				<td>Risk of uncanny mismatch</td>
				<td>Higher as near-human expectations rise</td>
				<td>Typically lower</td>
			</tr>
			<tr>
				<td>Can clearly signal “this is a character”</td>
				<td>Less inherently obvious</td>
				<td><strong>Yes</strong></td>
			</tr>
		</tbody>
	</table>

	<h2>How should you choose?</h2>
	<p>
		Instead of asking which style is more advanced, ask what job the character needs to do.
	</p>
	<ul>
		<li><strong>Are you reproducing a specific real person?</strong> Start with photorealism.</li>
		<li><strong>Is the experience supposed to resemble a video call?</strong> Photorealism may support the metaphor.</li>
		<li><strong>Is the character fictional?</strong> Stylisation gives you much more design freedom.</li>
		<li><strong>Will there be many characters, costumes or scenes?</strong> Think about visual coherence and reuse.</li>
		<li><strong>Is emotional behaviour more important than likeness?</strong> Prioritise animation and interaction quality.</li>
		<li><strong>Will the character live inside a game-like or stylised 3D world?</strong> Match the character to the world.</li>
		<li><strong>Do you need consumer-scale economics?</strong> Consider whether browser-native rendering can replace continuous server-rendered video.</li>
	</ul>

	<h2>Liforma's view: characters, not digital replicas</h2>
	<p>
		Liforma supports a range of appearances, but our product philosophy is deliberately centred on
		<strong>characters</strong> rather than assuming every avatar should become an indistinguishable
		digital replica of a human.
	</p>
	<p>
		That fits the experiences we want creators to build: a difficult customer for a training scenario,
		a language tutor in a café, several characters in an interactive story, a fictional companion, a
		museum guide, a coach, a receptionist or an inhabitant of a world that does not exist.
	</p>
	<p>
		The character can be expressive, recognisable and emotionally engaging without pretending to be a
		live human on a webcam.
	</p>
	<p>
		And because the character is one reusable component of a wider
		<a href="/what-is-an-avatar-experience">Avatar Experience</a>, creators can focus on the combination
		of identity, behaviour, costumes, sets, scenes and outcomes rather than treating maximum facial
		realism as the only measure of progress.
	</p>

	<h2>The goal is believable, not necessarily photorealistic</h2>
	<p>
		For interactive AI, “believable” is a more useful goal than “photorealistic.”
	</p>
	<p>
		A believable character behaves consistently with its visual style. It listens at the right time. Its
		voice fits its personality. Its expressions communicate the right emotion. It remembers what
		happened. It belongs in the environment. And it reacts in a way that makes the user care about what
		happens next.
	</p>
	<p>
		Sometimes the best way to achieve that is a highly realistic digital human. Sometimes it is a
		stylised character that nobody would confuse with a real person.
	</p>
	<p>
		The mistake is assuming those are different points on the same quality scale.
	</p>

	<div class="callout">
		<strong>Related:</strong>
		read <a href="/what-is-an-avatar-experience">What Is an Avatar Experience?</a>,
		<a href="/ai-avatar-vs-ai-character-vs-visual-agent-vs-chatbot">AI Avatar vs AI Character vs Visual Agent vs Chatbot</a>,
		or <a href="https://www.liforma.ai/create">see how Liforma characters, costumes and sets are created and reused</a>.
	</div>
</BlogPostLayout>
