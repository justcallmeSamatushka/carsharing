import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.dirname('src') },
      { find: 'shared', replacement: path.dirname('src/shared') },
      { find: 'views', replacement: path.dirname('src/views') },
      { find: 'widgets', replacement: path.dirname('src/widgets') },
    ],
  },
});
