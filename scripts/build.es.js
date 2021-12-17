/*
 * @Author: ShawnPhang
 * @Date: 2021-09-02 15:36:56
 * @Description:
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-23 19:37:22
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
    input: fs.existsSync(`./packages/${dirName}/index.ts`) ? `./packages/${dirName}/index.ts` : `./packages/${dirName}/index.js`,
    output: {
      file: `./packages/${dirName}/${libName}/index.es.js`,
      format: 'esm',
    },
  }
  const dirNames = fs.readdirSync(`packages/${dirName}`)
  // 如果存在src则使用分包打包
  if (dirNames.includes('src')) {
    const srcPkgs = fs.readdirSync(`packages/${dirName}/src`)
    const inputs = {}
    srcPkgs.forEach((pkg) => {
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
