export type BlogPost = {
	slug: string;
	title: string;
	description: string;
	datePublished: string;
	dateModified?: string;
	authorId: string;
	tags: string[];
	imageKey: string;
	imageAlt: string;
	draft?: boolean;
};

export const blogPosts: BlogPost[] = [
	{
		slug: 'what-is-an-avatar-experience',
		title: 'What Is an Interactive AI Character? From AI Avatars to Interactive Experiences',
		description:
			'Learn how interactive AI characters go beyond talking avatars with multiple characters, scenes, state, environments and outcomes — and how Liforma turns them into complete experiences.',
		datePublished: '2026-09-22',
		dateModified: '2026-09-22',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'product'],
		imageKey: 'avatar-experience',
		imageAlt: 'Stylized illustration representing a Liforma interactive AI character experience'
	}
];
