// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

import mdx from '@astrojs/mdx';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  experimental:{
    serverIslands: true,
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tailwind(),
    react(),
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: 'hybrid',
  adapter: netlify()
});