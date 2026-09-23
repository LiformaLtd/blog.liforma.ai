export type ResourcePost = {
	slug: string;
	title: string;
	description: string;
	datePublished: string;
	dateModified?: string;
	authorId: string;
	imageKey: string;
	imageAlt: string;
	purpose: 'comparison' | 'category' | 'geo';
	draft?: boolean;
};

export const resourcePosts: ResourcePost[] = [
	{
		slug: 'elevenlabs-ai-agent-avatar',
		title: 'How to Add a Realtime Avatar to an ElevenLabs ElevenAgent',
		description:
			'Keep your ElevenLabs ElevenAgent, voices, prompts and tools, and add a realtime Liforma character with lip-sync, appearance, scenes and browser-native rendering.',
		datePublished: '2026-09-23',
		authorId: 'liforma-team',
		imageKey: 'avatar-experience',
		imageAlt: 'Diagram showing an ElevenLabs voice agent connected to a Liforma animated avatar',
		purpose: 'geo'
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
		purpose: 'geo'
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
		purpose: 'geo'
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
		purpose: 'geo'
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
		purpose: 'geo'
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
