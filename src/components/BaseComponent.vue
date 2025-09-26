<script lang="ts">
import IBaseVueComponent from '../Interfaces/IBaseVueComponent'
import VueClass from '../Vue/VueClass'

/**
 * Базовый компонент.
 * В дальнейшем планируется в него внедрять полезные методы и реактивные свойства (размеры окна, тип и т.д.).
 * От него можно наследовать любой компонент.
 */
export default abstract class BaseComponent extends VueClass implements IBaseVueComponent {
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
