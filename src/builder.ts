import { createApp } from 'vue'
import * as LazyComponents from './components/LazyComponents'
import DocsWithExamples from './components/DocsWithExamples.vue'
import router from './components/Documentation/router'

const app = createApp(DocsWithExamples)

for(let n in LazyComponents) { // @ts-ignore
  app.component(n, LazyComponents[n])
}
app.use(router).mount('#app')
