/**
 * Трансформация метода в vue watch функцию
 * @param {String} propertyName Название свойства
 * @param {boolean} deep Следить ли за изменениями объекта в глубину
 * @param {boolean} immediate Выполнить ли метод сразу, не учитывая есть ли изменения
 * @constructor
 */
export const Watch = function(propertyName: string, deep: boolean = false, immediate: boolean = false): any {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => { // @ts-ignore
    if (!globalThis.$VST._dynamic._vueClassInstances[target.constructor.name]) {
      globalThis.$VST._dynamic._vueClassInstances[target.constructor.name] = new target.constructor
      globalThis.$VST._dynamic._vueClassInstances[target.constructor.name].name =
        globalThis.$VST._dynamic._vueClassInstances[target.constructor.name]?.constructor?.name?.toString()
        ?? globalThis.$VST._dynamic._vueClassInstances[target.constructor.name]['name']
        ??  ''
    }
    if(!target?.constructor?.prototype?.__vue_watch__) {
      target.constructor.prototype.__vue_watch__ = {}
    }
    if(!target?.constructor?.prototype?.__vue_watch__[target.constructor.name]){
      target.constructor.prototype.__vue_watch__[target.constructor.name] = {}
      target.constructor.prototype.__vue_watch__[target.constructor.name][propertyName]
        = globalThis.$VST._dynamic._vueClassInstances[target.constructor.name][propertyKey]
    }
    if(!globalThis.$VST._dynamic._vueClassWatchers[target.constructor.name]) {
      globalThis.$VST._dynamic._vueClassWatchers[target.constructor.name] = {}
    }

    globalThis.$VST._dynamic._vueClassWatchers[target.constructor.name][propertyName] = {
      handler: globalThis.$VST._dynamic._vueClassInstances[target.constructor.name][propertyKey],
      deep: deep,
      immediate: immediate,
    }
  }
}
