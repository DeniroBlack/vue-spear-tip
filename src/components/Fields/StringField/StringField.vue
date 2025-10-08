<template v-once lang="pug">
  div(
    class="d-inline-block mx2px my2px w100%"
    :class=`{
      // 'vst-select-multi': mode == 'multi' || mode == 'tags',
    }`
  )
    input(ref="selectInput" v-model="value" :placeholder)
</template>


<script lang="ts">

import {Computed, Prop, VST, Watch} from '../../../core'
import FieldComponent from '../../../replaceable/FieldComponent.vue'

/**
 * Компонент для ввода строкового текста или значения
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class StringField extends FieldComponent {
  emits = ['click']
  declare $refs: {
    selectInput: HTMLInputElement
  }
  // @Prop(Boolean) readonly autofocus: boolean = false
  @Prop(String) readonly placeholder: string = 'Введите текст'
  // @Prop(Array) readonly items: { key: string | number, value: string, selected?: string }[]|null = null
  beforeMount() {
  }

  mounted() {
    this.value = this.modelValue || this.inputValue || ''
    // if extendable code here
  }
  mountedParent() {
    // if extendable code here
  }

  // Watch dynamic changes to items prop
  @Watch('value', true) _valueWatch(value: any) {
    this.$emit('update:modelValue', value)
  }
  // // Generate computed class prop
  // declare some: boolean; @Computed('some') _valueComputed(some: boolean): Example['some'] {
  //   return some
  // }
}
</script>

<style scoped lang="sass">
input
  @apply w100% border-color-#c1c7cf border-solid border-1px! min-h44px px25px rounded-3xl fs-1rem
  @apply outline-stone-400 outline-1px focus:bg-white hover:bg-white
  &::placeholder
    @apply fs-1rem text-#a7a3a3
//.vst-select-multi
//  @apply min-w220px! min-h44px! flex! items-center justify-center rounded-3xl
</style>
