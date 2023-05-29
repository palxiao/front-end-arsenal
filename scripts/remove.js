const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const inquirer = require('inquirer')
// const ora = require('ora') // ora是一个命令行loading

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: '请输入要删除的组件名称',
      validate(input) {
        // 异步验证需要调用这个方法来告诉inquirer是否校验完成
        const done = this.async()
        input = String(input).trim()
        if (!input) {
          return done('请输入组件名称')
        }
        done(null, true)
      },
    },
  ])
  .then(({ name }) => {
    // 删除文件夹
    fs.rmSync(path.resolve(`./packages/${name}`), { recursive: true })
    fs.rmSync(path.resolve(`./src/pages/${name}`), { recursive: true })
    console.log('删除成功')
  })
  .catch((error) => {
    // 错误处理
    if (error.isTtyError) {
      console.log(chalk.bgRed.white.bold('当前环境无法运行，请手动删除'))
      process.exit(1)
    } else {
      console.log(chalk.bgRed.white.bold('未知错误'))
      process.exit(1)
    }
  })
