import InstallGuide from './InstallGuide.vue'
import VueConfigGuide from './VueConfigGuide.vue'
import ViteConfigGuide from './ViteConfigGuide.vue'
import CodeHighlighterGuide from './Styles/CodeHighlighterGuide.vue'
import TypeScriptConfigGuide from './TypeScriptConfigGuide.vue'
import PugConfigGuide from './PugConfigGuide.vue'
import SassConfigGuide from './SassConfigGuide.vue'
import UnoCssConfigGuide from './UnoCssConfigGuide.vue'
import LaravelConfigGuide from './LaravelConfigGuide.vue'
import JuniorGuide from './JuniorGuide.vue'
import WhenGuide from './WhenGuide.vue'

export default [
  {
    path: '/why',
    name: 'When, why, and for what?',
    component: WhenGuide
  },
  {
    name: '<hr style="border: solid #ccc; border-width: 1px 0 0">',
  },
  {
    name: '<b>Guides</b>',
  },
  {
    path: '/install',
    name: 'Install Guide',
    component: InstallGuide
  },
  {
    path: '/config/vite',
    name: 'Vite Config',
    component: ViteConfigGuide
  },
  {
    path: '/config/vue',
    name: 'Vue Config',
    component: VueConfigGuide
  },
  {
    path: '/config/typescript',
    name: 'TypesScript Config',
    component: TypeScriptConfigGuide
  },
  {
    path: '/config/pug',
    name: 'Pug Config',
    component: PugConfigGuide
  },
  {
    path: '/config/sass',
    name: 'Scss/Sass/Stylus Config',
    component: SassConfigGuide
  },
  {
    path: '/config/unocss',
    name: 'UnoCss Config',
    component: UnoCssConfigGuide
  },
  {
    path: '/config/laravel',
    name: 'Laravel Config',
    component: LaravelConfigGuide
  },
  {
    path: '/junior',
    name: 'Junior Start Guide',
    component: JuniorGuide
  },
  // {
  //   path: '/junior',
  //   name: 'Backend Developer Guide',
  //   component: JuniorGuide
  // },
]
