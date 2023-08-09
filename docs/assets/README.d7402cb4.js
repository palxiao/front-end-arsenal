var t=`<h2 id="functions">Functions</h2>
<dl>
<dt><a href="#arrayEqual">\`arrayEqual(arr1, arr2)\`</a> \u21D2 <code>Boolean</code></dt>
<dd><p>\u5224\u65AD\u4E24\u4E2A\u6570\u7EC4\u662F\u5426\u76F8\u7B49</p>
</dd>
<dt><a href="#fuzzyQuery">\`fuzzyQuery(list, field, keyWord)\`</a> \u21D2 <code>Array</code></dt>
<dd><p>\u5BF9\u8C61\u6570\u7EC4\u6A21\u7CCA\u67E5\u8BE2</p>
</dd>
<dt><a href="#objArrayDelRepetitive">\`objArrayDelRepetitive(arr, \u5BF9\u8C61\u4E2D\u76F8\u540C\u7684\u5173\u952E\u5B57(\u5982id))\`</a> \u21D2 <code>Array</code></dt>
<dd><p>\u5BF9\u8C61\u6570\u7EC4\u53BB\u91CD</p>
</dd>
<dt><a href="#throttle">\`throttle(delay, noTrailing, callback, debounceMode)\`</a> \u21D2 <code>function</code></dt>
<dd><p>\u51FD\u6570\u8282\u6D41\u3002
\u9002\u7528\u4E8E\u9650\u5236<code>resize</code>\u548C<code>scroll</code>\u7B49\u51FD\u6570\u7684\u8C03\u7528\u9891\u7387</p>
</dd>
<dt><a href="#debounce">\`debounce(delay, atBegin, callback)\`</a> \u21D2 <code>function</code></dt>
<dd><p>\u51FD\u6570\u9632\u6296 
\u4E0Ethrottle\u4E0D\u540C\u7684\u662F\uFF0Cdebounce\u4FDD\u8BC1\u4E00\u4E2A\u51FD\u6570\u5728\u591A\u5C11\u6BEB\u79D2\u5185\u4E0D\u518D\u88AB\u89E6\u53D1\uFF0C\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C
\u8981\u4E48\u5728\u7B2C\u4E00\u6B21\u8C03\u7528return\u7684\u9632\u6296\u51FD\u6570\u65F6\u6267\u884C\uFF0C\u8981\u4E48\u5728\u5EF6\u8FDF\u6307\u5B9A\u6BEB\u79D2\u540E\u8C03\u7528\u3002</p>
</dd>
<dt><a href="#deepClone">\`deepClone(values)\`</a> \u21D2 <code>Any</code></dt>
<dd><p>\u6DF1\u62F7\u8D1D\uFF0C\u652F\u6301\u5E38\u89C1\u7C7B\u578B</p>
</dd>
<dt><a href="#isEmptyObject">\`isEmptyObject(obj)\`</a> \u21D2 <code>Boolean</code></dt>
<dd><p>\u5224\u65AD<code>obj</code>\u662F\u5426\u4E3A\u7A7A</p>
</dd>
<dt><a href="#randomColor">\`randomColor(title, author)\`</a> \u21D2 <code>String</code></dt>
<dd><p>\u968F\u673A\u751F\u6210\u989C\u8272</p>
</dd>
<dt><a href="#randomNum">\`randomNum(min, max, title, author)\`</a></dt>
<dd><p>\u751F\u6210\u6307\u5B9A\u8303\u56F4[min, max]\u7684\u968F\u673A\u6570</p>
</dd>
</dl>

<p><a name="arrayDelRepetitive"></a></p>
<h2 id="arraydelrepetitive-\u21D2-array"><code>arrayDelRepetitive</code> \u21D2 <code>Array</code></h2>
<p>\u6570\u7EC4\u53BB\u91CD</p>
<p><strong>Kind</strong>: global Array - \u6570\u7EC4\u7C7B\u51FD\u6570<br><strong>Returns</strong>: <code>Array</code> - eg: arrayDelRepetitive([1,2],[2,5],[3,5,9])  //  [1, 2, 5, 3, 9]  </p>
<table>
<thead>
<tr>
<th>Param</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td>arr1</td>
<td><code>Array</code></td>
<td>\u53BB\u91CD\u7684\u5BF9\u8C61</td>
</tr>
<tr>
<td>...arr2</td>
<td><code>Array</code></td>
<td>\u53EF\u4EE5\u540C\u65F6\u5408\u5E76\u591A\u4E2A\u6570\u7EC4\u4E4B\u540E\u518D\u53BB\u91CD</td>
</tr>
</tbody></table>
<p><a name="arrayEqual"></a></p>
<h2 id="arrayequalarr1-arr2-\u21D2-boolean"><code>arrayEqual(arr1, arr2)</code> \u21D2 <code>Boolean</code></h2>
<p>\u5224\u65AD\u4E24\u4E2A\u6570\u7EC4\u662F\u5426\u76F8\u7B49</p>
<p><strong>Kind</strong>: global function  </p>
<table>
<thead>
<tr>
<th>Param</th>
<th>Type</th>
</tr>
</thead>
<tbody><tr>
<td>arr1</td>
<td><code>Array</code></td>
</tr>
<tr>
<td>arr2</td>
<td><code>Array</code></td>
</tr>
</tbody></table>
<p><a name="fuzzyQuery"></a></p>
<h2 id="fuzzyquerylist-field-keyword-\u21D2-array"><code>fuzzyQuery(list, field, keyWord)</code> \u21D2 <code>Array</code></h2>
<p>\u5BF9\u8C61\u6570\u7EC4\u6A21\u7CCA\u67E5\u8BE2</p>
<p><strong>Kind</strong>: global function<br><strong>Returns</strong>: <code>Array</code> - \u67E5\u8BE2\u7684\u7ED3\u679C
eg: fuzzyQuery([{key:123},{key:62},{key:7}], &#39;key&#39;, 2)  // [{key:123},{key:62}]  </p>
<table>
<thead>
<tr>
<th>Param</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td>list</td>
<td><code>Array</code></td>
<td>\u539F\u6570\u7EC4</td>
</tr>
<tr>
<td>field</td>
<td><code>String</code></td>
<td>\u5BF9\u5E94\u5B57\u6BB5</td>
</tr>
<tr>
<td>keyWord</td>
<td><code>String</code></td>
<td>\u67E5\u8BE2\u7684\u5173\u952E\u8BCD</td>
</tr>
</tbody></table>
<p><a name="objArrayDelRepetitive"></a></p>
<h2 id="objarraydelrepetitivearr-\u5BF9\u8C61\u4E2D\u76F8\u540C\u7684\u5173\u952E\u5B57\u5982id-\u21D2-array"><code>objArrayDelRepetitive(arr, \u5BF9\u8C61\u4E2D\u76F8\u540C\u7684\u5173\u952E\u5B57(\u5982id))</code> \u21D2 <code>Array</code></h2>
<p>\u5BF9\u8C61\u6570\u7EC4\u53BB\u91CD</p>
<p><strong>Kind</strong>: global function  </p>
<table>
<thead>
<tr>
<th>Param</th>
<th>Type</th>
</tr>
</thead>
<tbody><tr>
<td>arr</td>
<td><code>Array</code></td>
</tr>
<tr>
<td>\u5BF9\u8C61\u4E2D\u76F8\u540C\u7684\u5173\u952E\u5B57(\u5982id)</td>
<td><code>String</code></td>
</tr>
</tbody></table>
<p><a name="throttle"></a></p>
<h2 id="throttledelay-notrailing-callback-debouncemode-\u21D2-function"><code>throttle(delay, noTrailing, callback, debounceMode)</code> \u21D2 <code>function</code></h2>
<p>\u51FD\u6570\u8282\u6D41\u3002
\u9002\u7528\u4E8E\u9650\u5236<code>resize</code>\u548C<code>scroll</code>\u7B49\u51FD\u6570\u7684\u8C03\u7528\u9891\u7387</p>
<p><strong>Kind</strong>: global function<br><strong>Returns</strong>: <code>function</code> - \u65B0\u7684\u8282\u6D41\u51FD\u6570  </p>
<table>
<thead>
<tr>
<th>Param</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td>delay</td>
<td><code>Number</code></td>
<td>0 \u6216\u8005\u66F4\u5927\u7684\u6BEB\u79D2\u6570\u3002 \u5BF9\u4E8E\u4E8B\u4EF6\u56DE\u8C03\uFF0C\u5927\u7EA6100\u6216250\u6BEB\u79D2\uFF08\u6216\u66F4\u9AD8\uFF09\u7684\u5EF6\u8FDF\u662F\u6700\u6709\u7528\u7684\u3002</td>
</tr>
<tr>
<td>noTrailing</td>
<td><code>Boolean</code></td>
<td>\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3Afalse\u3002                                    \u5982\u679CnoTrailing\u4E3Atrue\uFF0C\u5F53\u8282\u6D41\u51FD\u6570\u88AB\u8C03\u7528\uFF0C\u6BCF\u8FC7<code>delay</code>\u6BEB\u79D2<code>callback</code>\u4E5F\u5C06\u6267\u884C\u4E00\u6B21\u3002                                    \u5982\u679CnoTrailing\u4E3Afalse\u6216\u8005\u672A\u4F20\u5165\uFF0C<code>callback</code>\u5C06\u5728\u6700\u540E\u4E00\u6B21\u8C03\u7528\u8282\u6D41\u51FD\u6570\u540E\u518D\u6267\u884C\u4E00\u6B21.                                    \uFF08\u5EF6\u8FDF<code>delay</code>\u6BEB\u79D2\u4E4B\u540E\uFF0C\u8282\u6D41\u51FD\u6570\u6CA1\u6709\u88AB\u8C03\u7528,\u5185\u90E8\u8BA1\u6570\u5668\u4F1A\u590D\u4F4D\uFF09</td>
</tr>
<tr>
<td>callback</td>
<td><code>function</code></td>
<td>\u5EF6\u8FDF\u6BEB\u79D2\u540E\u6267\u884C\u7684\u51FD\u6570\u3002<code>this</code>\u4E0A\u4E0B\u6587\u548C\u6240\u6709\u53C2\u6570\u90FD\u662F\u6309\u539F\u6837\u4F20\u9012\u7684\uFF0C                                    \u6267\u884C\u53BB\u8282\u6D41\u529F\u80FD\u65F6\uFF0C\u8C03\u7528<code>callback</code>\u3002</td>
</tr>
<tr>
<td>debounceMode</td>
<td><code>Boolean</code></td>
<td>\u5982\u679C<code>debounceMode</code>\u4E3Atrue\uFF0C<code>clear</code>\u5728<code>delay</code>ms\u540E\u6267\u884C\u3002                                    \u5982\u679CdebounceMode\u662Ffalse\uFF0C<code>callback</code>\u5728<code>delay</code> ms\u4E4B\u540E\u6267\u884C\u3002</td>
</tr>
</tbody></table>
<p><a name="debounce"></a></p>
<h2 id="debouncedelay-atbegin-callback-\u21D2-function"><code>debounce(delay, atBegin, callback)</code> \u21D2 <code>function</code></h2>
<p>\u51FD\u6570\u9632\u6296 
\u4E0Ethrottle\u4E0D\u540C\u7684\u662F\uFF0Cdebounce\u4FDD\u8BC1\u4E00\u4E2A\u51FD\u6570\u5728\u591A\u5C11\u6BEB\u79D2\u5185\u4E0D\u518D\u88AB\u89E6\u53D1\uFF0C\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C
\u8981\u4E48\u5728\u7B2C\u4E00\u6B21\u8C03\u7528return\u7684\u9632\u6296\u51FD\u6570\u65F6\u6267\u884C\uFF0C\u8981\u4E48\u5728\u5EF6\u8FDF\u6307\u5B9A\u6BEB\u79D2\u540E\u8C03\u7528\u3002</p>
<p><strong>Kind</strong>: global function<br><strong>Returns</strong>: <code>function</code> - \u65B0\u7684\u9632\u6296\u51FD\u6570\u3002  </p>
<table>
<thead>
<tr>
<th>Param</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td>delay</td>
<td><code>Number</code></td>
<td>0\u6216\u8005\u66F4\u5927\u7684\u6BEB\u79D2\u6570\u3002 \u5BF9\u4E8E\u4E8B\u4EF6\u56DE\u8C03\uFF0C\u5927\u7EA6100\u6216250\u6BEB\u79D2\uFF08\u6216\u66F4\u9AD8\uFF09\u7684\u5EF6\u8FDF\u662F\u6700\u6709\u7528\u7684\u3002</td>
</tr>
<tr>
<td>atBegin</td>
<td><code>Boolean</code></td>
<td>\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3Afalse\u3002                                  \u5982\u679C<code>atBegin</code>\u4E3Afalse\u6216\u672A\u4F20\u5165\uFF0C\u56DE\u8C03\u51FD\u6570\u5219\u5728\u7B2C\u4E00\u6B21\u8C03\u7528return\u7684\u9632\u6296\u51FD\u6570\u540E\u5EF6\u8FDF\u6307\u5B9A\u6BEB\u79D2\u8C03\u7528\u3002                                     \u5982\u679C<code>atBegin</code>\u4E3Atrue\uFF0C\u56DE\u8C03\u51FD\u6570\u5219\u5728\u7B2C\u4E00\u6B21\u8C03\u7528return\u7684\u9632\u6296\u51FD\u6570\u65F6\u76F4\u63A5\u6267\u884C</td>
</tr>
<tr>
<td>callback</td>
<td><code>function</code></td>
<td>\u5EF6\u8FDF\u6BEB\u79D2\u540E\u6267\u884C\u7684\u51FD\u6570\u3002<code>this</code>\u4E0A\u4E0B\u6587\u548C\u6240\u6709\u53C2\u6570\u90FD\u662F\u6309\u539F\u6837\u4F20\u9012\u7684\uFF0C                                  \u6267\u884C\u53BB\u6296\u52A8\u529F\u80FD\u65F6\uFF0C\uFF0C\u8C03\u7528<code>callback</code>\u3002</td>
</tr>
</tbody></table>
<p><strong>Example</strong>  </p>
<pre><code class="language-javascript">\u9002\u7528\u573A\u666F\uFF1A\u5982\u5728\u7EBF\u7F16\u8F91\u7684\u81EA\u52A8\u5B58\u50A8\u9632\u6296\u3002
</code></pre>
<p><a name="deepClone"></a></p>
<h2 id="deepclonevalues-\u21D2-any"><code>deepClone(values)</code> \u21D2 <code>Any</code></h2>
<p>\u6DF1\u62F7\u8D1D\uFF0C\u652F\u6301\u5E38\u89C1\u7C7B\u578B</p>
<p><strong>Kind</strong>: global function  </p>
<table>
<thead>
<tr>
<th>Param</th>
<th>Type</th>
</tr>
</thead>
<tbody><tr>
<td>values</td>
<td><code>Any</code></td>
</tr>
</tbody></table>
<p><a name="isEmptyObject"></a></p>
<h2 id="isemptyobjectobj-\u21D2-boolean"><code>isEmptyObject(obj)</code> \u21D2 <code>Boolean</code></h2>
<p>\u5224\u65AD<code>obj</code>\u662F\u5426\u4E3A\u7A7A</p>
<p><strong>Kind</strong>: global function  </p>
<table>
<thead>
<tr>
<th>Param</th>
<th>Type</th>
</tr>
</thead>
<tbody><tr>
<td>obj</td>
<td><code>Object</code></td>
</tr>
</tbody></table>
<p><a name="randomColor"></a></p>
<h2 id="randomcolortitle-author-\u21D2-string"><code>randomColor(title, author)</code> \u21D2 <code>String</code></h2>
<p>\u968F\u673A\u751F\u6210\u989C\u8272</p>
<p><strong>Kind</strong>: global function<br><strong>Returns</strong>: <code>String</code> - color  </p>
<table>
<thead>
<tr>
<th>Param</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td>title</td>
<td><code>string</code></td>
<td>The title of the book.</td>
</tr>
<tr>
<td>author</td>
<td><code>string</code></td>
<td>The author of the book.</td>
</tr>
</tbody></table>
<p><a name="randomNum"></a></p>
<h2 id="randomnummin-max-title-author"><code>randomNum(min, max, title, author)</code></h2>
<p>\u751F\u6210\u6307\u5B9A\u8303\u56F4[min, max]\u7684\u968F\u673A\u6570</p>
<p><strong>Kind</strong>: global function  </p>
<table>
<thead>
<tr>
<th>Param</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td>min</td>
<td><code>Number</code></td>
<td></td>
</tr>
<tr>
<td>max</td>
<td><code>Number</code></td>
<td></td>
</tr>
<tr>
<td>title</td>
<td><code>string</code></td>
<td>The title of the book.</td>
</tr>
<tr>
<td>author</td>
<td><code>string</code></td>
<td>The author of the book.</td>
</tr>
</tbody></table>
`;export{t as default};
