/*
 * @Author: ShawnPhang
 * @Date: 2021-09-25 18:29:13
 * @Description:
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-25 18:36:08
 * @site: book.palxp.com / blog.palxp.com
 */
/**
 *
 * @desc 对象数组去重
 * @param {Array} arr
 * @param {String} 对象中相同的关键字(如id)
 * @return {Array}
 */
function objArrayDelRepetitive(arr, key) {
  const map = new Map()
  return arr.filter((x) => !map.has(x[key]) && map.set(x[key], true))
}

export default objArrayDelRepetitive
