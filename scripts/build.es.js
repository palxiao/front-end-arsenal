/*
 * @Author: ShawnPhang
 * @Date: 2021-09-02 15:36:56
 * @Description:
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-13 17:07:01
 * @site: book.palxp.com / blog.palxp.com
 */
const fs = require('fs')
const chalk = require('chalk')
const { build, walkPackageDirs } = require('./build')

const libName = 'dist'
const entryName = '' // 按需打包时可选的前缀名 - 

console.log(chalk.blue('正在生成es模块!'))

walkPackageDirs((dirName) => {
  let option = {
    input: `./packages/${dirName}/index.ts`,
    output: {
      file: `./packages/${dirName}/${libName}/index.es.js`,
      format: 'esm',
    },
  }
  const dirNames = fs.readdirSync(`packages/${dirName}`)
  if (dirNames.includes('src')) {
    const srcPkgs = fs.readdirSync(`packages/${dirName}/src`)
    const inputs = {}
    srcPkgs.forEach(pkg => {
      inputs[`${pkg}/index`] = `./packages/${dirName}/src/${pkg}/index.ts`
    })
    option.input = inputs
    option.output = {
      entryFileNames: `${entryName ? entryName + '-' : ''}[name].js`,
      dir: `./packages/${dirName}/${libName}`,
      format: 'esm',
    }
  }
  fs.mkdirSync(`./packages/${dirName}/${libName}`, { recursive: true })
  build(option)
})
