import IBaseVueComponent from './IBaseVueComponent'

export default interface IFieldComponent extends IBaseVueComponent {
  readonly disabled?: boolean
  readonly placeholder?: string|{[k:string]:string}
  onValueChange(value: any): void
  getValue(): any
  setValue(value: any): any
}