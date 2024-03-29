/*
 * @Author: ShawnPhang
 * @Date: 2021-09-22 19:39:50
 * @Description: 打包选择器
 * @LastEditors: ShawnPhang <site: m.palxp.cn>
 * @LastEditTime: 2023-07-20 16:38:04
 * @site: m.palxp.cn / blog.palxp.com
 */
const fs = require('fs')
const ora = require('ora')
const exec = require('child_process').exec
const inquirer = require('inquirer')

let dirNames = fs.readdirSync('packages')
dirNames = dirNames.filter((name) => {
  if (name !== '.DS_Store' && name !== 'vue-docs') {
    return { name }
  }
})
const option = [
  {
    type: 'checkbox',
    message: '请选择要打包的目录',
    name: 'packages',
    choices: [new inquirer.Separator(' = /packages/... = '), ...dirNames],
    validate(answer) {
      if (answer.length < 1) {
        return 'You must choose at least one packages!'
      }
      return true
    },
  },
  {
    type: 'confirm',
    name: 'preBuild',
    message: '执行分包预编译 (lerna run build) ?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'compress',
    message: '是否压缩混淆 ?',
    default: false,
  },
]
inquirer.prompt(option).then(async (answers) => {
  const process = ora()
  if (answers.preBuild) {
    process.start('lerna run build ...')
    await exec(`lerna run build`)
    process.succeed('分包预编译完成')
  }
  console.log(`编译命令：yarn build:es${answers.compress ? '-mini' : ''} ${answers.packages.join(' ')}`)
  process.start('正在打包: ' + answers.packages + ' ...')
  exec(`yarn build:es${answers.compress ? '-mini' : ''} ${answers.packages.join(' ')}`, (error, stdout, stderr) => {
    // console.log(stdout)
    // console.log(stderr)
    if (!error) {
      process.succeed('打包即将完成...')
    }
  })
})
