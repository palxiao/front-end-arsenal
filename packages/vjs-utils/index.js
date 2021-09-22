/*
 * @Author: ShawnPhang
 * @Date: 2021-09-22 16:28:12
 * @Description:
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-22 18:24:25
 * @site: book.palxp.com / blog.palxp.com
 */
const moduleExports = {}

const r = require.context('./coms/', true, /^\.\/.+\/.+\.ts$/)
r.keys().forEach((key) => {
  const attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
  moduleExports[attr] = r(key)
})

// module.exports = moduleExports

export default moduleExports
