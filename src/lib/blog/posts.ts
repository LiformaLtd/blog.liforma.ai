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
		title: 'What is an Avatar Experience?',
		description:
			'Avatar Experiences are reusable, publishable configurations that turn characters, agents, voices, and worlds into live interactive sessions — in the browser.',
		datePublished: '2026-09-22',
		authorId: 'liforma-team',
		tags: ['avatar-experiences', 'product'],
		imageKey: 'avatar-experience',
		imageAlt: 'Stylized illustration representing a Liforma Avatar Experience'
	}
];
