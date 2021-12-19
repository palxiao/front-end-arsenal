/*
 * @Author: ShawnPhang
 * @Date: 2021-12-16 10:24:49
 * @Description: vue自动转api
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-12-19 19:04:47
 * @site: book.palxp.com / blog.palxp.com
 */
const fs = require('fs')
const glob = require('glob')
const { parser } = require('@vuese/parser')
const { Render } = require('@vuese/markdown-render')

// const classifys = fs.readdirSync('src/pages')
// classifys.map((classify) => {
//   fs.mkdirSync(`src/code/${classify}`, { recursive: true })
// })

glob('packages/**/src/*.vue', (err, files) => {
  if (err) {
    throw err
  }
  files.map((file) => {
    const source = fs.readFileSync(file, 'utf-8')
    try {
      const parserRes = parser(source)
      // 创建渲染实例
      const r = new Render(parserRes)
      // 基本渲染，返回值是一个对象
      // const renderRes = r.render()
      // 渲染完整的 markdown 文本，返回值是 markdown 字符串
      const markdownRes = r.renderMarkdown()?.content.replace('#', '组件使用说明 -')
      // console.log(markdownRes)
      setDoc(file.split('/')[1], markdownRes || '')
    } catch (e) {
      console.error(e)
    }
  })
})

function setDoc(compName, apiText) {
  const docPath = `demo/docs/${compName}/README.md`
  const text = fs.readFileSync(docPath, 'utf8')
  // console.log(text);
  const spText = text.split('<!-- ## API -->\n')
  const output = `${spText[0]}<!-- ## API -->\n\n${apiText}`
  fs.writeFileSync(docPath, output)
}
