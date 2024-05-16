<template><div><h1 id="请描述下你对vue生命周期的理解-在created和mounted这两个生命周期中请求数据有什么区别呢" tabindex="-1"><a class="header-anchor" href="#请描述下你对vue生命周期的理解-在created和mounted这两个生命周期中请求数据有什么区别呢"><span>请描述下你对vue生命周期的理解？在created和mounted这两个生命周期中请求数据有什么区别呢？</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#生命周期有哪些">生命周期有哪些</router-link></li><li><router-link to="#生命周期整体流程">生命周期整体流程</router-link><ul><li><router-link to="#具体分析">具体分析</router-link></li></ul></li><li><router-link to="#题外话-数据请求在created和mouted的区别">题外话：数据请求在created和mouted的区别</router-link></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="生命周期有哪些" tabindex="-1"><a class="header-anchor" href="#生命周期有哪些"><span>生命周期有哪些</span></a></h2>
<table>
<thead>
<tr>
<th>生命周期</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>beforeCreate</td>
<td>组件实例被创建之初</td>
</tr>
<tr>
<td>created</td>
<td>组件实例已经完全创建</td>
</tr>
<tr>
<td>beforeMount</td>
<td>组件挂载之前</td>
</tr>
<tr>
<td>mounted</td>
<td>组件挂载到实例上去之后</td>
</tr>
<tr>
<td>beforeUpdate</td>
<td>组件数据发生变化，更新之前</td>
</tr>
<tr>
<td>updated</td>
<td>组件数据更新之后</td>
</tr>
<tr>
<td>beforeDestroy</td>
<td>组件实例销毁之前</td>
</tr>
<tr>
<td>destroyed</td>
<td>组件实例销毁之后</td>
</tr>
<tr>
<td>activated</td>
<td>keep-alive 缓存的组件激活时</td>
</tr>
<tr>
<td>deactivated</td>
<td>keep-alive 缓存的组件停用时调用</td>
</tr>
<tr>
<td>errorCaptured</td>
<td>捕获一个来自子孙组件的错误时被调用</td>
</tr>
</tbody>
</table>
<h2 id="生命周期整体流程" tabindex="-1"><a class="header-anchor" href="#生命周期整体流程"><span>生命周期整体流程</span></a></h2>
<p><img src="/images/interview/lifeCycle.png" alt="生命周期"></p>
<h3 id="具体分析" tabindex="-1"><a class="header-anchor" href="#具体分析"><span>具体分析</span></a></h3>
<p><b>beforeCreate -&gt; created</b></p>
<ul>
<li>初始化vue实例，进行数据观测</li>
</ul>
<p><b>created</b></p>
<ul>
<li>完成数据观测，属性与方法的运算，watch、event事件回调的配置</li>
<li>可调用methods中的方法，访问和修改data数据触发响应式渲染dom，可通过computed和watch完成数据计算</li>
<li>此时vm.$el 并没有被创建</li>
</ul>
<p><b>created -&gt; beforeMount</b></p>
<ul>
<li>判断是否存在el选项，若不存在则停止编译，直到调用vm.$mount(el)才会继续编译</li>
<li>优先级：render &gt; template &gt; outerHTML</li>
<li>vm.el获取到的是挂载DOM的</li>
</ul>
<p><b>beforeMount</b></p>
<ul>
<li>在此阶段可获取到vm.el</li>
<li>此阶段vm.el虽已完成DOM初始化，但并未挂载在el选项上</li>
</ul>
<p><b>beforeMount -&gt; mounted</b></p>
<ul>
<li>此阶段vm.el完成挂载，vm.$el生成的DOM替换了el选项所对应的DOM</li>
</ul>
<p><b>mounted</b></p>
<ul>
<li>vm.el已完成DOM的挂载与渲染，此刻打印vm.$el，发现之前的挂载点及内容已被替换成新的DOM</li>
</ul>
<p><b>beforeUpdate</b></p>
<ul>
<li>更新的数据必须是被渲染在模板上的（el、template、render之一）</li>
<li>此时view层还未更新</li>
<li>若在beforeUpdate中再次修改数据，不会再次触发更新方法</li>
</ul>
<p><b>updated</b></p>
<ul>
<li>完成view层的更新</li>
<li>若在updated中再次修改数据，会再次触发更新方法（beforeUpdate、updated）</li>
</ul>
<p><b>beforeDestroy</b></p>
<ul>
<li>实例被销毁前调用，此时实例属性与方法仍可访问</li>
</ul>
<p><b>destroyed</b></p>
<ul>
<li>完全销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器</li>
<li>并不能清除DOM，仅仅销毁实例</li>
</ul>
<h2 id="题外话-数据请求在created和mouted的区别" tabindex="-1"><a class="header-anchor" href="#题外话-数据请求在created和mouted的区别"><span>题外话：数据请求在created和mouted的区别</span></a></h2>
<p>created是在组件实例一旦创建完成的时候立刻调用，这时候页面dom节点并未生成；mounted是在页面dom节点渲染完毕之后就立刻执行的。触发时机上created是比mounted要更早的，两者的相同点：都能拿到实例对象的属性和方法。 讨论这个问题本质就是触发的时机，放在mounted中的请求有可能导致页面闪动（因为此时页面dom结构已经生成），但如果在页面加载前完成请求，则不会出现此情况。建议对页面内容的改动放在created生命周期当中。</p>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://juejin.cn/post/6844903811094413320" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903811094413320<ExternalLinkIcon/></a></li>
<li><a href="https://baike.baidu.com/" target="_blank" rel="noopener noreferrer">https://baike.baidu.com/<ExternalLinkIcon/></a></li>
<li><a href="http://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">http://cn.vuejs.org/<ExternalLinkIcon/></a></li>
</ul>
</div></template>


