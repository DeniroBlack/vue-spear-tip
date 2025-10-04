import {defineAsyncComponent} from 'vue'
import {VueClass} from '../core'

let LazyComponents: {
  Button: VueClass
} = {
  Button: defineAsyncComponent(() => import('./Button')) as any,
}

export default LazyComponents