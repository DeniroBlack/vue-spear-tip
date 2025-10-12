<template lang="pug">
  SelectKit
</template>

<script lang="ts">
import {VST, Prop, BaseComponent} from '../../../../core'
import SelectKit from '../../../Fields/SelectField/SelectKit.vue'

/**
 * ButtonKitElement
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class SelectKitField extends BaseComponent {
  components = {SelectKit}
}
</script>

