import {defineAsyncComponent} from 'vue'
import {VueClass} from '../core'
import FieldComponent from './FieldComponent.vue'

const CodeHighlight: VueClass = defineAsyncComponent(() => import('./CodeHighlight')) as any

const Button: VueClass = defineAsyncComponent(() => import('./Elements/Button')) as any
const Tabs: VueClass = defineAsyncComponent(() => import('./Elements/Tabs')) as any

const StringField: FieldComponent = defineAsyncComponent(() => import('./Fields/StringField')) as any
const SelectField: FieldComponent = defineAsyncComponent(() => import('./Fields/SelectField')) as any
const DateField: FieldComponent = defineAsyncComponent(() => import('./Fields/DateField')) as any

export {
  Button,
  Tabs,
  CodeHighlight,
  SelectField,
  StringField,
  DateField
}