<template lang="pug">
  div(class="flex px20px py15px")
    div
      img(src="../../resources/VST_LOGO.png" class="w100px")
    div.
      <h1>What is the Vue Spear Tip?</h1>

      Vue Spear Tip - is a global wrapper library for Vue 3 components using decorators.
      It allows you to describe a Vue component as an object-oriented class with inheritance,
      as well as provides a set of pre-built fields and components assembled from various open-source
      libraries that we constantly update. We are always looking for ways to improve our offerings.
      Supporteb by <a class="text-lightblue-500" href="https://smartrus.org">SMARTRUS.ORG®</a>
  h3(class="text-center") Elements
  div(class="flex flex-col items-center justify-center")
    h4(class="text-center") Select
    div(class="p5px flex")
      div
        Select(
          placeholder="Select one value"
          v-model="selectOnce"
          :items="selectOnceItems"
        )
        div {{ selectOnce }}
      div
        Select(
          mode="multi"
          placeholder="Select multi value"
          v-model="selectMulti"
          :items="selectMultiItems"
        )
        div {{ selectMulti }}
      div
        Select(
          mode="tags"
          placeholder="Select tags values with preset"
          v-model="selectTags"
          :items="[{key:1, value: 'Test'}, {key:2, value: 'Second value'}, {key:4, value: 'Fourth'}]"
        )
        div {{ selectTags }}
    h4(class="text-center") Buttons
    div(class="h30px m10px flex")
      Button(
        class="w100%"
      ) Default
      Button(
        class="w100%"
        theme="black"
        iconRight=`<img style="height: 20px" src="/VST_LOGO.png"/>`
      ) Black
      Button(
        class="w100%"
        theme="yellow"
      ) Yellow
      Button(
        class="w100%"
        theme="white"
        icon=`<img style="height: 20px" src="/VST_LOGO.png"/>`
      ) White
      Button(
        class="w100%"
        theme="grey"
      ) Grey
      Button(
        class="w100%"
        theme="indigo"
      ) Indigo
      Button(
        class="w100%"
        theme="purple"
      ) Purple
      Button(
        class="w100%"
        theme="pink"
      ) Pink
      Button(
        class="w100%"
        theme="info"
      ) Info
      Button(
        class="w100%"
        theme="danger"
      ) Danger
      Button(
        class="w100%"
        theme="warning"
      ) Warning
      Button(
        class="w100%"
        theme="primary"
      ) Primary
      Button(
        class="w100%"
        theme="success"
      ) Success
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
    setTimeout(() => this.selectOnce = 3, 2000)
    setTimeout(() => this.selectMulti = [1,3], 1000)
    setTimeout(() => this.selectOnceItems.push({ "key": 3, "value": "S3" }), 1000)
    setTimeout(() => this.selectTags = [ { "key": 2, "value": "Second value" }], 3000)
  }
  menu = [
    { name: 'About', url: '/' },
    // { name: 'Examples', url: '#' },
    { name: 'Documentation', url: '/documentation' },
    { name: 'Library', url: '#' },
    { name: 'Donate', url: '#' },
  ]
  sections = [
    {
      title: 'Начало работы',
      links: [
        { name: 'Установка', url: '#', active: true },
        { name: 'Быстрый старт', url: '#' },
        { name: 'Миграция с Vue 2', url: '#' }
      ]
    },
    {
      title: 'Основы',
      links: [
        { name: 'Создание компонента', url: '#' },
        { name: 'Жизненный цикл', url: '#' },
        { name: 'Пропсы и данные', url: '#' }
      ]
    }
  ]
  cards = [
    {
      title: 'Быстрый старт',
      description: 'Узнайте, как быстро подключить и начать использовать библиотеку в вашем проекте.'
    },
    {
      title: 'Миграция с Vue 2',
      description: 'Пошаговое руководство по переходу с классического подхода на современный.'
    },
    {
      title: 'API Reference',
      description: 'Полное описание всех методов, свойств и возможностей библиотеки.'
    },
    {
      title: 'Лучшие практики',
      description: 'Рекомендации по эффективному использованию библиотеки в реальных проектах.'
    }
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

