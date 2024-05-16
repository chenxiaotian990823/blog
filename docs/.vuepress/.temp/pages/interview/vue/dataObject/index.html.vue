<template><div><h1 id="为什么-data-属性是一个函数而不是一个对象" tabindex="-1"><a class="header-anchor" href="#为什么-data-属性是一个函数而不是一个对象"><span>为什么 data 属性是一个函数而不是一个对象？</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#实例和组件定义-data-的区别">实例和组件定义 data 的区别</router-link></li><li><router-link to="#结论">结论</router-link></li></ul></nav>
<h2 id="实例和组件定义-data-的区别" tabindex="-1"><a class="header-anchor" href="#实例和组件定义-data-的区别"><span>实例和组件定义 data 的区别</span></a></h2>
<p>vue 实例的时候定义 data 属性既可以是一个对象，也可以是一个函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">"#app"</span><span class="token punctuation">,</span>
  <span class="token comment">// 对象格式</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">"foo"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 函数格式</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">"foo"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中定义 data 属性，只能是一个函数</p>
<p>如果为组件 data 直接定义为一个对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">"component1"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>组件&lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">"foo"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则会得到警告信息</p>
<p>警告说明：返回的data应该是一个函数在每一个组件实例中</p>
<h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h2>
<ul>
<li>根实例对象data可以是对象也可以是函数（根实例是单例），不会产生数据污染情况</li>
<li>组件实例对象data必须为函数，目的是为了防止多个组件实例对象之间共用一个data，产生数据污染。采用函数的形式，initData时会将其作为工厂函数都会返回全新data对象</li>
</ul>
</div></template>


