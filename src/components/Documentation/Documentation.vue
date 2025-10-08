<template lang="pug">
  div(class="flex px20px py15px") Documentation soon
</template>


<script lang="ts">
import {VST, Prop, VueClass} from '../../core'
import 'uno.css'

/**
 * Example
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class DocsWithExamples extends VueClass {
  @Prop(String) readonly text: string = ''
  selectOnce: number|null = 2
  selectOnceItems: any[] = [{key:1, value: 'Test'}, {key:2, value: 'Second value'}, ]
  selectMulti: number[]|null = [2,1]
  selectMultiItems: any[] = [{key:1, value: 'Test'}, {key:2, value: 'Second value'}, {key:3, value: 'Third'}]
  selectTags: {value:string, key?:string|number}[]|null = [{key:4, value: 'Fourth'}]
  beforeMount() {
    // setTimeout(() => this.selectOnce = 3, 2000)
    // setTimeout(() => this.selectMulti = [1,3], 1000)
    // setTimeout(() => this.selectOnceItems.push({ "key": 3, "value": "S3" }), 1000)
    // setTimeout(() => this.selectTags = [ { "key": 2, "value": "Second value" }], 3000)
  }
  menu = [
    { name: 'About', url: '/' },
    // { name: 'Examples', url: '#' },
    { name: 'Documentation', url: '/documentation' },
    { name: 'Library', url: '#' },
    { name: 'Donate', url: '#' },
  ]
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

