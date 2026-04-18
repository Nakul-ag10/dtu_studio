import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],

  server: {
    proxy: {
      '/api': {
        target: 'https://dtu-studio-1.onrender.com',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'https://dtu-studio-1.onrender.com',
        changeOrigin: true,
      },
    },
  },

  build: {
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-pdf': ['react-pdf'],
          'ui-components': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
          ],
        },
      },
    },
  },
})
