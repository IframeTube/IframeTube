import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: true,
    rollupOptions: {
      input: {
        'popup/popup': resolve(__dirname, 'src/popup/popup.js'),

        'embed/injectors/youtube.injector': resolve(__dirname, 'src/embed/injectors/youtube.injector.js'),
        'embed/injectors/proxy.injector': resolve(__dirname, 'src/embed/injectors/proxy.injector.js'),
        'embed/injectors/embed.injector': resolve(__dirname, 'src/embed/injectors/embed.injector.js'),

        'embed/youtube': resolve(__dirname, 'src/embed/youtube.js'),
        'embed/proxy': resolve(__dirname, 'src/embed/proxy.js'),
        'embed/embed': resolve(__dirname, 'src/embed/embed.js')
      },
      output: {
        entryFileNames: '[name].js'
      }
    },
    esbuild: {
      legalComments: 'none'
    }
  }
})
