---
title: 你了解vue的diff算法吗？说说看
sidebarDepth: 0
date: 2024-05-17
---

# 你了解vue的diff算法吗？说说看

[[toc]]

## 是什么

diff 算法是一种通过同层的树节点进行比较的高效算法

其有两个特点：

- 比较只会在同层级进行, 不会跨层级比较
- 在diff比较的过程中，循环从两边向中间比较

diff 算法在很多场景下都有应用，在 vue 中，作用于虚拟 dom 渲染成真实 dom 的新旧 VNode 节点比较

## 比较方式

diff整体策略为：深度优先，同层比较

1.比较只会在同层级进行, 不会跨层级比较

![同层级进行](/images/interview/diffLevel.webp)

2.比较的过程中，循环从两边向中间收拢

![同层级进行](/images/interview/diffCenter.webp)

## 小结

- 当数据发生改变时，订阅者watcher就会调用patch给真实的DOM打补丁
- 通过isSameVnode进行判断，相同则调用patchVnode方法
- patchVnode做了以下操作：
  - 找到对应的真实dom，称为el
  - 如果都有都有文本节点且不相等，将el文本节点设置为Vnode的文本节点
  - 如果oldVnode有子节点而VNode没有，则删除el子节点
  - 如果oldVnode没有子节点而VNode有，则将VNode的子节点真实化后添加到el
  - 如果两者都有子节点，则执行updateChildren函数比较子节点
- updateChildren主要做了以下操作：
  - 设置新旧VNode的头尾指针
  - 新旧头尾指针进行比较，循环向中间靠拢，根据情况调用patchVnode进行patch重复流程、调用createElem创建一个新节点，从哈希表寻找 key一致的VNode 节点再分情况操作

## 参考文献

- [https://juejin.cn/post/6881907432541552648#heading-1](https://juejin.cn/post/6881907432541552648#heading-1)
- [https://www.infoq.cn/article/udlcpkh4iqb0cr5wgy7f](https://www.infoq.cn/article/udlcpkh4iqb0cr5wgy7f)