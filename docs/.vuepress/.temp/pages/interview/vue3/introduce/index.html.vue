<template><div><h1 id="vue3-0的设计目标是什么-做了哪些优化" tabindex="-1"><a class="header-anchor" href="#vue3-0的设计目标是什么-做了哪些优化"><span>Vue3.0的设计目标是什么？做了哪些优化</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#设计目标">设计目标</router-link><ul><li><router-link to="#更小">更小</router-link></li><li><router-link to="#更快">更快</router-link></li><li><router-link to="#更友好">更友好</router-link></li></ul></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="设计目标" tabindex="-1"><a class="header-anchor" href="#设计目标"><span>设计目标</span></a></h2>
<p>不以解决实际业务痛点的更新都是耍流氓，下面我们来列举一下Vue3之前我们或许会面临的问题</p>
<ul>
<li>
<p>随着功能的增长，复杂组件的代码变得越来越难以维护</p>
</li>
<li>
<p>缺少一种比较「干净」的在多个组件之间提取和复用逻辑的机制</p>
</li>
<li>
<p>类型推断不够友好</p>
</li>
<li>
<p>bundle的时间太久了</p>
</li>
</ul>
<p>而 Vue3 经过长达两三年时间的筹备，做了哪些事情？</p>
<p>我们从结果反推</p>
<ul>
<li>更小</li>
<li>更快</li>
<li>TypeScript支持</li>
<li>API设计一致性</li>
<li>提高自身可维护性</li>
<li>开放更多底层功能</li>
</ul>
<h3 id="更小" tabindex="-1"><a class="header-anchor" href="#更小"><span>更小</span></a></h3>
<p>Vue3移除一些不常用的 API</p>
<p>引入tree-shaking，可以将无用模块“剪辑”，仅打包需要的，使打包的整体体积变小了</p>
<h3 id="更快" tabindex="-1"><a class="header-anchor" href="#更快"><span>更快</span></a></h3>
<p>主要体现在编译方面：</p>
<ul>
<li>diff算法优化</li>
<li>静态提升</li>
<li>事件监听缓存</li>
<li>SSR优化</li>
</ul>
<h3 id="更友好" tabindex="-1"><a class="header-anchor" href="#更友好"><span>更友好</span></a></h3>
<p>vue3在兼顾vue2的options API的同时还推出了composition API，大大增加了代码的逻辑组织和代码复用能力</p>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://juejin.cn/post/6850418112878575629#heading-5" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6850418112878575629#heading-5<ExternalLinkIcon/></a></li>
<li><a href="https://vue3js.cn/docs/zh" target="_blank" rel="noopener noreferrer">https://vue3js.cn/docs/zh<ExternalLinkIcon/></a></li>
</ul>
</div></template>


