import IGlobalComponent from '../Interfaces/IGlobalComponent'

declare global {
  var __VST: IGlobalComponent
}
globalThis.__VST = {
  _vueClassInstances: {},
  _vueClassProps: {},
  _vueClassWatchers: {},
  _vueComputed: {},
}

export * from './VueClassComponent'
export * from './VueClass'
export * from './Props'
export * from './Watch'
export * from './Computed'
import BaseComponent from '../components/BaseComponent.vue'
export {BaseComponent}

