/*
 * @Author: ShawnPhang
 * @Date: 2021-09-02 15:36:56
 * @Description:
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-23 17:49:30
 * @site: book.palxp.com / blog.palxp.com
 */
const fs = require('fs')
const glob = require('glob')

const classifys = fs.readdirSync('src/pages')
classifys.map((classify) => {
  fs.mkdirSync(`src/code/${classify}`, { recursive: true })
})

glob('src/pages/**/example/example*.vue', (err, files) => {
  if (err) {
    throw err
  }
  files.map((file) => {
    const codeFileName = file.replace('pages', 'code').replace('example/', '').replace('vue', 'md')
    const code = fs.readFileSync(file, 'utf8')
    const output = `\`\`\`vue\n${code}\n\`\`\``
    fs.writeFileSync(codeFileName, output)
  })
})
