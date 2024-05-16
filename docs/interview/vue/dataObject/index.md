---
title: 为什么data属性是一个函数而不是一个对象？
sidebarDepth: 0
date: 2024-05-16
---

# 为什么 data 属性是一个函数而不是一个对象？

[[toc]]

## 实例和组件定义 data 的区别

vue 实例的时候定义 data 属性既可以是一个对象，也可以是一个函数

```js
const app = new Vue({
  el: "#app",
  // 对象格式
  data: {
    foo: "foo",
  },
  // 函数格式
  data() {
    return {
      foo: "foo",
    }
  },
})
```

组件中定义 data 属性，只能是一个函数

如果为组件 data 直接定义为一个对象

```js
Vue.component("component1", {
  template: `<div>组件</div>`,
  data: {
    foo: "foo",
  },
})
```

则会得到警告信息

警告说明：返回的data应该是一个函数在每一个组件实例中

## 结论

- 根实例对象data可以是对象也可以是函数（根实例是单例），不会产生数据污染情况
- 组件实例对象data必须为函数，目的是为了防止多个组件实例对象之间共用一个data，产生数据污染。采用函数的形式，initData时会将其作为工厂函数都会返回全新data对象
