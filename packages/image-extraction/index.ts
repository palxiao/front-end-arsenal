/*
 * @Author: ShawnPhang
 * @Date: 2023-10-07 23:50:21
 * @Description:
 * @LastEditors: ShawnPhang <https://m.palxp.cn>
 * @LastEditTime: 2023-10-08 15:50:03
 */
import { App } from 'vue'
import Comp from './ImageExtraction.vue'

Comp.install = (app: App): void => {
  app.component(Comp.name, Comp)
}

export default Comp
