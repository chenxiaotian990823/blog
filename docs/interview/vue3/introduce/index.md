---
title: Vue3.0的设计目标是什么？做了哪些优化
sidebarDepth: 0
date: 2024-05-20
---

# Vue3.0的设计目标是什么？做了哪些优化

[[toc]]

## 设计目标

不以解决实际业务痛点的更新都是耍流氓，下面我们来列举一下Vue3之前我们或许会面临的问题

- 随着功能的增长，复杂组件的代码变得越来越难以维护

- 缺少一种比较「干净」的在多个组件之间提取和复用逻辑的机制

- 类型推断不够友好

- bundle的时间太久了

而 Vue3 经过长达两三年时间的筹备，做了哪些事情？

我们从结果反推

- 更小
- 更快
- TypeScript支持
- API设计一致性
- 提高自身可维护性
- 开放更多底层功能

### 更小

Vue3移除一些不常用的 API

引入tree-shaking，可以将无用模块“剪辑”，仅打包需要的，使打包的整体体积变小了

### 更快

主要体现在编译方面：

- diff算法优化
- 静态提升
- 事件监听缓存
- SSR优化

### 更友好

vue3在兼顾vue2的options API的同时还推出了composition API，大大增加了代码的逻辑组织和代码复用能力

## 参考文献

- [https://juejin.cn/post/6850418112878575629#heading-5](https://juejin.cn/post/6850418112878575629#heading-5)
- [https://vue3js.cn/docs/zh](https://vue3js.cn/docs/zh)