<template><div><h1 id="vue实例挂载的过程" tabindex="-1"><a class="header-anchor" href="#vue实例挂载的过程"><span>Vue实例挂载的过程</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#结论">结论</router-link></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h2>
<ul>
<li>
<p>new Vue的时候调用会调用_init方法</p>
<ul>
<li>定义 $set、$get 、$delete、$watch 等方法</li>
<li>定义 $on、$off、$emit、$off等事件</li>
<li>定义 _update、$forceUpdate、$destroy生命周期</li>
<li>调用$mount进行页面的挂载</li>
</ul>
</li>
<li>
<p>挂载的时候主要是通过mountComponent方法</p>
</li>
<li>
<p>定义updateComponent更新函数</p>
</li>
<li>
<p>执行render生成虚拟DOM</p>
</li>
<li>
<p>_update将虚拟DOM生成真实DOM结构，并且渲染到页面中</p>
</li>
</ul>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://www.cnblogs.com/gerry2019/p/12001661.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/gerry2019/p/12001661.html<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/vuejs/vue/tree/dev/src/core/instance" target="_blank" rel="noopener noreferrer">https://github.com/vuejs/vue/tree/dev/src/core/instance<ExternalLinkIcon/></a></li>
<li><a href="https://vue3js.cn" target="_blank" rel="noopener noreferrer">https://vue3js.cn<ExternalLinkIcon/></a></li>
</ul>
</div></template>


