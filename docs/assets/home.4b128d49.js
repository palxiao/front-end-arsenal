import{_ as a,d as p,r as e,o as l,h as t,p as r}from"./index.5eac687e.js";import{R as c}from"./ReadmeFrame.aa607645.js";var o=`<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-02 10:44:23
 * @Description: \u524D\u7AEF\u7EC4\u4EF6\u5E93\u642D\u5EFA
 * @LastEditors: ShawnPhang <https://m.palxp.cn>
 * @LastEditTime: 2023-10-08 00:42:16
 * @site: m.palxp.cn / blog.palxp.com
-->

<h2 id="\u524D\u7AEF\u519B\u706B\u5E93">\u524D\u7AEF\u519B\u706B\u5E93</h2>
<!-- START -->

<h4 id="colorpicker-\u989C\u8272\u9009\u62E9\u5668\uFF08\u5438\u8272\u5668\uFF09"><a href="/#/color-picker">ColorPicker \u989C\u8272\u9009\u62E9\u5668\uFF08\u5438\u8272\u5668\uFF09</a></h4>
<h4 id="imageextraction-\u56FE\u50CF\u4FEE\u8865\u64E6\u9664\u5DE5\u5177"><a href="/#/image-extraction">ImageExtraction \u56FE\u50CF\u4FEE\u8865\u64E6\u9664\u5DE5\u5177</a></h4>
<h4 id="scrollwrap-\u5438\u9644\u6EDA\u52A8\u7EC4\u4EF6"><a href="/#/scroll-wrap">ScrollWrap \u5438\u9644\u6EDA\u52A8\u7EC4\u4EF6</a></h4>
<h4 id="jeditor-\u6398\u91D1-markdown-\u7F16\u8F91\u5668"><a target="_blank" href="/#/j-editor">JEditor \u6398\u91D1 MarkDown \u7F16\u8F91\u5668</a></h4>
<h4 id="codepanel-\u4EE3\u7801\u7F16\u8F91\u5668"><a href="/#/code-panel">CodePanel \u4EE3\u7801\u7F16\u8F91\u5668</a></h4>
<h4 id="ijs-utils-\u5DE5\u5177\u51FD\u6570\u96C6"><a href="/#/ijs-utils">IJS Utils \u5DE5\u5177\u51FD\u6570\u96C6</a></h4>
<!-- END -->

<h2 id="\u8BF4\u660E">\u8BF4\u660E</h2>
<blockquote>
<p>\u8FD9\u662F\u4E00\u4E2A\u7528\u4E8E\u5F00\u53D1 Vue3 \u7EC4\u4EF6/\u7EC4\u4EF6\u5E93\u3001\u4EE5\u53CA\u5DE5\u5177\u7C7B\u51FD\u6570\u7684\u4ED3\u5E93\u3002</p>
<p>\u81EA\u52A8\u5316\u7684\u6587\u6863\u7F51\u7AD9\uFF0C\u53EA\u9700\u4E13\u6CE8\u4E8E\u7EC4\u4EF6\u7684\u5F00\u53D1\uFF0C\u6587\u6863\u5168\u81EA\u52A8\u751F\u6210\u3002</p>
</blockquote>
<h2 id="\u4E3A\u4EC0\u4E48\u7EC4\u4EF6\u5316">\u4E3A\u4EC0\u4E48\u7EC4\u4EF6\u5316</h2>
<blockquote>
<p>\u62C6\u5206\u7EC4\u4EF6\u7684\u610F\u4E49\u5728\u4E8E\uFF0C\u7EC6\u5316\u9879\u76EE\u7684\u9897\u7C92\u5EA6\uFF0C\u907F\u514D\u5C06\u590D\u6742\u529F\u80FD\u8026\u5408\u5728\u9879\u76EE\u4E2D\uFF0C\u66F4\u65B9\u4FBF\u540E\u7EED\u7684\u8FC1\u79FB\u6539\u9020\u3001\u91CD\u5199\u6216\u79FB\u9664\u3001\u6027\u80FD\u8C03\u4F18\u7B49\u5DE5\u4F5C\u3002</p>
<p>\u5728\u6B64\u57FA\u7840\u4E0A\uFF0C\u9AD8\u5EA6\u62BD\u8C61\u7684\u7EC4\u4EF6\u8FD8\u53EF\u590D\u7528\uFF0C\u4E3A\u5176\u5B83\u9879\u76EE\u4E2D\u5FEB\u901F\u96C6\u6210\u529F\u80FD\u63D0\u4F9B\u4E86\u53EF\u80FD\u6027\u3002</p>
</blockquote>
<h2 id="\u6D41\u7A0B">\u6D41\u7A0B</h2>
<ol>
<li><p>\u8FD0\u884C <code>npm run add</code> \u6DFB\u52A0\u7EC4\u4EF6</p>
</li>
<li><p>\u5728 <code>packages</code> \u4E2D\u5F00\u53D1\u4EE3\u7801\uFF0C\u5728 <code>src/pages</code> \u4E0B\u7F16\u5199\u6D4B\u8BD5/\u793A\u4F8B\u9875\u9762\u3002\uFF08\u4EE3\u7801\u5C55\u793A\u9762\u677F\u90E8\u5206\u6682\u65E0\u70ED\u66F4\u65B0\uFF0C\u53EF\u624B\u52A8\u8FD0\u884C <code>npm run vue-to-md</code> \u6765\u5373\u65F6\u66F4\u65B0\u3002\uFF09</p>
</li>
<li><p>\u8FD0\u884C <code>npm run change</code> \u751F\u6210\u7EC4\u4EF6\u66F4\u65B0\u65E5\u5FD7\uFF08lerna\uFF09</p>
</li>
<li><p>\u8FD0\u884C <code>npm run build:pkg</code> \u7F16\u8BD1\u7EC4\u4EF6</p>
</li>
<li><p>\u8FD0\u884C <code>npm run publish</code> \u53D1\u5E03\u7EC4\u4EF6</p>
</li>
<li><p>\u8FD0\u884C <code>npm run build</code> \u7136\u540E\u63D0\u4EA4\u66F4\u65B0\u6587\u6863\u7F51\u7AD9\u3002\uFF08\u53EF\u80FD\u9700\u8981\u4E00\u4E9B\u65F6\u95F4\uFF0C\u56E0\u4E3A\u4F1A\u5C06\u6240\u6709\u7EC4\u4EF6\u6848\u4F8B\u6253\u5305\uFF09</p>
</li>
</ol>
<h2 id="\u8BBE\u8BA1">\u8BBE\u8BA1</h2>
<p>\u72EC\u7ACB\u6253\u5305\u53EA\u751F\u6210\u4E00\u4E2A index \u5305\uFF0C\u591A\u6587\u4EF6\u6253\u5305\uFF08\u5373\u6309\u9700\u6253\u5305\uFF09\u5219\u662F\u5426\u5B58\u5728 src \u6587\u4EF6\u5939\u5224\u5B9A\uFF0C\u5206\u5305\u5728 src \u5F00\u53D1\u3002</p>
<p>\u7EC4\u4EF6\u5DE5\u5382\uFF1Apackages/</p>
<p>\u7EC4\u4EF6\u76EE\u5F55\uFF1Apackages/xxxx/</p>
<p>\u7EC4\u4EF6\u6253\u5305\u6587\u4EF6\u5939\uFF1Adist
\u7EC4\u4EF6\u6253\u5305 d.ts \u6587\u4EF6\u5939\uFF1Atypings</p>
<h2 id="\u57FA\u7840">\u57FA\u7840</h2>
<p>\u6A21\u5757\u5305\u7BA1\u7406\uFF1Alerna</p>
<p>\u7EC4\u4EF6\u8BBE\u8BA1\uFF1A\u6309\u9700\u52A0\u8F7D</p>
<p>\u5355\u5143\u6D4B\u8BD5\uFF1Amocha\u3001jest</p>
<p>\u6301\u7EED\u96C6\u6210\u3001\u4EE3\u7801\u89C4\u8303\u3001\u63D0\u4EA4\u89C4\u8303</p>
<h2 id="todolist">TODOLIST</h2>
<ol>
<li><input checked="" disabled="" type="checkbox"> \u6309\u9700\u6253\u5305\uFF0C\u72EC\u7ACB\u6253\u5305</li>
<li><input checked="" disabled="" type="checkbox"> \u6307\u5B9A\u6253\u5305</li>
<li><input disabled="" type="checkbox"> \u5BF9 d.ts \u58F0\u660E\u6587\u4EF6\u8FDB\u884C\u6253\u5305</li>
<li><input checked="" disabled="" type="checkbox"> \u63D0\u4EA4\u7EC4\u4EF6\u7684\u6D4B\u8BD5\uFF0Clerna</li>
<li><input checked="" disabled="" type="checkbox"> \u6587\u6863\u7684\u81EA\u52A8\u751F\u6210</li>
</ol>
<h2 id="\u89C6\u56FE\u7EC4\u4EF6\u5E93">\u89C6\u56FE\u7EC4\u4EF6\u5E93</h2>
<p>\u533A\u5206\uFF1AVue2 Vue3 \u57FA\u4E8E UI \u6846\u67B6</p>
<p>\u6253\u5305\uFF1Arollup</p>
<p>\u7EC4\u4EF6\u5E93\u6587\u6863\uFF1A\u81EA\u52A8\u751F\u6210</p>
<h2 id="\u51FD\u6570\u7C7B\u5DE5\u5177\u5E93">\u51FD\u6570\u7C7B\u5DE5\u5177\u5E93</h2>
<p>\u6253\u5305\uFF1Arollup</p>
<p>\u6587\u6863\u5DE5\u5177\uFF1AJSDoc</p>
<h2 id="\u7EC4\u4EF6\u5E93\u6309\u9700\u52A0\u8F7D\u793A\u4F8B\uFF08vite\uFF09">\u7EC4\u4EF6\u5E93\u6309\u9700\u52A0\u8F7D\u793A\u4F8B\uFF08vite\uFF09</h2>
<p>npm install vite-plugin-importer --save</p>
<pre><code>yarn <span class="hljs-builtin-name">add</span> vite-plugin-importer
</code></pre>
<pre><code><span class="hljs-comment">// vite.config.js</span>
<span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vite&quot;</span>;
<span class="hljs-keyword">import</span> usePluginImport <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vite-plugin-importer&#x27;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineConfig({
  <span class="hljs-attr">plugins</span>: [
    ... <span class="hljs-comment">// other plugins</span>
    usePluginImport({
      <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&quot;ant-design-vue&quot;</span>,
      <span class="hljs-attr">libraryDirectory</span>: <span class="hljs-string">&quot;es&quot;</span>,
      <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;css&quot;</span>,
    }),
    usePluginImport({
      <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&quot;antd&quot;</span>,
      <span class="hljs-attr">libraryDirectory</span>: <span class="hljs-string">&quot;es&quot;</span>,
      <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;css&quot;</span>,
    }),
    usePluginImport({
      <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#x27;vant&#x27;</span>,
      <span class="hljs-attr">libraryDirectory</span>: <span class="hljs-string">&#x27;es&#x27;</span>,
      <span class="hljs-attr">style</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> <span class="hljs-string">\`<span class="hljs-subst">\${name}</span>/style/less\`</span>,
    }),
    usePluginImport({
      <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#x27;element-plus&#x27;</span>,
      <span class="hljs-attr">customStyleName</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`element-plus/lib/theme-chalk/<span class="hljs-subst">\${name}</span>.css\`</span>;
      },
    })
    <span class="hljs-comment">// Other configurations welcome PR</span>
  ];
})
</code></pre>
<h2 id="\u7EC4\u4EF6\u5E93\u6309\u9700\u52A0\u8F7D\u793A\u4F8B\uFF08webpack\uFF09">\u7EC4\u4EF6\u5E93\u6309\u9700\u52A0\u8F7D\u793A\u4F8B\uFF08webpack\uFF09</h2>
<pre><code><span class="hljs-title">yarn</span> add babel-plugin-<span class="hljs-keyword">import</span> -D
<span class="hljs-meta"># \u6216</span>
<span class="hljs-title">npm</span> install babel-plugin-<span class="hljs-keyword">import</span> -D
</code></pre>
<pre><code><span class="hljs-regexp">//</span> babel.config.js
module.exports = {
  plugins: [
    [
      <span class="hljs-string">&#x27;import&#x27;</span>,
      {
        libraryName: <span class="hljs-string">&#x27;element-plus&#x27;</span>,
        <span class="hljs-regexp">//</span> \u5F15\u5165\u7EC4\u4EF6
        customName: (name) =&gt; {
          return \`element-plus<span class="hljs-regexp">/lib/</span>components/<span class="hljs-variable">\${name}</span>\`
        },
        <span class="hljs-regexp">//</span> \u5F15\u5165\u6837\u5F0F
        <span class="hljs-regexp">//</span> customStyleName: (name) =&gt; {
        <span class="hljs-regexp">//</span>   return \`element-plus<span class="hljs-regexp">/lib/</span>components<span class="hljs-regexp">/\${name}/</span>style/css\`
        <span class="hljs-regexp">//</span> },
      },
    ],
  ],
}
</code></pre>
<h2 id="\u6253\u5305\u53D1\u5E03">\u6253\u5305\u53D1\u5E03</h2>
<p>\u67E5\u770B\u5F53\u524D\u5305\u6E90</p>
<pre><code><span class="hljs-attribute">nrm ls</span>
</code></pre>
<p>\u5207\u6362\u6E90</p>
<pre><code>nrm <span class="hljs-keyword">use</span> npm
</code></pre>
<p>\u67E5\u770B\u767B\u5F55\u7528\u6237</p>
<pre><code><span class="hljs-built_in">npm</span> whoami
</code></pre>
<p>\u6CA1\u6709\u5219\u767B\u5F55</p>
<pre><code><span class="hljs-built_in">npm</span> login
<span class="hljs-comment"># OR</span>
<span class="hljs-built_in">npm</span> addUser
</code></pre>
<h2 id="\u5907\u6CE8">\u5907\u6CE8</h2>
<p>\u9879\u76EE\u542F\u52A8\u65F6 Node \u73AF\u5883\uFF1A14.17.0 \u5F53\u524D\u4F7F\u7528 Node \u7248\u672C\uFF1Av16.18.1</p>
`;const i=p({name:"Home",components:{ReadmeFrame:c},setup(){return{readme:o}}}),h={id:"Home"};function d(s,m,u,j,g,b){const n=e("readme-frame");return l(),t("div",h,[r(n,{readme:s.readme},null,8,["readme"])])}var y=a(i,[["render",d]]);export{y as default};
