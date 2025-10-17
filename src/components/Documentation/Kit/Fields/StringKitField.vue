<template lang="pug">
  StringKit
</template>

<script lang="ts">
import {VST, Prop, BaseComponent} from '../../../../core'
import StringKit from '../../../Fields/StringField/StringKit.vue'
import GuidesMenu from '../../../../components/Documentation/GuidesMenu.vue'

/**
 * StringKitField
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class StringKitField extends BaseComponent {
  components = {GuidesMenu, StringKit}
}
</script>

