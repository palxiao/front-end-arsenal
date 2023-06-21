import { App } from 'vue'
import Comp from './index.vue'

Comp.install = (app: App): void => {
  app.component(Comp.name, Comp)
}

export default Comp
