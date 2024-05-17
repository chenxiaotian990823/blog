<template><div><h1 id="你了解vue的diff算法吗-说说看" tabindex="-1"><a class="header-anchor" href="#你了解vue的diff算法吗-说说看"><span>你了解vue的diff算法吗？说说看</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#是什么">是什么</router-link></li><li><router-link to="#比较方式">比较方式</router-link></li><li><router-link to="#小结">小结</router-link></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么"><span>是什么</span></a></h2>
<p>diff 算法是一种通过同层的树节点进行比较的高效算法</p>
<p>其有两个特点：</p>
<ul>
<li>比较只会在同层级进行, 不会跨层级比较</li>
<li>在diff比较的过程中，循环从两边向中间比较</li>
</ul>
<p>diff 算法在很多场景下都有应用，在 vue 中，作用于虚拟 dom 渲染成真实 dom 的新旧 VNode 节点比较</p>
<h2 id="比较方式" tabindex="-1"><a class="header-anchor" href="#比较方式"><span>比较方式</span></a></h2>
<p>diff整体策略为：深度优先，同层比较</p>
<p>1.比较只会在同层级进行, 不会跨层级比较</p>
<p><img src="/images/interview/diffLevel.webp" alt="同层级进行"></p>
<p>2.比较的过程中，循环从两边向中间收拢</p>
<p><img src="/images/interview/diffCenter.webp" alt="同层级进行"></p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2>
<ul>
<li>当数据发生改变时，订阅者watcher就会调用patch给真实的DOM打补丁</li>
<li>通过isSameVnode进行判断，相同则调用patchVnode方法</li>
<li>patchVnode做了以下操作：
<ul>
<li>找到对应的真实dom，称为el</li>
<li>如果都有都有文本节点且不相等，将el文本节点设置为Vnode的文本节点</li>
<li>如果oldVnode有子节点而VNode没有，则删除el子节点</li>
<li>如果oldVnode没有子节点而VNode有，则将VNode的子节点真实化后添加到el</li>
<li>如果两者都有子节点，则执行updateChildren函数比较子节点</li>
</ul>
</li>
<li>updateChildren主要做了以下操作：
<ul>
<li>设置新旧VNode的头尾指针</li>
<li>新旧头尾指针进行比较，循环向中间靠拢，根据情况调用patchVnode进行patch重复流程、调用createElem创建一个新节点，从哈希表寻找 key一致的VNode 节点再分情况操作</li>
</ul>
</li>
</ul>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://juejin.cn/post/6881907432541552648#heading-1" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6881907432541552648#heading-1<ExternalLinkIcon/></a></li>
<li><a href="https://www.infoq.cn/article/udlcpkh4iqb0cr5wgy7f" target="_blank" rel="noopener noreferrer">https://www.infoq.cn/article/udlcpkh4iqb0cr5wgy7f<ExternalLinkIcon/></a></li>
</ul>
</div></template>


