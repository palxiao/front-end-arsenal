import{e as s,r as n,m as a,B as p,o as e}from"./vendor.076ca5cd.js";import{_ as l}from"./ReadmeFrame.a1c28965.js";var t=s({name:"Home",components:{ReadmeFrame:l},setup:()=>({readme:'\x3c!--\n * @Author: ShawnPhang\n * @Date: 2021-09-02 10:44:23\n * @Description: 前端组件库搭建\n * @LastEditors: ShawnPhang <site: book.palxp.com>\n * @LastEditTime: 2023-07-17 14:17:45\n * @site: book.palxp.com / blog.palxp.com\n--\x3e\n\n<h2 id="前端军火库">前端军火库</h2>\n\x3c!-- START --\x3e\n\n<h4 id="colorpicker-颜色选择器（吸色器）"><a href="/#/color-picker">ColorPicker 颜色选择器（吸色器）</a></h4>\n<h4 id="scrollwrap-吸附滚动组件"><a href="/#/scroll-wrap">ScrollWrap 吸附滚动组件</a></h4>\n<h4 id="jeditor-掘金-markdown-编辑器"><a target="_blank" href="/#/j-editor">JEditor 掘金 MarkDown 编辑器</a></h4>\n<h4 id="codepanel-代码编辑器"><a href="/#/code-panel">CodePanel 代码编辑器</a></h4>\n<h4 id="ijs-utils-工具函数集"><a href="/#/ijs-utils">IJS Utils 工具函数集</a></h4>\n\x3c!-- END --\x3e\n\n<h2 id="说明">说明</h2>\n<blockquote>\n<p>这是一个用于开发 Vue3 组件/组件库、以及工具类函数的仓库。</p>\n<p>自动化的文档网站，只需专注于组件的开发，文档全自动生成。</p>\n</blockquote>\n<h2 id="为什么组件化">为什么组件化</h2>\n<blockquote>\n<p>拆分组件的意义在于，细化项目的颗粒度，避免将复杂功能耦合在项目中，更方便后续的迁移改造、重写或移除、性能调优等工作。</p>\n</blockquote>\n<blockquote>\n<p>在此基础上，高度抽象的组件还可复用，为其它项目中快速集成功能提供了可能性。</p>\n</blockquote>\n<h2 id="流程">流程</h2>\n<ol>\n<li><p>运行 <code>npm run add</code> 添加组件</p>\n</li>\n<li><p>在 <code>packages</code> 中开发代码，在 <code>src/pages</code> 下编写测试/示例页面。（代码展示面板部分暂无热更新，可手动运行 <code>npm run vue-to-md</code> 来即时更新。）</p>\n</li>\n<li><p>运行 <code>npm run change</code> 生成组件更新日志（lerna）</p>\n</li>\n<li><p>运行 <code>npm run publish</code> 发布组件，运行 <code>npm run build</code> 然后提交更新文档网站。</p>\n</li>\n</ol>\n<h2 id="设计">设计</h2>\n<p>独立打包只生成一个 index 包，多文件打包（即按需打包）则是否存在 src 文件夹判定，分包在 src 开发。</p>\n<p>组件工厂：packages/</p>\n<p>组件目录：packages/xxxx/</p>\n<p>组件打包文件夹：dist\n组件打包 d.ts 文件夹：typings</p>\n<h2 id="基础">基础</h2>\n<p>模块包管理：lerna</p>\n<p>组件设计：按需加载</p>\n<p>单元测试：mocha、jest</p>\n<p>持续集成、代码规范、提交规范</p>\n<h2 id="todolist">TODOLIST</h2>\n<ol>\n<li><input checked="" disabled="" type="checkbox"> 按需打包，独立打包</li>\n<li><input checked="" disabled="" type="checkbox"> 指定打包</li>\n<li><input disabled="" type="checkbox"> 对 d.ts 声明文件进行打包</li>\n<li><input checked="" disabled="" type="checkbox"> 提交组件的测试，lerna</li>\n<li><input checked="" disabled="" type="checkbox"> 文档的自动生成</li>\n</ol>\n<h2 id="视图组件库">视图组件库</h2>\n<p>区分：Vue2 Vue3 基于 UI 框架</p>\n<p>打包：rollup</p>\n<p>组件库文档：自动生成</p>\n<h2 id="函数类工具库">函数类工具库</h2>\n<p>打包：rollup</p>\n<p>文档工具：JSDoc</p>\n<h2 id="组件库按需加载示例（vite）">组件库按需加载示例（vite）</h2>\n<p>npm install vite-plugin-importer --save</p>\n<pre><code>yarn <span class="hljs-builtin-name">add</span> vite-plugin-importer\n</code></pre>\n<pre><code><span class="hljs-comment">// vite.config.js</span>\n<span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vite&quot;</span>;\n<span class="hljs-keyword">import</span> usePluginImport <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vite-plugin-importer&#x27;</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineConfig({\n  <span class="hljs-attr">plugins</span>: [\n    ... <span class="hljs-comment">// other plugins</span>\n    usePluginImport({\n      <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&quot;ant-design-vue&quot;</span>,\n      <span class="hljs-attr">libraryDirectory</span>: <span class="hljs-string">&quot;es&quot;</span>,\n      <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;css&quot;</span>,\n    }),\n    usePluginImport({\n      <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&quot;antd&quot;</span>,\n      <span class="hljs-attr">libraryDirectory</span>: <span class="hljs-string">&quot;es&quot;</span>,\n      <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;css&quot;</span>,\n    }),\n    usePluginImport({\n      <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#x27;vant&#x27;</span>,\n      <span class="hljs-attr">libraryDirectory</span>: <span class="hljs-string">&#x27;es&#x27;</span>,\n      <span class="hljs-attr">style</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> <span class="hljs-string">`<span class="hljs-subst">${name}</span>/style/less`</span>,\n    }),\n    usePluginImport({\n      <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#x27;element-plus&#x27;</span>,\n      <span class="hljs-attr">customStyleName</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {\n        <span class="hljs-keyword">return</span> <span class="hljs-string">`element-plus/lib/theme-chalk/<span class="hljs-subst">${name}</span>.css`</span>;\n      },\n    })\n    <span class="hljs-comment">// Other configurations welcome PR</span>\n  ];\n})\n</code></pre>\n<h2 id="组件库按需加载示例（webpack）">组件库按需加载示例（webpack）</h2>\n<pre><code><span class="hljs-title">yarn</span> add babel-plugin-<span class="hljs-keyword">import</span> -D\n<span class="hljs-meta"># 或</span>\n<span class="hljs-title">npm</span> install babel-plugin-<span class="hljs-keyword">import</span> -D\n</code></pre>\n<pre><code><span class="hljs-regexp">//</span> babel.config.js\nmodule.exports = {\n  plugins: [\n    [\n      <span class="hljs-string">&#x27;import&#x27;</span>,\n      {\n        libraryName: <span class="hljs-string">&#x27;element-plus&#x27;</span>,\n        <span class="hljs-regexp">//</span> 引入组件\n        customName: (name) =&gt; {\n          return `element-plus<span class="hljs-regexp">/lib/</span>components/<span class="hljs-variable">${name}</span>`\n        },\n        <span class="hljs-regexp">//</span> 引入样式\n        <span class="hljs-regexp">//</span> customStyleName: (name) =&gt; {\n        <span class="hljs-regexp">//</span>   return `element-plus<span class="hljs-regexp">/lib/</span>components<span class="hljs-regexp">/${name}/</span>style/css`\n        <span class="hljs-regexp">//</span> },\n      },\n    ],\n  ],\n}\n</code></pre>\n<h2 id="打包发布">打包发布</h2>\n<p>查看当前包源</p>\n<pre><code><span class="hljs-attribute">nrm ls</span>\n</code></pre>\n<p>切换源</p>\n<pre><code>nrm <span class="hljs-keyword">use</span> npm\n</code></pre>\n<p>查看登录用户</p>\n<pre><code><span class="hljs-built_in">npm</span> whoami\n</code></pre>\n<p>没有则登录</p>\n<pre><code><span class="hljs-built_in">npm</span> login\n<span class="hljs-comment"># OR</span>\n<span class="hljs-built_in">npm</span> addUser\n</code></pre>\n<h2 id="备注">备注</h2>\n<p>项目启动时 Node 环境：14.17.0 当前使用 Node 版本：v16.18.1</p>\n'})});const r={id:"Home"};t.render=function(s,l,t,c,o,i){const h=n("readme-frame");return e(),a("div",r,[p(h,{readme:s.readme},null,8,["readme"])])};export{t as default};
