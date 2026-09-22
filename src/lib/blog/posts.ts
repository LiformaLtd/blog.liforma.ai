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
