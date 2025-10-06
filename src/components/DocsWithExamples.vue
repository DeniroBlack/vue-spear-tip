<template lang="pug">
  div
    link(rel="preconnect" href="https://fonts.googleapis.com")
    link(rel="preconnect" href="https://fonts.gstatic.com" crossorigin)
    link(href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet")
    header(class="bg-[#fcffdfff]")
      nav(class="container mx-auto px-4 py-3 flex items-center justify-between")
        div(class="flex items-center space-x-10")
          div(class="text-xl flex flex-col items-center font-700 tracking-tight")
            img(src="../resources/VST_LOGO.png" class="w80px")
            div Vue Spear Tip
          ul(class="flex space-x-6")
            li(v-for="item in menu" :key="item.name")
              a(
                :href="item.url"
                class="text-[#11a1e2ff]"
              ) {{ item.name }}
        div(class="flex items-center space-x-4")
          a(
            href="https://github.com/your-repo"
            target="_blank"
            class="text-[#b33c62ff]"
          ) GitHub
    //main(class="container mx-auto px-4 py-8 flex gap-8")
    //  aside(class="w-64 flex-shrink-0")
    //    nav(class="bg-white rounded-lg shadow-sm p-4 border-1 border-[#e0f0d0]")
    //      ul(class="space-y-2")
    //        li(v-for="section in sections" :key="section.title")
    //          h3(class="font-600 text-[#2e8b57] mb-2") {{ section.title }}
    //          ul(class="space-y-1 ml-2")
    //            li(v-for="link in section.links" :key="link.name")
    //              a(
    //                :href="link.url"
    //                class="block text-[#3cb371] hover:text-[#32a05f] transition-colors duration-200 py-1 px-2 rounded"
    //                :class="link.active ? 'bg-[#f0ffe0]' : ''"
    //              ) {{ link.name }}
    //
    //  section(class="flex-1 min-h-96")
    //    div(class="bg-white rounded-lg shadow-sm p-6 border-1 border-[#e0f0d0]")
    //      h2(class="text-2xl font-700 mb-4 text-[#2e8b57]") Добро пожаловать в документацию
    //      p(class="text-[#3cb371] mb-4") Это стартовая страница документации для вашей библиотеки vue-spear-tip.
    //      div(class="grid gap-4 md:grid-cols-2")
    //        div(
    //          v-for="card in cards"
    //          :key="card.title"
    //          class="p-4 rounded-lg border-1 border-[#e0f0d0] bg-[#f8fff0]"
    //        )
    //          h3(class="font-600 text-[#2e8b57] mb-2") {{ card.title }}
    //          p(class="text-sm text-[#3cb371]") {{ card.description }}
    div(class="flex px20px py15px")
      div
        img(src="../resources/VST_LOGO.png" class="w100px")
      div.
        <h1>What is the Vue Spear Tip?</h1>

        Vue Spear Tip - is a global wrapper library for Vue 3 components using decorators. It allows you to describe a Vue component as an object-oriented class with inheritance, as well as provides a set of pre-built fields and components assembled from various open-source libraries that we constantly update. We are always looking for ways to improve our offerings.
  //
  //  div(class="h30px w200px m10px")
  //    Button(
  //      class="w100%"
  //    ) Example!!!
</template>


<script lang="ts">
import {VST, Prop, VueClass} from '../core'
import 'uno.css'

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
  menu = [
    { name: 'Main', url: '#' },
    { name: 'Documentation', url: '#' },
    { name: 'Library', url: '#' },
    { name: 'Examples', url: '#' },
    { name: 'About', url: '#' }
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
span
  @apply bg-red-200!
</style>

