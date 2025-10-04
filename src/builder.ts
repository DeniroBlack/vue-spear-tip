import { createApp } from 'vue' // @ts-ignore
// import { createApp as createAppEsm } from 'vue/dist/vue.esm-bundler'

import LazyComponents from './components/LazyComponents'
import DocsWithExamples from './components/DocsWithExamples.vue'


const app = createApp(DocsWithExamples)
// // app.use(Tap)
for(let n in LazyComponents) { // @ts-ignore
  app.component(n, LazyComponents[n])
}

app.mount('#app')