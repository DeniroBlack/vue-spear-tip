<template lang="pug">
  div
    div(class="h30px w200px m10px")
      Button(
        class="w100%"
      ) Example!
    img(src="../resources/VST_LOGO.png" class="w100px")
    span Example!
</template>


<script lang="ts">
import {VST, Prop, VueClass} from '../core'

/**
 * Example
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class DocsWithExamples extends VueClass {
  @Prop(String) readonly text: string = ''
  beforeMount() {
    console.log('test')
  }
}
</script>

<style lang="sass" scoped>
//span
//  @apply bg-red-200
</style>
