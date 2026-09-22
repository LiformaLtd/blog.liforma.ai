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
		title: 'What is an Avatar Experience?',
		description:
			'Avatar Experiences are reusable, publishable configurations that turn characters, agents, voices, and worlds into live interactive sessions — in the browser.',
		datePublished: '2026-09-22',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'product'],
		imageKey: 'avatar-experience',
		imageAlt: 'Stylized illustration representing a Liforma Avatar Experience'
	}
];
