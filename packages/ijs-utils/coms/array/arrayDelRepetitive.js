/*
 * @Author: ShawnPhang
 * @Date: 2021-09-25 18:28:19
 * @Description:
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2022-05-19 11:57:15
 * @site: book.palxp.com / blog.palxp.com
 */
/**
 *
 * @desc 数组去重
 * @kind Array - 数组类函数
 * @param {Array} arr1 去重的对象
 * @param {Array} arr2 可以同时合并多个数组之后再去重
 * @return {Array}
 * eg: arrayDelRepetitive([1,2],[2,5],[3,5,9])  //  [1, 2, 5, 3, 9]
 */
function arrayDelRepetitive(arr1, ...arr2) {
  return [...new Set(arr1.concat(...arr2))]
}

export default arrayDelRepetitive
