<template lang="pug">
  div(class="mx-auto max-w1024px w100% min-h100% flex")
    div(class="flex px20px py15px w220px min-h100%!")
      GuidesMenu
    div(class="w[calc(100%-260px)]")
      h1 CodeHighlighterGuide
      div CodeHighlighterGuide
      CodeHighlight(lang="html").
          &lt;template lang="pug">
            div(class="w100%")
          &lt;/template>
      CodeHighlight(lang="pug").
        div(class="w100%")
</template>


<script lang="ts">
import {VST, Prop, BaseComponent} from '../../../../core'
import GuidesMenu from '../../GuidesMenu.vue'

/**
 * Example
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class CodeHighlighterGuide extends BaseComponent {
  components = {GuidesMenu}
}
</script>

<style lang="sass">
body, html
  @apply p0 m0 box-sizing-border-box
  font-family: "Nunito Sans", sans-serif
a
  @apply decoration-none! hover:decoration-underline!
</style>

<style lang="sass" scoped>
//span
//  @apply bg-red-200!
</style>

