import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  // presetWebFonts,
  presetWind,
  presetTagify,
  transformerDirectives,
  // transformerVariantGroup
} from 'unocss'
import { presetScalpel } from 'unocss-preset-scalpel'
import transformerCompileClass from '@unocss/transformer-compile-class'
// const extractorPug = require('@unocss/extractor-pug')


export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetWind(),
    presetIcons(),
    presetTagify(),
    presetScalpel(),
    presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     // ...
    //   },
    // }),
  ], // Presets
  transformers: [
    transformerCompileClass(),
    transformerDirectives(),
  ],
  
  // TODO написать свой pug extractor без esm
  // extractors: [
  //   extractorPug()
  // ]
})


