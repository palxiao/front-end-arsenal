/*
 * @Author: ShawnPhang
 * @Date: 2023-05-25 17:45:07
 * @Description:
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-05-29 17:44:38
 */
const { exec } = require('child_process')
const chalk = require('chalk')
const inquirer = require('inquirer')
const ora = require('ora') // ora是一个命令行loading
const path = require('path')
const fs = require('fs')

const scope = '@palxp/' // 包的作用域，如果你的包没有作用域，那么则不需要

const packageJson = {
  name: '',
  version: '1.0.0',
  description: 'TODO',
  author: 'ShawnPhang <palxiao@vip.qq.com>',
  homepage: '',
  license: 'ISC',
  main: 'dist/index.js',
  module: 'dist/index.es.js',
  types: 'dist/index.d.ts',
  publishConfig: {
    access: 'public',
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/palxiao/front-end-arsenal.git',
  },
  scripts: {
    test: 'echo "Error: run tests from root" && exit 1',
  },
  bugs: {
    url: 'https://github.com/palxiao/front-end-arsenal/issues',
  },
}

const readme = (name) => {
  return `<img style="display: inline-block;" src="https://img.shields.io/github/watchers/palxiao/front-end-arsenal?style=social" /> <img style="display: inline-block;" src="https://img.shields.io/github/forks/palxiao/front-end-arsenal?style=social" /> <img style="display: inline-block;" src="https://img.shields.io/github/stars/palxiao/front-end-arsenal?style=social" />
  
  # ${name}

  > TODO: 
  
  <img style="display: inline-block;" src="https://img.shields.io/npm/v/${scope}${name}" /> <img style="display: inline-block;" src="https://img.shields.io/bundlephobia/min/${scope}${name}?color=%2344cc88" /> <img style="display: inline-block;" src="https://img.shields.io/npm/dm/${scope}${name}" />

  ## Usage
  
  \`\`\`
  yarn add ${scope}${name}
  
  import ScrollWrap from '${scope}${name}'
  \`\`\`
  
  ## API
  [API Docs 链接](/#/docs)
  <iframe src="/#/docs/${name}/index?preview=true" frameborder="0"></iframe>
  `
}

const index = () => {
  return `import { App } from 'vue'
  import Comp from './index.vue'
  
  Comp.install = (app: App): void => {
    app.component(Comp.name, Comp)
  }
  
  export default Comp`
}

const pageVue = (name) => {
  return `<template>
  <example-frame :main-name="mainName" :readme-list="readmeList" :example-list="exampleList" />
</template>
<script lang="ts">
import ExampleFrame from '../../components/ExampleFrame.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { ExampleFrame },
  setup() {
    return {
      mainName: '${name}',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档',
        },{
          name: 'CHANGELOG',
          introduce: '更新日志',
        },
      ],
      exampleList: [
        {
          name: '基础演示',
          introduce: ''
        },
      ],
    }
  },
})
</script>`
}

const exampleVue = (name) => {
  return `<template><comp /></template>

  <script lang="ts">
  import comp from '@pkg/${name}/index.vue'
  import { defineComponent } from 'vue'
  export default defineComponent({
    components: { comp },
    setup() {
      return {}
    },
  })
  </script>`
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称',
      validate(input) {
        // 异步验证需要调用这个方法来告诉inquirer是否校验完成
        const done = this.async()
        input = String(input).trim()
        if (!input) {
          return done('请输入组件名称')
        }
        const spinner = ora('正在检查包名是否存在').start()
        exec(`npm search ${scope + input}`, (err, stdout) => {
          spinner.stop()
          if (err) {
            done('检查包名是否存在失败，请重试')
          } else {
            if (/No matches/.test(stdout)) {
              done(null, true)
            } else {
              done('该包名已存在，不允许创建!')
            }
          }
        })
      },
    },
  ])
  .then(async ({ name }) => {
    const fsFas = fs.existsSync(path.resolve(`./packages/${name}`))
    if (!fsFas) {
      fs.mkdir(path.resolve(`./packages/${name}`), { recursive: true }, (err) => {
        if (err) {
          console.error(err)
        } else {
          // 创建 packageJson
          packageJson.name = scope + name
          packageJson.homepage = `https://fe-doc.palxp.com/#/${name}`
          fs.writeFileSync(path.resolve(`./packages/${name}/package.json`), JSON.stringify(packageJson, null, '\t'))
          // 创建 README 文件
          fs.writeFileSync(path.resolve(`./packages/${name}/README.md`), readme(name))
          // 创建入口文件
          fs.writeFileSync(path.resolve(`./packages/${name}/index.ts`), index())
          // 创建网页
          fs.mkdirSync(path.resolve(`./src/pages/${name}`))
          fs.writeFileSync(path.resolve(`./src/pages/${name}/index.vue`), pageVue(name))
          fs.mkdirSync(path.resolve(`./src/pages/${name}/example`))
          fs.writeFileSync(path.resolve(`./src/pages/${name}/example/example1.vue`), exampleVue(name))

          console.log('创建成功，请访问：' + `http://localhost:3000/#/${name}`)
        }
      })
    } else {
      console.log('目录存在，包创建已终止!')
    }
    // const lernaDo = exec(`lerna create ${scope + name}`)
    // lernaDo.kill()
  })
  .catch((error) => {
    // 错误处理
    if (error.isTtyError) {
      console.log(chalk.bgRed.white.bold('当前环境无法运行，请手动添加组件'))
      process.exit(1)
    } else {
      console.log(chalk.bgRed.white.bold('未知错误，请手动添加组件'))
      process.exit(1)
    }
  })
