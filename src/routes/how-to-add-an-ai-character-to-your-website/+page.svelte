<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getPost } from '$lib/blog';

	const post = getPost('how-to-add-an-ai-character-to-your-website')!;
</script>

<BlogPostLayout {post} pathname="/{post.slug}">
	<p>
		<strong>Adding an AI character to a website no longer requires building a custom real-time avatar
		application.</strong> A modern website assistant can be embedded as a full-page experience, placed
		inside part of a page, or opened from a floating corner widget. The character can listen, think,
		speak and animate while the host website remains a normal web application.
	</p>

	<p>
		The more important design question is not how to put a face on a page. It is
		<strong>what job the character should do once it is there</strong>.
	</p>

	<div class="callout">
		<strong>Short answer:</strong> create an interactive character experience, publish it, choose whether
		you want a full embed or a corner launcher, allow your website origin, then add the Liforma component
		or HTML tag. A basic browser embed can work without your own backend.
	</div>

	<h2>What is an AI character for a website?</h2>
	<p>
		A website AI character is a visual conversational interface that can interact with a visitor in real
		time. It combines an animated character with speech input, conversational intelligence and generated
		speech.
	</p>
	<p>
		It can perform many of the same jobs as a text chatbot or voice agent, but with a visible character
		that can express personality, emotion and identity.
	</p>
	<p>
		Common examples include:
	</p>
	<ul>
		<li>a product expert that answers questions while someone browses a product page;</li>
		<li>a sales assistant that helps a visitor choose between products or plans;</li>
		<li>a support character that explains how to use a service;</li>
		<li>a hotel, venue or tourism guide;</li>
		<li>a course tutor or coach embedded beside learning material;</li>
		<li>a recruitment or onboarding character;</li>
		<li>a fictional or branded character that visitors can meet; and</li>
		<li>an interactive presenter that guides somebody through a page or workflow.</li>
	</ul>

	<h2>AI website character vs chatbot</h2>
	<p>
		A chatbot is usually a text box. It is efficient, familiar and often the right choice when visitors
		want short factual answers.
	</p>
	<p>
		An AI character adds a human or fictional presence. That can be useful when personality, trust,
		teaching, persuasion, role-play or entertainment are part of the job.
	</p>
	<p>
		The distinction is not that one is intelligent and the other is not. Both can use the same language
		models and tools. The difference is the interaction layer.
	</p>
	<table>
		<thead>
			<tr>
				<th>Website chatbot</th>
				<th>Website AI character</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Primarily text interface</td>
				<td>Visual + speech interface</td>
			</tr>
			<tr>
				<td>Usually anonymous or brand-labelled</td>
				<td>Can have a persistent identity and personality</td>
			</tr>
			<tr>
				<td>Excellent for quick Q&amp;A</td>
				<td>Useful for explanation, guidance and longer interaction</td>
			</tr>
			<tr>
				<td>Little visual context</td>
				<td>Can use character appearance, costume, backdrop and animation</td>
			</tr>
			<tr>
				<td>Conversation is usually the whole experience</td>
				<td>Can participate in a larger authored experience</td>
			</tr>
		</tbody>
	</table>
	<p>
		For the broader terminology, see
		<a href="/ai-avatar-vs-ai-character-vs-visual-agent-vs-chatbot">AI Avatar vs AI Character vs Visual
		Agent vs Chatbot</a>.
	</p>

	<h2>Start with the job, not the embed code</h2>
	<p>
		It is easy to begin with implementation: “We want a talking avatar in the bottom-right corner.”
		That is backwards.
	</p>
	<p>
		First decide why a visitor would talk to the character.
	</p>
	<p>
		A useful website character should have a clear job such as:
	</p>
	<ul>
		<li><strong>Explain</strong> — make complicated products or services easier to understand;</li>
		<li><strong>Guide</strong> — help visitors find the right page, product or next action;</li>
		<li><strong>Qualify</strong> — understand the visitor's needs before a sales conversation;</li>
		<li><strong>Teach</strong> — answer questions about material on the page;</li>
		<li><strong>Demonstrate</strong> — make the product itself visible through an interactive character;</li>
		<li><strong>Support</strong> — answer common questions and escalate when necessary; or</li>
		<li><strong>Entertain</strong> — create a character experience that makes the site itself memorable.</li>
	</ul>
	<p>
		Once the job is clear, the placement and interaction model become much easier to choose.
	</p>

	<h2>There are three useful ways to put an AI character on a website</h2>

	<h3>1. Embed the whole experience in the page</h3>
	<p>
		This works well when the character is the main content: a training scenario, tutor, product
		demonstration or interactive story.
	</p>
	<p>
		Liforma's HTML integration uses a CDN script and one custom element. There is no build step:
	</p>
	<pre><code>{`<script src="https://cdn.liforma.ai/sdk/v2/client.js"></script>

<div style="width: 100%; min-height: 480px;">
  <liforma-experience
    experience-id="exp_YOUR_EXPERIENCE_ID"
  ></liforma-experience>
</div>`}</code></pre>
	<p>
		The same approach works in ordinary HTML and in site builders or CMS products that allow custom
		HTML, including WordPress, Webflow, Squarespace, Framer, Shopify, Wix and Ghost.
		<a href="https://docs.liforma.ai/avatar-experiences/html">See the HTML integration documentation</a>.
	</p>

	<h3>2. Use a floating corner character</h3>
	<p>
		For a site-wide assistant, a full-page embed can be too intrusive. A floating launcher allows the
		character to remain available without taking over the page.
	</p>
	<p>
		Liforma's <code>ExperienceWidget</code> is designed for this pattern. The collapsed state loads a
		lightweight visual preview. The actual player and conversational session are created when the visitor
		opens it.
	</p>
	<pre><code>{`<script src="https://cdn.liforma.ai/sdk/v2/client.js"></script>

<liforma-experience-widget
  experience-id="exp_YOUR_EXPERIENCE_ID"
  alt="Talk to our assistant"
  position="bottom-right"
  offset="16"
></liforma-experience-widget>`}</code></pre>
	<p>
		This is usually the best pattern for product help, sales assistance and support because the
		character is available across the site without obscuring the content.
		<a href="https://docs.liforma.ai/avatar-experiences/experience-widget">See the ExperienceWidget
		documentation</a>.
	</p>

	<h3>3. Integrate the experience as part of your application UI</h3>
	<p>
		If the character is a first-class part of a web application, use the framework component or
		JavaScript API rather than treating it as a standalone widget.
	</p>
	<p>
		For example, a Svelte application can render the complete experience with:
	</p>
	<pre><code>{`<script lang="ts">
  import { Experience } from '@liforma/client/svelte';
</script>

<Experience experienceId="exp_YOUR_EXPERIENCE_ID" />`}</code></pre>
	<p>
		The Liforma SDK provides equivalent integration surfaces for Svelte, React and Next.js.
		<a href="https://docs.liforma.ai/getting-started/quick-start">The quick start</a> shows the supported
		frameworks and session model.
	</p>

	<h2>What Liforma handles for the host website</h2>
	<p>
		A useful abstraction is that the website integrates an <strong>Experience</strong>, not a collection
		of low-level AI services.
	</p>
	<p>
		The hosted runtime handles the underlying conversation and presentation lifecycle, including speech,
		turns and avatar rendering. The site supplies the space in which the experience appears and, for
		advanced integrations, can listen to events or control parts of the session.
	</p>
	<p>
		That means a basic integration does not require the website developer to separately wire together:
	</p>
	<ul>
		<li>speech recognition;</li>
		<li>a language model;</li>
		<li>text-to-speech;</li>
		<li>speech-to-animation;</li>
		<li>avatar playback;</li>
		<li>conversation lifecycle; and</li>
		<li>the UI for starting and stopping the interaction.</li>
	</ul>
	<p>
		For the developer, the reusable unit is the Experience ID.
	</p>

	<h2>Can you embed an AI character without a backend?</h2>
	<p>
		Yes. Liforma supports browser session creation protected by an origin allowlist.
	</p>
	<p>
		For a basic public experience, you add the website's origin to the allowed origins and embed the
		experience. The browser can then create a session without exposing an API key.
	</p>
	<p>
		Liforma's
		<a href="https://docs.liforma.ai/guides/browser-embed">browser-embed documentation</a> recommends
		server-side session creation when you already have a backend, but the origin-allowlisted browser
		path exists specifically so an embed does not require one.
	</p>
	<p>
		In production, microphone access requires HTTPS.
	</p>

	<h2>When should you use a server-created session?</h2>
	<p>
		A server session is useful when your own application needs to decide whether a visitor is allowed to
		start an experience.
	</p>
	<p>
		Examples include:
	</p>
	<ul>
		<li>an authenticated customer portal;</li>
		<li>a paid course;</li>
		<li>usage tied to your own customer account;</li>
		<li>an internal company application; or</li>
		<li>a product where you want your server to control session creation.</li>
	</ul>
	<p>
		The browser calls a route on your own application, and that server route uses the Liforma API key to
		mint the session. The key never needs to be exposed to the browser. Liforma provides helpers for
		this pattern in Next.js as well as the underlying session API.
	</p>

	<h2>What if the website builder strips scripts?</h2>
	<p>
		Some CMS editors remove <code>&lt;script&gt;</code> tags from page content for security.
	</p>
	<p>
		In that case, put the Liforma CDN script in the theme, site header or equivalent global code area,
		then place only the <code>&lt;liforma-experience&gt;</code> element in the page content.
	</p>
	<p>
		If the platform cannot host the component at all, Liforma also supports a direct player
		<code>&lt;iframe&gt;</code>. Public Experience URLs expose oEmbed metadata as well, which can help
		platforms that understand rich embeds from a pasted URL.
		<a href="https://docs.liforma.ai/guides/oembed">See the oEmbed documentation</a>.
	</p>

	<h2>A website character should understand the context of the website</h2>
	<p>
		Embedding the character is only the first step. A genuinely useful website assistant should know
		what it is there to help with.
	</p>
	<p>
		There are two broad kinds of context.
	</p>

	<h3>Stable website knowledge</h3>
	<p>
		This is information that belongs to the site or company: products, services, pricing, policies,
		documentation, FAQs and other content.
	</p>
	<p>
		For larger sites, the normal pattern is to turn this content into a searchable knowledge source
		rather than putting the entire website into every LLM prompt. Relevant passages can then be
		retrieved when the visitor asks a question.
	</p>

	<h3>Current-page context</h3>
	<p>
		The assistant can also benefit from knowing what the visitor is looking at right now.
	</p>
	<p>
		On a product page, that might include the product name, description and visible options. On a help
		page, it might include the article title and relevant text. On a checkout page, it might include
		non-sensitive state supplied deliberately by the host application.
	</p>
	<p>
		This can turn a generic assistant into something much more useful:
	</p>
	<p>
		<em>“I can see you're looking at the Business plan. Would you like me to explain how it differs from
		the Creator plan?”</em>
	</p>

	<h2>Do not blindly send the entire DOM to the AI</h2>
	<p>
		A tempting implementation is to take <code>document.body.innerText</code> and append the whole page
		to every prompt.
	</p>
	<p>
		That can work for a small prototype, but it is usually a poor production architecture.
	</p>
	<p>
		Pages contain navigation, cookie banners, repeated footers, hidden UI, legal text, unrelated
		components and user-generated content. Sending everything wastes context and can make the assistant
		less reliable.
	</p>
	<p>
		A better website-assistant design extracts or supplies the parts of the page that are actually
		relevant. That can be done by:
	</p>
	<ul>
		<li>marking the page regions that the assistant is allowed to read;</li>
		<li>sending structured page metadata from the host application;</li>
		<li>extracting the main article or product content;</li>
		<li>using a pre-built knowledge index for the stable site content; and</li>
		<li>adding only the current-page information needed for the present turn.</li>
	</ul>
	<p>
		This keeps the context cleaner and reduces the risk that arbitrary page content accidentally becomes
		an instruction to the model.
	</p>

	<h2>Page context creates a new kind of website assistant</h2>
	<p>
		Traditional support bots often behave like a separate help centre. The visitor opens the widget and
		asks the bot a question from scratch.
	</p>
	<p>
		A page-aware character can behave more like somebody standing beside the visitor.
	</p>
	<p>
		On an insurance page it can explain the policy currently visible. On a SaaS pricing page it can
		compare the plans the visitor is looking at. On a museum website it can discuss the exhibit on the
		page. On a course page it can answer questions about the current lesson.
	</p>
	<p>
		The interaction begins with shared context rather than requiring the visitor to restate where they
		are and what they are reading.
	</p>

	<h2>What should the character be allowed to do?</h2>
	<p>
		Answering questions is only one level of website assistance.
	</p>
	<p>
		An agent can also use controlled tools exposed by the host application. Depending on the use case,
		those tools might:
	</p>
	<ul>
		<li>look up a product or order;</li>
		<li>check availability;</li>
		<li>open the right help article;</li>
		<li>capture a lead;</li>
		<li>book or request an appointment;</li>
		<li>advance an onboarding flow; or</li>
		<li>write structured state back to the host application.</li>
	</ul>
	<p>
		Liforma Experiences support tools as controlled external capabilities. The character can invoke the
		tools declared for the experience, while the host application observes results and state changes.
		<a href="https://docs.liforma.ai/getting-started/concepts">See the Liforma concepts documentation</a>.
	</p>
	<p>
		The important word is <strong>controlled</strong>. A website character should not get unrestricted
		access to the page, database or browser merely because it can converse with the visitor.
	</p>

	<h2>Full-screen character or corner widget?</h2>
	<p>
		The right presentation depends on whether the character is the destination or an assistant to the
		page.
	</p>
	<table>
		<thead>
			<tr>
				<th>Use case</th>
				<th>Recommended presentation</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Training simulation</td>
				<td>Full-page or large embedded Experience</td>
			</tr>
			<tr>
				<td>Interactive product demo</td>
				<td>Large embedded Experience</td>
			</tr>
			<tr>
				<td>Site-wide support assistant</td>
				<td>Corner ExperienceWidget</td>
			</tr>
			<tr>
				<td>Sales assistant</td>
				<td>Corner widget or contextual inline embed</td>
			</tr>
			<tr>
				<td>Lesson tutor</td>
				<td>Inline beside learning content</td>
			</tr>
			<tr>
				<td>Interactive story</td>
				<td>Full-page Experience</td>
			</tr>
		</tbody>
	</table>

	<h2>Do not make the visitor talk to the avatar</h2>
	<p>
		A visible character is not an excuse to force a conversational interface onto every task.
	</p>
	<p>
		Visitors should still be able to browse the website normally. The character should help when
		conversation is faster, clearer or more engaging than navigating alone.
	</p>
	<p>
		That usually means:
	</p>
	<ul>
		<li>do not block the page behind the assistant;</li>
		<li>make the character easy to dismiss or minimise;</li>
		<li>do not start microphone capture unexpectedly;</li>
		<li>offer clear text/UI alternatives for important actions;</li>
		<li>keep normal navigation usable; and</li>
		<li>make it obvious that the visitor is interacting with AI.</li>
	</ul>

	<h2>Do you need a photorealistic website avatar?</h2>
	<p>
		Not necessarily.
	</p>
	<p>
		If the website character is intended to reproduce a real salesperson, founder or spokesperson,
		photorealism may be important.
	</p>
	<p>
		But a product guide, tutor, mascot or branded character may work better with a deliberate stylised
		identity. A stylised character also signals more clearly that the visitor is interacting with an AI
		character rather than a human video call.
	</p>
	<p>
		The trade-offs are covered in
		<a href="/photorealistic-vs-stylized-ai-avatars">Photorealistic vs Stylized AI Avatars: Why More
		Realistic Isn't Always Better</a>.
	</p>

	<h2>How much does a website AI character cost?</h2>
	<p>
		Cost depends heavily on how the platform meters usage.
	</p>
	<p>
		A persistent real-time avatar session can be billed for every minute the visitor remains connected,
		even while they are thinking or reading. Other systems charge separately for the avatar, speech
		recognition, language model, voice and session infrastructure.
	</p>
	<p>
		Liforma Live is currently priced at approximately
		<strong>$0.01 per generated speech minute for STT, intelligence, TTS and speech-to-animation</strong>,
		without a separate per-connected-minute session charge. That can be particularly useful for website
		assistants because a visitor may keep the page open much longer than the character actually speaks.
	</p>
	<p>
		For a detailed current comparison, see
		<a href="/how-much-do-interactive-ai-avatars-cost">How Much Do Interactive AI Avatars Cost?</a>.
	</p>

	<h2>Example: turning a product website into an interactive sales assistant</h2>
	<p>
		Imagine a visitor arrives on a company's pricing page.
	</p>
	<p>
		A small character is visible in the corner. It does nothing until the visitor opens it.
	</p>
	<p>
		The character already knows the company's stable product information. The host page also supplies
		the fact that the visitor is currently viewing pricing.
	</p>
	<p>
		The visitor asks:
	</p>
	<p>
		<em>“We have about 40 employees and need SSO. Which plan should we use?”</em>
	</p>
	<p>
		The character can explain the relevant plans and ask a follow-up question. If the visitor wants to
		talk to sales, a controlled tool can capture the request or move them into the appropriate workflow.
	</p>
	<p>
		The important point is that the visitor never had to leave the page, search the documentation or
		restate which product they were looking at.
	</p>

	<h2>Example: a character that teaches the page rather than supports it</h2>
	<p>
		The same architecture can be used very differently on an educational site.
	</p>
	<p>
		Suppose a learner is reading a lesson about the solar system. Instead of a generic help bot, the
		page contains an AI science tutor. The tutor can answer questions about the material, ask the learner
		questions, explain a difficult paragraph in another way and launch a short role-play.
	</p>
	<p>
		The character is no longer customer support. It is part of the content.
	</p>
	<p>
		That is why we think website AI characters are ultimately a larger category than “chatbot with a
		face.”
	</p>

	<h2>Example: let visitors meet your product before installing anything</h2>
	<p>
		An interactive avatar company has an unusually useful marketing opportunity: the product can demo
		itself inside the website.
	</p>
	<p>
		A visitor can talk to a working character before signing up. The same pattern can work for other
		businesses too. A tradesperson, consultant, school, hotel or SaaS company could let prospective
		customers try a site-specific assistant before making a purchasing decision.
	</p>
	<p>
		For a product whose value is inherently interactive, an embedded live demonstration can communicate
		more than screenshots or a two-minute product video.
	</p>

	<h2>How to add a Liforma character to your site</h2>
	<ol>
		<li>
			<strong>Create or remix an Experience.</strong> Choose the character, appearance, voice, backdrop,
			behaviour and any experience state or tools you need.
		</li>
		<li>
			<strong>Publish it.</strong> The Experience becomes the reusable unit you can launch from the site.
		</li>
		<li>
			<strong>Choose the presentation.</strong> Use a full embed when the character is central, or
			<code>ExperienceWidget</code> for a floating assistant.
		</li>
		<li>
			<strong>Choose browser or server session creation.</strong> Public browser embeds can use origin
			allowlisting; authenticated applications can mint sessions from their own server.
		</li>
		<li>
			<strong>Add the component.</strong> Use HTML/CDN, Svelte, React, Next.js or the lower-level
			JavaScript API.
		</li>
		<li>
			<strong>Test the real page.</strong> Check microphone permission, mobile layout, loading behaviour,
			minimisation and the way the character coexists with the site's existing navigation.
		</li>
		<li>
			<strong>Add context and tools only where useful.</strong> Give the character the information and
			capabilities needed for its job rather than uncontrolled access to the site.
		</li>
	</ol>

	<h2>The bigger opportunity: from chatbot to page-aware character</h2>
	<p>
		The first generation of website AI mostly added a small text window in the corner of the page.
	</p>
	<p>
		The next step is not simply to replace that box with a face. It is to create an assistant that has a
		role, understands the visitor's current context, can explain what they are looking at and can take
		part in a richer experience when needed.
	</p>
	<p>
		Sometimes that character will still behave like support. Sometimes it will teach, demonstrate,
		qualify, role-play, guide or entertain.
	</p>
	<p>
		The website stops being merely a collection of pages with a chatbot attached. It becomes a place
		where visitors can meet intelligent characters that understand why they are there.
	</p>

	<div class="callout">
		<strong>Get started:</strong>
		<a href="https://docs.liforma.ai/getting-started/quick-start">embed your first Liforma Experience</a>,
		<a href="https://docs.liforma.ai/avatar-experiences/experience-widget">add the corner widget</a>,
		or <a href="https://www.liforma.ai/create">create or remix an experience</a>.
	</div>
</BlogPostLayout>
