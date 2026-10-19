import { defineConfig } from 'astro/config';

// BASE_PATH is set to '/GraduationBalloonsnearme/' by the GitHub Pages workflow.
// Netlify builds from site root, so it uses '/'.
export default defineConfig({
  output: 'static',
  base: process.env.BASE_PATH || '/',
  build: { inlineStylesheets: 'auto', format: 'file' }
});
