// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind(), react(), mdx()],
  output: 'hybrid',
  adapter: netlify()
});