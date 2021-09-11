/*
 * @Author: ShawnPhang
 * @Date: 2021-09-02 15:36:56
 * @Description: 
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-11 16:08:57
 * @site: book.palxp.com / blog.palxp.com
 */
const fs = require('fs');
const chalk = require('chalk');
// const { terser } = require('rollup-plugin-terser');
const { build, walkPackageDirs } = require('./build');

console.log(chalk.blue('正在生成cjs模块!'));
walkPackageDirs((dirName) => {
  fs.mkdirSync(`./packages/${dirName}/dist`,{ recursive:true });
  build({
    input: `./packages/${dirName}/index.ts`,
    output: {
      file: `./packages/${dirName}/dist/index.js`,
      exports:'named',
      format: 'cjs',
    },
    // terser: terser({
    //   output: {
    //     comments: false
    //   }
    // })
  });
});