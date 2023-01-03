## Functions

<dl>
<dt><a href="#arrayEqual">`arrayEqual(arr1, arr2)`</a> ⇒ <code>Boolean</code></dt>
<dd><p>判断两个数组是否相等</p>
</dd>
<dt><a href="#fuzzyQuery">`fuzzyQuery(list, field, keyWord)`</a> ⇒ <code>Array</code></dt>
<dd><p>对象数组模糊查询</p>
</dd>
<dt><a href="#objArrayDelRepetitive">`objArrayDelRepetitive(arr, 对象中相同的关键字(如id))`</a> ⇒ <code>Array</code></dt>
<dd><p>对象数组去重</p>
</dd>
<dt><a href="#throttle">`throttle(delay, noTrailing, callback, debounceMode)`</a> ⇒ <code>function</code></dt>
<dd><p>函数节流。
适用于限制<code>resize</code>和<code>scroll</code>等函数的调用频率</p>
</dd>
<dt><a href="#debounce">`debounce(delay, atBegin, callback)`</a> ⇒ <code>function</code></dt>
<dd><p>函数防抖 
与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，
要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。</p>
</dd>
<dt><a href="#deepClone">`deepClone(values)`</a> ⇒ <code>Any</code></dt>
<dd><p>深拷贝，支持常见类型</p>
</dd>
<dt><a href="#isEmptyObject">`isEmptyObject(obj)`</a> ⇒ <code>Boolean</code></dt>
<dd><p>判断<code>obj</code>是否为空</p>
</dd>
<dt><a href="#randomColor">`randomColor(title, author)`</a> ⇒ <code>String</code></dt>
<dd><p>随机生成颜色</p>
</dd>
<dt><a href="#randomNum">`randomNum(min, max, title, author)`</a></dt>
<dd><p>生成指定范围[min, max]的随机数</p>
</dd>
</dl>

<a name="arrayDelRepetitive"></a>

## `arrayDelRepetitive` ⇒ <code>Array</code>
数组去重

**Kind**: global Array - 数组类函数  
**Returns**: <code>Array</code> - eg: arrayDelRepetitive([1,2],[2,5],[3,5,9])  //  [1, 2, 5, 3, 9]  

| Param | Type | Description |
| --- | --- | --- |
| arr1 | <code>Array</code> | 去重的对象 |
| ...arr2 | <code>Array</code> | 可以同时合并多个数组之后再去重 |

<a name="arrayEqual"></a>

## `arrayEqual(arr1, arr2)` ⇒ <code>Boolean</code>
判断两个数组是否相等

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr1 | <code>Array</code> | 
| arr2 | <code>Array</code> | 

<a name="fuzzyQuery"></a>

## `fuzzyQuery(list, field, keyWord)` ⇒ <code>Array</code>
对象数组模糊查询

**Kind**: global function  
**Returns**: <code>Array</code> - 查询的结果
eg: fuzzyQuery([{key:123},{key:62},{key:7}], 'key', 2)  // [{key:123},{key:62}]  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | 原数组 |
| field | <code>String</code> | 对应字段 |
| keyWord | <code>String</code> | 查询的关键词 |

<a name="objArrayDelRepetitive"></a>

## `objArrayDelRepetitive(arr, 对象中相同的关键字(如id))` ⇒ <code>Array</code>
对象数组去重

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| 对象中相同的关键字(如id) | <code>String</code> | 

<a name="throttle"></a>

## `throttle(delay, noTrailing, callback, debounceMode)` ⇒ <code>function</code>
函数节流。
适用于限制`resize`和`scroll`等函数的调用频率

**Kind**: global function  
**Returns**: <code>function</code> - 新的节流函数  

| Param | Type | Description |
| --- | --- | --- |
| delay | <code>Number</code> | 0 或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。 |
| noTrailing | <code>Boolean</code> | 可选，默认为false。                                    如果noTrailing为true，当节流函数被调用，每过`delay`毫秒`callback`也将执行一次。                                    如果noTrailing为false或者未传入，`callback`将在最后一次调用节流函数后再执行一次.                                    （延迟`delay`毫秒之后，节流函数没有被调用,内部计数器会复位） |
| callback | <code>function</code> | 延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，                                    执行去节流功能时，调用`callback`。 |
| debounceMode | <code>Boolean</code> | 如果`debounceMode`为true，`clear`在`delay`ms后执行。                                    如果debounceMode是false，`callback`在`delay` ms之后执行。 |

<a name="debounce"></a>

## `debounce(delay, atBegin, callback)` ⇒ <code>function</code>
函数防抖 
与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，
要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。

**Kind**: global function  
**Returns**: <code>function</code> - 新的防抖函数。  

| Param | Type | Description |
| --- | --- | --- |
| delay | <code>Number</code> | 0或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。 |
| atBegin | <code>Boolean</code> | 可选，默认为false。                                  如果`atBegin`为false或未传入，回调函数则在第一次调用return的防抖函数后延迟指定毫秒调用。                                     如果`atBegin`为true，回调函数则在第一次调用return的防抖函数时直接执行 |
| callback | <code>function</code> | 延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，                                  执行去抖动功能时，，调用`callback`。 |

**Example**  
```javascript
适用场景：如在线编辑的自动存储防抖。
```
<a name="deepClone"></a>

## `deepClone(values)` ⇒ <code>Any</code>
深拷贝，支持常见类型

**Kind**: global function  

| Param | Type |
| --- | --- |
| values | <code>Any</code> | 

<a name="isEmptyObject"></a>

## `isEmptyObject(obj)` ⇒ <code>Boolean</code>
判断`obj`是否为空

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 

<a name="randomColor"></a>

## `randomColor(title, author)` ⇒ <code>String</code>
随机生成颜色

**Kind**: global function  
**Returns**: <code>String</code> - color  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | The title of the book. |
| author | <code>string</code> | The author of the book. |

<a name="randomNum"></a>

## `randomNum(min, max, title, author)`
生成指定范围[min, max]的随机数

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>Number</code> |  |
| max | <code>Number</code> |  |
| title | <code>string</code> | The title of the book. |
| author | <code>string</code> | The author of the book. |

