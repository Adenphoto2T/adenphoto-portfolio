import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://adenphoto2t.github.io',
  base: '/adenphoto-portfolio',
  vite: { plugins: [tailwindcss()] },
});
