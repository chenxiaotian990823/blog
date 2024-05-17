<template><div><h1 id="你知道vue中key的原理吗-说说你对它的理解" tabindex="-1"><a class="header-anchor" href="#你知道vue中key的原理吗-说说你对它的理解"><span>你知道vue中key的原理吗？说说你对它的理解</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#key是什么">Key是什么</router-link></li><li><router-link to="#设置key与不设置key区别">设置key与不设置key区别</router-link></li><li><router-link to="#设置key值一定能提高diff效率吗">设置key值一定能提高diff效率吗？</router-link></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="key是什么" tabindex="-1"><a class="header-anchor" href="#key是什么"><span>Key是什么</span></a></h2>
<p>开始之前，我们先还原两个实际工作场景</p>
<p>1.当我们在使用v-for时，需要给单元加上key</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"item in items"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"item.id"</span><span class="token operator">></span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.用+new Date()生成的时间戳作为key，手动强制触发重新渲染</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Comp <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"+new Date()"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">一句话来讲</p>
<p>key是给每一个vnode的唯一id，也是diff的一种优化策略，可以根据key，更准确， 更快的找到对应的vnode节点</p>
</div>
<h2 id="设置key与不设置key区别" tabindex="-1"><a class="header-anchor" href="#设置key与不设置key区别"><span>设置key与不设置key区别</span></a></h2>
<p>举个例子：</p>
<p>创建一个实例，2秒后往items数组插入数据</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in items<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../../dist/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 创建实例</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#demo'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'e'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
          <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'f'</span><span class="token punctuation">)</span>  <span class="token comment">// </span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在不使用key的情况，vue会进行这样的操作：</p>
<p><img src="/images/interview/vuekey.png" alt="操作流程"></p>
<p>分析下整体流程：</p>
<ul>
<li>比较A，A，相同类型的节点，进行patch，但数据相同，不发生dom操作</li>
<li>比较B，B，相同类型的节点，进行patch，但数据相同，不发生dom操作</li>
<li>比较C，F，相同类型的节点，进行patch，数据不同，发生dom操作</li>
<li>比较D，C，相同类型的节点，进行patch，数据不同，发生dom操作</li>
<li>比较E，D，相同类型的节点，进行patch，数据不同，发生dom操作</li>
<li>循环结束，将E插入到DOM中
一共发生了3次更新，1次插入操作</li>
</ul>
<p>在使用key的情况：vue会进行这样的操作：</p>
<ul>
<li>比较A，A，相同类型的节点，进行patch，但数据相同，不发生dom操作</li>
<li>比较B，B，相同类型的节点，进行patch，但数据相同，不发生dom操作</li>
<li>比较C，F，不相同类型的节点</li>
<li>比较E、E，相同类型的节点，进行patch，但数据相同，不发生dom操作</li>
<li>比较D、D，相同类型的节点，进行patch，但数据相同，不发生dom操作</li>
<li>比较C、C，相同类型的节点，进行patch，但数据相同，不发生dom操作</li>
<li>循环结束，将F插入到C之前
一共发生了0次更新，1次插入操作</li>
</ul>
<p>通过上面两个小例子，可见设置key能够大大减少对页面的DOM操作，提高了diff效率</p>
<h2 id="设置key值一定能提高diff效率吗" tabindex="-1"><a class="header-anchor" href="#设置key值一定能提高diff效率吗"><span>设置key值一定能提高diff效率吗？</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">其实不然，文档中也明确表示</p>
<p>当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素</p>
</div>
<p>这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出</p>
<p>建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升</p>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://juejin.cn/post/6844903826693029895" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903826693029895<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.cn/post/6844903985397104648" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903985397104648<ExternalLinkIcon/></a></li>
<li><a href="https://vue3js.cn/docs/zh" target="_blank" rel="noopener noreferrer">https://vue3js.cn/docs/zh<ExternalLinkIcon/></a></li>
</ul>
</div></template>


