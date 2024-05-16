<template><div><h1 id="spa-单页应用-的理解" tabindex="-1"><a class="header-anchor" href="#spa-单页应用-的理解"><span>SPA(单页应用)的理解</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#什么是spa">什么是SPA</router-link></li><li><router-link to="#spa和mpa的区别">SPA和MPA的区别</router-link><ul><li><router-link to="#单页应用与多页应用的区别">单页应用与多页应用的区别</router-link></li></ul></li><li><router-link to="#单页应用优缺点">单页应用优缺点</router-link></li><li><router-link to="#题外话-如何给spa做seo">题外话：如何给SPA做SEO</router-link></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="什么是spa" tabindex="-1"><a class="header-anchor" href="#什么是spa"><span>什么是SPA</span></a></h2>
<p>SPA（single-page application），翻译过来就是单页应用SPA是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验在单页应用中，所有必要的代码（HTML、JavaScript和CSS）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面页面在任何时间点都不会重新加载，也不会将控制转移到其他页面。</p>
<h2 id="spa和mpa的区别" tabindex="-1"><a class="header-anchor" href="#spa和mpa的区别"><span>SPA和MPA的区别</span></a></h2>
<p>多页应用MPA（MultiPage-page application</p>
<h3 id="单页应用与多页应用的区别" tabindex="-1"><a class="header-anchor" href="#单页应用与多页应用的区别"><span>单页应用与多页应用的区别</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>SPA</th>
<th>MPA</th>
</tr>
</thead>
<tbody>
<tr>
<td>组成</td>
<td>一个主页面和多个页面片段</td>
<td>多个主页面</td>
</tr>
<tr>
<td>刷新方式</td>
<td>局部刷新</td>
<td>整页刷新</td>
</tr>
<tr>
<td>url模式</td>
<td>哈希模式</td>
<td>历史模式</td>
</tr>
<tr>
<td>SEO搜索引擎优化</td>
<td>难实现，可使用SSR方式改善</td>
<td>容易实现</td>
</tr>
<tr>
<td>数据传递</td>
<td>容易</td>
<td>通过url、cookie、localStorage等传递</td>
</tr>
<tr>
<td>页面切换</td>
<td>速度快，用户体验良好</td>
<td>切换加载资源，速度慢，用户体验差</td>
</tr>
<tr>
<td>维护成本</td>
<td>相对容易</td>
<td>相对复杂</td>
</tr>
</tbody>
</table>
<h2 id="单页应用优缺点" tabindex="-1"><a class="header-anchor" href="#单页应用优缺点"><span>单页应用优缺点</span></a></h2>
<ul>
<li>
<p>优点:</p>
<ul>
<li>具有桌面应用的即时性、网站的可移植性和可访问性</li>
<li>用户体验好、快，内容的改变不需要重新加载整个页面</li>
<li>良好的前后端分离，分工更明确</li>
</ul>
</li>
<li>
<p>缺点:</p>
<ul>
<li>不利于搜索引擎的抓取</li>
<li>首次渲染速度相对较慢</li>
</ul>
</li>
</ul>
<h2 id="题外话-如何给spa做seo" tabindex="-1"><a class="header-anchor" href="#题外话-如何给spa做seo"><span>题外话：如何给SPA做SEO</span></a></h2>
<p>下面给出基于Vue的SPA如何实现SEO的三种方式</p>
<ul>
<li>SSR服务端渲染
将组件或页面通过服务器生成html，再返回给浏览器，如nuxt.js</li>
<li>静态化
目前主流的静态化主要有两种：（1）一种是通过程序将动态页面抓取并保存为静态页面，这样的页面的实际存在于服务器的硬盘中（2）另外一种是通过WEB服务器的 URL Rewrite的方式，它的原理是通过web服务器内部模块按一定规则将外部的URL请求转化为内部的文件地址，一句话来说就是把外部请求的静态地址转化为实际的动态页面地址，而静态页面实际是不存在的。这两种方法都达到了实现URL静态化的效果</li>
<li>SSR服务端渲染
将组件或页面通过服务器生成html，再返回给浏览器，如nuxt.js</li>
</ul>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://segmentfault.com/a/1190000019623624" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000019623624<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.cn/post/6844903512107663368" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903512107663368<ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/constantince/p/5586851.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/constantince/p/5586851.html<ExternalLinkIcon/></a></li>
</ul>
</div></template>


