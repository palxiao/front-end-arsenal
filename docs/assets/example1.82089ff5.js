var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">editor</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">:uploadImages</span>=<span class="hljs-string">&quot;uploadImages&quot;</span> @<span class="hljs-attr">save</span>=<span class="hljs-string">&quot;save&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> editor <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@pkg/j-editor/index&#x27;</span>
<span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">components</span>: { editor },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> text = ref(<span class="hljs-string">&#x27;&#x27;</span>)
    <span class="hljs-comment">// Ctrl + S \u4FDD\u5B58\u4E8B\u4EF6</span>
    <span class="hljs-keyword">const</span> save = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;\u4FDD\u5B58\u4E8B\u4EF6&#x27;</span>)
    }
    <span class="hljs-comment">// \u53EF\u7528\u4E8E\u505A\u5E26\u9632\u6296\u7684\u81EA\u52A8\u4FDD\u5B58</span>
    <span class="hljs-keyword">const</span> change = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;\u5185\u5BB9\u6539\u53D8&#x27;</span>)
    }
    <span class="hljs-comment">// \u622A\u56FE\u7C98\u8D34</span>
    <span class="hljs-keyword">const</span> uploadImages = <span class="hljs-keyword">async</span> (files) =&gt; {
      <span class="hljs-built_in">console</span>.log(files)
      <span class="hljs-keyword">return</span> [{ <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://xxx&#x27;</span>, <span class="hljs-attr">alt</span>: <span class="hljs-string">&#x27;&#x27;</span> }]
    }
    <span class="hljs-keyword">return</span> {
      uploadImages,
      change,
      save,
      text,
    }
  },
})
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.bytemd</span> {
  <span class="hljs-attribute">height</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">100vh</span> - <span class="hljs-number">120px</span>);
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
