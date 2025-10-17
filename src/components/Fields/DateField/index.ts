import {defineAsyncComponent} from 'vue'
import IDateField from './IDateField' // @ts-ignore need to build types
export default defineAsyncComponent(() => import('./DateField.vue')) as IDateField