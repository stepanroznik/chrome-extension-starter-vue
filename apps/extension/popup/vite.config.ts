import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        emptyOutDir: true,
        outDir: '../../extension/pages/popup',
        manifest: true,
    },
    optimizeDeps: {
        include: [
            'vue',
            'vue/dist/vue.esm-bundler',
        ],
    },
    plugins: [
        nxViteTsPaths(),
        vue({ script: { defineModel: true, propsDestructure: true } }),
        checker({
            enableBuild: false,
            vueTsc: { tsconfigPath: './tsconfig.app.json' },
        }),
        createHtmlPlugin({
            minify: true,
            /**
             * After writing entry here, you will not need to add script tags in `index.html`
             * The original tags need to be deleted
             */
            entry: '/src/main.ts',
        }),
    ],
    cacheDir: '../../node_modules/.vite',
});
