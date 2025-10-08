/**
 * Трансформация метода в vue computed функцию
 * @param {String} propertyName Название свойства
 * @constructor
 */
export const Computed = function(propertyName: string): any {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => { // @ts-ignore
    if(!globalThis.$VST._vueClassInstances[target.constructor.name]) { // @ts-ignore
      globalThis.$VST._vueClassInstances[target.constructor.name] = new target.constructor // @ts-ignore
      globalThis.$VST._vueClassInstances[target.constructor.name].name = 'test' // @ts-ignore
      globalThis.$VST._vueClassInstances[target.constructor.name].name = // @ts-ignore
        globalThis.$VST._vueClassInstances[target.constructor.name]?.constructor?.name?.toString() // @ts-ignore
        ?? globalThis.$VST._vueClassInstances[target.constructor.name]['name'] // @ts-ignore
        ??  ''
    }
    if(!target?.constructor?.prototype?.__vue_computed__) {
      target.constructor.prototype.__vue_computed__ = {}
    }
    if(!target?.constructor?.prototype?.__vue_computed__[target.constructor.name]) {
      target.constructor.prototype.__vue_computed__[target.constructor.name] = {}
    }
    target.constructor.prototype.__vue_computed__[target.constructor.name][propertyName ?? propertyKey]  // @ts-ignore
      = globalThis.$VST._vueClassInstances[target.constructor.name][propertyKey]

    // @ts-ignore
    if(!globalThis.$VST._vueComputed[target.constructor.name]) { // @ts-ignore
      globalThis.$VST._vueComputed[target.constructor.name] = {}
    }

    // @ts-ignore
    let callback = globalThis.$VST._vueClassInstances[target.constructor.name][propertyKey] // @ts-ignore
    globalThis.$VST._vueClassInstances[target.constructor.name][propertyKey] = undefined // @ts-ignore
    delete globalThis.$VST._vueClassInstances[target.constructor.name][propertyKey] // @ts-ignore
    globalThis.$VST._vueComputed[target.constructor.name][propertyName ?? propertyKey] = {
      get: callback
    }
  }
}
