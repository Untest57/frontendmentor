import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import FastGlob from 'fast-glob';
import { defineConfig } from 'vite';

export default defineConfig({
  appType: 'mpa',
  root: 'src/',
  resolve: {
    alias: {
      // node_modules 폴더를 절대 경로로 설정
      '/node_modules': resolve(import.meta.dirname, 'node_modules'),
    },
  },
  build: {
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
