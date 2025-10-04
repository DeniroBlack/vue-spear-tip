import { normalizePath, defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'
import UnoCSS from 'unocss/vite' // @ts-ignore
import vue from '@vitejs/plugin-vue' // @ts-ignore
import { fileURLToPath } from 'node:url' // @ts-ignore
import { dirname, resolve } from 'node:path' // @ts-ignore
import {flowPlugin, esbuildFlowPlugin } from '@bunchtogether/vite-plugin-flow'

const __dirname = dirname(fileURLToPath(import.meta.url)) // @ts-ignore

export default defineConfig(({ command, mode }) => {
  const isExamplesBuild = mode === 'examples'
  
  const build = isExamplesBuild
    ? {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
        output: {
          dir:`${__dirname}/dist-examples`,
        },
      },
    }
    : {
      lib: {
        entry: {
          'BaseComponent': resolve(__dirname, 'src/components/BaseComponent.vue'),
          'Example': resolve(__dirname, 'src/components/Example.vue'),
          // Добавьте другие компоненты по необходимости
        },
        name: 'SpearTip', // Имя вашей библиотеки (для UMD/IIFE)
        // Имя выходного файла можно задать функцией
        fileName: (format: string, entryName: string) => `${entryName}.${format}.js`,
        formats: ['es', 'cjs']
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          dir:`${__dirname}/dist`,
        },
      },
      manifest: true,
    }
  
  return {
    // sourcemap: false,
    css: {
      devSourcemap: false,
    },
    server: {
      host: 'localhost',
      port: 5174,
      hmr: {
        protocol: 'ws',
        overlay: false,
        timeout: 5000,
      }
    },
    build,
    optimizeDeps: {
      // include: ['@unocss/extractor-pug'],
      esbuildOptions: {
        plugins: [esbuildFlowPlugin()],
        tsconfig: resolve(__dirname, 'tsconfig.json'),
        // tsconfigRaw: {
        //   compilerOptions: {
        //     experimentalDecorators: true
        //   }
        // },
      }
    },
    // publicPath: ".",
    plugins: [
      pugPlugin(),
      flowPlugin(),
      UnoCSS({
        configFile: './uno.config.ts',
      }),
      vue({
        template: {
          // preprocessOptions: { // <- ИИ предлагал, что бы pug не делал переносы, не помогло
          //   pug: {
          //     doctype: 'html',
          //     pretty: true,
          //     basedir: process.cwd()
          //   }
          // },
          // transformAssetUrls: {
          //   base: null,
          //   includeAbsolute: false,
          // },
        },
      }),
    ]
  }
})
