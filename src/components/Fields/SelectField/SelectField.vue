<template v-once lang="pug">
  div(
    class="d-inline-block mx2px my1px w100%"
    :class=`{
      'vst-select-multi': mode == 'multi' || mode == 'tags',
    }`
  )
    input(ref="selectInput" :value="reactiveValue" :autofocus)
</template>


<script lang="ts">
import './tagify.css' // @ts-ignore
import Tagify from './tagify.esm.js'

import {Prop, VST, Watch} from '../../../core'
import FieldComponent from '../../../replaceable/FieldComponent.vue'

// 3. Html выборка
// 4. Html отображение значения

/**
 * Выпадающий список на базе Tagify
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class SelectField extends FieldComponent {
  emits = [
    'click',
  ]
  declare $refs: {
    selectInput: HTMLInputElement
  }
  @Prop(Boolean) readonly autofocus: boolean = false
  @Prop(String) readonly mode: 'select' | 'multi' | 'tags' = 'select'
  @Prop(Array) readonly items: { key: string | number, value: string, selected?: string }[]|null = null
  tagify: Tagify
  reactiveValue: any = null
  randomClass: string = ''
  itemsInner: any[] = []
  beforeMountParent() {
    this.randomClass = 'vst-select-'+Math.random().toString().split('.')[1]
    this.itemsInner = this.items ?? []
    this._isFirstValueSet = false
    this._isIgnoreSetTags = false
  }

  private _isFirstValueSet: boolean = false
  private _isIgnoreSetTags: boolean = false
  mountedParent() {
    this.tagify = new Tagify(this.$refs.selectInput, {
      enforceWhitelist: this.mode == 'select' ? undefined : (this.mode == 'tags' ? false : true),
      mode: this.mode == 'select' ? 'select' : undefined,
      escapeHTML: false,
      whitelist: this.itemsInner
      //     [
      //   {
      //     key: 2,
      //     value: '<b>Test</b>'
      //   },
      //   {
      //     key: 3,
      //     value: '3'
      //   },
      //   {
      //     key: 4,
      //     value: '<b>Test4</b>'
      //   },
      //   {
      //     key: 55,
      //     value: '<b>Test5</b>'
      //   },
      //   {
      //     key: 21,
      //     value: '<b>Test11</b>'
      //   },
      //   {
      //     key: 233,
      //     value: '<b>Test33</b>'
      //   },
      // ]
      ,
      editTags: this.mode == 'tags',
      dropdown: {
        maxTags: 5,
        // fetchSuggestions: this.mode != 'select',
        highlightFirst: true,
        clearOnSelect: true,
        closeOnSelect: this.mode == 'select',
        enabled: 0,
        maxItems: 2000,
      },
      onChangeAfterBlur: false,
      delimiters: null,
      placeholder: this.placeholder || 'Выберите значение',
      callbacks: {
        change: (e: any) => {
          let modelValue: any = ''
          if (e.detail?.value?.trim?.()?.length && e.detail?.value != 'null') {
            if (this.mode == 'select') {
              modelValue
                  = typeof e.detail?.value == 'string' && (
                  e.detail?.value?.trim?.()?.startsWith('{') || e.detail?.value?.trim?.()?.startsWith('[')
              )
                  ? JSON.parse(e.detail?.value)?.[0]?.key
                  : (
                      e.detail?.value?.[0]?.key
                      || e.detail?.value?.key
                  )
              this.nextTick(() => {
                const value = (JSON.parse(JSON.stringify((this.itemsInner.find(
                    v => (v?.key) === modelValue)?.value ?? null
                ))))
                if (value) {
                  this.tagify.addTags(this.reactiveValue = value)
                  this.value = modelValue
                }
              }, 4)
            }
            else if (this.mode == 'multi') {
              this.tagify.removeAllTags()
              modelValue = JSON.parse(e.detail?.value)
              modelValue = Array.isArray(modelValue) ? modelValue.map(v => v.key) : [modelValue]
              this.tagify.addTags(JSON.parse(e.detail?.value))
              this.nextTick(() => {
                this.value = modelValue
                this.reactiveValue = e.detail?.value
              }, 4)
            }
            else if (this.mode == 'tags'){
              this.tagify.removeAllTags()
              modelValue = JSON.parse(e.detail?.value)
              this.tagify.addTags(modelValue)
              this.nextTick(() => {
                this.reactiveValue = e.detail?.value
                this.nextTick(() => {
                  this._isFirstValueSet = true
                  this._isIgnoreSetTags = true
                  this.$emit('update:modelValue',  this.value = modelValue)
                })
              }, 4)
            }
          }
        },
        remove: (e: any) => {
          if (this.mode == 'select' && !(e.detail?.tagify?.value ?? []).length && this.value !== null) {
            this.tagify.removeAllTags()
            this.reactiveValue = null
            this.value = null
          }
          else if (this.mode == 'tags') {
            const reactiveValue = JSON.parse(this.reactiveValue)?.filter((v: any) => v.key != e.detail?.data?.key)
            if (!reactiveValue?.length && this.reactiveValue != '[]') {
              this.tagify.removeAllTags()
              this.value = []
              this.reactiveValue = '[]'
            }
          }
          else if (typeof this.reactiveValue == 'string' && (
              this.reactiveValue?.startsWith('{') || this.reactiveValue?.startsWith('[')
          )) {
            this.nextTick(() => {
              const reactiveValue = JSON.parse(this.reactiveValue)?.filter((v: any) => v.key != e.detail?.data?.key)
              if (!reactiveValue?.length && this.reactiveValue != '[]') {
                this.reactiveValue = '[]'
                this.tagify.removeAllTags()
                this.value = []
              }
            }, 4)
          }
        }
      },
      templates: {
      // todo доработать вставку html замену шаблона элементов, идеально если через слоты можно было бы шаблон указать
      //   tag: (t, i) => {
      //     let value: any  = t.value?.value ?? t.value;
      //     if (this.mode == 'select' && (value = i?.DOM?.originalInput?.getAttribute?.('value')?.trim?.())?.length) {
      //       if (value?.startsWith('{') || value?.startsWith('[')) {
      //         value = JSON.parse(value)
      //         value = value?.[0]?.htmlValue || value
      //       }
      //     }
      //     console.log('valu2e', value)
      //     return `<tag title="${t.title || t.value}" contenteditable="false" tabIndex="-1" class="tagify__tag">
      //       <x title='' class="tagify__tag__removeBtn" tabIndex="-1" role='button' aria-label='remove tag'></x>
      //       <div><span contenteditable="${
      //         this.mode == 'select' ? 'true' : 'false'
      //       }" autocapitalize="false" autocorrect="off" spellcheck="false" class="tagify__tag-text">${
      //         value
      //     }</span></div></tag>`
      //   },
      //
      //   // dropdownItem: (t, i) => {
      //   // todo найти в исходниках tagify оригинальный шаблон
      //   //   return `<div class='tagify__dropdown'>${t.value}</div>`
      //   // }
      },
    })
    this.setTags()
  }

  setTags() {
    this.tagify?.removeAllTags?.()
    if (this.mode == 'select'){
      const value = (this.itemsInner.find(v => (v?.key || v?.value) === (this.modelValue || this.inputValue))?.value ?? null)
      if (value) {
        this.nextTick(() => {
          this._isFirstValueSet = true
          this.tagify?.addTags(this.value = value ?? '')
        }, 2)
      }
    }
    else if (this.mode == 'multi'){
      const val = this.modelValue || this.inputValue
      if (Array.isArray(val)) {
        this._isFirstValueSet = true
        this.value = JSON.parse(JSON.stringify(this.itemsInner))?.filter((v: any) => val.includes(v?.key))
        this.nextTick(() => {
          this.tagify?.addTags(this.value ?? '')
        }, 2)
      }
    }
    else if (this.mode == 'tags'){
      const val = this.modelValue || this.inputValue
      if (Array.isArray(val)) {
        this._isFirstValueSet = true
        this.value = JSON.parse(JSON.stringify(this.itemsInner))?.filter((v: any) => val?.some(vl => (vl?.key || vl?.value) == (v?.key || v?.value)))
        this.nextTick(() => {
          this.tagify?.addTags(this.value ?? '')
        }, 2)
      }
    }
  }

  @Watch('items', true) _itemsWatch(items: any) {
    this.itemsInner = JSON.parse(JSON.stringify(items))
    if (this.tagify) {
      this.tagify.whitelist = this.itemsInner
    }
  }
  @Watch('value', true) _valueWatch(value: any) {
    if (this._isFirstValueSet) return this._isFirstValueSet = false
    this.$emit('update:modelValue', value)
  }
  @Watch('modelValue', true) _modelValueWatch(modelValue: any) {
    if (this._isIgnoreSetTags) return this._isIgnoreSetTags = false
    this.nextTick(() => this.setTags())
  }
}
</script>

<style lang="sass">
.tagify
  outline: 2px solid transparent !important
  @apply min-w220px! min-h44px! flex! items-center justify-center rounded-3xl
  --tags-border-color: #c1c7cf !important
  --tag-hide-transition: .1ms !important
  transition: 100ms !important
  overflow: hidden
  background: #fff
  margin: 0 !important
  border-color: #c1c7cf !important
  padding: 0 0 0 10px !important

.tagify__input
  @apply min-w120px!
  transition: 100ms !important
  padding: .3em .5em !important
  font-size: 13px

.tagify--empty.tagify--select
  //@apply min-w120px!
  padding: 5px 0 0 15px !important
.tagify__dropdown
  @apply mt4px! border-0!
  &.tagify__dropdown__openInModal
    @apply z-999999!

  &.tagify__dropdown__openInOI
    @apply z-999999!
.tagify__dropdown__wrapper
  @apply rounded-lg!
  border-color: transparent !important
  box-shadow: none
  border-width: 0 1px 1px
  background: #fff repeating-linear-gradient(45deg, transparent, transparent 10px, #fafffd 10px, #fafffd 20px) !important

.tagify__dropdown__item
  @apply px12px! py8px! my2px
  border: 1px solid rgba(152, 177, 169, 0.37)

.tagify__dropdown__item--active
  background: #fffecd !important
  color: #000 !important
  border-color: #f6f2a7

  *
    color: #fff !important

.tagify__dropdown__item--selected
  background: #ffe37a
  color: #1e1e1e
  font-weight: bolder
  padding-top: 7px !important

  &:before
    content: ""

.tagify__tag
  @apply mt2px! fs-1rem!

.tagify--focus
  @apply outline-stone-400! outline-1px! border-color-#c1c7cf border-solid border-1px!

:not(.vst-select-multi)
  .tagify--focus.tagify--noTags
    @apply pt5px! min-h40px! mt4px
  .tagify--select:not(.tagify--empty)
    @apply min-h40px! mt5px

.vst-select-multi
  .tagify__tag
    @apply mt6px!

  .tagify--empty
    //@apply min-w120px!
    padding: 5px 0 0 15px !important
</style>
