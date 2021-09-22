/**
 * 生成指定范围[min, max]的随机数
 * @constructor
 * @param  {Number} min
 * @param  {Number} max
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
export default function randomNum(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// module.exports = randomNum
