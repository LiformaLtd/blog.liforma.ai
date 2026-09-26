export type BlogPost = {
	slug: string;
	title: string;
	description: string;
	datePublished: string;
	dateModified?: string;
	authorId: string;
	tags: string[];
	imageKey: string;
	imageAlt: string;
	draft?: boolean;
};

export const blogPosts: BlogPost[] = [
	{
		slug: 'why-liforma-ai-avatar-cost-is-hard-to-beat',
		title: "Why Liforma's AI Avatar Cost Will Be Hard to Beat",
		description:
			'Inside the four-layer cost architecture behind Liforma: browser compute, request-oriented transport, optimised self-hosted AI and elastic multi-provider GPU infrastructure.',
		datePublished: '2026-09-25',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'technical', 'product'],
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration showing four layers of Liforma cost optimisation from browser compute to GPU infrastructure'
	},
	{
		slug: 'rag-for-ai-avatars-small-fast-llms-domain-experts',
		title: "RAG for AI Avatars: Why Your Character Doesn't Always Need a Frontier LLM",
		description:
			'Learn how retrieval-augmented generation can make small, fast language models highly effective domain experts for support, training and education — while reducing latency and cost.',
		datePublished: '2026-09-23',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'technical', 'rag'],
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration of an AI avatar using retrieval-augmented generation to access domain knowledge'
	},
	{
		slug: 'three-ways-to-build-with-liforma',
		title: 'Three Ways to Build With Liforma: Full Stack, Bring Your Own LLM, or Add Avatars to Your Voice Agent',
		description:
			'Choose between Liforma Live, Relay and Motion: use the complete avatar stack, bring your own intelligence layer, or add Liforma animation to ElevenLabs, Gemini Live, OpenAI Realtime and other voice agents.',
		datePublished: '2026-09-23',
		dateModified: '2026-09-26',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'technical', 'product'],
		imageKey: 'avatar-experience',
		imageAlt: 'Diagram of three Liforma integration layers from full conversational stack to speech-to-animation only'
	},
	{
		slug: 'ai-character-memory-vs-state',
		title: "AI Character Memory vs State: Why Remembering the Conversation Isn't Enough",
		description:
			'Learn the difference between AI character memory, conversation history, knowledge and explicit state — and why believable interactive characters need more than a longer transcript.',
		datePublished: '2026-09-23',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'memory-state'],
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration showing AI character memory, knowledge and interactive state'
	},
	{
		slug: 'best-interactive-ai-avatar-platforms-2026',
		title: 'The Best Interactive AI Avatar Platforms in 2026: Liforma, HeyGen, Tavus, D-ID and Synthesia Compared',
		description:
			'Compare Liforma, HeyGen LiveAvatar, Tavus CVI, D-ID Visual Agents and Synthesia Interactive Avatars by pricing, visual style, stack completeness, authoring model and best use case.',
		datePublished: '2026-09-23',
		dateModified: '2026-09-26',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'comparison'],
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration comparing leading interactive AI avatar platforms'
	},
	{
		slug: 'ai-avatars-for-training-role-play-scoring-state-feedback',
		title: 'AI Avatars for Training: Building Role-Plays With Scoring, State and Feedback',
		description:
			'Learn how to design AI avatar training simulations with explicit state, meaningful scoring, multi-character scenarios and feedback tied to what the learner actually did.',
		datePublished: '2026-09-23',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'training'],
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration of an AI avatar training simulation with scoring and feedback'
	},
	{
		slug: 'how-to-add-an-ai-character-to-your-website',
		title: 'How to Add an AI Character to Your Website',
		description:
			'Learn how to add an interactive AI character to a website as a full embed, floating assistant or app component — and how to make it useful with context, tools and the right interaction model.',
		datePublished: '2026-09-23',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'website-ai'],
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration of an AI character embedded in a website'
	},
	{
		slug: 'multi-character-ai-conversations',
		title: 'Multi-Character AI: How to Build Conversations With Multiple AI Characters',
		description:
			'Learn how multi-character AI experiences coordinate distinct characters, shared state, private knowledge, scenes and turn-taking without becoming multi-agent chaos.',
		datePublished: '2026-09-23',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'multi-character'],
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration of multiple AI characters participating in one interactive experience'
	},
	{
		slug: 'how-to-create-interactive-ai-role-play-without-coding',
		title: 'How to Create an Interactive AI Role-Play Without Coding',
		description:
			'Build an AI role-play without coding using reusable characters, sets, scenes, stats, branching and feedback — from scenario design through publishing.',
		datePublished: '2026-09-22',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'training'],
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration of an interactive AI role-play training experience'
	},
	{
		slug: 'photorealistic-vs-stylized-ai-avatars',
		title: "Photorealistic vs Stylized AI Avatars: Why More Realistic Isn't Always Better",
		description:
			'Compare photorealistic and stylized AI avatars for training, education, games, digital twins and interactive experiences — and learn when realism helps or hurts.',
		datePublished: '2026-09-22',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'design'],
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration comparing photorealistic and stylized AI avatar characters'
	},
	{
		slug: 'does-conversational-ai-need-webrtc',
		title: 'Does Conversational AI Really Need WebRTC? HTTP vs WebRTC for AI Avatars',
		description:
			'WebRTC is ideal for continuous real-time media, but many AI character experiences are naturally turn-based. Learn when HTTP can be simpler, cheaper and still feel real-time.',
		datePublished: '2026-09-22',
		dateModified: '2026-09-22',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'technical'],
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration comparing WebRTC sessions with HTTP-based conversational AI'
	},
	{
		slug: 'how-much-do-interactive-ai-avatars-cost',
		title: 'How Much Do Interactive AI Avatars Cost? 2026 Pricing Compared',
		description:
			'Compare 2026 interactive AI avatar pricing from Liforma, HeyGen, Tavus, Synthesia and D-ID — including what each per-minute price actually includes.',
		datePublished: '2026-09-22',
		dateModified: '2026-09-26',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'pricing'],
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration representing the cost of interactive AI avatar experiences'
	},
	{
		slug: 'ai-avatar-vs-ai-character-vs-visual-agent-vs-chatbot',
		title: "AI Avatar vs AI Character vs Visual Agent vs Chatbot: What's the Difference?",
		description:
			'AI avatars, AI characters, visual agents and chatbots are often confused. Learn the practical differences — and where interactive AI experiences fit.',
		datePublished: '2026-09-22',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'product'],
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration representing AI avatars, AI characters, visual agents and chatbots'
	},
	{
		slug: 'what-is-an-avatar-experience',
		title: 'What Is an Avatar Experience? From AI Characters to Interactive Worlds',
		description:
			'Learn how Avatar Experiences combine reusable AI characters, costumes, sets, scenes, state and feedback into interactive training, learning, entertainment and customer experiences.',
		datePublished: '2026-09-22',
		dateModified: '2026-09-22',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'product'],
		imageKey: 'avatar-experience',
		imageAlt: 'Stylized illustration representing a Liforma Avatar Experience'
	}
];
