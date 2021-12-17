/*
 * @Author: ShawnPhang
 * @Date: 2021-09-03 09:59:57
 * @Description:
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-26 15:11:50
 * @site: book.palxp.com / blog.palxp.com
 */
import { App } from 'vue'
import Button from './Button.vue'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

export default Button
