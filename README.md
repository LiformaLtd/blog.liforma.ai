# liforma-content

Astro content application for Liforma.

## Routes

- `/blog` — articles
- `/resources` — reviews, comparisons, alternatives and integration guides
- `/content-assets` — assets owned by this deployment

The production canonical origin is `https://www.liforma.ai`. The deployment is intended to be mounted behind the main site with Vercel rewrites, so content changes can deploy independently from `www.liforma.ai`.

## Development

```bash
npm install
npm run dev
npm run check
npm run build
```

Content is stored in Astro content collections under `src/content/blog` and `src/content/resources`.
