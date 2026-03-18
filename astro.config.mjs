import { defineConfig } from 'astro/config';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
    preview: { allowedHosts: ['synedgebd.com', 'localhost', '127.0.0.1', 'synedgebd.netlify.app'] },
  },
});



