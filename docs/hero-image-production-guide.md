# Blog hero image production guide

This guide defines the visual system and production brief for every current Liforma Blog and Resource hero image.

The goal is simple: **show the real Liforma product whenever the article discusses something Liforma can visibly demonstrate.** Generated imagery should mainly be used to create assets *inside* Liforma experiences, not as a substitute for showing the product.

## Visual strategy

Target mix across the library:

- **~70% product-derived imagery** — real Liforma player, Studio, characters, scenes, stats, feedback, embeds and knowledge UI.
- **~20% product-anchored diagrams** — real Liforma UI or avatar combined with a clean architecture/comparison diagram.
- **~10% generated artwork** — only where the subject is inherently conceptual or where generated assets are being shown *as part of a real Liforma experience*.

Avoid generic AI-art hero images unless there is genuinely no product or diagrammatic way to communicate the subject.

## Shared hero specification

All heroes should:

- be composed at **1440 × 810 (16:9)**;
- also export at **960 × 540** and **480 × 270**;
- avoid baking the article title into the image;
- keep the central 70% visually meaningful so mobile crops still work;
- leave at least ~48 px of breathing room around the outer edge;
- use real Liforma screenshots at high DPI, ideally captured at 2× and downsampled;
- remove browser chrome unless the browser context itself is part of the story;
- hide debug panels, personal data, IDs, API keys and internal-only controls;
- use realistic demo content rather than Lorem Ipsum;
- use the same small set of polished showcase characters repeatedly so the blog develops a recognisable visual identity;
- favour one dominant focal point over dense collages;
- use labels only when they add meaning to a technical diagram;
- never imply an external provider UI or capability that is not actually being used.

## Recommended visual families

### A. Product showcase

Use for product/category/use-case articles.

Composition:

- 65–75%: real Liforma player/experience capture.
- 25–35%: one or two secondary real product fragments such as Studio, feedback, stats, scene selector or embed.
- Background: simple Liforma editorial background, not a generated environment behind the screenshots.
- No title text.

### B. Product + architecture diagram

Use for technical articles.

Composition:

- one real Liforma character/player as the visual anchor;
- 3–5 simplified labelled system blocks;
- arrows showing only the concept relevant to the article;
- no implementation secrets, model names, provider-selection logic or internal metrics.

### C. Split comparison

Use for “versus” and design comparisons.

Composition:

- left/right or 2×2 split;
- same character or same task where possible so the difference is controlled;
- real product image on at least one side;
- minimal text labels.

### D. Provider integration

Use for ElevenLabs, OpenAI Realtime, Gemini Live, Deepgram and LiveKit Resource pages.

Composition:

- left: provider name / simple provider-side representation;
- centre: audio/speech connector;
- right: **the same real Liforma character** across all five pages;
- small Liforma Experience/player fragment behind or around the character;
- identical layout across all five pages so they read as one family;
- provider-specific accent can be subtle, but do not redesign the whole hero per provider.

## Showcase experiences worth maintaining

A small set of polished real experiences will cover most future hero images:

1. **Customer-service training** — employee + customer + optional coach, stats and feedback.
2. **Difficult management conversation** — manager/employee, hidden state and coaching.
3. **Maths tutor** — teaching simultaneous equations with a clean education set.
4. **Website assistant** — embedded/floating character on a polished example website.
5. **Multi-character panel / meeting** — 2–3 visible characters in one scene.
6. **Fantasy / game scene** — stylised character, strong world-building and state.
7. **Technical assistant** — character backed by a Knowledge Pack / documentation.
8. **Premium realistic character** — for realism/stylisation and provider integration pages.

The point is not to invent a new demo for every article. Reusing recognisable Liforma experiences creates brand memory.

---

# Blog post briefs

## 1. What Is an Avatar Experience? From AI Characters to Interactive Worlds

**Slug:** `what-is-an-avatar-experience`

**Hero family:** Product showcase.

**Primary image:** A polished real Liforma Experience in the player, ideally a scene with one strong character in a visually distinctive set.

**Secondary fragments:** Small real UI fragments showing:
- another scene/backdrop from the same Experience;
- a second character or alternate costume;
- a stats/feedback or Experience structure fragment.

