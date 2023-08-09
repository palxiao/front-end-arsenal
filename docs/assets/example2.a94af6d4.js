var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 220px&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">color-picker</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;innerColor&quot;</span> @<span class="hljs-attr">native-pick</span>=<span class="hljs-string">&quot;colorChange&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> ColorPicker <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@pkg/color-picker/index.vue&#x27;</span>
<span class="hljs-keyword">import</span> { defineComponent, ref, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">components</span>: { ColorPicker },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> innerColor = ref(<span class="hljs-string">&#x27;#ffffffff&#x27;</span>)

    <span class="hljs-keyword">const</span> colorChange = <span class="hljs-function">(<span class="hljs-params">c</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;\u6765\u81EA\u5438\u53D6\u989C\u8272\uFF1A&#x27;</span> + c)
    }

    <span class="hljs-keyword">return</span> {
      innerColor,
      colorChange,
    }
  },
})
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
`;export{s as default};
