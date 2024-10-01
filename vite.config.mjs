import { dirname, extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import FastGlob from 'fast-glob';
import { defineConfig } from 'vite';

import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig({
  plugins: [
    ViteEjsPlugin({
      subPages: FastGlob.globSync('src/**/index.html')
        .map((file) => relative('src', dirname(file)))
        .filter((subPage) => subPage)
        .reverse(),
    }),
  ],
  appType: 'mpa',
  root: 'src/',
  resolve: {
    alias: {
      // node_modules 폴더를 절대 경로로 설정
      '/node_modules': resolve(import.meta.dirname, 'node_modules'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        FastGlob.globSync('src/**/index.html').map((file) => [
          relative('src', file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
    },
  },
});
