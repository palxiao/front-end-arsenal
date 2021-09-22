import { App } from 'vue'
import Button from './Button.vue'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

export default Button

// const requireCxt = require.context("./src", true, /.vue/)
// const components = {}

// requireCxt.keys().map((item, index) => {
//   const component = requireCxt(item)
//   return (components[component.default.name] = component.default)
// }, {})
