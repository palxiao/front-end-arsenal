/**
 * 生成指定范围[min, max]的随机数
 * @param  {Number} min
 * @param  {Number} max
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
export default function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
