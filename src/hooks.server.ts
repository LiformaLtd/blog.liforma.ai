import type { Handle } from '@sveltejs/kit';

const PRODUCTION_HOST = 'blog.liforma.ai';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	const host = event.url.hostname;
	if (host !== PRODUCTION_HOST && host !== 'localhost' && host !== '127.0.0.1') {
		response.headers.set('X-Robots-Tag', 'noindex, nofollow');
	}
	return response;
};
