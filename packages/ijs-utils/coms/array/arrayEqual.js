/*
 * @Author: ShawnPhang
 * @Date: 2021-09-25 17:35:28
 * @Description:
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-25 18:38:25
 * @site: book.palxp.com / blog.palxp.com
 */
/**
 *
 * @desc 判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
export default function arrayEqual(arr1, arr2) {
  if (arr1 === arr2) return true
  if (arr1.length != arr2.length) return false
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}
