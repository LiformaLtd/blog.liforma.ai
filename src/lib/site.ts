export const SITE_NAME = 'Liforma';
export const SITE_URL = 'https://www.liforma.ai';
export const DEFAULT_DESCRIPTION =
  'Product updates, technical deep dives, and practical guides for Liforma avatar experiences.';
export const WWW_URL = 'https://www.liforma.ai';
export const DOCS_URL = 'https://docs.liforma.ai';

export const TAGS = [
  { slug: 'avatar-experiences', label: 'Avatar Experiences' },
  { slug: 'product', label: 'Product' },
  { slug: 'pricing', label: 'Pricing' },
  { slug: 'technical', label: 'Technical' },
  { slug: 'design', label: 'Design' },
  { slug: 'training', label: 'Training' },
  { slug: 'multi-character', label: 'Multi-Character AI' },
  { slug: 'website-ai', label: 'Website AI' },
  { slug: 'comparison', label: 'Comparison' },
  { slug: 'memory-state', label: 'Memory & State' },
  { slug: 'rag', label: 'RAG' }
] as const;

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, SITE_URL).toString();
}

export function pageTitle(title: string): string {
  return title === SITE_NAME ? title : `${title} · ${SITE_NAME}`;
}

export function imageSrc(imageKey: string, width: 480 | 960 | 1440 = 960): string {
  return `/content-assets/images/${imageKey}-${width}.webp`;
}

export function imageSrcset(imageKey: string): string {
  return ([480, 960, 1440] as const)
    .map((width) => `${imageSrc(imageKey, width)} ${width}w`)
    .join(', ');
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  });
}

export function tagLabel(slug: string): string {
  return TAGS.find((tag) => tag.slug === slug)?.label ?? slug;
}
