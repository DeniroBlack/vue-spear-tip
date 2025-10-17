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
    if(!globalThis.$VST._dynamic._vueClassInstances[target.constructor.name]) {
      globalThis.$VST._dynamic._vueClassInstances[target.constructor.name] = new target.constructor
      globalThis.$VST._dynamic._vueClassInstances[target.constructor.name].name =
        globalThis.$VST._dynamic._vueClassInstances[target.constructor.name]?.constructor?.name?.toString()
        ?? globalThis.$VST._dynamic._vueClassInstances[target.constructor.name]['name']
        ??  ''
    }

    let TypeObj: any = typeof propDataOrType == 'object' ? propDataOrType : {...{
      type: [propDataOrType, ...types]
    }}
    if(globalThis.$VST._dynamic._vueClassInstances[target.constructor.name][propertyKey]) {
      TypeObj.default = globalThis.$VST._dynamic._vueClassInstances[target.constructor.name][propertyKey]
    }

    if(!globalThis.$VST._dynamic._vueClassProps[target.constructor.name]) {
      globalThis.$VST._dynamic._vueClassProps[target.constructor.name] = {}
    }
    
    // todo проверить, почему не заменяется дочерний Prop на родительский
    // if (['DateField', 'FieldComponent'].includes(target.constructor.name) && propertyKey == 'placeholder') {
    //   console.log(
    //     target.constructor.name,
    //     TypeObj,
    //     propertyKey,
    //     TypeObj.default,
    //     globalThis.$VST._dynamic._vueClassInstances[target.constructor.name][propertyKey]
    //   )
    // }
    globalThis.$VST._dynamic._vueClassProps[target.constructor.name][propertyKey] = TypeObj
  }
}
