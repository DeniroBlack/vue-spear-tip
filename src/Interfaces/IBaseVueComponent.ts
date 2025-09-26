import IVueClass from './IVueClass'

export default interface IBaseVueComponent extends IVueClass {
  readonly $root: {
    [key:string]:any
  }
}
