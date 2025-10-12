<template lang="pug">
  DateKit
</template>

<script lang="ts">
import {VST, Prop, BaseComponent} from '../../../../core'
import StringKit from '../../../Fields/StringField/StringKit.vue'

/**
 * StringKitField
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class StringKitField extends BaseComponent {
  components = {StringKit}
}
</script>

