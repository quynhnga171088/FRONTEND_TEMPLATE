import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    // Fix: HMR tự reload khi sửa SCSS @use dependency (hero.scss, button.scss, ...)
    { name: 'scss-hmr', handleHotUpdate: ({ file, server }) => {
      if (file.endsWith('.scss')) { server.ws.send({ type: 'full-reload' }); return []; }
    }}
  ],
  server: {
    port: 5175,
    strictPort: true
  },
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      src: resolve(__dirname, 'src')
    }
  }
});

