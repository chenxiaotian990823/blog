<template><div><h1 id="你是怎么理解es6中-generator的-使用场景" tabindex="-1"><a class="header-anchor" href="#你是怎么理解es6中-generator的-使用场景"><span>你是怎么理解ES6中 Generator的？使用场景？</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#介绍">介绍</router-link><ul><li><router-link to="#generator函数">Generator函数</router-link></li></ul></li><li><router-link to="#使用">使用</router-link></li><li><router-link to="#异步解决方案">异步解决方案</router-link><ul><li><router-link to="#回调函数">回调函数</router-link></li><li><router-link to="#promise-对象">Promise 对象</router-link></li><li><router-link to="#generator-函数">Generator 函数</router-link></li><li><router-link to="#async-await">async/await</router-link></li><li><router-link to="#区别">区别</router-link></li></ul></li><li><router-link to="#使用场景">使用场景</router-link></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同</p>
<p>回顾下上文提到的解决异步的手段：</p>
<ul>
<li>回调函数</li>
<li>promise</li>
</ul>
<p>那么，上文我们提到promsie已经是一种比较流行的解决异步方案，那么为什么还出现Generator？甚至async/await呢？</p>
<p>该问题我们留在后面再进行分析，下面先认识下Generator</p>
<h3 id="generator函数" tabindex="-1"><a class="header-anchor" href="#generator函数"><span>Generator函数</span></a></h3>
<p>执行 Generator 函数会返回一个遍历器对象，可以依次遍历 Generator 函数内部的每一个状态</p>
<p>形式上，Generator函数是一个普通函数，但是有两个特征：</p>
<ul>
<li>function关键字与函数名之间有一个星号</li>
<li>函数体内部使用yield表达式，定义不同的内部状态</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">helloWorldGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token string">'world'</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">'ending'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>Generator 函数会返回一个遍历器对象，即具有Symbol.iterator属性，并且返回给自己</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// some code</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

g<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> g
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过yield关键字可以暂停generator函数返回的遍历器对象的状态</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">helloWorldGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token string">'world'</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">'ending'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> hw <span class="token operator">=</span> <span class="token function">helloWorldGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述存在三个状态：hello、world、return</p>
<p>通过next方法才会遍历到下一个内部状态，其运行逻辑如下：</p>
<ul>
<li>遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。</li>
<li>下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式</li>
<li>如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。</li>
<li>如果该函数没有return语句，则返回的对象的value属性值为undefined</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>hw<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// { value: 'hello', done: false }</span>

hw<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// { value: 'world', done: false }</span>

hw<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// { value: 'ending', done: true }</span>

