

<script lang="ts">
import {VST, Prop, VueClass} from '../../core'
import 'uno.css'

/**
 * Example
 * @author CHORNY
 * @copyright https://smartrus.org
 */
export default abstract class PageAbstract extends VueClass {
  @Prop(String) readonly text: string = ''
  mountedParent() {
    $VST.$on('RouterPageMount', this.routedPageMount)
  }
  beforeUnmountParent() {
    $VST.$off('RouterPageMount', this.routedPageMount)
  }

  routedPageMount(data?: {from: any, to: any}) {

  }
}
</script>
