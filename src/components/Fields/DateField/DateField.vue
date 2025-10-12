<template v-once lang="pug">
  .vst-date-field(
    class="d-inline-block my1px w100%"
    :class=`{
      // 'vst-select-multi': mode == 'multi' || mode == 'tags',
    }`
  )
    //@click="!$root.APP.hasTouchpad ? addDate() : null"
    //@touchstart="$root.APP.hasTouchpad ? addDate() : null"
    div(
      tabindex="5"
      v-if="!value"
      @focusin="addDate()"
      @click="addDate()"
      class=`h28px flex items-center min-w240px bg-white rounded-3xl justify-center cursor-pointer text-#c1c7cf italic
          border-solid border-#c1c7cf border-1px hover:border-gray-300 hover:border-#d6ff63! hover:text-lime-500
          mx-auto min-h42px!`
    ) {{ placeholder }}
    div(v-show="value")
      input(
        ref="picker"
        type="text"
        readonly
        @mousedown.prevent
      )
</template>


<script lang="ts">

import {Computed, Prop, VST, Watch} from '../../../core'
import FieldComponent from '../../../replaceable/FieldComponent.vue'
import {Russian} from 'flatpickr/dist/l10n/ru'
// https://flatpickr.js.org/examples/
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import {FlatpickrFn, Instance } from 'flatpickr/dist/types/instance'
import 'flatpickr/dist/plugins/confirmDate/confirmDate.css'
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate.js'

/**
 * Пример компонента
 * @author CHORNY
 * @copyright https://smartrus.org
 */
// if not extendable
@VST export default class DateField extends FieldComponent {
  declare $refs: {
    picker: HTMLElement
  }
  /** Добавить время */
  @Prop(Boolean) withTime: boolean = true
  /** Добавить секунды */
  @Prop(Boolean) withSeconds: boolean = true
  /**
   * value будет не строкой, а Temporal.ZonedDateTime
   * @see {Temporal.ZonedDateTime}
   */
  @Prop(Boolean) asTemporal: boolean = false
  emits = ['click']
  // value: Temporal.ZonedDateTime|null|string = null
  maxDateInner: string = ''
  minDateInner: string = ''
  mounted() {
    this.nextTick(() => this.initPicker())
  }
  /** Библиотека по работе  */
  private fp: Instance|null = null


  addDate() {
    const zonedDate = $VST.DT()
    this.$emit(
        'update:modelValue',
        this.value =
            this.asTemporal
                ? zonedDate
                : this.parseTime(zonedDate)
    )
    setTimeout(() => {
      if (!this.fp) this.initPicker()
      // this.fp?.setDate(this.parseTime(zonedDate))
      this.nextTick(() => {
        if (this.$refs?.picker) {
          this.$refs?.picker?.click()
          setTimeout(() => {
            this.$refs.picker.setAttribute('value', this._formatDate(new Date(zonedDate.epochMilliseconds)))
            this.fp?.open()
          }, 70)
        }
      })

    }, 70)
  }

