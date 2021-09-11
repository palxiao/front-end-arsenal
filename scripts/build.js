/*
 * @Author: ShawnPhang
 * @Date: 2021-09-02 15:36:56
 * @Description: 
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-11 11:29:23
 * @site: book.palxp.com / blog.palxp.com
 */
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const rollup = require('rollup')
const typescript = require('rollup-plugin-typescript2')
const vuePlugin = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')
const { gzipSync } = require('zlib')
const { compress } = require('brotli')

module.exports = {
  build: async function ({ input, output, terser, external } = {}) {
    const bundle = await rollup.rollup({
      input,
      plugins: [
        vuePlugin({
          include: /\.vue$/,
          preprocessStyles: true,
        }),
        typescript({
          exclude: 'node_modules/**',
        }),
        postcss(),
        terser,
      ],
      external,
    })
    await bundle.write(output)
    const { file } = output
    if (file) {
      const code = fs.readFileSync(file)
      // 计算压缩后大小
      const minSize = (code.length / 1024).toFixed(2)
      const gzipped = gzipSync(code)
      const gzippedSize = (gzipped.length / 1024).toFixed(2)

      const compressed = compress(code)
      const compressedSize = (compressed.length / 1024).toFixed(2)

      console.log(`${chalk.green(chalk.bold(file))} mini: ${minSize}kb / gzip: ${gzippedSize}kb / compressedSize: ${compressedSize}kb`)
    }
  },
  walkPackageDirs: function (callback) {
    const targetDir = process.argv[process.argv.length - 1] // 假如输入了目标
    const dirNames = fs.readdirSync('packages')

    if (dirNames.includes(targetDir)) {
      callback(targetDir)
    } else {
      const whiteList = ['shared']
      dirNames.forEach((dirName) => {
        const dirPath = path.resolve('packages', __dirname)
        const state = fs.statSync(dirPath)
        // 寻找包文件夹
        if (state.isDirectory() && !whiteList.includes(dirName)) {
          callback(dirName)
        }
      })
    }
  },
}
