/*
 * @Author: ShawnPhang
 * @Date: 2022-05-18 18:04:50
 * @Description:
 * @LastEditors: ShawnPhang <site: m.palxp.cn>
 * @LastEditTime: 2023-07-31 09:25:41
 */
import { parse } from '@vue/compiler-sfc'
import { handleScript } from '../src/main'
import { emits1, emits2, emits3 } from './data/emits'

test('test handleScript emits 1', () => {
  const { descriptor } = parse(emits1)
  expect(handleScript(descriptor.script)).toEqual({
    name: 'hello-world',
    props: [],
    emits: [{ name: 'click', notes: '' }],
    // // methods: [],
  })
})

test('test handleScript emits 2', () => {
  const { descriptor } = parse(emits2)
  expect(handleScript(descriptor.script)).toEqual({
    name: 'hello-world',
    props: [],
    emits: [{ name: 'click', notes: ' 这是事件注释' }],
    // // methods: [],
  })
})

test('test handleScript emits 3', () => {
  const { descriptor } = parse(emits3)
  expect(handleScript(descriptor.script)).toEqual({
    name: 'hello-world',
    props: [],
    emits: [
      { name: 'click', notes: ' 没有验证函数' },
      { name: 'submit', notes: ' 带有验证函数' },
    ],
    // methods: [],
  })
})
