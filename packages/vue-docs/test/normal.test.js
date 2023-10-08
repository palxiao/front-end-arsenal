/*
 * @Author: ShawnPhang
 * @Date: 2022-05-18 18:04:50
 * @Description:
 * @LastEditors: ShawnPhang <site: m.palxp.cn>
 * @LastEditTime: 2023-08-09 10:09:11
 */
import { parse } from '@vue/compiler-sfc'
import { handleScript } from '../src/main'
import { normal1, default1 } from './data/normal'

// test('test handleScript normal 1', () => {
//   const { descriptor } = parse(normal1)
//   expect(handleScript(descriptor.script)).toEqual({
//     name: 'hello-world',
//     props: [{ name: 'name', notes: ' 这是props注释', type: 'string | number' }],
//     emits: [{ name: 'click', notes: ' 这是事件注释' }],
//     // methods: [],
//   })
// })

test('test handleScript default 1', () => {
  const { descriptor } = parse(default1)
  expect(handleScript(descriptor.script)).toEqual({
    name: 'hello-world',
    props: [{ name: 'name', notes: ' 这是props注释', type: 'string | number' }],
    emits: [{ name: 'click', notes: ' 这是事件注释' }],
    // methods: [],
  })
})
