export type TagDefinition = {
	slug: string;
	label: string;
};

export const tags: TagDefinition[] = [
	{ slug: 'avatar-experiences', label: 'Avatar Experiences' },
	{ slug: 'product', label: 'Product' },
	{ slug: 'pricing', label: 'Pricing' },
	{ slug: 'technical', label: 'Technical' },
	{ slug: 'design', label: 'Design' },
	{ slug: 'training', label: 'Training' },
	{ slug: 'multi-character', label: 'Multi-Character AI' }
];

export function getTag(slug: string): TagDefinition | undefined {
	return tags.find((tag) => tag.slug === slug);
}
