<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getResourcePost } from '$lib/blog';

	const post = getResourcePost('d-id-visual-agents-review')!;
</script>

<BlogPostLayout {post} pathname="/resources/{post.slug}">
	<p>
		<strong>D-ID Visual Agents combine a real-time avatar, conversational AI and a knowledge base in a
		product that can be created with very little code.</strong> D-ID is broader than its earlier
		talking-head video roots: its current agent platform includes real-time WebRTC/LiveKit streaming,
		RAG, configurable LLMs, webhooks and website embedding.
	</p>

	<div class="callout">
		<strong>Disclosure:</strong> Liforma competes with D-ID in interactive-avatar and visual-agent use
		cases. This review is based on D-ID's current public documentation and pricing information checked on
		26 September 2026. We have not yet published controlled visual-quality or latency benchmarks.
	</div>

	<h2>What are D-ID Visual Agents?</h2>
	<p>
		D-ID describes Visual Agents as autonomous, interactive AI assistants for face-to-face video
		conversations. A creator chooses an avatar and voice, defines the role/personality, adds instructions
		and knowledge, then publishes the result as a hosted link, website embed or API-driven application.
	</p>
	<p>
		The product sits between a no-code knowledge assistant and a developer avatar platform. A business
		user can create a useful agent in the Studio, while developers can use D-ID's Agents API and SDK for
		more control.
	</p>

	<h2>What D-ID Visual Agents include</h2>
	<ul>
		<li>real-time interactive avatars;</li>
		<li>stock, photo, video and V4 Expressive avatar options;</li>
		<li>configurable role, personality and instructions;</li>
		<li>built-in voice interaction;</li>
		<li>knowledge bases using retrieval-augmented generation;</li>
		<li>hosted sharing and website embedding;</li>
		<li>Agents API and SDK;</li>
		<li>webhooks for actions and external integrations;</li>
		<li>multiple LLM/provider configuration options; and</li>
		<li>conversation export for analytics.</li>
	</ul>

	<h2>How D-ID's knowledge system works</h2>
	<p>
		Knowledge is one of D-ID's clearest strengths for no-code use cases. In the Studio, creators can
		upload documents and decide how tightly the agent should stay grounded in those sources.
	</p>
	<p>
		D-ID documents three grounding modes:
	</p>
	<ul>
		<li><strong>Grounded:</strong> use only uploaded sources;</li>
		<li><strong>Hybrid:</strong> prioritise uploaded sources but allow general knowledge; and</li>
		<li><strong>Ungrounded:</strong> do not rely on custom data.</li>
	</ul>
	<p>
		The API also exposes knowledge objects directly, allowing developers to create knowledge bases,
		attach documents and connect them to agents.
	</p>

	<h2>D-ID pricing: understand the credit model</h2>
	<p>
		D-ID does not express Visual Agent cost as one universal dollar-per-minute number. Agent usage is
		based on generated speaking time:
	</p>
	<ul>
		<li>a response of up to 15 seconds uses <strong>0.5 credit</strong>;</li>
		<li>each additional 15-second interval uses another <strong>0.5 credit</strong>.</li>
	</ul>
	<p>
		For example, D-ID says a ten-second answer costs 0.5 credit and a forty-second answer costs 1.5
		credits. The actual dollar cost depends on the plan and credit package.
	</p>
	<p>
		On D-ID's API pricing page, current annual-billing examples include Build at $14.40/month equivalent
		with 64 credits, Launch at $35/month with 180 credits, and Scale at $138.60/month with 800 credits.
		Those plans cover D-ID's wider API product set, so buyers should check which agent and avatar features
		are included in the exact plan they intend to use rather than converting the headline plan price into
		a simplistic agent $/minute figure.
	</p>

	<h2>Where D-ID looks strongest</h2>

	<h3>1. No-code agent creation</h3>
	<p>
		The Studio workflow is straightforward: choose the face and voice, describe the agent, add knowledge,
		test it, and publish. That is a strong fit for teams that want a visual support or information agent
		without first building a custom application.
	</p>

	<h3>2. Knowledge/RAG is built into the product</h3>
	<p>
		Many avatar APIs stop at rendering. D-ID treats knowledge as a first-class agent feature, which makes
		it particularly suitable for product explainers, onboarding assistants, training guides and
		customer-facing Q&amp;A.
	</p>

	<h3>3. Several avatar technologies under one platform</h3>
	<p>
		D-ID's current SDK supports photo-based V2 presenters, V3 clips and V4 Expressive avatars. Its
		real-time stack therefore spans lightweight photo-avatar approaches and newer expressive avatars.
	</p>

	<h3>4. Developer control when needed</h3>
	<p>
		Agents can move beyond the Studio. D-ID exposes APIs for agents, knowledge, LLM configuration and
		sessions, plus an SDK for embedding real-time agents into web applications.
	</p>

	<h2>Where D-ID may be less suitable</h2>

	<h3>When you need a designed multi-character experience</h3>
	<p>
		D-ID's core authoring model is one visual agent with a role, knowledge and tools. A negotiation
		simulation with a customer, manager and coach, or a story with characters entering and leaving
		different locations, is a broader authoring problem.
	</p>

	<h3>When explicit state and scoring drive the interaction</h3>
	<p>
		Conversation history and RAG are not the same as experience state. Training applications may need
		numeric stats, hidden facts, branching conditions, objective completion and generated feedback tied
		to what happened in the scenario.
	</p>

	<h3>When predictable usage economics matter</h3>
	<p>
		D-ID's credit model is based on response duration in 15-second blocks. It is workable, but teams
		should model their expected answer lengths and plan credits rather than compare a single headline
		rate with competitors using connected minutes or generated-speech minutes.
	</p>

	<h2>D-ID Visual Agents vs Liforma at a glance</h2>
	<table>
		<thead>
			<tr>
				<th>Question</th>
				<th>D-ID Visual Agents</th>
				<th>Liforma</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Core unit</td>
				<td>Visual agent</td>
				<td>Avatar Experience</td>
			</tr>
			<tr>
				<td>No-code knowledge assistant</td>
				<td>Strong built-in workflow</td>
				<td>Knowledge can be attached within broader Experiences</td>
			</tr>
			<tr>
				<td>RAG / custom knowledge</td>
				<td>First-class feature</td>
				<td>Supported as part of the Experience/agent context</td>
			</tr>
			<tr>
				<td>Multiple characters / scenes</td>
				<td>Requires broader application orchestration</td>
				<td>First-class authoring concepts</td>
			</tr>
			<tr>
				<td>State, stats and feedback</td>
				<td>Can be built through agent/application logic</td>
				<td>Designed into authored Experiences</td>
			</tr>
			<tr>
				<td>Billing model</td>
				<td>Credits based on generated response duration</td>
				<td>Generated speech/animation minutes</td>
			</tr>
		</tbody>
	</table>

	<h2>Who should shortlist D-ID?</h2>
	<p>
		D-ID is particularly attractive if you want a visual knowledge assistant, customer-support agent or
		website guide that a non-developer can configure and publish quickly. The built-in RAG workflow,
		Studio UI and option to graduate into APIs make that use case clear.
	</p>

	<h2>Who should consider alternatives?</h2>
	<p>
		Consider other platforms when the main requirement is a multi-character role-play, game, learning
		experience or simulation with explicit state and progression; when you already own a voice-agent
		stack and need only the avatar layer; or when a different rendering/cost model better matches your
		traffic.
	</p>

	<p>
		For a direct comparison, see
		<a href="/resources/liforma-vs-d-id">Liforma vs D-ID</a>.
	</p>

	<div class="callout">
		<strong>Sources checked 26 September 2026:</strong>
		<a href="https://www.d-id.com/ai-agents/">D-ID Visual Agents</a>,
		<a href="https://docs.d-id.com/docs/quickstart">D-ID developer quickstart</a>,
		<a href="https://docs.d-id.com/docs/knowledge-quickstart">D-ID Knowledge documentation</a>,
		<a href="https://help.d-id.com/hc/en-us/articles/31262931985169-How-does-Agent-pricing-work">D-ID Agent pricing</a>,
		and <a href="https://www.d-id.com/pricing/api/">D-ID API pricing</a>.
	</div>
</BlogPostLayout>
