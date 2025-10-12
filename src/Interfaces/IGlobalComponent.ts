import {Temporal} from 'temporal-polyfill'

export default interface IGlobalComponent {
  $on(event: string, callback: (message: any) => any): void
  $off(event: string, callback: (message: any) => any): void
  $emit(event: string, message?: any): void
  DT(dateTimeString?: string|number|Temporal.ZonedDateTime, timeZone?: string): Temporal.ZonedDateTime
  
  /** Default time zone on $VST.DT() method (like Europe/Moscow). As default use browser ts */
  DT_TZ?: string
  
  _vueClassInstances: Record<string, any>
  _vueClassProps: Record<string, any>
  _vueClassWatchers: Record<string, any>
  _vueComputed: Record<string, any>
}