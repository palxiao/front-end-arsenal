const { exec } = require('child_process')
const chalk = require('chalk')
const inquirer = require('inquirer')
const ora = require('ora') // ora是一个命令行loading工具
const upperCamelCase = require('uppercamelcase') // 字符串-风格的转驼峰
const fs = require('fs-extra')
const path = require('path')
const render = require('json-templater/string')
const parse = require('@babel/parser').parse
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const t = require('@babel/types')

const scope = '@zk/' // 包的作用域，如果你的包没有作用域，那么则不需要
const templateDir = path.join(__dirname, 'template') // 模板路径

const updateEnhanceApp = ({ name }) => {
  const filePath = path.join(__dirname, '../', 'demo', 'docs', '.vuepress', 'enhanceApp.js')
  const code = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  })
  // 解析成ast
  const ast = parse(code, {
    sourceType: 'module',
  })
  // 遍历ast进行转换
  traverse(ast, {
    // 遍历到Program节点会执行该函数
    // 函数的第一个参数并不是节点本身，而是代表节点的路径，路径上会包含该节点和其他节点之间的关系信息，后续的一些操作也都是在路径上进行，如果要访问节点本身，可以访问path.node
    Program(nodePath) {
      let bodyNodesList = nodePath.node.body // 通过上图可以看到是个数组
      // 遍历节点找到最后一个import节点
      let lastImportIndex = -1
      for (let i = 0; i < bodyNodesList.length; i++) {
        if (t.isImportDeclaration(bodyNodesList[i])) {
          lastImportIndex = i
        }
      }
      // 构建即将要插入的import语句的AST节点：import name from @zk/name
      // 节点类型及需要的参数可以在这里查看：https://babeljs.io/docs/en/babel-types
      // 如果不确定使用哪个类型的话可以在上述的https://astexplorer.net/网站上看一下某个语句对应的是什么
      const newImportNode = t.importDeclaration(
        [
          t.ImportDefaultSpecifier(t.Identifier(upperCamelCase(name))), // name
        ],
        t.StringLiteral(scope + name)
      )
      // 当前没有import节点，则在第一个节点之前插入import节点
      if (lastImportIndex === -1) {
        let firstPath = nodePath.get('body.0') // 获取body的第一个节点的path
        firstPath.insertBefore(newImportNode) // 在该节点之前插入节点
      } else {
        // 当前存在import节点，则在最后一个import节点之后插入import节点
        let lastImportPath = nodePath.get(`body.${lastImportIndex}`)
        lastImportPath.insertAfter(newImportNode)
      }
    },
    // 遍历到ExportDefaultDeclaration节点
    ExportDefaultDeclaration(nodePath) {
      let bodyNodesList = nodePath.node.declaration.body.body // 找到箭头函数节点的body，目前存在两个表达式节点
      // 下面的逻辑和添加import语句的逻辑基本一致，遍历节点找到最后一个vue.use类型的节点，然后添加一个新节点
      let lastIndex = -1
      for (let i = 0; i < bodyNodesList.length; i++) {
        let node = bodyNodesList[i]
        // 找到第一个不是vue.use类型的节点
        if (t.isExpressionStatement(node) && t.isCallExpression(node.expression) && t.isMemberExpression(node.expression.callee) && node.expression.callee.object.name === 'Vue' && node.expression.callee.property.name === 'use') {
          lastIndex = i
        }
      }
      // 构建新节点：Vue.use(name)
      const newNode = t.expressionStatement(t.callExpression(t.memberExpression(t.identifier('Vue'), t.identifier('use')), [t.identifier(upperCamelCase(name))]))
      // 插入新节点
      if (lastIndex === -1) {
        if (bodyNodesList.length > 0) {
          let firstPath = nodePath.get('declaration.body.body.0')
          firstPath.insertBefore(newNode)
        } else {
          let bodyPath = nodePath.get('declaration.body')
          bodyPath.pushContainer('body', newNode)
        }
      } else {
        let lastPath = nodePath.get(`declaration.body.body.${lastIndex}`)
        lastPath.insertAfter(newNode)
      }
    },
  })
  // 生成源代码
  const newCode = generate(ast)
  // 写回文件
  fs.writeFileSync(filePath, newCode.code, {
    encoding: 'utf-8',
  })
}

