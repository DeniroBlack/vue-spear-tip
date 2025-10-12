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

export default [
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
    path: '/config/uno-tailwind',
    name: 'UnoCss/Tailwindcss Config',
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
]
