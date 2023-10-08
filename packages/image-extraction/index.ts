/*
 * @Author: ShawnPhang
 * @Date: 2023-10-07 23:50:21
 * @Description:
 * @LastEditors: ShawnPhang <https://m.palxp.cn>
 * @LastEditTime: 2023-10-09 01:30:13
 */
import { App } from 'vue'
import matting from './ImageExtraction.vue'
import MattingType from './types/matting'

matting.install = (app: App): void => {
  app.component(matting.name, matting)
}

export default matting

export { MattingType }
