import IGlobalComponent from '../Interfaces/IGlobalComponent'

declare global {
  var $VST: IGlobalComponent
}
globalThis.$VST = {
  _vueClassInstances: {},
  _vueClassProps: {},
  _vueClassWatchers: {},
  _vueComputed: {},
} as IGlobalComponent

// -----------------------
// Встроенный менеджер событий
// -----------------------
import eventManager from './EventManager'
globalThis.$VST.$on = (event: string, callback: (message: any) => any) => {
  eventManager.addEventListener(event, callback)
}
globalThis.$VST.$off = (event: string, callback: (message: any) => any) => {
  eventManager.removeEventListener(event, callback)
}
globalThis.$VST.$emit = (event: string, message?: any) => {
  eventManager.dispatchEvent(event, message)
}

// -----------------------
// Работа с датами
// -----------------------
import DT from './DT'
globalThis.$VST.DT = DT

export * from './VueClassComponent'
export * from './VueClass'
export * from './Props'
export * from './Watch'
export * from './Computed'
import BaseComponent from '../components/BaseComponent.vue'
import {VueClassComponent} from './VueClassComponent'
const VST = VueClassComponent
export {BaseComponent, VST}

