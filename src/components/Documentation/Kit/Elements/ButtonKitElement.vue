<template lang="pug">
  ButtonKit
</template>

<script lang="ts">
import {VST, Prop, BaseComponent} from '../../../../core'
import ButtonKit from '../../../Elements/Button/ButtonKit.vue'

/**
 * ButtonKitElement
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class ButtonKitElement extends BaseComponent {
  components = {ButtonKit}
}
</script>

