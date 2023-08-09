var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ScrollWrap</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;props&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#98bec8&quot;</span> <span class="hljs-attr">:long</span>=<span class="hljs-string">&quot;1000&quot;</span> <span class="hljs-attr">:listen</span>=<span class="hljs-string">&quot;listen&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>{{ percentage(props.progress) }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ScrollWrap</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ScrollWrap</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;props&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#e8c3b9&quot;</span> <span class="hljs-attr">:long</span>=<span class="hljs-string">&quot;1200&quot;</span> <span class="hljs-attr">:listen</span>=<span class="hljs-string">&quot;listen&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>{{ percentage(props.progress) }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ScrollWrap</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ScrollWrap</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;props&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#9ba5b6&quot;</span> <span class="hljs-attr">:long</span>=<span class="hljs-string">&quot;1000&quot;</span> <span class="hljs-attr">:listen</span>=<span class="hljs-string">&quot;listen&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>{{ percentage(props.progress) }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ScrollWrap</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">iframe</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;/#/docs/scroll-wrap/-scroll-wrap?preview=true&quot;</span> <span class="hljs-attr">frameborder</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">iframe</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> ScrollWrap <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@pkg/scroll-wrap/ScrollWrap.vue&#x27;</span>
<span class="hljs-keyword">import</span> { defineComponent, ref, onMounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">components</span>: { ScrollWrap },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> percentage = <span class="hljs-function">(<span class="hljs-params">p: any</span>) =&gt;</span> (p * <span class="hljs-number">100</span>).toFixed(<span class="hljs-number">2</span>) + <span class="hljs-string">&#x27;%&#x27;</span>
    <span class="hljs-keyword">const</span> listen: any = ref(<span class="hljs-built_in">window</span>)
    onMounted(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">// \u6307\u5B9A\u4E86\u7279\u5B9A\u7684\u6EDA\u52A8\u5143\u7D20\uFF0C\u5982\u4E0D\u6307\u5B9A\u5219\u9ED8\u8BA4\u4E3Awindow</span>
      listen.value = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">&#x27;.example-content&#x27;</span>)
    })
    <span class="hljs-keyword">return</span> {
      listen,
      percentage,
    }
  },
})
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.content</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">justify-content</span>: center;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">3vw</span>;
  <span class="hljs-attribute">font-weight</span>: <span class="hljs-number">600</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
