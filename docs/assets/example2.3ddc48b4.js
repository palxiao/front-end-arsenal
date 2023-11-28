var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 220px&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">color-picker</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;innerColor&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;colorChange&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
    \u989C\u8272\u7ED3\u679C\uFF1A
    {{ innerColor }}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ background: innerColor }&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;testBox&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> ColorPicker <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@pkg/color-picker/index.vue&#x27;</span>
<span class="hljs-keyword">import</span> { defineComponent, ref, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">components</span>: { ColorPicker },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> innerColor = ref(<span class="hljs-string">&#x27;#ffffffff&#x27;</span>)

    <span class="hljs-keyword">const</span> colorChange = <span class="hljs-function">(<span class="hljs-params">v</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(v)
    }

    <span class="hljs-keyword">return</span> {
      innerColor,
      colorChange,
    }
  },
})
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.testBox</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
