/*
 * @Author: ShawnPhang
 * @Date: 2023-10-07 23:50:21
 * @Description:
 * @LastEditors: ShawnPhang <https://m.palxp.cn>
 * @LastEditTime: 2023-10-08 23:28:28
 */
import { App } from 'vue'
import matting from './ImageExtraction.vue'
import type Matting from './types/matting.d.ts'

matting.install = (app: App): void => {
  app.component(matting.name, matting)
}

export { matting, Matting }
