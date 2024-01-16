import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    manifest: true,
    assetsDir: '',
  },
  optimizeDeps: {
    include: ['vue', 'vue/dist/vue.esm-bundler'],
  },
  plugins: [
    nxViteTsPaths(),
    vue({ script: { defineModel: true, propsDestructure: true } }),
    createHtmlPlugin({
      minify: true,
      /**
       * After writing entry here, you will not need to add script tags in `index.html`
       * The original tags need to be deleted
       */
      entry: '/src/main.ts',
    }),
  ],
  cacheDir: '../../../node_modules/.vite',
});
