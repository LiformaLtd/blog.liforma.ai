import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.liforma.ai',
  output: 'static',
  trailingSlash: 'never',
  integrations: [mdx(), svelte()]
});
