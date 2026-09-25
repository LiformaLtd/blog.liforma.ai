# blog.liforma.ai

Liforma product blog — SvelteKit app at `https://blog.liforma.ai`.

## Local

```sh
npm install
npm run dev
```

Runs on **http://localhost:3014** (`strictPort`).

## Scripts

- `npm run verify:commit` — check + lint + unit tests
- `npm run verify` — verify:commit + production build

## Content

- Editorial posts: `src/lib/blog/posts.ts` + `src/routes/<slug>/+page.svelte`
- Resources (SEO/GEO): `src/lib/blog/resourcePosts.ts` + `src/routes/resources/<slug>/+page.svelte`
- Tags/authors: `src/lib/blog/tags.ts`, `src/lib/blog/authors.ts`

Set `PUBLIC_BLOG_EXPERIENCE_ID` for the site-wide ExperienceWidget (optional in preview).

The widget uses npm `@liforma/client`. When a new SDK is published, bump that dependency here and push so Vercel republishes the blog. A registry publish does not update this site by itself.

Plan: [`docs/plans/2026/09/blog-liforma-ai.plan.md`](../docs/plans/2026/09/blog-liforma-ai.plan.md).
