export type AuthorDefinition = {
	id: string;
	name: string;
	/** Schema.org type for BlogPosting.author */
	type?: 'Person' | 'Organization';
	role?: string;
	url?: string;
};

export const authors: AuthorDefinition[] = [
	{
		id: 'liforma-team',
		name: 'The Liforma Team',
		type: 'Organization',
		role: 'Product & engineering',
		url: 'https://www.liforma.ai'
	}
];

export function getAuthor(id: string): AuthorDefinition | undefined {
	return authors.find((author) => author.id === id);
}
