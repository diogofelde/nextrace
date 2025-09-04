import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Força Rollup a usar build puro JS
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // evita módulos nativos
      external: ['epoll']
    }
  }
});