**Composition:** Main finished Experience large on the right/centre. On the left, three smaller floating cards labelled only if necessary: **Character**, **Scene**, **State / Feedback**.

**Must communicate:** Liforma is not merely a talking face; an Experience combines character, appearance, world and interaction.

**Avoid:** abstract “AI world” artwork, generic holograms, fake UI.

**Ideal source:** a deliberately polished canonical Liforma showcase Experience. This should become the visual source for many future product articles.

**Suggested image key:** `what-is-an-avatar-experience`

---

## 2. AI Avatar vs AI Character vs Visual Agent vs Chatbot: What's the Difference?

**Slug:** `ai-avatar-vs-ai-character-vs-visual-agent-vs-chatbot`

**Hero family:** Product-anchored explanatory diagram.

**Primary image:** The same real Liforma character shown progressively in four conceptual contexts.

**Composition:** Four horizontal stages:
1. **Avatar** — isolated visual character.
2. **Character** — character + identity/personality card.
3. **Agent** — character + tools/action cue.
4. **Experience** — character in a complete Liforma scene with state/other participants.

A tiny chatbot bubble can sit below/alongside as the interface comparison, rather than making it a fifth equal stage.

**Must communicate:** presentation → identity → capability → orchestration.

**Avoid:** four unrelated AI-generated people.

**Suggested image key:** `avatar-character-agent-chatbot`

---

## 3. How Much Do Interactive AI Avatars Cost? 2026 Pricing Compared

**Slug:** `how-much-do-interactive-ai-avatars-cost`

**Hero family:** Product + data visualisation.

**Primary image:** Real Liforma character/player on one side.

**Secondary visual:** Clean cost-stack bars representing different charging models: generated speech, connected session, avatar-only, full stack. Do not need exact competitor prices in the hero because those date quickly.

**Composition:** Liforma character on right; four simple cost bars or meter strips on left. Highlight that different products charge for different units.

**Must communicate:** “price per minute” is not one comparable thing.

**Avoid:** floating dollar signs, coins, generic calculator imagery.

**Suggested image key:** `interactive-ai-avatar-cost`

---

## 4. Does Conversational AI Really Need WebRTC? HTTP vs WebRTC for AI Avatars

**Slug:** `does-conversational-ai-need-webrtc`

**Hero family:** Product + architecture diagram.

**Primary image:** Same real Liforma character at the right edge.

**Composition:** Two clean paths ending at the same character:
- top: **Persistent realtime session / WebRTC**;
- bottom: **Turn request / HTTP**.

Show user microphone at far left. The HTTP path can visually “pulse” only during a turn; WebRTC path remains continuously connected.

**Must communicate:** both are valid architectures; Liforma can exploit request-oriented turn processing when continuous media is unnecessary.

**Avoid:** implying WebRTC is obsolete or technically inferior.

**Suggested image key:** `http-vs-webrtc-ai-avatars`

---

## 5. Photorealistic vs Stylized AI Avatars: Why More Realistic Isn't Always Better

**Slug:** `photorealistic-vs-stylized-ai-avatars`

**Hero family:** Split comparison.

**Primary image:** Same apparent character identity or closely matched character concept presented in:
- realistic / photographic form;
- stylised Liforma form.

Both should be placed in similarly composed scenes.

**Best version:** Create both as actual Liforma avatars/experiences and capture them in the player rather than generating a standalone before/after image.

**Must communicate:** style is a design choice, not a quality ladder.

**Avoid:** deliberately making the photorealistic version creepy or poor quality.

**Suggested image key:** `photorealistic-vs-stylized-avatars`

---

## 6. How to Create an Interactive AI Role-Play Without Coding

**Slug:** `how-to-create-interactive-ai-role-play-without-coding`

**Hero family:** Product showcase.

**Primary image:** Finished role-play Experience in the player.

**Secondary fragment:** Real authoring/Studio view showing the same Experience being configured.

**Composition:** “Build → Play” visual: Studio/editor on left, polished finished experience on right, subtle arrow between them.

**Must show:** character, scene, and at least one authoring concept such as scenes/stats/feedback.

**Avoid:** code windows, generic no-code blocks unrelated to Liforma.

