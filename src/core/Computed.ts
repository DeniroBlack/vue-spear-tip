/**
 * Трансформация метода в vue computed функцию
 * @param {String} propertyName Название свойства
 * @constructor
 */
export const Computed = function(propertyName: string): any {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    if(!globalThis.$VST._dynamic._vueClassInstances[target.constructor.name]) {
      globalThis.$VST._dynamic._vueClassInstances[target.constructor.name] = new target.constructor
      globalThis.$VST._dynamic._vueClassInstances[target.constructor.name].name = 'test'
      globalThis.$VST._dynamic._vueClassInstances[target.constructor.name].name =
        globalThis.$VST._dynamic._vueClassInstances[target.constructor.name]?.constructor?.name?.toString()
        ?? globalThis.$VST._dynamic._vueClassInstances[target.constructor.name]['name']
        ??  ''
    }
    if(!target?.constructor?.prototype?.__vue_computed__) {
      target.constructor.prototype.__vue_computed__ = {}
    }
    if(!target?.constructor?.prototype?.__vue_computed__[target.constructor.name]) {
      target.constructor.prototype.__vue_computed__[target.constructor.name] = {}
    }
    target.constructor.prototype.__vue_computed__[target.constructor.name][propertyName ?? propertyKey] 
      = globalThis.$VST._dynamic._vueClassInstances[target.constructor.name][propertyKey]

   
    if(!globalThis.$VST._dynamic._vueComputed[target.constructor.name]) {
      globalThis.$VST._dynamic._vueComputed[target.constructor.name] = {}
    }

   
    let callback = globalThis.$VST._dynamic._vueClassInstances[target.constructor.name][propertyKey]
    globalThis.$VST._dynamic._vueClassInstances[target.constructor.name][propertyKey] = undefined
    delete globalThis.$VST._dynamic._vueClassInstances[target.constructor.name][propertyKey]
    globalThis.$VST._dynamic._vueComputed[target.constructor.name][propertyName ?? propertyKey] = {
      get: callback
    }
  }
}
