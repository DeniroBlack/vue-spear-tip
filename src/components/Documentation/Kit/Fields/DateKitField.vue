<template lang="pug">
  DateKit
</template>

<script lang="ts">
import {VST, Prop, BaseComponent} from '../../../../core'
import DateKit from '../../../Fields/DateField/DateKit.vue'

/**
 * DateKitField
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class DateKitField extends BaseComponent {
  components = {DateKit}
}
</script>

