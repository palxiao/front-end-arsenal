/*
 * @Author: ShawnPhang
 * @Date: 2021-12-15 17:02:52
 * @Description: 配置
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-12-16 14:43:39
 * @site: book.palxp.com / blog.palxp.com
 */
const path = require('path')
const fs = require('fs-extra')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { merge } = require('webpack-merge')

const createConfig = (args = []) => {
  const pkgPath = path.join(__dirname, '../', 'packages')
  const dirs = args.length > 0 ? args : fs.readdirSync(pkgPath)
  return dirs.map((item) => {
    let baseConfig = {}
    // try {
    // 读取某个包是否有特定配置
    //   let baseConfigPath = path.join(pkgPath, item, 'webpack.config.js')
    //   fs.accessSync(baseConfigPath)
    //   baseConfig = require(baseConfigPath)
    // } catch (error) {
    //   console.log(error)
    // }
    let defaultConfig = {
      mode: 'development',
      entry: path.join(pkgPath, item, 'index.js'),
      target: ['web', 'es5'],
      output: {
        filename: 'index.js',
        path: path.resolve(pkgPath, item, 'dist'),
        library: item,
        libraryTarget: 'umd',
        libraryExport: 'default',
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader',
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'url-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
      externals: {
        vue: 'vue',
        vuex: 'vuex',
        vant: 'vant',
        hui: 'hui',
        'current-script-polyfill': 'current-script-polyfill',
      },
      resolve: {
        extensions: ['.js', '.vue'],
      },
      plugins: [new VueLoaderPlugin(), new CleanWebpackPlugin()],
    }
    return merge(defaultConfig, baseConfig)
  })
}

module.exports = createConfig
