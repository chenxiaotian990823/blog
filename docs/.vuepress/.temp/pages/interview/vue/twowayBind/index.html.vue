<template><div><h1 id="双向数据绑定是什么" tabindex="-1"><a class="header-anchor" href="#双向数据绑定是什么"><span>双向数据绑定是什么</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#双向绑定的原理是什么">双向绑定的原理是什么</router-link><ul><li><router-link to="#理解viewmodel">理解ViewModel</router-link></li></ul></li><li><router-link to="#实现双向绑定">实现双向绑定</router-link></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="双向绑定的原理是什么" tabindex="-1"><a class="header-anchor" href="#双向绑定的原理是什么"><span>双向绑定的原理是什么</span></a></h2>
<p>我们都知道 Vue 是数据双向绑定的框架，双向绑定由三个重要部分构成</p>
<ul>
<li>数据层（Model）：应用的数据及业务逻辑</li>
<li>视图层（View）：应用的展示效果，各类UI组件</li>
<li>业务逻辑层（ViewModel）：框架封装的核心，它负责将数据与视图关联起来</li>
</ul>
<p>而上面的这个分层的架构方案，可以用一个专业术语进行称呼：MVVM这里的控制层的核心功能便是 “数据双向绑定” 。自然，我们只需弄懂它是什么，便可以进一步了解数据绑定的原理</p>
<h3 id="理解viewmodel" tabindex="-1"><a class="header-anchor" href="#理解viewmodel"><span>理解ViewModel</span></a></h3>
<p>它的主要职责就是：</p>
<ul>
<li>数据变化后更新视图</li>
<li>视图变化后更新数据</li>
</ul>
<p>当然，它还有两个主要部分组成</p>
<ul>
<li>监听器（Observer）：对所有数据的属性进行监听</li>
<li>解析器（Compiler）：对每个元素节点的指令进行扫描跟解析,根据指令模板替换数据,以及绑定相应的更新函数</li>
</ul>
<h2 id="实现双向绑定" tabindex="-1"><a class="header-anchor" href="#实现双向绑定"><span>实现双向绑定</span></a></h2>
<p>我们还是以Vue为例，先来看看Vue中的双向绑定流程是什么的</p>
<p>1.new Vue()首先执行初始化，对data执行响应化处理，这个过程发生Observe中</p>
<p>2.同时对模板执行编译，找到其中动态绑定的数据，从data中获取并初始化视图，这个过程发生在Compile中</p>
<p>3.同时定义⼀个更新函数和Watcher，将来对应数据变化时Watcher会调用更新函数</p>
<p>4.由于data的某个key在⼀个视图中可能出现多次，所以每个key都需要⼀个管家Dep来管理多个Watcher</p>
<p>5.将来data中数据⼀旦发生变化，会首先找到对应的Dep，通知所有Watcher执行更新函数</p>
<p>流程图如下：</p>
<p><img src="/images/interview/twowayBind.png" alt="流程图"></p>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://www.liaoxuefeng.com/wiki/1022910821149312/1109527162256416" target="_blank" rel="noopener noreferrer">https://www.liaoxuefeng.com/wiki/1022910821149312/1109527162256416<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.cn/post/6844903942254510087#heading-9" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903942254510087#heading-9<ExternalLinkIcon/></a></li>
</ul>
</div></template>


