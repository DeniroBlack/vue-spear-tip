/**
 * Трансформация метода в vue computed функцию
 * @param {String} propertyName Название свойства
 * @constructor
 */
export const Computed = function(propertyName: string): any {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => { // @ts-ignore
    if(!globalThis.__VST._vueClassInstances[target.constructor.name]) { // @ts-ignore
      globalThis.__VST._vueClassInstances[target.constructor.name] = new target.constructor // @ts-ignore
      globalThis.__VST._vueClassInstances[target.constructor.name].name = 'test' // @ts-ignore
      globalThis.__VST._vueClassInstances[target.constructor.name].name = // @ts-ignore
        globalThis.__VST._vueClassInstances[target.constructor.name]?.constructor?.name?.toString() // @ts-ignore
        ?? globalThis.__VST._vueClassInstances[target.constructor.name]['name'] // @ts-ignore
        ??  ''
    }
    if(!target?.constructor?.prototype?.__vue_computed__) {
      target.constructor.prototype.__vue_computed__ = {}
    }
    if(!target?.constructor?.prototype?.__vue_computed__[target.constructor.name]) {
      target.constructor.prototype.__vue_computed__[target.constructor.name] = {}
    }
    target.constructor.prototype.__vue_computed__[target.constructor.name][propertyName ?? propertyKey]  // @ts-ignore
      = globalThis.__VST._vueClassInstances[target.constructor.name][propertyKey]

    // @ts-ignore
    if(!globalThis.__VST._vueComputed[target.constructor.name]) { // @ts-ignore
      globalThis.__VST._vueComputed[target.constructor.name] = {}
    }

    // @ts-ignore
    let callback = globalThis.__VST._vueClassInstances[target.constructor.name][propertyKey] // @ts-ignore
    globalThis.__VST._vueClassInstances[target.constructor.name][propertyKey] = undefined // @ts-ignore
    delete globalThis.__VST._vueClassInstances[target.constructor.name][propertyKey] // @ts-ignore
    globalThis.__VST._vueComputed[target.constructor.name][propertyName ?? propertyKey] = {
      get: callback
    }
  }
}
