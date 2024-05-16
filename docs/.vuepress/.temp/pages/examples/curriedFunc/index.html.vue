<template><div><h1 id="currying-柯里化函数" tabindex="-1"><a class="header-anchor" href="#currying-柯里化函数"><span>currying 柯里化函数</span></a></h1>
<p>我们平常写方法，比如写个加法</p>
<code-group>
  <code-group-item title="调用方式(原调用方式)">
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">//9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </code-group-item>
  <code-group-item title="方法定义(原调用方式)">
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </code-group-item>
</code-group>
<p>使用 currying 后呢，我们可以写成这样</p>
<code-group>
  <code-group-item title="调用方式(柯里化)">
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">//9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </code-group-item>
  <code-group-item title="方法定义(柯里化)">
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </code-group-item>
</code-group>
<p>这么看上去好像没有必要，但是有时候我们比如封装了一个方法,但是我们有其中一个参数是固定的，比如我们总要算 5+任意数</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">result</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">//11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>注:这样就可以封装一些常用的方法，比如正则表达式这种，总要验证手机号啥的，就可以类似封装</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这只是简单用法，详细用法可以参考一下 <a href="https://www.jianshu.com/p/2975c25e4d71" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/2975c25e4d71<ExternalLinkIcon/></a></p>
</div>
</div></template>


