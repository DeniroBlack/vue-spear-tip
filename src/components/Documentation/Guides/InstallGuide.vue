<template lang="pug">
  div(class="mx-auto max-w1024px w100% min-h100% flex")
    div(class="flex px20px py15px w220px min-h100%!")
      GuidesMenu
    div(class="w[calc(100%-260px)]")
      h1 Install
      h4 Installing from package manager
      div
        p.
          The latest version of the package has been published in the global npm repository and has been assembled at
          <a
            href="https://www.npmjs.com/package/vue-spear-tip" target="_blacnk"
          >https://www.npmjs.com/package/vue-spear-tip</a>.
        p.
          As a package manager and application builder, we highly recommend using
          <a
            href="https://bun.com/docs/installation" target="_blacnk"
          >Bun.JS <img src="../../../resources/images/bun.js.svg" class="h40px"></a>

        div
          CodeHighlight(
            lang="pug"
            class="h35px mb35px"
            :code=`[
              {
                copy: true,
                lang: 'bash',
                title: 'Linux/MacOS',
                code: "curl -fsSL https://bun.com/install | bash # for macOS, Linux, and WSL'm"
              },
              {
                copy: true,
                lang: 'bash',
                title: 'Windows 10+ PowerShell',
                code: 'powershell -c "irm bun.sh/install.ps1|iex"'
              }
            ]`
          )
        //CodeHighlight(
        //  lang="bash"
        //  class="h35px"
        //  code=`curl -fsSL https://bun.com/install | bash # for macOS, Linux, and WSL`
        //)
        p.
          Because it is currently the fastest way to install packages and build applications in JavaScript.
          Support all popular platforms
        p.
          Or you can take a more common approach and install
          <a
            href="https://nodejs.org/en/download" target="_blacnk"
          >Node.JS</a>.
          Once you have it installed, you will have a
          global <a
            href="https://www.npmjs.com/" target="_blacnk"
          ><b>npm</b></a> package manager that you can use to install <a
            href="https://www.npmjs.com/package/vue-spear-tip" target="_blacnk"
          ><b>Vue Spear Tip</b></a>.

        p Next step - run in console in root project folder:
        div
          CodeHighlight(
            lang="pug"
            class="h35px mb40px"
            :code=`[
              {
                copy: true,
                lang: 'bash',
                title: 'Bun.JS',
                code: "bun add vue vue-spear-tip"
              },
              {
                copy: true,
                lang: 'bash',
                title: 'npm',
                code: 'npm i vue vue-spear-tip'
              }
            ]`
          )

        p.
          This is quite enough for using ready-made components. However, if you want to create your own components
          in an OOP (object-oriented programming) style, you will need to make some adjustments to your project.

        p.
          First, you need to set up app builder. We use <a
            href="https://vite.dev/guide/" target="_blacnk"
          >Vite</a> for this.
          Follow the installation instructions for <router-link
            to="/guides/config/vite"
          ><b>configuring Vite</b></router-link> and follow the steps outlined in the instructions.


        //  This is quite enough for using ready-made components. However, if you want to create your own components
        //  in an OOP (object-oriented programming) style, you will need to make some adjustments to your project.
        //
        //p Install VST. Указать, что для использования уже готовых компонентов внутри приложения этого достаточно.
        //
        //p Install Typescript
        //p Install Vue https://nodejs.org/en/download

</template>


<script lang="ts">
import {VST, Prop, BaseComponent} from '../../../core'
import GuidesMenu from '../GuidesMenu.vue'

/**
 * InstallGuide
 * @author CHORNY
 * @copyright https://smartrus.org
 */
@VST export default class InstallGuide extends BaseComponent {
  components = {GuidesMenu}
}
</script>

<style lang="sass" scoped>
//span
//  @apply bg-red-200!
</style>

