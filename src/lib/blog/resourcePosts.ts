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
