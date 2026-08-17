import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://rsstudiodev.github.io',

  integrations: [react(), sitemap(), partytown(),

  ],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});