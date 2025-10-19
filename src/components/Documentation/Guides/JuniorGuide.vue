<template lang="pug">
  div(class="mx-auto max-w1024px w100% min-h100% flex")
    div(class="flex px20px py15px w220px min-h100%!")
      GuidesMenu
    div(class="w[calc(100%-260px)]")
      h1 JuniorGuide
      div.
        Meta development level. You don't need to know all web browser tecnologies to create
        multiplatform web apps. Instructions will be provided later.

      //- TODO Если создать песочницу. Инструкции по unocss и pug как первых технологий для джуна, может сработать.
      //-   Нужны эксперементы с новичками.
</template>


<script lang="ts">
import {VST, Prop, BaseComponent} from '../../../core'
import GuidesMenu from '../GuidesMenu.vue'

/**
 * JuniorGuide
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class JuniorGuide extends BaseComponent {
  components = {GuidesMenu}
}
</script>

<style lang="sass" scoped>
//span
//  @apply bg-red-200!
</style>

