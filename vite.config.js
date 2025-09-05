import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Força Rollup a usar build puro JS e adiciona alias "@"
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      // evita módulos nativos
      external: ['epoll']
    }
  }
});