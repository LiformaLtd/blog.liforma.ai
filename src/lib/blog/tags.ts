export type TagDefinition = {
	slug: string;
	label: string;
};

export const tags: TagDefinition[] = [
	{ slug: 'avatar-experiences', label: 'Avatar Experiences' },
	{ slug: 'product', label: 'Product' },
	{ slug: 'engineering', label: 'Engineering' }
];

export function getTag(slug: string): TagDefinition | undefined {
	return tags.find((tag) => tag.slug === slug);
}