/**
 * javascript comment
 * @Author: 王林25
 * @Date: 2021-04-01 17:05:23
 * @Desc: 更新config.js
 */
const updateConfig = ({ name }) => {
  const filePath = path.join(__dirname, '../', 'demo', 'docs', '.vuepress', 'config.js')
  const code = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  })
  // 解析成ast
  const ast = parse(code, {
    sourceType: 'module',
  })
  // 遍历ast进行转换
  traverse(ast, {
    ObjectProperty(nodePath) {
      // 找到sidebar字段
      if (nodePath.node.key.name === 'sidebar') {
        let isFind = false
        nodePath.findParent((p) => {
          if (t.isObjectProperty(p) && p.node.key.name === 'themeConfig') {
            isFind = true
          }
        })
        if (isFind) {
          // 找到“组件”项
          let index = -1
          let fieldIndex = -1
          for (let i = 0; i < nodePath.node.value.elements.length; i++) {
            let el = nodePath.node.value.elements[i]
            let find = false
            for (let j = 0; j < el.properties.length; j++) {
              let prop = el.properties[j]
              if (prop.key.name === 'title' && prop.value.value === '组件') {
                find = true
              }
              if (prop.key.name === 'children') {
                fieldIndex = j
              }
            }
            if (find) {
              index = i
              break
            }
          }
          let newNode = t.stringLiteral(`/${name}/`) // `/zh/${name}/`
          let itemPath = nodePath.get(`value.elements.${index}`) // sidebar数组里指定的项
          let childrenPath = itemPath.get(`properties.${fieldIndex}`) // children字段
          childrenPath.get('value').pushContainer('elements', newNode)
        }
      }
    },
  })
  // 生成源代码
  const newCode = generate(ast)
  // 写回文件
  fs.writeFileSync(filePath, newCode.code, {
    encoding: 'utf-8',
  })
}

/**
 * javascript comment
 * @Author: 王林25
 * @Date: 2021-03-31 19:12:37
 * @Desc:  渲染模板以及创建文件
 */
const renderTemplateAndCreate = (file, data = {}, dest) => {
  const templateContent = fs.readFileSync(path.join(templateDir, file), {
    encoding: 'utf-8',
  })
  const fileContent = render(templateContent, data)
  fs.writeFileSync(path.join(dest, file), fileContent, {
    encoding: 'utf-8',
  })
}

/**
 * javascript comment
 * @Author: 王林25
 * @Date: 2021-03-31 19:23:10
 * @Desc: 创建组件文档目录及文件
 */
const createDoc = ({ name }) => {
  // 文档目录
  const destDir = path.join(__dirname, '../', 'demo', 'docs', name)
  // 创建目录
  fs.ensureDirSync(destDir)
  // 创建README.md
  renderTemplateAndCreate(
    'README.md',
    {
      name: scope + name,
      useName: upperCamelCase(name),
    },
    destDir
  )
}

/**
 * javascript comment
 * @Author: 王林25
 * @Date: 2021-03-31 18:50:59
 * @Desc: 创建组件文件夹及文件
 */
const create = ({ name }) => {
  // 组件目录
  const destDir = path.join(__dirname, '../', 'packages', name)
  const srcDir = path.join(destDir, 'src')
  // 创建目录
  fs.ensureDirSync(destDir)
  fs.ensureDirSync(srcDir)
  // 复制index.js和style.less
  fs.copySync(path.join(templateDir, 'index.js'), path.join(destDir, 'index.js'))
  fs.copySync(path.join(templateDir, 'style.less'), path.join(srcDir, 'style.less'))
  // 创建package.json
  renderTemplateAndCreate(
    'package.json',
    {
      name: scope + name,
    },
    destDir
  )
  // index.vue
  renderTemplateAndCreate(
    'index.vue',
    {
      name: upperCamelCase(name),
    },
    srcDir
  )
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
              done('该包名已存在，请修改')
            }
          }
        })
      },
    },
  ])
  .then((answers) => {
    create(answers)
    createDoc(answers)
    updateEnhanceApp(answers)
    updateConfig(answers)
    // process.exit(0)
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
