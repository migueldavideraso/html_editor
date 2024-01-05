
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import * as path from 'path'


export default defineConfig({

  plugins: [
		svelte()
	],

  resolve: {
    alias: {
      ['@']: path.resolve('./src')
    },
	},

  preview: {
    port: 8080,
  },

  build: {

    lib: {
      entry: path.resolve(__dirname, "./src/app.ts"),
      fileName: "min",
      formats: ["cjs", "es"],
    },

    emptyOutDir: false,

    outDir: './package/src/',
    // target: 'es2021',
    // rollupOptions: {
    //   input: {
    //     min: './src/app.ts',
    //   },
    //   output: [
    //     {
    //       entryFileNames: 'min.js',
    //       chunkFileNames: 'min.[hash].js',
    //       assetFileNames: 'min.[ext]',
    //     },
    //   ],
    // },
  },
})
