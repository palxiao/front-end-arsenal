var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>\u6253\u5F00<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>\u5173\u95ED<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Matting</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:hasHeader</span>=<span class="hljs-string">&quot;false&quot;</span> @<span class="hljs-attr">register</span>=<span class="hljs-string">&quot;mattingStart&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> Matting <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@pkg/image-extraction/index&#x27;</span>
<span class="hljs-keyword">import</span> MattingType <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@pkg/image-extraction/types/Matting&#x27;</span>
<span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">components</span>: { Matting },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">const</span> open = <span class="hljs-function">() =&gt;</span> {
      show.value = <span class="hljs-literal">true</span>
    }
    <span class="hljs-keyword">const</span> close = <span class="hljs-function">() =&gt;</span> {
      show.value = <span class="hljs-literal">false</span>
    }

    <span class="hljs-keyword">const</span> mattingStart = <span class="hljs-function">(<span class="hljs-params">{ initLoadImages, radius, brushSize, constants, getResult }: MattingType</span>) =&gt;</span> {
      initLoadImages(<span class="hljs-string">&#x27;https://pic.imgdb.cn/item/65222530c458853aefb0adeb.webp&#x27;</span>, <span class="hljs-string">&#x27;https://pic.imgdb.cn/item/6522253ec458853aefb0b013.webp&#x27;</span>)
    }
    <span class="hljs-keyword">return</span> {
      mattingStart,
      show,
      open,
      close,
    }
  },
})
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
`;export{s as default};
