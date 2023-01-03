/*
 * @Author: ShawnPhang
 * @Date: 2023-01-03 11:39:44
 * @Description:
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-01-03 11:40:35
 */
import { App } from 'vue'
import ScrollWrap from './ScrollWrap.vue'

ScrollWrap.install = (app: App): void => {
  app.component(ScrollWrap.name, ScrollWrap)
}

export default ScrollWrap
