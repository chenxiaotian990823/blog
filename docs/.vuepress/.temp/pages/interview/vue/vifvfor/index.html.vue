<template><div><h1 id="为什么vue中的v-if和v-for不建议一起使用" tabindex="-1"><a class="header-anchor" href="#为什么vue中的v-if和v-for不建议一起使用"><span>为什么Vue中的v-if和v-for不建议一起使用</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#作用">作用</router-link></li><li><router-link to="#优先级">优先级</router-link></li><li><router-link to="#注意事项">注意事项</router-link></li></ul></nav>
<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h2>
<p>v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 true值的时候被渲染</p>
<p>v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组或者对象，而 item 则是被迭代的数组元素的别名</p>
<p>在 v-for 的时候，建议设置key值，并且保证每个key值是独一无二的，这便于diff算法进行优化</p>
<p>两者在用法上</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Modal v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"isShow"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"item in items"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"item.id"</span><span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>label <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h2>
<p>最终结论：v-for优先级比v-if高</p>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<p>1.永远不要把 v-if 和 v-for 同时用在同一个元素上，带来性能方面的浪费（每次渲染都会先循环再进行条件判断）</p>
<p>2.如果避免出现这种情况，则在外层嵌套template（页面渲染不生成dom节点），在这一层进行v-if判断，然后在内部进行v-for循环</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"isShow"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>p v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"item in items"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.如果条件出现在循环内部，可通过计算属性computed提前过滤掉那些不需要显示的项</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">items</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> item<span class="token punctuation">.</span>isShow
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