**Suggested image key:** `no-code-ai-role-play`

---

## 7. Multi-Character AI: How to Build Conversations With Multiple AI Characters

**Slug:** `multi-character-ai-conversations`

**Hero family:** Product showcase.

**Primary image:** Real Liforma multi-character Experience with 2–3 clearly distinct characters visible or represented in the same scene.

**Secondary visual:** Tiny scene/cast strip showing who is active now and perhaps who enters later.

**Best demo:** panel, negotiation, customer + manager + coach, or mystery scene.

**Must communicate:** one shared experience with multiple identities, not three separate chat windows.

**Avoid:** generic “three AI faces” montage.

**Suggested image key:** `multi-character-ai-conversations`

---

## 8. AI Avatars for Training: Building Role-Plays With Scoring, State and Feedback

**Slug:** `ai-avatars-for-training-role-play-scoring-state-feedback`

**Hero family:** Product showcase.

**Primary image:** Real customer-service or management training scene.

**Secondary fragments:** Real stats during the interaction and real end-of-session feedback/coaching UI.

**Composition:** Character/player occupies ~60%; stats panel and feedback card occupy ~40%.

**Must show:** the training is measurable and consequential, not merely a conversation.

**Avoid:** fake dashboards or generic LMS screenshots.

**Suggested image key:** `ai-avatar-training-scoring-feedback`

---

## 9. How to Add an AI Character to Your Website

**Slug:** `how-to-add-an-ai-character-to-your-website`

**Hero family:** Product showcase.

**Primary image:** Actual Liforma ExperienceWidget on a polished real or purpose-built demo website.

**Composition:** Browser page visible enough to establish context, with floating/open Liforma assistant large enough to see the character clearly. Add one enlarged crop of the character/widget if needed.

**Best demo:** support/product website where the assistant visibly relates to page content.

**Must communicate:** this is an actual website integration, not a mock chatbot.

**Avoid:** full browser chrome, fake chat widgets, giant avatar covering the site.

**Suggested image key:** `ai-character-website-embed`

---

## 10. The Best Interactive AI Avatar Platforms in 2026

**Slug:** `best-interactive-ai-avatar-platforms-2026`

**Hero family:** Comparison.

**Primary image:** Strong real Liforma player/character.

**Secondary visual:** restrained five-column or five-card platform taxonomy around it — e.g. **Experience platform**, **photorealistic avatar**, **conversational video**, **visual knowledge agent**, **avatar rendering layer**.

Provider names can appear as small text labels if needed, but avoid making competitor branding the dominant visual.

**Must communicate:** these platforms increasingly solve different problems.

**Avoid:** five generic robots, a “winner podium”, misleading product screenshots.

**Suggested image key:** `interactive-ai-avatar-platforms-2026`

---

## 11. AI Character Memory vs State: Why Remembering the Conversation Isn't Enough

**Slug:** `ai-character-memory-vs-state`

**Hero family:** Product + architecture diagram.

**Primary image:** Real Liforma character in a scene.

**Composition:** Three clean inputs feeding the character/experience:
- **Memory** — one prior interaction card;
- **Knowledge** — document/Knowledge Pack card;
- **State** — structured values such as trust, objective complete, scene active.

State should visually connect to the *world/experience*, not only the character.

**Must communicate:** memory, knowledge and current state are different layers.

**Avoid:** glowing brain art.

**Suggested image key:** `ai-character-memory-vs-state`

---

## 12. Three Ways to Build With Liforma

**Slug:** `three-ways-to-build-with-liforma`

**Hero family:** Product + architecture diagram.

**Primary image:** One real Liforma character/player on the right.

**Composition:** Three parallel pipelines feeding the same visual character:
- **Live** — STT → Intelligence → TTS → Animation;
- **Relay** — Liforma speech layers around **Your intelligence**;
- **Motion** — **Your voice agent** → Liforma animation.

Use Liforma branding consistently; external provider names can appear subtly under Motion as examples.

**Must communicate:** one visual platform, three integration depths.

**Avoid:** too many boxes or implementation details.

**Suggested image key:** `liforma-live-relay-motion`

---

