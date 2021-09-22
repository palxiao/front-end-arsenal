<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-02 10:44:23
 * @Description: 前端组件库搭建
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-17 19:11:50
 * @site: book.palxp.com / blog.palxp.com
-->

## 技术要点

1. [x] 按需打包，独立打包
2. [x] 指定打包
2. [ ] 对 d.ts 声明文件进行打包
2. [x] 提交组件的测试，lerna
3. [x] 文档的自动生成

## 文档
### API
  Name Attributes
    参数名 说明文字 类型 可选值 
### 技术方案
  装饰器？复合函数？（排除，会增加副作用）
  选择了不增加副作用的编译器插件方式，这里对应rollup
  工具库将采用`typedoc`生成文档

## 流程

在 packages 中开发，在 example 中查看，在 docs 中展示

## 设计

独立打包只生成一个 index 包，多文件打包（即按需打包）则是否存在 src 文件夹判定，分包在 src 开发。

组件工厂：packages/

组件目录：packages/xxxx/

组件打包文件夹：lib
组件打包 d.ts 文件夹：typings

## 基础

模块包管理：lerna

组件设计：按需加载、扩展性延展性

开发与调试

单元测试：mocha、jest

持续集成、打包发布：shell、nodejs、git

代码规范、提交规范：vscode 工具集成

## 组件库

区分：Vue2 Vue3 基于 UI 框架

打包：rollup

组件库文档工具：VitePress、自己实现

本地开发调试：
框架库等依赖推荐使用 CDN 引入，不用额外配置

## 函数类工具库

打包：rollup

文档工具：

## vite 按需加载示例

```
npm install vite-plugin-importer --save
```

```
yarn add vite-plugin-importer
```

```
// vite.config.js
import { defineConfig } from "vite";
import usePluginImport from 'vite-plugin-importer'
export default defineConfig({
  plugins: [
    ... // other plugins
    usePluginImport({
      libraryName: "ant-design-vue",
      libraryDirectory: "es",
      style: "css",
    }),
    usePluginImport({
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css",
    }),
    usePluginImport({
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: (name) => `${name}/style/less`,
    }),
    usePluginImport({
      libraryName: 'element-plus',
      customStyleName: (name) => {
        return `element-plus/lib/theme-chalk/${name}.css`;
      },
    })
    // Other configurations welcome PR
  ];
})
```

## webpack 按需加载示例

```
yarn add babel-plugin-import -D
# 或
npm install babel-plugin-import -D
```

```
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        // 引入组件
        customName: (name) => {
          return `element-plus/lib/components/${name}`
        },
        // 引入样式
        // customStyleName: (name) => {
        //   return `element-plus/lib/components/${name}/style/css`
        // },
      },
    ],
  ],
}
```

## 分包打包

查看当前包源

```
nrm ls
```

切换源

```
nrm use npm
```

查看登录用户

```
npm whoami
```

没有则登录

```
npm login
# OR
npm addUser
```
