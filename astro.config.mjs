// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with your actual site URL, e.g., 'https://susamn.github.io'
  site: 'https://example.com',
  
  // If your repo is NOT your username.github.io (e.g. it is 'my-portfolio'),
  // add the repo name here:
  // base: '/my-portfolio',

  vite: {
    plugins: [tailwindcss()]
  }
});