## 13. RAG for AI Avatars: Why Your Character Doesn't Always Need a Frontier LLM

**Slug:** `rag-for-ai-avatars-small-fast-llms-domain-experts`

**Hero family:** Product + architecture diagram.

**Primary image:** Real Liforma expert character — ideally website support or maths tutor.

**Secondary real fragment:** Knowledge Pack/document UI if available.

**Composition:** A small set of documents → **Knowledge Pack / retrieval** → compact “fast model” block → real Liforma character. Add one tiny retrieved passage card to make the mechanism obvious.

**Best variant:** maths tutor on right, with simultaneous-equations lesson documents being retrieved on left.

**Must communicate:** expert knowledge comes from the right evidence, not merely a giant model.

**Avoid:** generic database cylinders, huge “AI brain” versus tiny “AI brain” cartoons.

**Suggested image key:** `rag-ai-avatar-domain-expert`

---

## 14. Why Liforma's AI Avatar Cost Will Be Hard to Beat

**Slug:** `why-liforma-ai-avatar-cost-is-hard-to-beat`

**Hero family:** Product + architecture diagram.

**Primary image:** Real Liforma character/player at the top or right as the visible output.

**Composition:** Four stacked layers beneath/behind it:
1. **Browser compute** — STT + animation close to the user.
2. **Turn-based transport** — request-oriented HTTP/serverless.
3. **Optimised inference** — generic model/inference block, no model names.
4. **Elastic GPU layer** — abstract pool of available GPUs/providers.

Use downward narrowing or compounding arrows to communicate that each layer reduces the cost passed to the next.

**Must communicate:** the moat is multi-layered and systemic.

**Do not reveal:** model names, providers, internal cost, throughput, cold-start timings, quantisation, orchestration rules or provider-selection logic.

**Avoid:** dollar signs and “90% cheaper” marketing art.

**Suggested image key:** `liforma-cost-architecture`

---

# Resource page briefs

The five voice-provider pages should share a single composition so the Resources index reads like a deliberate collection.

## Shared provider-integration template

- Left 25%: provider name and a simple representation of its voice/agent layer.
- Middle 15%: waveform / realtime audio connector moving right.
- Right 60%: **the same real Liforma character in the same player composition**.
- Small footer labels: **Voice agent** → **Speech** → **Liforma visual layer**.
- No article title in the image.
- Keep provider branding subordinate to the actual Liforma character.
- Prefer text labels to copying large screenshots of provider dashboards.
- If using provider logos, use official current assets and normal nominative trademark treatment.

This family should make the message instantly recognisable: **keep your existing voice agent; add Liforma as the face.**

---

## 15. How to Add a Realtime Avatar to an ElevenLabs ElevenAgent

**Slug:** `resources/elevenlabs-ai-agent-avatar`

**Primary image:** Shared provider template.

**Provider-side label:** **ElevenLabs ElevenAgent**

**Provider-specific cue:** expressive waveform / voice indicator.

**Liforma side:** premium visually appealing character that makes “put a face on your ElevenLabs agent” immediately obvious.

**Optional small annotation:** **Keep your ElevenLabs voice, prompts & tools**.

**Avoid:** showing a fake ElevenLabs dashboard.

**Suggested image key:** `elevenlabs-ai-agent-avatar`

---

## 16. How to Add an Avatar to the OpenAI Realtime API

**Slug:** `resources/openai-realtime-avatar`

**Primary image:** Shared provider template.

**Provider-side label:** **OpenAI Realtime API**

**Provider-specific cue:** bidirectional realtime audio connection, perhaps microphone + waveform.

**Optional annotation:** **Native speech-to-speech stays in OpenAI**.

**Liforma side:** same character/crop used for ElevenLabs page.

**Suggested image key:** `openai-realtime-avatar`

---

## 17. How to Add an Avatar to the Gemini Live API

**Slug:** `resources/gemini-live-avatar`

**Primary image:** Shared provider template.

**Provider-side label:** **Gemini Live API**

**Provider-specific cue:** audio plus subtle multimodal camera/text icons, without making the hero busy.

**Optional annotation:** **Gemini stays the realtime multimodal brain**.

**Liforma side:** same canonical character.

