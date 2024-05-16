<template><div><h1 id="spa首屏加载速度慢的怎么解决" tabindex="-1"><a class="header-anchor" href="#spa首屏加载速度慢的怎么解决"><span>SPA首屏加载速度慢的怎么解决？</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#什么是首屏加载">什么是首屏加载</router-link><ul><li><router-link to="#关于计算首屏时间">关于计算首屏时间</router-link></li></ul></li><li><router-link to="#加载慢的原因">加载慢的原因</router-link></li><li><router-link to="#解决方案">解决方案</router-link></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="什么是首屏加载" tabindex="-1"><a class="header-anchor" href="#什么是首屏加载"><span>什么是首屏加载</span></a></h2>
<p>首屏时间（First Contentful Paint），指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容</p>
<p>首屏加载可以说是用户体验中最重要的环节</p>
<h3 id="关于计算首屏时间" tabindex="-1"><a class="header-anchor" href="#关于计算首屏时间"><span>关于计算首屏时间</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>
通过DOMContentLoad或者performance来计算出首屏时间

<span class="token comment">// 方案一：</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'DOMContentLoaded'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'first contentful painting'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 方案二：</span>
performance<span class="token punctuation">.</span><span class="token function">getEntriesByName</span><span class="token punctuation">(</span><span class="token string">"first-contentful-paint"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>startTime

<span class="token comment">// performance.getEntriesByName("first-contentful-paint")[0]</span>
<span class="token comment">// 会返回一个 PerformancePaintTiming的实例，结构如下：</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"first-contentful-paint"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entryType</span><span class="token operator">:</span> <span class="token string">"paint"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">startTime</span><span class="token operator">:</span> <span class="token number">507.80000002123415</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="加载慢的原因" tabindex="-1"><a class="header-anchor" href="#加载慢的原因"><span>加载慢的原因</span></a></h2>
<p>在页面渲染的过程，导致加载速度慢的因素可能如下：</p>
<ul>
<li>网络延时问题</li>
<li>资源文件体积是否过大</li>
<li>资源是否重复发送请求去加载了</li>
<li>加载脚本的时候，渲染内容堵塞了</li>
</ul>
<h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2>
<p>常见的几种SPA首屏优化方式</p>
<ul>
<li>
<p>减小入口文件积
常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加</p>
<p>在vue-router配置路由的时候，采用动态加载路由的形式</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span> 
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'Blogs'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'ShowBlogs'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./components/ShowBlogs.vue'</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>静态资源本地缓存</p>
<p>后端返回资源问题：</p>
<ul>
<li>
<p>采用HTTP缓存，设置Cache-Control，Last-Modified，Etag等响应头</p>
</li>
<li>
<p>采用Service Worker离线缓存</p>
</li>
</ul>
<p>前端合理利用localStorage</p>
</li>
<li>
<p>UI框架按需加载</p>
<p>在日常使用UI框架，例如element-UI、或者antd，我们经常性直接引用整个UI库</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> ElementUI <span class="token keyword">from</span> <span class="token string">'element-ui'</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementUI<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但实际上我用到的组件只有按钮，分页，表格，输入与警告 所以我们要按需引用</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Pagination<span class="token punctuation">,</span> Table<span class="token punctuation">,</span> TableColumn<span class="token punctuation">,</span> MessageBox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-ui'</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Input<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Pagination<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>图片资源的压缩</p>
<p>图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素</p>
<p>对于所有的图片资源，我们可以进行适当的压缩</p>
<p>对页面上使用到的icon，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻http请求压力。</p>
</li>
<li>
<p>组件重复打包
假设A.js文件是一个常用的库，现在有多个路由使用了A.js文件，这就造成了重复下载</p>
<p>解决方案：在webpack的config文件中，修改CommonsChunkPlugin的配置</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>开启GZip压缩</p>
</li>
<li>
<p>使用SSR
SSR（Server side ），也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器</p>
<p>从头搭建一个服务端渲染是很复杂的，vue应用建议使用Nuxt.js实现服务端渲染</p>
</li>
</ul>
<p>减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分 ：资源加载优化 和 页面渲染优化</p>
<p>下图是更为全面的首屏优化的方案</p>
<p><img src="/images/interview/handleSlowLoad.png" alt="优化方案"></p>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/88639980?utm_source=wechat_session" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/88639980?utm_source=wechat_session<ExternalLinkIcon/></a></li>
<li><a href="https://www.chengrang.com/how-browsers-work.html" target="_blank" rel="noopener noreferrer">https://www.chengrang.com/how-browsers-work.html<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.cn/post/6844904185264095246" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844904185264095246<ExternalLinkIcon/></a></li>
<li><a href="https://vue3js.cn/docs/zh" target="_blank" rel="noopener noreferrer">https://vue3js.cn/docs/zh<ExternalLinkIcon/></a></li>
</ul>
</div></template>


