<template><div><h1 id="动态给-vue-的-data-添加一个新的属性时会发生什么-怎样解决" tabindex="-1"><a class="header-anchor" href="#动态给-vue-的-data-添加一个新的属性时会发生什么-怎样解决"><span>动态给 vue 的 data 添加一个新的属性时会发生什么？怎样解决？</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#原理分析">原理分析</router-link></li><li><router-link to="#解决方案">解决方案</router-link><ul><li><router-link to="#vue-set">Vue.set()</router-link></li><li><router-link to="#object-assign">Object.assign()</router-link></li><li><router-link to="#forceupdate">$forceUpdate</router-link></li></ul></li><li><router-link to="#小结">小结</router-link></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="原理分析" tabindex="-1"><a class="header-anchor" href="#原理分析"><span>原理分析</span></a></h2>
<p>为什么产生上面的情况呢？</p>
<p>下面来分析一下</p>
<p>vue2 是用过 Object.defineProperty 实现数据响应式</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">get foo:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> val
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">set foo:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                val <span class="token operator">=</span> newVal
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们访问foo属性或者设置foo值的时候都能够触发setter与getter</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>obj<span class="token punctuation">.</span>foo   
obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">'new'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是我们为obj添加新属性的时候，却无法触发事件属性的拦截</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>obj<span class="token punctuation">.</span>bar  <span class="token operator">=</span> <span class="token string">'新属性'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>原因是一开始obj的foo属性被设成了响应式数据，而bar是后面新增的属性，并没有通过Object.defineProperty设置成响应式数据</p>
<h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2>
<p>Vue 不允许在已经创建的实例上动态添加新的响应式属性</p>
<p>若想实现数据与视图同步更新，可采取下面三种解决方案：</p>
<ul>
<li>Vue.set()</li>
<li>Object.assign()</li>
<li>$forcecUpdated()</li>
</ul>
<h3 id="vue-set" tabindex="-1"><a class="header-anchor" href="#vue-set"><span>Vue.set()</span></a></h3>
<p>Vue.set( target, propertyName/index, value )</p>
<p>参数</p>
<ul>
<li>{Object | Array} target</li>
<li>{string | number} propertyName/index</li>
<li>{any} value</li>
</ul>
<p>返回值：设置的值</p>
<h3 id="object-assign" tabindex="-1"><a class="header-anchor" href="#object-assign"><span>Object.assign()</span></a></h3>
<p>直接使用Object.assign()添加到对象的新属性不会触发更新</p>
<p>应创建一个新的对象，合并原对象和混入对象的属性</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>someObject <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>someObject<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">newProperty1</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">newProperty2</span><span class="token operator">:</span><span class="token number">2</span> <span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="forceupdate" tabindex="-1"><a class="header-anchor" href="#forceupdate"><span>$forceUpdate</span></a></h3>
<p>如果你发现你自己需要在 Vue中做一次强制更新，99.9% 的情况，是你在某个地方做错了事</p>
<p>$forceUpdate迫使Vue 实例重新渲染</p>
<p>PS：仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。</p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2>
<ul>
<li>
<p>如果为对象添加少量的新属性，可以直接采用Vue.set()</p>
</li>
<li>
<p>如果需要为新对象添加大量的新属性，则通过Object.assign()创建新对象</p>
</li>
<li>
<p>如果你实在不知道怎么操作时，可采取$forceUpdate()进行强制刷新 (不建议)</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>vue3是用过proxy实现数据响应式的，直接动态添加新属性仍可以实现数据响应式</p>
</div>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://cn.vuejs.org/v2/api/#Vue-set" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/v2/api/#Vue-set<ExternalLinkIcon/></a></li>
<li><a href="https://vue3js.cn/docs/zh" target="_blank" rel="noopener noreferrer">https://vue3js.cn/docs/zh<ExternalLinkIcon/></a></li>
</ul>
</div></template>


