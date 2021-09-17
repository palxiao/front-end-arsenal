declare module 'virtual:vite-vue3-docs' {
  import { RouteRecordRaw } from 'vue-router'
  export const routes: RouteRecordRaw[]
  type InitVueDocsDemo = () => void

  export const initVueDocsDemo: InitVueDocsDemo
  export default routes
}
