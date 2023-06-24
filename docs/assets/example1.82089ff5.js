var s='<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">editor</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">:uploadImages</span>=<span class="hljs-string">&quot;uploadImages&quot;</span> @<span class="hljs-attr">save</span>=<span class="hljs-string">&quot;save&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> editor <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@pkg/j-editor/index&#x27;</span>\n<span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({\n  <span class="hljs-attr">components</span>: { editor },\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> text = ref(<span class="hljs-string">&#x27;&#x27;</span>)\n    <span class="hljs-comment">// Ctrl + S 保存事件</span>\n    <span class="hljs-keyword">const</span> save = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;保存事件&#x27;</span>)\n    }\n    <span class="hljs-comment">// 可用于做带防抖的自动保存</span>\n    <span class="hljs-keyword">const</span> change = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;内容改变&#x27;</span>)\n    }\n    <span class="hljs-comment">// 截图粘贴</span>\n    <span class="hljs-keyword">const</span> uploadImages = <span class="hljs-keyword">async</span> (files) =&gt; {\n      <span class="hljs-built_in">console</span>.log(files)\n      <span class="hljs-keyword">return</span> [{ <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://xxx&#x27;</span>, <span class="hljs-attr">alt</span>: <span class="hljs-string">&#x27;&#x27;</span> }]\n    }\n    <span class="hljs-keyword">return</span> {\n      uploadImages,\n      change,\n      save,\n      text,\n    }\n  },\n})\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.bytemd</span> {\n  <span class="hljs-attribute">height</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">100vh</span> - <span class="hljs-number">120px</span>);\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n';export{s as default};
