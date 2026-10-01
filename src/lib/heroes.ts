import type { ImageMetadata } from 'astro';
import aiAvatarTrainingScoringFeedback from '../assets/article-heroes/ai-avatar-training-scoring-feedback.png';
import aiCharacterMemoryVsState from '../assets/article-heroes/ai-character-memory-vs-state.png';
import aiCharacterWebsiteEmbed from '../assets/article-heroes/ai-character-website-embed.png';
import avatarCharacterAgentChatbot from '../assets/article-heroes/avatar-character-agent-chatbot.png';
import deepgramVoiceAgentAvatar from '../assets/article-heroes/deepgram-voice-agent-avatar.png';
import elevenlabsAiAgentAvatar from '../assets/article-heroes/elevenlabs-ai-agent-avatar.png';
import geminiLiveAvatar from '../assets/article-heroes/gemini-live-avatar.png';
import httpVsWebrtcAiAvatars from '../assets/article-heroes/http-vs-webrtc-ai-avatars.png';
import interactiveAiAvatarCost from '../assets/article-heroes/interactive-ai-avatar-cost.png';
import interactiveAiAvatarPlatforms2026 from '../assets/article-heroes/interactive-ai-avatar-platforms-2026.png';
import liformaLiveRelayMotion from '../assets/article-heroes/liforma-live-relay-motion.png';
import livekitAgentAvatar from '../assets/article-heroes/livekit-agent-avatar.png';
import multiCharacterAiConversations from '../assets/article-heroes/multi-character-ai-conversations.png';
import openaiRealtimeAvatar from '../assets/article-heroes/openai-realtime-avatar.png';
import photorealisticVsStylizedAvatars from '../assets/article-heroes/photorealistic-vs-stylized-avatars.png';
import ragForAiAvatars from '../assets/article-heroes/rag-for-ai-avatars-small-fast-llms-domain-experts.png';
import whatIsAnAvatarExperience from '../assets/article-heroes/what-is-an-avatar-experience.png';
import whyLiformaAiAvatarCost from '../assets/article-heroes/why-liforma-ai-avatar-cost-is-hard-to-beat.png';

const heroImages = {
  'ai-avatar-training-scoring-feedback': aiAvatarTrainingScoringFeedback,
  'ai-character-memory-vs-state': aiCharacterMemoryVsState,
  'ai-character-website-embed': aiCharacterWebsiteEmbed,
  'avatar-character-agent-chatbot': avatarCharacterAgentChatbot,
  'deepgram-voice-agent-avatar': deepgramVoiceAgentAvatar,
  'elevenlabs-ai-agent-avatar': elevenlabsAiAgentAvatar,
  'gemini-live-avatar': geminiLiveAvatar,
  'http-vs-webrtc-ai-avatars': httpVsWebrtcAiAvatars,
  'interactive-ai-avatar-cost': interactiveAiAvatarCost,
  'interactive-ai-avatar-platforms-2026': interactiveAiAvatarPlatforms2026,
  'liforma-live-relay-motion': liformaLiveRelayMotion,
  'livekit-agent-avatar': livekitAgentAvatar,
  'multi-character-ai-conversations': multiCharacterAiConversations,
  'openai-realtime-avatar': openaiRealtimeAvatar,
  'photorealistic-vs-stylized-avatars': photorealisticVsStylizedAvatars,
  'rag-for-ai-avatars-small-fast-llms-domain-experts': ragForAiAvatars,
  'what-is-an-avatar-experience': whatIsAnAvatarExperience,
  'why-liforma-ai-avatar-cost-is-hard-to-beat': whyLiformaAiAvatarCost
} satisfies Record<string, ImageMetadata>;

export function heroImage(imageKey: string): ImageMetadata | undefined {
  return heroImages[imageKey as keyof typeof heroImages];
}
