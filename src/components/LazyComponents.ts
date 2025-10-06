import {defineAsyncComponent} from 'vue'
import {VueClass} from '../core'

const Button: VueClass = defineAsyncComponent(() => import('./Elements/Button')) as any

export {
  Button
}