  private initPicker() {
    if (!this.$refs.picker) return
    // @ts-ignore
    this.fp = (flatpickr as FlatpickrFn)(this.$refs.picker as HTMLElement, {
      // defaultDate: $E.DT(this.value!).toString?.({ timeZoneName: 'never' })?.split?.('.')?.[0],
      enableTime: this.withTime,
      enableSeconds: this.withSeconds,
      weekNumbers: true,
      dateFormat: 'Y-m-d H:i:S', // Формат с секундами
      minDate: this.minDateInner,
      maxDate: this.maxDateInner,
      minuteIncrement: 1,
      secondsIncrement: 1,
      hoursIncrement: 1,
      className: 'custom-flatpickr-theme',
      locale: Russian, // @ts-ignore
      plugins: [new confirmDatePlugin({})],
      onChange: (dates: any) => {
        // if (dates[0]) {
        //   let zonedDate = Engine.DT(dates[0].getTime())
        //   // Если включено время, но нет секунд, то сбрасываем последние до 00
        //   if (this.withTime && !this.withSeconds) {
        //     zonedDate = zonedDate.with({
        //       second: 0
        //     })
        //   }
        //   this.$emit(
        //       'update:modelValue',
        //       this.value = this.asTemporal
        //           ? zonedDate
        //           : (this.isMountedFromFormField
        //                   ? zonedDate.toString()
        //                   : this.parseTime(zonedDate)
        //           )
        //   )
        // }
      },

      // fixme сделать подстановку нескольких событий, а отображать их, например, списком над/под календарём,
      //        хотя можно и просто списком в интерактивном tooltip
      // Кастомизация дней
      // onDayCreate: (dObj, dStr, fp, dayElem: HTMLElement) => {
      //   const dateStr = this.formatDate(dayElem.dateObj)
      //   const event = this.events.find(e => e.date === dateStr)
      //
      //   if (event) { // Заготовка для подстановки событий ко дню
      //     Engine.l('dateStr', dayElem.dateObj, dateStr, event, dayElem)
      //     dayElem.style.fontWeight = 'bolder'
      //     dayElem.style.background = '#e3dd6b'
      //     dayElem.title = event.title
      //     // // Создаем элемент с событием
      //     // const eventElement = document.createElement('span')
      //     // eventElement.className = `event-dot event-${event.type}`
      //     // eventElement.title = event.title
      //     // dayElem.appendChild(eventElement)
      //     //
      //     // // Добавляем класс к самому дню
      //     // dayElem.classList.add('has-event')
      //   }
      // },

      // parseDate: (datestr, format) => {
      //   Engine.l('datestr', datestr)
      //   return '1'
      //   // const date = Engine.DT(datestr) as Temporal.ZonedDateTime
      //   // const month = date.toLocaleString('ru-RU', { month: 'short', day: 'numeric' })
      //   //   .replace(/\d+\s?/, '')
      //   // return `${date.day} ${month} ${date.year}`+
      //   //   (this.withTime
      //   //       ? ` в ${date.hour.toString().padStart(2, '0')}:${date.minute.toString().padStart(2, '0')}`
      //   //       : ''
      //   //   )+
      //   //   (this.withSeconds ? `:${date.second.toString().padStart(2, '0')}` : '')
      // },
      // formatDate: (date: Date, format: any, locale: any) => {
      //   return this._formatDate(date)
      // }
    })

    // Установка начального значения если есть
    // if (this.value) {
    //   this.setValue(this.value)c
    // }
  }
  private parseTime(time: any): string {
    return time.toString().split('+')[0].split('.')[0]
        .replace('T', ' ').split(
            this.withTime ? '!' : ' '
        )[0]
  }

  private _formatDate(time: Date): string {
    const month = new Intl.DateTimeFormat('ru-RU', { month: 'short', day: 'numeric' }).format(
        time
    ).replace(/\d+\s?/, '')
    const date = $VST.DT(time.getTime())
    return `${date.day} ${month} ${date.year}`+
        (this.withTime
                ? ` в ${date.hour.toString().padStart(2, '0')}:${date.minute.toString().padStart(2, '0')}`
                : ''
        )+
        (this.withSeconds ? `:${date.second.toString().padStart(2, '0')}` : '')
  }

  // // Watch dynamic changes to items prop
  // @Watch('items', true) _itemsWatch(items: any) {
  //
  // }
  // // Generate computed class prop
  // declare some: boolean; @Computed('some') _valueComputed(some: boolean): DateField['some'] {
  //   return some
  // }
}
</script>


<style lang="sass">

//Основные стили поля
.vst-date-field
  @apply w-full relative select-none!

  .flatpickr-input
    @apply select-none! hover:text-lime-500 hover:underline hover:border-#d6ff63 min-w230px min-h42px!
    div
      @apply select-none!
    &.active
      @apply border-#d6ff63! border-width-1px! shadow-none!
      outline: solid #d6ff63 2px !important

  input
    @apply px-5px rounded border bg-white cursor-pointer rounded-3xl! min-w240px fs-14px! h28px! py0
    @apply user-select-none w[calc(100%-12px)]
    @apply border-1px border-#c1c7cf border-solid text-center
    @apply disabled:(bg-gray-100 cursor-not-allowed)
    &:focus
      @apply border-#d6ff63! border-width-1px shadow-none!
      outline: solid #d6ff63 2px
    &.is-invalid
      @apply border-red-500


