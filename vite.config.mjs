import { extname, relative } from 'path';
import { fileURLToPath } from 'node:url';
import FastGlob from 'fast-glob';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        FastGlob.globSync('src/**/*.html').map((file) => [
          relative('src', file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
    },
  },
});