**Suggested image key:** `gemini-live-avatar`

---

## 18. How to Add an Avatar to a Deepgram Voice Agent

**Slug:** `resources/deepgram-voice-agent-avatar`

**Primary image:** Shared provider template.

**Provider-side label:** **Deepgram Voice Agent**

**Provider-specific cue:** simple listen → think → speak mini-flow collapsed into one provider block.

**Optional annotation:** **Keep Deepgram's voice-agent loop**.

**Liforma side:** same canonical character.

**Suggested image key:** `deepgram-voice-agent-avatar`

---

## 19. How to Add an Avatar to a LiveKit Agent

**Slug:** `resources/livekit-agent-avatar`

**Primary image:** Shared provider template.

**Provider-side label:** **LiveKit Agent**

**Provider-specific cue:** a remote audio track / room participant flowing into Liforma.

**Optional annotation:** **Keep your room, agent & model stack**.

**Liforma side:** same canonical character.

**Suggested image key:** `livekit-agent-avatar`

---

## 20. Liforma vs D-ID: choosing an interactive avatar platform

**Slug:** `resources/liforma-vs-d-id`

**Hero family:** Split comparison.

**Primary Liforma side:** real Liforma interactive Experience with visible scene context.

**D-ID side:** if using a D-ID product image, use an official current public screenshot and clearly present it as D-ID. Otherwise use a simple labelled “talking-head / visual-agent video” representation rather than inventing UI.

**Composition:** side-by-side with a neutral centre divider:
- **Liforma — interactive character experience**
- **D-ID — visual agent / talking-head workflow**

**Must communicate:** category/architecture difference, not “winner vs loser”.

**Avoid:** intentionally flattering Liforma while using an old or poor D-ID screenshot.

**Suggested image key:** retain `liforma-vs-did` unless replacing the existing artwork.

---

# Capture checklist

Before approving a screenshot-based hero:

- [ ] It is a real Liforma build, not a design mock pretending to be the product.
- [ ] The character is large enough to read at 480 px wide.
- [ ] Important UI is readable after downscaling.
- [ ] No debug controls, IDs, tokens, private data or internal URLs are visible.
- [ ] The screenshot uses an attractive deliberate demo experience, not a developer test.
- [ ] The character expression and pose look intentional.
- [ ] The set/backdrop supports the article subject.
- [ ] There is no excessive empty UI chrome.
- [ ] The image works without title text.
- [ ] The 16:9 composition survives centre cropping.
- [ ] The 480 px export still communicates the core idea.

# Recommended capture workflow

For repeatability, add a small internal **marketing capture mode** to Liforma:

- fixed capture viewport, ideally 1440 × 810 or 2880 × 1620 at 2×;
- query/config option to hide non-essential player controls;
- deterministic Experience/scene selection;
- deterministic character framing and idle pose;
- optional deterministic subtitle/state/feedback state;
- ability to freeze animation on a visually good frame;
- no debug overlays;
- no personal account data;
- one-click or Playwright screenshot export.

This should be an internal production aid, not necessarily a public product feature.

A useful convention would be a route or flag such as:

`?marketingCapture=1&scene=<id>&frame=<preset>`

The exact implementation is less important than making captures repeatable. Once a good Experience is selected, marketing should be able to reproduce the same clean hero next month without manually rebuilding the scene.

# Production order

Prioritise the heroes that show the product most strongly and will establish the visual language for the rest:

1. **What Is an Avatar Experience?** — canonical product showcase.
2. **AI Avatars for Training** — player + stats + feedback.
3. **Multi-Character AI** — strongest proof of differentiated product.
4. **How to Add an AI Character to Your Website** — real embed.
5. **Three Ways to Build With Liforma** — establishes technical diagram style.
6. **ElevenLabs resource** — establishes provider-integration template.
7. Replicate the provider template for OpenAI, Gemini, Deepgram and LiveKit.
8. **RAG for AI Avatars** — Knowledge Pack style.
9. **Why Liforma's Cost Will Be Hard to Beat** — architecture style.
10. Complete the remaining comparison/category articles.

Once the first six are approved, most of the remaining heroes become variations of established layouts rather than new design problems.