.flatpickr-calendar
  @apply w320px! rounded-3xl shadow-[0px_2px_13px_#c1c1c1]! border-color-#ededed! px10px z9999!
  .flatpickr-day.today
    @apply bg-lightblue-500 border-lightblue-600 text-lightblue-100 op-80
    @apply hover:bg-lightblue-400 hover:border-lightblue-400
  //.flatpickr-day.selected
  //  @apply bg-red-400 border-red-500 hover:bg-red-500 hover:border-red-200
  .flatpickr-day.selected.today, .flatpickr-day.selected
    @apply bg-lime-400! border-lime-500! text-black! hover:bg-lime-300! hover:border-lime-400! hover:text-emerald-700!
  .flatpickr-day.selected.today
    @apply fw-bold!

  .flatpickr-months
    @apply flex items-center justify-center pt1px
    .flatpickr-prev-month, .flatpickr-next-month
      @apply flex items-center justify-center
    .flatpickr-prev-month
      @apply ml20px h22px
    .flatpickr-next-month
      @apply mr20px h22px
  .flatpickr-monthDropdown-months
    @apply flex items-center justify-center h25px! fs-16px! overflow-hidden!
  .flatpickr-current-month
    @apply flex items-center justify-center h25px!
  &.open
    @apply z9999!
  .flatpickr-confirm.visible
    @apply bg-lime! rounded-3xl! mb10px mt4px
.numInputWrapper, .numInputWrapper input, .flatpickr-current-month, .flatpickr-time-separator
  @apply h25px! lh-25px!
.numInput
  @apply h28px! fs-16px!
.numInputWrapper, .numInput
  @apply min-w70px!

.flatpickr-time
  @apply h38px! pt6px
  input
    @apply hover:bg-gray-100!
    &.flatpickr-hour
      @apply hover:bg-gray-100!
    &.flatpickr-minute
      @apply hover:bg-gray-100!

.flatpickr-innerContainer
  @apply flex items-center justify-center
  .flatpickr-days
    @apply pb8px px5px w235px!
    .flatpickr-day
      @apply w25px! h25px! lh-25px! mb2px! fs-13px
  .flatpickr-weeks
    @apply self-start mb3px rounded-b-3xl flex items-start justify-start flex-column
    .flatpickr-day
      @apply max-w25px! h28px! lh-27px! mb2px! text-gray-500! op-80
      &:last-child
        @apply pb0! mb0!
  .flatpickr-weekwrapper
    @apply flex items-start justify-start flex-column self-start bg-#e4e4e4 mt3px rounded-b-2xl
    @apply rounded-tl-2xl
    .flatpickr-weekdays
      @apply w200px!
    .flatpickr-weekday
      @apply max-w25px! h17px! lh-17px! mt3px text-gray-400! flex items-end justify-end h24px pb3px pt2px d-block
      @apply ml7px rounded-tl-14px op-70
  .flatpickr-weekdaycontainer
    @apply pb4px pt5px px11px grid! grid-cols-7! gap-1! items-center justify-items-center bg-#e4e4e4 rounded-r-3xl
    .flatpickr-weekday
      @apply text-gray-400! self-start text-gray-500! op-80
  .dayContainer
    @apply py4px px5px grid grid-cols-7 gap-1 items-center justify-items-center w240px! max-w240px! min-w-auto!


// Кастомизация flatpickr
//// Важно: уберите scoped чтобы стили применились к элементам flatpickr
.custom-flatpickr-theme
  @apply bg-white rounded-lg shadow-lg border border-#c1c7cf
  &.has-event
    @apply fw-bold

  &.selected
    @apply bg-blue-500 text-white border-blue-500 fs-13px!
    @apply hover:(bg-blue-600)
//
//  // Заголовок с месяцем/годом
//  .flatpickr-current-month
//    @apply text-gray-800 font-medium
//
//  // Дни недели
//  .flatpickr-weekday
//    @apply text-gray-500 font-normal
//
//  // Ячейки с датами
//  .flatpickr-day
//    @apply text-gray-700 rounded-full
//    @apply hover:(bg-blue-50)

//
//    &.today
//      @apply border-blue-500
//
//    &.disabled
//      @apply text-gray-300 cursor-not-allowed
//      @apply hover:(bg-transparent)
//
//  // Время
//  .flatpickr-time
//    @apply border-t border-gray-200
//
//    input
//      @apply text-gray-700 font-medium
//      @apply focus:(ring-0 border-0)
//
//    .flatpickr-am-pm
//      @apply text-gray-500
//      @apply hover:(bg-gray-50)
//
//  // Стрелки навигации
//  .flatpickr-months
//    .flatpickr-prev-month, .flatpickr-next-month
//      @apply text-gray-400 p-2
//      @apply hover:(text-blue-500)
//
//      svg
//        @apply w-5 h-5
//
//  // Время
//  .numInputWrapper
//    @apply hover:(bg-gray-50)
//
//    &:hover
//      .arrowUp, .arrowDown
//        @apply opacity-100
//
//    .arrowUp, .arrowDown
//      @apply opacity-0 transition-opacity
//      @apply hover:(text-blue-500)
//
//  // Анимация появления
//  &.open
//    @apply animate-fadeIn
</style>
