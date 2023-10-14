import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: 'shared', replacement: path.resolve(__dirname, './src/shared') },
      { find: 'views', replacement: path.resolve(__dirname, './src/views') },
      {
        find: 'widgets',
        replacement: path.resolve(__dirname, './src/widgets'),
      },
    ],
  },
});
