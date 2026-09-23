<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('rag-for-ai-avatars-small-fast-llms-domain-experts')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		<strong>Your AI avatar does not always need a frontier LLM to be an expert.</strong>
		In many interactive avatar experiences, the character only needs deep knowledge of a very narrow
		domain: the help pages for one product, a specific training manual, a company's policies, a single
		course module, or one topic such as simultaneous equations.
	</p>

	<p>
		In those situations, a small fast model with high-quality retrieval can often be more useful than a
		much larger model relying only on what it learned during training.
	</p>

	<div class="callout">
		<strong>The core idea:</strong> a frontier model has broad general knowledge. RAG gives the model the
		right narrow knowledge at the moment it needs it. For many avatar experiences, that is the more
		important capability.
	</div>

	<h2>What is RAG?</h2>
	<p>
		<strong>Retrieval-Augmented Generation (RAG)</strong> means retrieving relevant information from an
		external knowledge source and placing that information into the model's context before it generates
		an answer.
	</p>
	<p>
		Instead of asking the language model to answer entirely from its internal training, the system first
		asks:
	</p>
	<ol>
		<li>What information does this question require?</li>
		<li>Which parts of our knowledge base are most relevant?</li>
		<li>What small set of evidence should the model see?</li>
		<li>Given that evidence, what should the character say?</li>
	</ol>
	<p>
		OpenAI describes RAG as retrieving content to augment the prompt before generation, particularly
		when a model lacks contextual knowledge, has stale knowledge or needs access to proprietary
		information.
		<a href="https://developers.openai.com/api/docs/guides/optimizing-llm-accuracy">See OpenAI's
		accuracy-optimisation guide</a>.
	</p>

	<h2>Why this matters especially for AI avatars</h2>
	<p>
		Most intelligent avatars are not being asked to solve every problem in the world.
	</p>
	<p>
		They usually have a job.
	</p>
	<p>
		A website assistant may need to know:
	</p>
	<ul>
		<li>the company's products;</li>
		<li>the current pricing plans;</li>
		<li>the help centre;</li>
		<li>the returns policy; and</li>
		<li>the page the visitor is currently viewing.</li>
	</ul>
	<p>
		A maths tutor may need to be excellent at:
	</p>
	<ul>
		<li>simultaneous equations;</li>
		<li>the exact teaching method used by the course;</li>
		<li>common learner mistakes;</li>
		<li>worked examples; and</li>
		<li>the curriculum level being taught.</li>
	</ul>
	<p>
		A training character may only need to know:
	</p>
	<ul>
		<li>one sales methodology;</li>
		<li>a company's product catalogue;</li>
		<li>the objection-handling playbook;</li>
		<li>the scenario-specific facts; and</li>
		<li>the learner's current state in the exercise.</li>
	</ul>
	<p>
		A frontier LLM may know a little about all of those things. That is not the same as knowing the exact
		material your experience needs.
	</p>

	<h2>Frontier models can still be weak on your narrow domain</h2>
	<p>
		Large frontier models are trained to be broad generalists. Their strength is that they can handle an
		enormous range of tasks and domains.
	</p>
	<p>
		But the knowledge inside the model may be:
	</p>
	<ul>
		<li>incomplete;</li>
		<li>out of date;</li>
		<li>too generic;</li>
		<li>different from your organisation's own rules;</li>
		<li>different from the teaching method you want the avatar to follow; or</li>
		<li>simply absent because the source material is private.</li>
	</ul>
	<p>
		For a support assistant, knowing general facts about SaaS billing is less useful than knowing the
		exact cancellation policy on your website today.
	</p>
	<p>
		For a tutor, knowing several ways to solve simultaneous equations can actually be less useful if the
		lesson requires the character to follow one particular method consistently.
	</p>

	<h2>A small model with the right context can beat a larger model with the wrong context</h2>
	<p>
		This is the key architectural shift.
	</p>
	<p>
		Suppose Model A is a frontier model with broad world knowledge but no access to your current product
		documentation.
	</p>
	<p>
		Model B is much smaller, but every time the visitor asks a question it receives the three most
		relevant passages from your help centre.
	</p>
	<p>
		For the question:
	</p>
	<p>
		<em>“Can I transfer unused credits to another workspace?”</em>
	</p>
	<p>
		Model size may be much less important than whether the model receives the paragraph containing your
		actual workspace-credit policy.
	</p>
	<p>
		Recent research supports this broader direction, while also showing that implementation quality
		matters. The Alan Turing Institute reported that a 3B model combined with retrieval and lightweight
		reasoning techniques achieved near-frontier performance on a constrained real-world health task.
		Other 2026 work has found small models competitive with larger models in specialised industrial RAG
		settings.
		<a href="https://www.turing.ac.uk/blog/why-we-still-need-small-language-models-even-age-frontier-ai">See
		the Turing Institute work on small language models</a>.
	</p>
	<p>
		That does <strong>not</strong> mean RAG magically turns every small model into a frontier model. Small
		models can still struggle to interpret difficult evidence or perform complex reasoning. The point is
		more specific: for narrow knowledge-grounded tasks, supplying the right evidence can reduce how much
		general model capability you need.
	</p>

	<h2>Why small models are attractive for realtime avatars</h2>
	<p>
		Interactive characters are unusually sensitive to latency.
	</p>
	<p>
		A user finishes speaking and waits. During that pause, the system may need to:
	</p>
	<ol>
		<li>finish speech recognition;</li>
		<li>understand the request;</li>
		<li>retrieve relevant knowledge;</li>
		<li>generate the answer;</li>
		<li>start text-to-speech; and</li>
		<li>begin avatar animation.</li>
	</ol>
	<p>
		Every extra few hundred milliseconds is noticeable.
	</p>
	<p>
		A smaller model can offer:
	</p>
	<ul>
		<li>lower inference latency;</li>
		<li>lower cost per turn;</li>
		<li>higher throughput;</li>
		<li>less GPU memory;</li>
		<li>more predictable capacity; and</li>
		<li>the option to run on cheaper infrastructure.</li>
	</ul>
	<p>
		If RAG supplies the domain knowledge, the small model can spend its capacity on the actual
		conversation rather than needing to contain an enormous amount of world knowledge in its weights.
	</p>

	<h2>RAG changes the economics of expertise</h2>
	<p>
		Without retrieval, developers often respond to quality problems by selecting a larger model.
	</p>
	<p>
		That can work, but it may also mean paying a premium on every turn forever.
	</p>
	<p>
		RAG creates another option:
	</p>
	<p>
		<strong>make the context better instead of making the model bigger.</strong>
	</p>
	<p>
		For an experience that answers thousands or millions of narrow-domain questions, that distinction
		can be economically significant.
	</p>

	<h2>Example: a website support avatar</h2>
	<p>
		Imagine a website with 300 help pages.
	</p>
	<p>
		A visitor opens a Liforma website assistant and asks:
	</p>
	<p>
		<em>“Why can't I embed this experience on my client's domain?”</em>
	</p>
	<p>
		The avatar does not need a model that has read most of the public internet.
	</p>
	<p>
		It needs the current documentation describing publication settings, allowed origins and embedding
		rules.
	</p>
	<p>
		A good RAG pipeline can retrieve those passages and put them in front of a fast model. The model's
		job becomes much simpler:
	</p>
	<p>
		<strong>understand the question, read the relevant evidence, explain it clearly.</strong>
	</p>
	<p>
		That can be both faster and more reliable than hoping a larger model remembers a product whose
		behaviour may have changed last week.
	</p>

	<h2>Example: a simultaneous-equations tutor</h2>
	<p>
		Now consider an AI maths tutor.
	</p>
	<p>
		The course may require a particular progression:
	</p>
	<ol>
		<li>recognise the two equations;</li>
		<li>choose elimination or substitution;</li>
		<li>show the transformation step explicitly;</li>
		<li>identify the common learner mistake; and</li>
		<li>ask the learner to complete the next step rather than simply revealing the answer.</li>
	</ol>
	<p>
		A frontier model probably knows simultaneous equations. But it may not consistently teach them in
		the exact style your course requires.
	</p>
	<p>
		A knowledge pack can contain your worked examples, explanation style, error patterns and pedagogy.
		Retrieval then gives the model the relevant teaching material for the current learner question.
	</p>
	<p>
		The expertise comes from the combination of the model and the curated knowledge, not from model size
		alone.
	</p>

	<h2>Liforma Knowledge Packs</h2>
	<p>
		Liforma makes this pattern a first-class part of creating intelligent characters.
	</p>
	<p>
		A <strong>Knowledge Pack</strong> is a reusable body of domain knowledge that can be attached to an
		avatar experience. The simplest way to create one is to upload the documents that define what the
		character should know.
	</p>
	<p>
		That might be:
	</p>
	<ul>
		<li>product documentation;</li>
		<li>help-centre articles;</li>
		<li>training manuals;</li>
		<li>course material;</li>
		<li>policies and procedures;</li>
		<li>technical reference documents;</li>
		<li>lesson notes and worked examples; or</li>
		<li>other curated source material.</li>
	</ul>
	<p>
		Once the pack is attached, Liforma can retrieve the relevant material during a conversation and make
		it available to the character's intelligence layer.
	</p>
	<p>
		The creator does not need to design a vector database, choose chunk sizes, build a retrieval service
		or manually assemble prompt context for every turn.
	</p>

	<h2>Knowledge Packs are reusable</h2>
	<p>
		The knowledge should not have to belong to one character forever.
	</p>
	<p>
		A company support Knowledge Pack might be shared by several characters:
	</p>
	<ul>
		<li>a sales assistant on the website;</li>
		<li>a support agent inside the product;</li>
		<li>a training customer used to teach staff; and</li>
		<li>a coach that reviews whether staff gave accurate answers.</li>
	</ul>
	<p>
		Likewise, one maths Knowledge Pack can support a tutor in several different lessons or visual
		environments.
	</p>
	<p>
		This matches Liforma's wider philosophy: characters, appearances, sets, knowledge and experiences
		should be reusable building blocks rather than hard-coded into one application.
	</p>

	<h2>Why not just paste all the documents into the system prompt?</h2>
	<p>
		For a tiny knowledge base, you sometimes can.
	</p>
	<p>
		But it stops working well as the source material grows.
	</p>
	<p>
		Sending everything on every turn means:
	</p>
	<ul>
		<li>more input tokens;</li>
		<li>higher latency;</li>
		<li>higher cost;</li>
		<li>more irrelevant information competing for the model's attention; and</li>
		<li>a greater chance that the important passage is buried inside noise.</li>
	</ul>
	<p>
		RAG is a filtering mechanism. The goal is not to give the model more context. It is to give it the
		<strong>right context</strong>.
	</p>

	<h2>Good RAG is much harder than “use a vector database”</h2>
	<p>
		This is where many home-grown implementations underestimate the problem.
	</p>
	<p>
		A naive RAG prototype can be built quickly:
	</p>
	<ol>
		<li>split documents into chunks;</li>
		<li>embed them;</li>
		<li>store the vectors;</li>
		<li>embed the user's question;</li>
		<li>retrieve the nearest chunks; and</li>
		<li>paste them into the prompt.</li>
	</ol>
	<p>
		That can produce an impressive demo.
	</p>
	<p>
		It is not the same as building a fast, reliable production retrieval system.
	</p>

	<h2>Production RAG has two separate quality problems</h2>
	<p>
		A RAG answer can fail in two fundamentally different ways.
	</p>
	<ol>
		<li>
			<strong>Retrieval failure:</strong> the system did not find the evidence the model needed.
		</li>
		<li>
			<strong>Generation failure:</strong> the correct evidence was retrieved, but the model misunderstood
			or ignored it.
		</li>
	</ol>
	<p>
		OpenAI's RAG guidance makes this distinction explicitly. Too little relevant context leaves the
		model unable to answer; too much irrelevant context can drown out the useful information and
		increase hallucination.
	</p>

	<h2>What actually has to be optimised?</h2>
	<p>
		A serious RAG system may need to make good decisions about:
	</p>
	<ul>
		<li><strong>document ingestion</strong> — extracting useful content from different file formats;</li>
		<li><strong>chunking</strong> — where one retrievable unit begins and ends;</li>
		<li><strong>metadata</strong> — document type, section, date, permissions and source;</li>
		<li><strong>embeddings</strong> — choosing representations suitable for the domain;</li>
		<li><strong>semantic retrieval</strong> — finding conceptually relevant passages;</li>
		<li><strong>keyword or hybrid retrieval</strong> — handling exact product names, identifiers and rare terms;</li>
		<li><strong>query rewriting</strong> — turning a conversational utterance into a better search query;</li>
		<li><strong>reranking</strong> — deciding which retrieved candidates deserve prompt space;</li>
		<li><strong>context packing</strong> — fitting the useful evidence into a compact model context;</li>
		<li><strong>source freshness</strong> — ensuring old documents do not override current ones;</li>
		<li><strong>permissions</strong> — ensuring a character only retrieves information the user is allowed to see;</li>
		<li><strong>caching</strong> — avoiding unnecessary repeated work;</li>
		<li><strong>latency budgets</strong> — making retrieval fast enough for spoken conversation;</li>
		<li><strong>evaluation</strong> — testing retrieval separately from answer quality; and</li>
		<li><strong>fallback behaviour</strong> — knowing when there is not enough evidence to answer confidently.</li>
	</ul>
	<p>
		None of those problems is conceptually exotic. Together, they represent a substantial engineering
		project.
	</p>

	<h2>Realtime RAG is harder than ordinary document Q&amp;A</h2>
	<p>
		Latency matters much more when the answer will be spoken by a character.
	</p>
	<p>
		A user waiting three seconds for a document chatbot may tolerate the pause. A character standing in
		front of them silently for three seconds can feel broken.
	</p>
	<p>
		A realtime avatar RAG pipeline therefore has to optimise both:
	</p>
	<ul>
		<li><strong>answer quality</strong> — retrieve the right evidence; and</li>
		<li><strong>time to first speech</strong> — get enough evidence quickly enough that the character can start responding.</li>
	</ul>
	<p>
		That can mean smaller models, smaller context windows, fast retrieval, aggressive caching and
		streaming the beginning of an answer before the entire response is complete.
	</p>

	<h2>Why a managed avatar platform can outperform a hand-built stack</h2>
	<p>
		It is easy to build a naive conversational avatar:
	</p>
	<p>
		<strong>microphone → STT → LLM → TTS → avatar.</strong>
	</p>
	<p>
		The difficult part begins when you want the experience to be fast, knowledgeable, stateful,
		observable and inexpensive in production.
	</p>
	<p>
		A developer building RAG themselves now has another distributed subsystem to own:
	</p>
	<ul>
		<li>document processing;</li>
		<li>retrieval infrastructure;</li>
		<li>embedding costs;</li>
		<li>retrieval latency;</li>
		<li>reranking;</li>
		<li>prompt assembly;</li>
		<li>model selection;</li>
		<li>evaluation;</li>
		<li>monitoring; and</li>
		<li>continuous tuning as the knowledge base changes.</li>
	</ul>
	<p>
		A competent team can absolutely build this.
	</p>
	<p>
		But “we can build it” and “we should build it” are different questions.
	</p>

	<h2>The surprising outcome: building it yourself can be slower and more expensive</h2>
	<p>
		Home-grown RAG is often justified as a way to save money or retain control. Sometimes that is the
		right decision.
	</p>
	<p>
		But an unoptimised implementation can easily erase those savings.
	</p>
	<p>
		For example:
	</p>
	<ul>
		<li>poor retrieval may force you to compensate with a much larger LLM;</li>
		<li>oversized context can increase both latency and token cost;</li>
		<li>too many retrieval and reranking stages add round trips;</li>
		<li>inefficient ingestion can duplicate vectors and storage;</li>
		<li>lack of caching repeats expensive work; and</li>
		<li>weak evaluation can mean months of tuning without knowing which component is failing.</li>
	</ul>
	<p>
		A team can spend months building a sophisticated custom pipeline and still end up with something
		slower or more expensive than a managed system whose retrieval, model selection and realtime path
		have already been optimised together.
	</p>
	<p>
		That is not because RAG is impossible to build. It is because production optimisation is where much
		of the work lives.
	</p>

	<h2>Liforma's job is to absorb that complexity</h2>
	<p>
		Liforma's philosophy is that the creator should think in terms of:
	</p>
	<ul>
		<li>what the character should know;</li>
		<li>what sources define that knowledge;</li>
		<li>how the character should behave;</li>
		<li>what state matters in the experience; and</li>
		<li>what the user is trying to accomplish.</li>
	</ul>
	<p>
		The creator should not need to become an expert in retrieval architecture just to make a support
		character knowledgeable about 50 help pages.
	</p>
	<p>
		A Knowledge Pack makes the high-level workflow deliberately simple:
	</p>
	<ol>
		<li>upload or connect the relevant source material;</li>
		<li>attach the Knowledge Pack to the experience;</li>
		<li>let Liforma retrieve the relevant material when the character needs it.</li>
	</ol>
	<p>
		The underlying retrieval system can evolve without every creator rebuilding their experience.
	</p>

	<h2>RAG and state solve different problems</h2>
	<p>
		This distinction is important.
	</p>
	<p>
		<strong>RAG answers: “What external knowledge is relevant to this question?”</strong>
	</p>
	<p>
		<strong>State answers: “What is true in this experience right now?”</strong>
	</p>
	<p>
		A training character might use RAG to retrieve the company's sales methodology while state tracks
		whether the learner has already discovered the customer's budget.
	</p>
	<p>
		A website assistant might retrieve a returns policy while state records which product the visitor is
		currently considering.
	</p>
	<p>
		Combining the two produces a much stronger character than simply giving an LLM a large prompt.
		See <a href="/ai-character-memory-vs-state">AI Character Memory vs State</a>.
	</p>

	<h2>RAG is also different from long-term memory</h2>
	<p>
		A Knowledge Pack contains domain knowledge that many sessions or users may need.
	</p>
	<p>
		Long-term memory stores relevant information about a particular user, relationship or previous
		interaction.
	</p>
	<p>
		For example:
	</p>
	<ul>
		<li><strong>Knowledge Pack:</strong> “The Business plan includes SSO.”</li>
		<li><strong>Memory:</strong> “This visitor told us last week that SSO is a requirement.”</li>
		<li><strong>State:</strong> “The visitor is currently comparing Business and Enterprise.”</li>
	</ul>
	<p>
		A sophisticated character may use all three.
	</p>

	<h2>Should you always use a small model with RAG?</h2>
	<p>
		No.
	</p>
	<p>
		RAG supplies knowledge. It does not automatically supply reasoning ability.
	</p>
	<p>
		A larger model may still be preferable when the experience requires:
	</p>
	<ul>
		<li>complex multi-step reasoning;</li>
		<li>ambiguous planning;</li>
		<li>difficult tool orchestration;</li>
		<li>deep creative generation;</li>
		<li>subtle emotional understanding; or</li>
		<li>robust synthesis across many conflicting sources.</li>
	</ul>
	<p>
		The right question is not “small model or frontier model?”
	</p>
	<p>
		It is:
	</p>
	<p>
		<strong>“What is the smallest, fastest model that reliably performs this task when given the right
		knowledge?”</strong>
	</p>

	<h2>You can still bring your own frontier model</h2>
	<p>
		Liforma does not force one answer to the model-selection question.
	</p>
	<p>
		If a small managed model plus a Knowledge Pack is sufficient, Liforma Live gives you the simplest
		and lowest-friction path.
	</p>
	<p>
		If your application needs a particular frontier LLM, you can use
		<a href="/three-ways-to-build-with-liforma">Liforma Relay</a> and keep your own intelligence layer
		while still using Liforma's STT, TTS and avatar animation.
	</p>
	<p>
		If you already use a native speech-to-speech stack such as OpenAI Realtime, Gemini Live or
		ElevenLabs ElevenAgents, Liforma Motion can remain only the visual layer.
	</p>
	<p>
		The retrieval architecture and the visual avatar should not force you into one intelligence
		provider forever.
	</p>

	<h2>The best domain expert may be a small model with excellent evidence</h2>
	<p>
		For years, improving an AI application's answers usually meant choosing a larger model.
	</p>
	<p>
		RAG changes that equation.
	</p>
	<p>
		If an intelligent character has one narrow job, the most important question may not be how many
		parameters its language model has.
	</p>
	<p>
		It may be:
	</p>
	<p>
		<strong>Does the character have the right information, at the right moment, in a form the model can
		use quickly?</strong>
	</p>
	<p>
		When the answer is yes, a small fast model can become an excellent domain expert — and the resulting
		avatar can respond faster, serve more users and cost much less.
	</p>
	<p>
		That is the reason we think retrieval belongs inside the avatar platform rather than being another
		infrastructure project every developer has to build for themselves.
	</p>

	<div class="callout">
		<strong>Related:</strong>
		read <a href="/ai-character-memory-vs-state">AI Character Memory vs State</a>,
		<a href="/three-ways-to-build-with-liforma">Three Ways to Build With Liforma</a>, or
		<a href="/how-to-add-an-ai-character-to-your-website">How to Add an AI Character to Your Website</a>.
	</div>
</BlogPostLayout>
