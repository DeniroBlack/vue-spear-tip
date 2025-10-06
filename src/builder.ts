import { createApp } from 'vue'

import * as LazyComponents from './components/LazyComponents'
import DocsWithExamples from './components/DocsWithExamples.vue'


const app = createApp(DocsWithExamples)
for(let n in LazyComponents) { // @ts-ignore
  app.component(n, LazyComponents[n])
}

app.mount('#app')