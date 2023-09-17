/// <reference types="vitest" />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
  const mdx = (await import('@mdx-js/rollup')).default;
  return {
    cacheDir: './node_modules/.vite/protokol-ui',
    optimizeDeps: {
      exclude: ['@mdx-js/react'],
      include: ['react/jsx-runtime'],
    },
    server: {
      port: 1111,
      host: true,
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },

    plugins: [
      {
        enforce: 'pre',
        ...mdx({
          providerImportSource: '@mdx-js/react',
        }),
      },
      react(),
      nxViteTsPaths(),
    ],
  };
});
