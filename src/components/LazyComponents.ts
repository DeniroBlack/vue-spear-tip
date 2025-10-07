import {defineAsyncComponent} from 'vue'
import {VueClass} from '../core'

const Button: VueClass = defineAsyncComponent(() => import('./Elements/Button')) as any

const Select: VueClass = defineAsyncComponent(() => import('./Fields/Select')) as any

export {
  Button,
  Select
}