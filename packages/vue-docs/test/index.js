/*
 * @Author: ShawnPhang
 * @Date: 2023-08-09 10:07:15
 * @Description:
 * @LastEditors: ShawnPhang <site: m.palxp.cn>
 * @LastEditTime: 2023-08-09 10:07:45
 */
// @ts-nocheck
import { parse } from '@vue/compiler-sfc'
import { handleScript } from '../src/main'
import { exportDefault } from './data/utils'

const { descriptor } = parse(
  exportDefault(` emits: {
    // 没有验证函数
    click: null,

    // 带有验证函数
    submit: payload => {
      if (payload.email && payload.password) {
        return true
      } else {
        console.warn(\`Invalid submit event payload!\`)
        return false
      }
    }
  }`),
)

const component = handleScript(descriptor.script)
console.log(component)
