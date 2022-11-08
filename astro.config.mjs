import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-template.netlify.app',
  integrations: [mdx(), svelte(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    rehypePlugins: [['rehype-external-links', {
      target: '_blank'
    }]]
  }
});