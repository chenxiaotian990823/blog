<template><div><h1 id="vue-组件之间的通信方式都有哪些" tabindex="-1"><a class="header-anchor" href="#vue-组件之间的通信方式都有哪些"><span>Vue 组件之间的通信方式都有哪些？</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#组件间通信的分类">组件间通信的分类</router-link></li><li><router-link to="#组件间通信的方案">组件间通信的方案</router-link></li><li><router-link to="#小结">小结</router-link></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="组件间通信的分类" tabindex="-1"><a class="header-anchor" href="#组件间通信的分类"><span>组件间通信的分类</span></a></h2>
<p>组件间通信的分类可以分成以下</p>
<ul>
<li>父子组件之间的通信</li>
<li>兄弟组件之间的通信</li>
<li>祖孙与后代组件之间的通信</li>
<li>非关系组件间之间的通信</li>
</ul>
<p>关系图:</p>
<p><img src="/images/interview/compCompute.png" alt="组件间通信关系"></p>
<h2 id="组件间通信的方案" tabindex="-1"><a class="header-anchor" href="#组件间通信的方案"><span>组件间通信的方案</span></a></h2>
<p>整理 vue 中 8 种常规的通信方案</p>
<ul>
<li>
<p>通过 props 传递</p>
<ul>
<li>适用场景：父组件传递数据给子组件</li>
<li>子组件设置 props 属性，定义接收父组件传递过来的参数</li>
<li>父组件在使用子组件标签中通过字面量来传递值</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Children.vue</span>
<span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token comment">// 字符串形式</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span>String <span class="token comment">// 接收的类型参数</span>
  <span class="token comment">// 对象形式</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span>Number<span class="token punctuation">,</span> <span class="token comment">// 接收的类型为数值</span>
    <span class="token literal-property property">defaule</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>  <span class="token comment">// 默认值为18</span>
    <span class="token literal-property property">require</span><span class="token operator">:</span><span class="token boolean">true</span> <span class="token comment">// age属性必须传递</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Father.vue</span>
<span class="token operator">&lt;</span>Children name<span class="token operator">=</span><span class="token string">"jack"</span> age<span class="token operator">=</span><span class="token number">18</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>通过 $emit 触发自定义事件</p>
<ul>
<li>适用场景：子组件传递数据给父组件</li>
<li>子组件通过$emit触发自定义事件，$emit 第二个参数为传递的数值</li>
<li>父组件绑定监听器获取到子组件传递过来的参数</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Children.vue</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'add'</span><span class="token punctuation">,</span> good<span class="token punctuation">)</span>
<span class="token comment">// Father.vue</span>
<span class="token operator">&lt;</span>Children @add<span class="token operator">=</span><span class="token string">"cartAdd($event)"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用 ref</p>
<ul>
<li>父组件在使用子组件的时候设置 ref</li>
<li>父组件通过设置子组件 ref 来获取数据</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token operator">&lt;</span>Children ref<span class="token operator">=</span><span class="token string">"foo"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>foo <span class="token comment">// 获取子组件实例，通过子组件实例我们就能拿到对应的数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>EventBus</p>
<ul>
<li>使用场景：兄弟组件传值</li>
<li>创建一个中央事件总线 EventBus</li>
<li>兄弟组件通过$emit触发自定义事件，$emit 第二个参数为传递的数值</li>
<li>另一个兄弟组件通过$on 监听自定义事件</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Bus.js</span>
<span class="token comment">// 创建一个中央时间总线类</span>
<span class="token keyword">class</span> <span class="token class-name">Bus</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 存放事件的名字</span>
  <span class="token punctuation">}</span>
  <span class="token function">$on</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">$emit</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">cb</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// main.js</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 将$bus挂载到vue实例的原型上</span>
<span class="token comment">// 另一种方式</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Vue已经实现了Bus的功能</span>

<span class="token comment">// Children1.vue</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">)</span>

<span class="token comment">// Children2.vue</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handle<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>$parent 或$root</p>
<ul>
<li>通过共同祖辈$parent或者$root 搭建通信桥连</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 兄弟组件</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"add"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>add<span class="token punctuation">)</span>

<span class="token comment">// 另一个兄弟组件</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">"add"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>attrs 与 listeners</p>
<ul>
<li>适用场景：祖先传递数据给子孙</li>
<li>设置批量向下传属性$attrs 和 $listeners</li>
<li>包含了父级作用域中不作为 prop 被识别 (且获取) 的特性绑定 ( class 和 style 除外)。</li>
<li>可以通过 v-bind=&quot;$attrs&quot; 传⼊内部组件</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// child：并未在props中声明foo</span>
<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>$attrs<span class="token punctuation">.</span>foo<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

<span class="token comment">// parent</span>
<span class="token operator">&lt;</span>HelloWorld foo<span class="token operator">=</span><span class="token string">"foo"</span><span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 给Grandson隔代传值，communication/index.vue</span>
<span class="token operator">&lt;</span>Child2 msg<span class="token operator">=</span><span class="token string">"lalala"</span> @some<span class="token operator">-</span>event<span class="token operator">=</span><span class="token string">"onSomeEvent"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Child2<span class="token operator">></span>

<span class="token comment">// Child2做展开</span>
<span class="token operator">&lt;</span>Grandson v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">"$attrs"</span> v<span class="token operator">-</span>on<span class="token operator">=</span><span class="token string">"$listeners"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Grandson<span class="token operator">></span>

<span class="token comment">// Grandson使⽤</span>
<span class="token operator">&lt;</span>div @click<span class="token operator">=</span><span class="token string">"$emit('some-event', 'msg from grandson')"</span><span class="token operator">></span>
<span class="token punctuation">{</span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Provide 与 Inject</p>
<ul>
<li>在祖先组件定义 provide 属性，返回传递的值</li>
<li>在后代组件通过 inject 接收组件传递过来的值</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 祖先组件</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span><span class="token string">'foo'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 后代组件</span>
<span class="token literal-property property">inject</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'foo'</span><span class="token punctuation">]</span> <span class="token comment">// 获取到祖先组件传递过来的值  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Vuex</p>
<ul>
<li>适用场景: 复杂关系的组件数据传递</li>
<li>Vuex作用相当于一个用来存储共享变量的容器
<img src="/images/interview/vuex.png" alt="vuex容器"></li>
<li>state用来存放共享变量的地方</li>
<li>getter，可以增加一个getter派生状态，(相当于store中的计算属性），用来获得共享变量的值</li>
<li>mutations用来存放修改state的方法。</li>
<li>actions也是用来存放修改state的方法，不过action是在mutations的基础上进行。常用来做一些异步操作</li>
</ul>
</li>
</ul>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2>
<ul>
<li>父子关系的组件数据传递选择 props  与 $emit进行传递，也可选择ref</li>
<li>兄弟关系的组件数据传递可选择$bus，其次可以选择$parent进行传递</li>
<li>祖先与后代组件数据传递可选择attrs与listeners或者 Provide与 Inject</li>
<li>复杂关系的组件数据传递可以通过vuex存放共享的变量</li>
</ul>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://juejin.cn/post/6844903990052782094#heading-0" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903990052782094#heading-0<ExternalLinkIcon/></a></li>
<li><a href="https://zh.wikipedia.org/wiki/%E9%80%9A%E4%BF%A1" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/%E9%80%9A%E4%BF%A1<ExternalLinkIcon/></a></li>
<li><a href="https://vue3js.cn/docs/zh" target="_blank" rel="noopener noreferrer">https://vue3js.cn/docs/zh<ExternalLinkIcon/></a></li>
</ul>
</div></template>


