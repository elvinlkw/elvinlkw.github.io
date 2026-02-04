import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/elvinlkw.github.io/' : '/',
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env.PUBLIC_URL': JSON.stringify(
      process.env.NODE_ENV === 'production' ? '/elvinlkw.github.io' : ''
    ),
  },
});
