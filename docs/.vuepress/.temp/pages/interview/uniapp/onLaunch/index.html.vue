<template><div><h1 id="uniapp-应用启动-onlaunch-方法-改为同步-执行后再执行页面加载-onload-方法" tabindex="-1"><a class="header-anchor" href="#uniapp-应用启动-onlaunch-方法-改为同步-执行后再执行页面加载-onload-方法"><span>uniapp 应用启动 onLaunch 方法，改为同步，执行后再执行页面加载 onLoad 方法</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#问题描述">问题描述</router-link></li><li><router-link to="#方案一">方案一</router-link><ul><li><router-link to="#main-js-添加如下代码">main.js 添加如下代码</router-link></li><li><router-link to="#应用启动时-设置需要等待的逻辑">应用启动时，设置需要等待的逻辑</router-link></li><li><router-link to="#在页面-onload-中增加等待代码-await-this-onlaunched">在页面 onLoad 中增加等待代码 await this.$onLaunched</router-link></li></ul></li><li><router-link to="#方案二">方案二</router-link><ul><li><router-link to="#main-js">main.js</router-link></li><li><router-link to="#页面">页面</router-link></li></ul></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述"><span>问题描述</span></a></h2>
<p>app.vue 里的 onLaunch 中如果有异步方法，返回结果可能会在页面的 onLoad 之后，为了让页面的 onLoad 在 onLaunch 之后执行，使用以下解决方案</p>
<h2 id="方案一" tabindex="-1"><a class="header-anchor" href="#方案一"><span>方案一</span></a></h2>
<h3 id="main-js-添加如下代码" tabindex="-1"><a class="header-anchor" href="#main-js-添加如下代码"><span>main.js 添加如下代码</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$onLaunched <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$isResolve <span class="token operator">=</span> resolve
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用启动时-设置需要等待的逻辑" tabindex="-1"><a class="header-anchor" href="#应用启动时-设置需要等待的逻辑"><span>应用启动时，设置需要等待的逻辑</span></a></h3>
<p>在 App.vue 的 onLaunch 中增加代码 this.$isResolve()</p>
<p>这个方法必须在你的业务如 ajax 执行完毕后再执行</p>
<p>另外注意要用箭头函数，否则 this 不好使</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token function-variable function">onLaunch</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'App Launch'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'倒计时10秒'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'倒计时结束'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$isResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在页面-onload-中增加等待代码-await-this-onlaunched" tabindex="-1"><a class="header-anchor" href="#在页面-onload-中增加等待代码-await-this-onlaunched"><span>在页面 onLoad 中增加等待代码 await this.$onLaunched</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//等待倒计时</span>
	<span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$onLaunched<span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"等待倒计时结束后打印"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 后续业务逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方案二" tabindex="-1"><a class="header-anchor" href="#方案二"><span>方案二</span></a></h2>
<h3 id="main-js" tabindex="-1"><a class="header-anchor" href="#main-js"><span>main.js</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$visitStore</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//页面入参option</span>

  <span class="token comment">//自己的业务逻辑</span>

  <span class="token comment">//如果是ajax，注意要加同步等待</span>
  <span class="token keyword">await</span> <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>http
    <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/customer/updateLastVisitStoreId"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">lastVisitStoreId</span><span class="token operator">:</span> storeId <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面" tabindex="-1"><a class="header-anchor" href="#页面"><span>页面</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>			
	<span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$visitStore</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//同步执行这个方法</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://blog.csdn.net/yfx000/article/details/108186719" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/yfx000/article/details/108186719<ExternalLinkIcon/></a></li>
</ul>
</div></template>


