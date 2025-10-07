<script lang="ts">
import IBaseVueComponent from '../Interfaces/IBaseVueComponent'
import {BaseComponent, Prop} from '../core'

/**
 * Базовый компонент.
 * В дальнейшем планируется в него внедрять полезные методы и реактивные свойства (размеры окна, тип и т.д.).
 * От него можно наследовать любой компонент.
 */
export default abstract class FieldComponent extends BaseComponent implements IBaseVueComponent {
  /** Входящее значение */
  @Prop(String, Number, Array, Object, Boolean) readonly inputValue: any = null
  @Prop(String, Number, Array, Object, Boolean) readonly modelValue: any = null
  /** Значение по умолчанию */
  @Prop(String, Number, Array, Object, Boolean) readonly default?: any = null
  @Prop(Boolean) readonly disabled?: boolean = false
  @Prop(String) readonly placeholder?: string = ''
  emitsParent = ['update:modelValue']
  /** Динамическое значение поля */
  value: any = null
  declare readonly $root: {
    [key: string]: any
  }
  constructor() {
    super()
  }
  mountedParent() {

  }

  getValue() {
    return this.value
  }

  setValue(value: any) {
    this.value = value
  }
}
</script>
