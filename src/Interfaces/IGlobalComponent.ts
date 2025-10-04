export default interface IGlobalComponent {
  _vueClassInstances: Record<string, any>,
  _vueClassProps: Record<string, any>,
  _vueClassWatchers: Record<string, any>,
  _vueComputed: Record<string, any>,
}