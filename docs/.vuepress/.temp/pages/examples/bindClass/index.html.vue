<template><div><h1 id="class-的动态绑定" tabindex="-1"><a class="header-anchor" href="#class-的动态绑定"><span>class 的动态绑定</span></a></h1>
<h2 id="对象方法" tabindex="-1"><a class="header-anchor" href="#对象方法"><span>对象方法</span></a></h2>
<p>最简单的绑定（这里的 active 加不加单引号都可以，以下也一样都能渲染）</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"{ 'active': isActive }"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>判断是否绑定一个 active</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"{'active':isActive==-1}"</span>
<span class="token comment">//或者</span>
<span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"{'active':isActive==index}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定并判断多个</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//第一种（用逗号隔开）</span>
<span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"{ 'active': isActive, 'sort': isSort }"</span>

<span class="token comment">//第二种（放在data里面）</span>
<span class="token comment">//也可以把后面绑定的对象写在一个变量放在data里面，可以变成下面这样</span>
<span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"classObject"</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">classObject</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">sort</span><span class="token operator">:</span><span class="token boolean">false</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//第三种（使用computed属性）</span>
<span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"classObject"</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isSort</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">classObject</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isActive<span class="token punctuation">,</span>
            <span class="token literal-property property">sort</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>isSort
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组方法" tabindex="-1"><a class="header-anchor" href="#数组方法"><span>数组方法</span></a></h2>
<p>单纯数组</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"[isActive,isSort]"</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
        <span class="token literal-property property">isActive</span><span class="token operator">:</span><span class="token string">'active'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isSort</span><span class="token operator">:</span><span class="token string">'sort'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组与三元运算符结合判断选择需要的-class" tabindex="-1"><a class="header-anchor" href="#数组与三元运算符结合判断选择需要的-class"><span>数组与三元运算符结合判断选择需要的 class</span></a></h2>
<blockquote>
<p>（注意：三元运算符后面的“：”两边的 class 需要加上单引号，否则不能正确渲染）</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"[isActive?'active':'']"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"[isActive==1?'active':'']"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"[isActive==index?'active':'']"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"[isActive==index?'active':'otherActiveClass']"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数组对象结合动态判断" tabindex="-1"><a class="header-anchor" href="#数组对象结合动态判断"><span>数组对象结合动态判断</span></a></h2>
<blockquote>
<p>前面这个 active 在对象里面可以不加单引号，后面这个 sort 要加单引号</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"[{ active: isActive }, 'sort']"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"[{ active: isActive==1 }, 'sort']"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"[{ active: isActive==index }, 'sort']"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>举个常用的例子</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['timeSelectListBtn',{active: item.index == timeSelectList.active}]<span class="token punctuation">"</span></span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>timeSelectItem(item.index)<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item,index) in timeSelectList.timeBtn<span class="token punctuation">"</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    {{item.text}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">//定义一个列表，然后通过active来判断选中的是哪个</span>
        <span class="token literal-property property">timeSelectList</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">timeBtn</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"近7天"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"近30天"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"近半年"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"近一年"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"自定义"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">timeSelectItem</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>timeSelectList<span class="token punctuation">.</span>active <span class="token operator">=</span> e
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.timeSelectListBtn</span> <span class="token punctuation">{</span>
    //写普通的样式
  <span class="token punctuation">}</span>
  <span class="token selector">.timeSelectListBtn.active</span> <span class="token punctuation">{</span>
    //写一些被选中的样式
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


