export type ResourcePost = {
	slug: string;
	title: string;
	description: string;
	datePublished: string;
	dateModified?: string;
	authorId: string;
	imageKey: string;
	imageAlt: string;
	purpose: 'review' | 'alternatives' | 'comparison' | 'category' | 'integration';
	draft?: boolean;
};

export const resourcePosts: ResourcePost[] = [
	{
		slug: 'tavus-review',
		title: 'Tavus Review 2026: Conversational AI Avatars, Pricing, Features and Alternatives',
		description:
			'A practical review of Tavus CVI, including conversational video, Replicas, pricing, perception, the full AI stack, trade-offs and who should consider alternatives.',
		datePublished: '2026-09-26',
		authorId: 'liforma-team',
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration representing a review of the Tavus conversational AI avatar platform',
		purpose: 'review'
	},
	{
		slug: 'lemonslice-review',
		title: 'LemonSlice Review 2026: Interactive Avatars, Pricing, Features and Alternatives',
		description:
			'A practical review of LemonSlice interactive avatars, including image-to-avatar creation, BYO voice and LLM support, pricing, strengths, trade-offs and alternatives.',
		datePublished: '2026-09-26',
		authorId: 'liforma-team',
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration representing a review of the LemonSlice interactive avatar platform',
		purpose: 'review'
	},
	{
		slug: 'heygen-liveavatar-review',
		title: 'HeyGen LiveAvatar Review 2026: Pricing, Features and Real-Time Avatars',
		description:
			'A practical review of HeyGen LiveAvatar, including Full vs Lite mode, current pricing, custom avatars, strengths, trade-offs and how it differs from authored avatar experiences.',
		datePublished: '2026-09-26',
		authorId: 'liforma-team',
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration representing a review of HeyGen LiveAvatar',
		purpose: 'review'
	},
	{
		slug: 'anam-ai-review',
		title: 'Anam AI Review 2026: Real-Time Avatars, Pricing, Features and Alternatives',
		description:
			'A practical review of Anam real-time AI avatars, including custom avatars, 70+ languages, agent features, pricing, latency claims, strengths and trade-offs.',
		datePublished: '2026-09-26',
		authorId: 'liforma-team',
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration representing a review of the Anam real-time AI avatar platform',
		purpose: 'review'
	},
	{
		slug: 'd-id-visual-agents-review',
		title: 'D-ID Visual Agents Review 2026: Pricing, RAG, Avatars and Agent Features',
		description:
			'A practical review of D-ID Visual Agents, including no-code creation, RAG and knowledge, real-time avatars, API access, credit-based pricing, strengths and trade-offs.',
		datePublished: '2026-09-26',
		authorId: 'liforma-team',
		imageKey: 'liforma-vs-did',
		imageAlt: 'Illustration representing a review of D-ID Visual Agents',
		purpose: 'review'
	},
	{
		slug: 'liforma-vs-tavus',
		title: 'Liforma vs Tavus: Interactive Avatar Experiences vs Conversational AI Humans',
		description:
			'Compare Liforma and Tavus across visual approach, conversational stack, perception, training and simulation, authoring model, developer integration and pricing.',
		datePublished: '2026-09-26',
		authorId: 'liforma-team',
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration comparing Liforma and Tavus interactive avatar platforms',
		purpose: 'comparison'
	},
	{
		slug: 'tavus-alternatives',
		title: 'Best Tavus Alternatives in 2026: Interactive Avatar Platforms Compared',
		description:
			'Compare Liforma, HeyGen LiveAvatar, LemonSlice, Anam and D-ID as Tavus alternatives for photorealistic AI humans, modular avatar layers, authored experiences and no-code agents.',
		datePublished: '2026-09-26',
		authorId: 'liforma-team',
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration comparing alternatives to the Tavus conversational avatar platform',
		purpose: 'alternatives'
	},
	{
		slug: 'lemonslice-alternatives',
		title: 'Best LemonSlice Alternatives in 2026: Interactive AI Avatar Platforms Compared',
		description:
			'Compare Liforma, HeyGen LiveAvatar, Tavus, Anam and D-ID as LemonSlice alternatives for modular avatar rendering, complete AI humans and authored interactive experiences.',
		datePublished: '2026-09-26',
		authorId: 'liforma-team',
		imageKey: 'avatar-experience',
		imageAlt: 'Illustration comparing alternatives to the LemonSlice interactive avatar platform',
		purpose: 'alternatives'
	},
	{
		slug: 'elevenlabs-ai-agent-avatar',
		title: 'How to Add a Realtime Avatar to an ElevenLabs ElevenAgent',
		description:
			'Keep your ElevenLabs ElevenAgent, voices, prompts and tools, and add a realtime Liforma character with lip-sync, appearance, scenes and browser-native rendering.',
		datePublished: '2026-09-23',
		authorId: 'liforma-team',
		imageKey: 'avatar-experience',
		imageAlt: 'Diagram showing an ElevenLabs voice agent connected to a Liforma animated avatar',
		purpose: 'integration'
	},
	{
		slug: 'openai-realtime-avatar',
		title: 'How to Add an Avatar to the OpenAI Realtime API',
		description:
			'Keep OpenAI Realtime as your native speech-to-speech voice agent and connect its WebRTC or WebSocket audio to a realtime Liforma animated character.',
		datePublished: '2026-09-23',
		authorId: 'liforma-team',
		imageKey: 'avatar-experience',
		imageAlt: 'Diagram showing the OpenAI Realtime API connected to a Liforma animated avatar',
		purpose: 'integration'
	},
	{
		slug: 'gemini-live-avatar',
		title: 'How to Add an Avatar to the Gemini Live API',
		description:
			'Use Gemini Live for realtime native-audio conversation and Liforma for the visual character, lip-sync, appearance, scenes and browser-native avatar rendering.',
		datePublished: '2026-09-23',
		authorId: 'liforma-team',
		imageKey: 'avatar-experience',
		imageAlt: 'Diagram showing Gemini Live connected to a Liforma animated avatar',
		purpose: 'integration'
	},
	{
		slug: 'deepgram-voice-agent-avatar',
		title: 'How to Add an Avatar to a Deepgram Voice Agent',
		description:
			'Keep Deepgram Voice Agent handling listening, thinking and speaking while Liforma turns the generated audio into a realtime animated character.',
		datePublished: '2026-09-23',
		authorId: 'liforma-team',
		imageKey: 'avatar-experience',
		imageAlt: 'Diagram showing a Deepgram Voice Agent connected to a Liforma animated avatar',
		purpose: 'integration'
	},
	{
		slug: 'livekit-agent-avatar',
		title: 'How to Add an Avatar to a LiveKit Agent',
		description:
			'Keep your LiveKit Agent, room, telephony and model stack, and bridge its remote audio track into a realtime Liforma animated character.',
		datePublished: '2026-09-23',
		authorId: 'liforma-team',
		imageKey: 'avatar-experience',
		imageAlt: 'Diagram showing a LiveKit Agent audio track connected to a Liforma animated avatar',
		purpose: 'integration'
	},
	{
		slug: 'liforma-vs-d-id',
		title: 'Liforma vs D-ID: choosing an interactive avatar platform',
		description:
			'A practical comparison of Liforma and D-ID for teams evaluating real-time interactive avatar experiences versus video-oriented talking-head generation.',
		datePublished: '2026-09-22',
		authorId: 'liforma-team',
		imageKey: 'liforma-vs-did',
		imageAlt: 'Comparison graphic for Liforma and D-ID',
		purpose: 'comparison'
	}
];
