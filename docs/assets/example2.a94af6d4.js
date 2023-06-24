var s='<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 220px&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">color-picker</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;innerColor&quot;</span> @<span class="hljs-attr">native-pick</span>=<span class="hljs-string">&quot;colorChange&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> ColorPicker <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@pkg/color-picker/index.vue&#x27;</span>\n<span class="hljs-keyword">import</span> { defineComponent, ref, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({\n  <span class="hljs-attr">components</span>: { ColorPicker },\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> innerColor = ref(<span class="hljs-string">&#x27;#ffffffff&#x27;</span>)\n\n    <span class="hljs-keyword">const</span> colorChange = <span class="hljs-function">(<span class="hljs-params">c</span>) =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;来自吸取颜色：&#x27;</span> + c)\n    }\n\n    <span class="hljs-keyword">return</span> {\n      innerColor,\n      colorChange,\n    }\n  },\n})\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre>\n';export{s as default};
