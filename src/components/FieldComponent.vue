<script lang="ts">
import IBaseVueComponent from '../Interfaces/IBaseVueComponent'
import {BaseComponent} from '../core'

/**
 * Базовый компонент.
 * В дальнейшем планируется в него внедрять полезные методы и реактивные свойства (размеры окна, тип и т.д.).
 * От него можно наследовать любой компонент.
 */
export default abstract class FieldComponent extends BaseComponent implements IBaseVueComponent {
  emitsParent = ['update:modelValue']
  declare readonly $root: {
    [key: string]: any
  }
  constructor() {
    super()
  }
  mountedParent() {

  }
}
</script>
