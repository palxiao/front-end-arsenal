<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-02 10:44:23
 * @Description: 前端组件库搭建
 * @LastEditors: ShawnPhang <https://m.palxp.cn>
 * @LastEditTime: 2023-10-08 00:42:16
 * @site: m.palxp.cn / blog.palxp.com
-->

## 前端军火库

<!-- START -->

#### [ColorPicker 颜色选择器（吸色器）](/#/color-picker)

#### [ImageExtraction 图像修补擦除工具](/#/image-extraction)

#### [ScrollWrap 吸附滚动组件](/#/scroll-wrap)

#### <a target="_blank" href="/#/j-editor">JEditor 掘金 MarkDown 编辑器</a>

#### [CodePanel 代码编辑器](/#/code-panel)

#### [IJS Utils 工具函数集](/#/ijs-utils)

<!-- END -->

## 说明

> 这是一个用于开发 Vue3 组件/组件库、以及工具类函数的仓库。
>
> 自动化的文档网站，只需专注于组件的开发，文档全自动生成。

## 为什么组件化

> 拆分组件的意义在于，细化项目的颗粒度，避免将复杂功能耦合在项目中，更方便后续的迁移改造、重写或移除、性能调优等工作。
>
> 在此基础上，高度抽象的组件还可复用，为其它项目中快速集成功能提供了可能性。

## 流程

1. 运行 `npm run add` 添加组件

2. 在 `packages` 中开发代码，在 `src/pages` 下编写测试/示例页面。（代码展示面板部分暂无热更新，可手动运行 `npm run vue-to-md` 来即时更新。）

3. 运行 `npm run change` 生成组件更新日志（lerna）

4. 运行 `npm run build:pkg` 编译组件

5. 运行 `npm run publish` 发布组件

6. 运行 `npm run build` 然后提交更新文档网站。（可能需要一些时间，因为会将所有组件案例打包）

## 设计

独立打包只生成一个 index 包，多文件打包（即按需打包）则是否存在 src 文件夹判定，分包在 src 开发。

组件工厂：packages/

组件目录：packages/xxxx/

组件打包文件夹：dist
组件打包 d.ts 文件夹：typings

## 基础

模块包管理：lerna

组件设计：按需加载

单元测试：mocha、jest

持续集成、代码规范、提交规范

## TODOLIST

1. [x] 按需打包，独立打包
2. [x] 指定打包
3. [ ] 对 d.ts 声明文件进行打包
4. [x] 提交组件的测试，lerna
5. [x] 文档的自动生成

## 视图组件库

区分：Vue2 Vue3 基于 UI 框架

打包：rollup

组件库文档：自动生成

## 函数类工具库

打包：rollup

文档工具：JSDoc

## 组件库按需加载示例（vite）

npm install vite-plugin-importer --save

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

## 组件库按需加载示例（webpack）

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

## 打包发布

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

## 备注

项目启动时 Node 环境：14.17.0 当前使用 Node 版本：v16.18.1
