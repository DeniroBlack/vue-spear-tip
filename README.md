# Vue Spear Tip
#### Reactive OOP frontend programming library on Vue

Vue 3 TypeScript Class Components with @Watch, @Computed, @Prop decorators. 
And UI KIT on them.

#### Install
```
npm install vue-spear-tip
```

[//]: # (Use with vite + html/pug + typescript classes + sass/scss)

Need enable experimental decorators in `tsconfig.json`:

```json5
{
  "compilerOptions": {
    // ... another
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  }
}
```

#### Use

```vue
<template lang="pug">
  div
    div(class="h30px w200px m10px")
      Button(
        @cliclTap="test = 'test'"
      ) Example
</template>


<script lang="ts">
  import {VueClassComponent, Prop, Watch, Computed, BaseComponent} from 'vue-spear-tip'


  /**
   * Example
   * @author CHORNY
   * @copyright https://smartrus.org
   */
  @VueClassComponent export default class Example extends BaseComponent {
    @Prop(String, null) readonly text: string = ''
    test: string = ''
    
    beforeMount() {
      console.log('test')
    }
    
    @Watch('test', false /* deep */, false /* immediate */) _testWatch(newVal: string) {
      console.log('test variable changed', newVal)
    }
    
    declare computed: boolean; @Watch('test') _computedComputed(): boolean {
      return true
    }
  }
</script>

<style lang="sass" scoped>
  span
    @apply bg-red-200
</style>

```