hw<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// { value: undefined, done: true }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>done用来判断是否存在下个状态，value对应状态值</p>
<p>yield表达式本身没有返回值，或者说总是返回undefined</p>
<p>通过调用next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token keyword">yield</span> <span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> z <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token punctuation">(</span>y <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>x <span class="token operator">+</span> y <span class="token operator">+</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Object{value:6, done:false}</span>
a<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Object{value:NaN, done:false}</span>
a<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Object{value:NaN, done:true}</span>

<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value:6, done:false }</span>
b<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token comment">// { value:8, done:false }</span>
b<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token comment">// { value:42, done:true }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正因为Generator函数返回Iterator对象，因此我们还可以通过for...of进行遍历</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> v <span class="token keyword">of</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1 2 3 4 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原生对象没有遍历接口，通过Generator函数为它加上这个接口，就能使用for...of进行遍历了</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">objectEntries</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> propKeys <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> propKey <span class="token keyword">of</span> propKeys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token punctuation">[</span>propKey<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>propKey<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> jane <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">'Jane'</span><span class="token punctuation">,</span> <span class="token literal-property property">last</span><span class="token operator">:</span> <span class="token string">'Doe'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> <span class="token function">objectEntries</span><span class="token punctuation">(</span>jane<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// first: Jane</span>
<span class="token comment">// last: Doe</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步解决方案" tabindex="-1"><a class="header-anchor" href="#异步解决方案"><span>异步解决方案</span></a></h2>
<p>回顾之前展开异步解决的方案：</p>
<ul>
<li>回调函数</li>
<li>Promise 对象</li>
<li>generator 函数</li>
<li>async/await</li>
</ul>
<p>这里通过文件读取案例，将几种解决异步的方案进行一个比较：</p>
<h3 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数"><span>回调函数</span></a></h3>
<p>所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，再调用这个函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'/etc/fstab'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'/etc/shells'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>readFile函数的第三个参数，就是回调函数，等到操作系统返回了/etc/passwd这个文件以后，回调函数才会执行</p>
<h3 id="promise-对象" tabindex="-1"><a class="header-anchor" href="#promise-对象"><span>Promise 对象</span></a></h3>
<p>Promise就是为了解决回调地狱而产生的，将回调函数的嵌套，改成链式调用</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">readFile</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fileName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'/etc/fstab'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'/etc/shells'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种链式操作形式，使异步任务的两段执行更清楚了，但是也存在了很明显的问题，代码变得冗杂了，语义化并不强</p>
<h3 id="generator-函数" tabindex="-1"><a class="header-anchor" href="#generator-函数"><span>Generator 函数</span></a></h3>
<p>yield表达式可以暂停函数执行，next方法用于恢复函数执行，这使得Generator函数非常适合将异步任务同步化</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">gen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> f1 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'/etc/fstab'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> f2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'/etc/shells'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await"><span>async/await</span></a></h3>
<p>将上面Generator函数改成async/await形式，更为简洁，语义化更强了</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">asyncReadFile</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> f1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'/etc/fstab'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> f2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'/etc/shells'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h3>
<p>通过上述代码进行分析，将promise、Generator、async/await进行比较：</p>
<ul>
<li>
<p>promise和async/await是专门用于处理异步操作的</p>
</li>
<li>
<p>Generator并不是为异步而设计出来的，它还有其他功能（对象迭代、控制输出、部署Interator接口...）</p>
</li>
<li>
<p>promise编写代码相比Generator、async更为复杂化，且可读性也稍差</p>
</li>
<li>
<p>Generator、async需要与promise对象搭配处理异步情况</p>
</li>
<li>
<p>async实质是Generator的语法糖，相当于会自动执行Generator函数</p>
</li>
<li>
<p>async使用上更为简洁，将异步代码以同步的形式进行编写，是处理异步编程的最终方案</p>
</li>
</ul>
<h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2>
<p>Generator是异步解决的一种方案，最大特点则是将异步操作同步化表达出来</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">loadUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">showLoadingScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token function">loadUIDataAsynchronously</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">hideLoadingScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> loader <span class="token operator">=</span> <span class="token function">loadUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 加载UI</span>
loader<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 卸载UI</span>
loader<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>包括redux-saga中间件也充分利用了Generator特性</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> call<span class="token punctuation">,</span> put<span class="token punctuation">,</span> takeEvery<span class="token punctuation">,</span> takeLatest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux-saga/effects'</span>
<span class="token keyword">import</span> Api <span class="token keyword">from</span> <span class="token string">'...'</span>

<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fetchUser</span><span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>Api<span class="token punctuation">.</span>fetchUser<span class="token punctuation">,</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"USER_FETCH_SUCCEEDED"</span><span class="token punctuation">,</span> <span class="token literal-property property">user</span><span class="token operator">:</span> user<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"USER_FETCH_FAILED"</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> e<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">mySaga</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token function">takeEvery</span><span class="token punctuation">(</span><span class="token string">"USER_FETCH_REQUESTED"</span><span class="token punctuation">,</span> fetchUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">mySaga</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token function">takeLatest</span><span class="token punctuation">(</span><span class="token string">"USER_FETCH_REQUESTED"</span><span class="token punctuation">,</span> fetchUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> mySaga<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还能利用Generator函数，在对象上实现Iterator接口</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">iterEntries</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> key <span class="token operator">=</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">yield</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myObj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> <span class="token function">iterEntries</span><span class="token punctuation">(</span>myObj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// foo 3</span>
<span class="token comment">// bar 7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://es6.ruanyifeng.com/#docs/generator-async" target="_blank" rel="noopener noreferrer">https://es6.ruanyifeng.com/#docs/generator-async<ExternalLinkIcon/></a></li>
</ul>
</div></template>


