import {defineAsyncComponent} from 'vue'
import {VueClass} from '../core'
export * from '../kit/fields'
export * from '../kit/elements'
import FieldComponent from './FieldComponent.vue'

const CodeHighlight: VueClass = defineAsyncComponent(() => import('./CodeHighlight')) as any

export {
  CodeHighlight,
  FieldComponent
}