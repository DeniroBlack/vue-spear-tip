import {defineAsyncComponent} from 'vue'

let lazyVueComponents = {
  Button: defineAsyncComponent(() => import('./Button')),
}

export default lazyVueComponents