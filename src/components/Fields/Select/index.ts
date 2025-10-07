import {defineAsyncComponent} from 'vue'
// import ButtonInherited from './ButtonInherited'
// export {
//   ButtonInherited
// }
export default defineAsyncComponent(() => import('./Select.vue'))