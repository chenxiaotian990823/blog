---
title: Vue实例挂载的过程
sidebarDepth: 0
date: 2024-05-16
---

# Vue实例挂载的过程

[[toc]]

## 结论

- new Vue的时候调用会调用_init方法

  - 定义 $set、$get 、$delete、$watch 等方法
  - 定义 $on、$off、$emit、$off等事件
  - 定义 _update、$forceUpdate、$destroy生命周期
  - 调用$mount进行页面的挂载

- 挂载的时候主要是通过mountComponent方法

- 定义updateComponent更新函数

- 执行render生成虚拟DOM

- _update将虚拟DOM生成真实DOM结构，并且渲染到页面中

## 参考文献

- [https://www.cnblogs.com/gerry2019/p/12001661.html](https://www.cnblogs.com/gerry2019/p/12001661.html)
- [https://github.com/vuejs/vue/tree/dev/src/core/instance](https://github.com/vuejs/vue/tree/dev/src/core/instance)
- [https://vue3js.cn](https://vue3js.cn)