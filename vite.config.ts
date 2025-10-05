import { normalizePath, defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'
import UnoCSS from 'unocss/vite' // @ts-ignore
import vue from '@vitejs/plugin-vue' // @ts-ignore
import { fileURLToPath } from 'node:url' // @ts-ignore
import { dirname, resolve } from 'node:path' // @ts-ignore
import {flowPlugin, esbuildFlowPlugin } from '@bunchtogether/vite-plugin-flow' // @ts-ignore
import {copyFile} from 'fs'
import typescript from '@rollup/plugin-typescript'


const __dirname = dirname(fileURLToPath(import.meta.url))
copyFile(resolve(__dirname, 'index.d.ts'), resolve(__dirname, 'dist/vue-spear-tip.d.ts'), () => {}) // @ts-ignore
copyFile(resolve(__dirname, 'src/resources/VST_LOGO.png'), resolve(__dirname, 'docs/VST_LOGO.png'), () => {}) // @ts-ignore

export default defineConfig(({ command, mode }) => {
  const isExamplesWithDocsBuild = mode === 'examples'
  
  const build = isExamplesWithDocsBuild
    ? {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
        output: {
          dir:`${__dirname}/docs`,
          assetFileNames: () => 'static/[name]-[hash][extname]',
          chunkFileNames: "static/[name]-[hash].js",
          entryFileNames: "static/[name]-[hash].js",
        },
      },
    }
    : {
      lib: {
        entry: {
          'index.js': resolve(__dirname, 'src/index.ts'),
        },
        name: 'VueSpearTip',
        fileName: (format: string, entryName: string) => `vue-spear-tip.${format}.js`,
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
      pugPlugin(),
      flowPlugin(),
      UnoCSS({
        configFile: './uno.config.ts',
      }),
      ...(isExamplesWithDocsBuild ? [] : [
        typescript({
          declaration: true,
          declarationDir: './dist',
          rootDir: './src',
        })
      ]),
    ]
  }
})
