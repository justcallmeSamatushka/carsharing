import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: 'shared', replacement: path.resolve(__dirname, './src/shared') },
      { find: 'pages', replacement: path.resolve(__dirname, './src/pages') },
      {
        find: 'widgets',
        replacement: path.resolve(__dirname, './src/widgets'),
      },
    ],
  },
});
