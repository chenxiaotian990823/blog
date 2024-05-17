---
title: 你知道vue中key的原理吗？说说你对它的理解
sidebarDepth: 0
date: 2024-05-17
---

# 你知道vue中key的原理吗？说说你对它的理解

[[toc]]

## Key是什么

开始之前，我们先还原两个实际工作场景

1.当我们在使用v-for时，需要给单元加上key

```js
<ul>
    <li v-for="item in items" :key="item.id">...</li>
</ul>
```

2.用+new Date()生成的时间戳作为key，手动强制触发重新渲染

```js
<Comp :key="+new Date()" />
```

::: tip 一句话来讲
key是给每一个vnode的唯一id，也是diff的一种优化策略，可以根据key，更准确， 更快的找到对应的vnode节点
:::

## 设置key与不设置key区别

举个例子：

创建一个实例，2秒后往items数组插入数据

```html
<body>
  <div id="demo">
    <p v-for="item in items" :key="item">{{item}}</p>
  </div>
  <script src="../../dist/vue.js"></script>
  <script>
    // 创建实例
    const app = new Vue({
      el: '#demo',
      data: { items: ['a', 'b', 'c', 'd', 'e'] },
      mounted () {
        setTimeout(() => { 
          this.items.splice(2, 0, 'f')  // 
       }, 2000);
     },
   });
  </script>
</body>
```

在不使用key的情况，vue会进行这样的操作：

![操作流程](/images/interview/vuekey.png)

分析下整体流程：

- 比较A，A，相同类型的节点，进行patch，但数据相同，不发生dom操作
- 比较B，B，相同类型的节点，进行patch，但数据相同，不发生dom操作
- 比较C，F，相同类型的节点，进行patch，数据不同，发生dom操作
- 比较D，C，相同类型的节点，进行patch，数据不同，发生dom操作
- 比较E，D，相同类型的节点，进行patch，数据不同，发生dom操作
- 循环结束，将E插入到DOM中
一共发生了3次更新，1次插入操作

在使用key的情况：vue会进行这样的操作：

- 比较A，A，相同类型的节点，进行patch，但数据相同，不发生dom操作
- 比较B，B，相同类型的节点，进行patch，但数据相同，不发生dom操作
- 比较C，F，不相同类型的节点
- 比较E、E，相同类型的节点，进行patch，但数据相同，不发生dom操作
- 比较D、D，相同类型的节点，进行patch，但数据相同，不发生dom操作
- 比较C、C，相同类型的节点，进行patch，但数据相同，不发生dom操作
- 循环结束，将F插入到C之前
一共发生了0次更新，1次插入操作

通过上面两个小例子，可见设置key能够大大减少对页面的DOM操作，提高了diff效率

## 设置key值一定能提高diff效率吗？

::: tip 其实不然，文档中也明确表示
当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素
:::

这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出

建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升

## 参考文献

- [https://juejin.cn/post/6844903826693029895](https://juejin.cn/post/6844903826693029895)
- [https://juejin.cn/post/6844903985397104648](https://juejin.cn/post/6844903985397104648)
- [https://vue3js.cn/docs/zh](https://vue3js.cn/docs/zh)