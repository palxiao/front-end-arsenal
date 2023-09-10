/*
 * @Author: ShawnPhang
 * @Date: 2022-05-18 18:04:50
 * @Description:
 * @LastEditors: ShawnPhang <https://m.palxp.cn>
 * @LastEditTime: 2023-09-10 23:53:41
 */
// @ts-nocheck

import { defineComponent, defineSetup } from './utils'

// export const props1 = defineComponent(`props: {
//     // 测试获取组件名称
//     name: String,
//  }`)
export const props1 = defineSetup(
  `const props = defineProps({
    // 测试获取组件名称
    name: String,
})`,
)

export const props2 = defineComponent(`props: {
    // 测试获取组件名称
    name: {
        type: String,
        default: '组件名称'
    }
}`)

export const props3 = defineComponent(`props: {
    // 测试获取组件名称
    name: {
        type: String,
        default: '组件名称',
        required: true,
    }
}`)

export const props4 = defineComponent(`props: {
    name: {
        type: String,
        default: '组件名称',
        required: true,
    }
}`)

export const props5 = defineComponent(`props: {
    name: {
        type: [String, Number],
        default: '组件名称',
        required: true,
    }
}`)
