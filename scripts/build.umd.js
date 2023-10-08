/*
 * @Author: ShawnPhang
 * @Date: 2021-09-02 15:36:56
 * @Description:
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-11 16:09:14
 * @site: m.palxp.cn / blog.palxp.com
 */
const fs = require('fs')
const chalk = require('chalk')
const { build, walkPackageDirs } = require('./build')

console.log(chalk.blue('正在生成umd模块!'))
walkPackageDirs((dirName) => {
  fs.mkdirSync(`./packages/${dirName}/dist`, { recursive: true })
  build({
    input: `./packages/${dirName}/index.ts`,
    output: {
      file: `./packages/${dirName}/dist/index.umd.js`,
      format: 'umd',
      exports: 'named',
      name: `Name${toCamelCase(dirName)}`,
      globals: {
        vue: 'Vue',
      },
    },
  })
})

function toCamelCase(name) {
  return name
    .split('-')
    .map((str) => {
      return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
    })
    .join('')
}
