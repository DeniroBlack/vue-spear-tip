<script lang="ts">
import IBaseVueComponent from '../Interfaces/IBaseVueComponent'
import {VueClass} from '../core'

/** Base component */
export default abstract class BaseComponent extends VueClass implements IBaseVueComponent {
  emitsParent = ['update:modelValue']
  declare readonly $root: {
    [key: string]: any
  }
  constructor() {
    super()
    // enable some global child component variables, etc.
  }
  mountedParent() {

  }
}
</script>
