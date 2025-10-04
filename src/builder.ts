import { createApp } from 'vue' // @ts-ignore
// import { createApp as createAppEsm } from 'vue/dist/vue.esm-bundler'

import lazyVueComponents from './components/lazy'
import Example from './components/Example.vue'


const app = createApp(Example)
// // app.use(Tap)
for(let n in lazyVueComponents) { // @ts-ignore
  app.component(n, lazyVueComponents[n])
}

app.mount('#app')