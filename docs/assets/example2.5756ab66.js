var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">mBtn</span>&gt;</span> \u6D4B\u8BD5\u6587\u5B57slot222222 <span class="hljs-tag">&lt;/<span class="hljs-name">mBtn</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">iframe</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;/docs/test/-button?preview=true&quot;</span> <span class="hljs-attr">frameborder</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">iframe</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> mBtn <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/test/Button.vue&#x27;</span>
<span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">components</span>: { mBtn },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> dialog = ref()
    <span class="hljs-keyword">return</span> {
      dialog,
      <span class="hljs-function"><span class="hljs-title">handleShowDialog</span>(<span class="hljs-params">e: any</span>)</span> {
        dialog.value.open(e.currentTarget)
      },
    }
  },
})
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
`;export{s as default};
