import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pkg from './package.json';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const externals = Object.keys(pkg.peerDependencies);

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'MyLib',
      formats: ['es', 'umd'],
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: externals,
    },
  },
});
