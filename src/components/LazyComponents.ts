import {defineAsyncComponent} from 'vue'
import {VueClass} from '../core'
import FieldComponent from './FieldComponent.vue'

const Button: VueClass = defineAsyncComponent(() => import('./Elements/Button')) as any

const StringField: FieldComponent = defineAsyncComponent(() => import('./Fields/StringField')) as any
const SelectField: FieldComponent = defineAsyncComponent(() => import('./Fields/SelectField')) as any

export {
  Button,
  SelectField,
  StringField
}