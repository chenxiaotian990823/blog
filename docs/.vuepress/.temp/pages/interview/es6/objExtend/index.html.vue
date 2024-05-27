<template><div><h1 id="对象新增了哪些扩展" tabindex="-1"><a class="header-anchor" href="#对象新增了哪些扩展"><span>对象新增了哪些扩展？</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#属性的简写">属性的简写</router-link></li><li><router-link to="#属性名表达式">属性名表达式</router-link></li><li><router-link to="#super关键字">super关键字</router-link></li><li><router-link to="#扩展运算符的应用">扩展运算符的应用</router-link></li><li><router-link to="#属性的遍历">属性的遍历</router-link></li><li><router-link to="#对象新增的方法">对象新增的方法</router-link><ul><li><router-link to="#object-is">Object.is()</router-link></li><li><router-link to="#object-assign">Object.assign()</router-link></li><li><router-link to="#object-getownpropertydescriptors">Object.getOwnPropertyDescriptors()</router-link></li><li><router-link to="#object-setprototypeof">Object.setPrototypeOf()</router-link></li><li><router-link to="#object-getprototypeof">Object.getPrototypeOf()</router-link></li><li><router-link to="#object-keys">Object.keys()</router-link></li><li><router-link to="#object-values">Object.values()</router-link></li><li><router-link to="#object-entries">Object.entries()</router-link></li><li><router-link to="#object-fromentries">Object.fromEntries()</router-link></li></ul></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="属性的简写" tabindex="-1"><a class="header-anchor" href="#属性的简写"><span>属性的简写</span></a></h2>
<p>ES6 中，当对象键名与对应值名相等的时候，可以进行简写</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> foo <span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法也能够进行简写</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"Hello!"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>

<span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">method</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"Hello!"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在函数内作为返回值，也会变得方便很多</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">10</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">getPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// {x:1, y:10}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：简写的对象方法不能用作构造函数，否则会报错</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">"bar"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">obj<span class="token punctuation">.</span>f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性名表达式" tabindex="-1"><a class="header-anchor" href="#属性名表达式"><span>属性名表达式</span></a></h2>
<p>ES6 允许字面量定义对象时，将表达式放在括号内</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> lastWord <span class="token operator">=</span> <span class="token string">'last word'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'first word'</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>lastWord<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'world'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

a<span class="token punctuation">[</span><span class="token string">'first word'</span><span class="token punctuation">]</span> <span class="token comment">// "hello"</span>
a<span class="token punctuation">[</span>lastWord<span class="token punctuation">]</span> <span class="token comment">// "world"</span>
a<span class="token punctuation">[</span><span class="token string">'last word'</span><span class="token punctuation">]</span> <span class="token comment">// "world"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表达式还可以用于定义方法名</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token string">'h'</span> <span class="token operator">+</span> <span class="token string">'ello'</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'hi'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// hi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，属性名表达式与简洁表示法，不能同时使用，会报错</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 报错</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'bar'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">'abc'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>foo<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 正确</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'bar'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>foo<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'abc'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> keyA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> keyB <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myObject <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>keyA<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'valueA'</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>keyB<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'valueB'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

