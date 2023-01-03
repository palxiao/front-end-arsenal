/*
 * @Author: ShawnPhang
 * @Date: 2021-12-21 10:48:46
 * @Description: 自动编译发布版本号
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2022-05-18 11:36:55
 * @site: book.palxp.com
 */

;(function tv() {
    const fs = require('fs')
    const path = `.build.version`
    try {
      fs.readFile(path, function (err, data) {
        if (err) {
          fs.writeFile(path, '{ "version": "1.0" }', 'utf8', function (error) {
            tv()
          })
          return false
        }
        const packJson = JSON.parse(data.toString())
  
        // 编译独立版本号
        let version = packJson.buildVersion ? packJson.buildVersion.split('.') : '1.0.0'.split('.')
  
        version[version.length - 1] = Number(version[version.length - 1]) + 1
        packJson.buildVersion = version.join('.')
        fs.writeFile(path, JSON.stringify(packJson, '', '\t'), (err) => {
          if (err) throw err
        })
      })
    } catch (e) {}
  })()
  
  // module.exports = tv
  