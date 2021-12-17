import { App } from 'vue'
import Index from './Index.vue'

Index.install = (app: App): void => {
  app.component(Index.name, Index)
}

export default Index