myObject <span class="token comment">// Object {[object Object]: "valueB"}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="super关键字" tabindex="-1"><a class="header-anchor" href="#super关键字"><span>super关键字</span></a></h2>
<p>this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> proto <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'hello'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'world'</span><span class="token punctuation">,</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> proto<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 为obj设置原型对象</span>
obj<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// "hello"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展运算符的应用" tabindex="-1"><a class="header-anchor" href="#扩展运算符的应用"><span>扩展运算符的应用</span></a></h2>
<p>在解构赋值中，未被读取的可遍历的属性，分配到指定的对象上面</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token operator">...</span>z <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
x <span class="token comment">// 1</span>
y <span class="token comment">// 2</span>
z <span class="token comment">// { a: 3, b: 4 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：解构赋值必须是最后一个参数，否则会报错</p>
<p>解构赋值是浅拷贝</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token operator">...</span>x <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 修改obj里面a属性中键值</span>
x<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token comment">// 2，影响到了结构出来x的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象的扩展运算符等同于使用Object.assign()方法</p>
<h2 id="属性的遍历" tabindex="-1"><a class="header-anchor" href="#属性的遍历"><span>属性的遍历</span></a></h2>
<p>ES6 一共有 5 种方法可以遍历对象的属性。</p>
<ul>
<li>
<p>for...in：循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）</p>
</li>
<li>
<p>Object.keys(obj)：返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名</p>
</li>
<li>
<p>Object.getOwnPropertyNames(obj)：回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名</p>
</li>
<li>
<p>Object.getOwnPropertySymbols(obj)：返回一个数组，包含对象自身的所有 Symbol 属性的键名</p>
</li>
<li>
<p>Reflect.ownKeys(obj)：返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举</p>
</li>
</ul>
<p>上述遍历，都遵守同样的属性遍历的次序规则：</p>
<ul>
<li>首先遍历所有数值键，按照数值升序排列</li>
<li>其次遍历所有字符串键，按照加入时间升序排列</li>
<li>最后遍历所有 Symbol 键，按照加入时间升序排</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// ['2', '10', 'b', 'a', Symbol()]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象新增的方法" tabindex="-1"><a class="header-anchor" href="#对象新增的方法"><span>对象新增的方法</span></a></h2>
<p>关于对象新增的方法，分别有以下：</p>
<ul>
<li>Object.is()</li>
<li>Object.assign()</li>
<li>Object.getOwnPropertyDescriptors()</li>
<li>Object.setPrototypeOf()，Object.getPrototypeOf()</li>
<li>Object.keys()，Object.values()，Object.entries()</li>
<li>Object.fromEntries()</li>
</ul>
<h3 id="object-is" tabindex="-1"><a class="header-anchor" href="#object-is"><span>Object.is()</span></a></h3>
<p>严格判断两个值是否相等，与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是+0不等于-0，二是NaN等于自身</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">+</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">0</span> <span class="token comment">//true</span>
<span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span> <span class="token comment">// false</span>

Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-assign" tabindex="-1"><a class="header-anchor" href="#object-assign"><span>Object.assign()</span></a></h3>
<p>Object.assign()方法用于对象的合并，将源对象source的所有可枚举属性，复制到目标对象target</p>
<p>Object.assign()方法的第一个参数是目标对象，后面的参数都是源对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> source1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> source2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source1<span class="token punctuation">,</span> source2<span class="token punctuation">)</span><span class="token punctuation">;</span>
target <span class="token comment">// {a:1, b:2, c:3}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：Object.assign()方法是浅拷贝，遇到同名属性会进行替换</p>
<h3 id="object-getownpropertydescriptors" tabindex="-1"><a class="header-anchor" href="#object-getownpropertydescriptors"><span>Object.getOwnPropertyDescriptors()</span></a></h3>
<p>返回指定对象所有自身属性（非继承属性）的描述对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">'abc'</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// { foo:</span>
<span class="token comment">//    { value: 123,</span>
<span class="token comment">//      writable: true,</span>
<span class="token comment">//      enumerable: true,</span>
<span class="token comment">//      configurable: true },</span>
<span class="token comment">//   bar:</span>
<span class="token comment">//    { get: [Function: get bar],</span>
<span class="token comment">//      set: undefined,</span>
<span class="token comment">//      enumerable: true,</span>
<span class="token comment">//      configurable: true } }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-setprototypeof" tabindex="-1"><a class="header-anchor" href="#object-setprototypeof"><span>Object.setPrototypeOf()</span></a></h3>
<p>Object.setPrototypeOf方法用来设置一个对象的原型对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> prototype<span class="token punctuation">)</span>

<span class="token comment">// 用法</span>
<span class="token keyword">const</span> o <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-getprototypeof" tabindex="-1"><a class="header-anchor" href="#object-getprototypeof"><span>Object.getPrototypeOf()</span></a></h3>
<p>用于读取一个对象的原型对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="object-keys" tabindex="-1"><a class="header-anchor" href="#object-keys"><span>Object.keys()</span></a></h3>
<p>返回自身的（不含继承的）所有可遍历（enumerable）属性的键名的数组</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// ["foo", "baz"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-values" tabindex="-1"><a class="header-anchor" href="#object-values"><span>Object.values()</span></a></h3>
<p>返回自身的（不含继承的）所有可遍历（enumerable）属性的键对应值的数组</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// ["bar", 42]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-entries" tabindex="-1"><a class="header-anchor" href="#object-entries"><span>Object.entries()</span></a></h3>
<p>返回一个对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对的数组</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// [ ["foo", "bar"], ["baz", 42] ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-fromentries" tabindex="-1"><a class="header-anchor" href="#object-fromentries"><span>Object.fromEntries()</span></a></h3>
<p>用于将一个键值对数组转为对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">'baz'</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// { foo: "bar", baz: 42 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://es6.ruanyifeng.com/#docs/object" target="_blank" rel="noopener noreferrer">https://es6.ruanyifeng.com/#docs/object<ExternalLinkIcon/></a></li>
</ul>
</div></template>


