import { error } from '@sveltejs/kit';
import { getTag, listPostsByTag, listTags } from '$lib/blog';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => listTags().map((tag) => ({ tag: tag.slug }));

export const load: PageLoad = ({ params }) => {
	const tag = getTag(params.tag);
	if (!tag) error(404, 'Tag not found');
	const posts = listPostsByTag(tag.slug);
	if (posts.length === 0) error(404, 'Tag not found');
	return { tag, posts };
};
