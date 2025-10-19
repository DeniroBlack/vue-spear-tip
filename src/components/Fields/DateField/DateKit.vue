<template lang="pug">
  div(class="mx-auto max-w1024px w100% min-h100% flex")
    div(class="flex px20px py15px w220px min-h100%!")
      GuidesMenu
    div(class="w[calc(100%-260px)]")
      h1 DateField
      div(class="mb10px text-lightblue-400")
        div
      div(class="mb10px text-lightblue-400") With auto locales format

      ElementDocBlock
        .row(class="gap-7")
          .col-12
            b.text-center Default date time field with auto language, locale, format detect
            DateField(
              :withTime="true"
            )
          .col-12
            b.text-center Default date field auto language, locale, format detect
            DateField(
              inputValue="2012-12-12 00:01:22"
            )
          .col-6
            b.text-center European 24 hours format (Russia)
            DateField(
              :withTime="true"
              :withSeconds="true"
              locale="ru"
              ref="rus"
            )
          .col-6
            b.text-center 12 hours (America en-US)
            DateField(
              :ISO861UTCMode="true"
              :withTime="true"
              inputValue="2012-12-12 00:01:22"
              locale="en-US"
            )
          .col-6
            b.text-center Disabled
            DateField(
              :disabled="true"
              :withTime="true"
              inputValue="2012-12-12 00:01:22"
            )
</template>


<script lang="ts">
import {VST, Prop, BaseComponent} from '../../../core'
import GuidesMenu from '../../../components/Documentation/GuidesMenu.vue'
import IDateField from './IDateField'
import ElementDocBlock from '../../Documentation/ElementDocBlock.vue'

/**
 * DateKit
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class DateKit extends BaseComponent {
  declare $refs: {
    rus: IDateField
  }
  components = {GuidesMenu, ElementDocBlock}

  mounted() {
    // setTimeout(() => {
    //   console.log('upd', this.$refs.rus.DT?.add({hours: 5})?.toLocaleString())
    // }, 5000)
  }
}
</script>

<style lang="sass" scoped>
//span
//  @apply bg-red-200!
</style>

