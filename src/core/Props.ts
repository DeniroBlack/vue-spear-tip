// @ts-ignore
import {DebuggerEvent} from 'vue/dist/vue.esm-bundler'

type VuePropsTypes = typeof String | typeof Number | typeof Array | typeof Boolean | typeof Object |
  typeof Date | typeof Function | typeof Symbol | null

type WatchCallback<T> = (
  value: T,
  oldValue: T,
  onCleanup: (cleanupFn: () => void) => void
) => void

interface VuePropObj {
  type: VuePropsTypes | VuePropsTypes[],
  validator?: Function,
  default?: any,
  required?: boolean,
  event?: string,
  deep?: boolean, // default: false
  handler?: WatchCallback<any> | string
  immediate?: boolean // default: false
  flush?: 'pre' | 'post' | 'sync' // default: 'pre'
  onTrack?: (event: DebuggerEvent) => void
  onTrigger?: (event: DebuggerEvent) => void
}

/**
 * Трансформация свойства во vue property
 * @param propDataOrType
 * @param types
 * @constructor
 */
export const Prop = (
  propDataOrType: VuePropsTypes | VuePropObj,
  ...types: (VuePropsTypes)[]
): any => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    // @ts-ignore
    if(!globalThis.$VST._vueClassInstances[target.constructor.name]) {
      // @ts-ignore
      globalThis.$VST._vueClassInstances[target.constructor.name] = new target.constructor
      // @ts-ignore
      globalThis.$VST._vueClassInstances[target.constructor.name].name =
          // @ts-ignore
          globalThis.$VST._vueClassInstances[target.constructor.name]?.constructor?.name?.toString()
          // @ts-ignore
          ?? globalThis.$VST._vueClassInstances[target.constructor.name]['name']
          ??  ''
    }

    let TypeObj = typeof propDataOrType == 'object' ? propDataOrType : {
      type: [propDataOrType, ...types]
    }
    // @ts-ignore
    if(globalThis.$VST._vueClassInstances[target.constructor.name][propertyKey]) {
      // @ts-ignore
      TypeObj.default = globalThis.$VST._vueClassInstances[target.constructor.name][propertyKey]
    }

    // @ts-ignore
    if(!globalThis.$VST._vueClassProps[target.constructor.name]) {
      // @ts-ignore
      globalThis.$VST._vueClassProps[target.constructor.name] = {}
    }

    // @ts-ignore
    globalThis.$VST._vueClassProps[target.constructor.name][propertyKey] = TypeObj
    // console.log(globalThis.$VST._vueClassInstances[target.constructor.name], target.constructor.name, globalThis.$VST._vueClassProps[target.constructor.name])
  }
}
