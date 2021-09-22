/*
 * @Author: ShawnPhang
 * @Date: 2021-09-22 16:29:47
 * @Description:
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-22 16:46:36
 * @site: book.palxp.com / blog.palxp.com
 */
/**
 * 随机生成颜色
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @return {String} color
 */
export default function randomColor() {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
}

// module.exports = randomColor
