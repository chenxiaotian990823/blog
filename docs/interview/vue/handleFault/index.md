---
title: 你是怎么处理vue项目中的错误的？
sidebarDepth: 0
date: 2024-05-17
---

# 你是怎么处理 vue 项目中的错误的？

[[toc]]

## 错误类型

任何一个框架，对于错误的处理都是一种必备的能力

在 Vue 中，则是定义了一套对应的错误处理规则给到使用者，且在源代码级别，对部分必要的过程做了一定的错误处理。

主要的错误来源包括：

- 后端接口错误
- 代码中本身逻辑错误

## 如何处理

### 后端接口错误

通过 axios 的 interceptor 实现网络请求的 response 先进行一层拦截

```js
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status == 401) {
      router.push({ name: "Login" })
    } else {
      message.error("出错了")
      return Promise.reject(error)
    }
  }
)
```

### 代码逻辑问题

#### 全局设置错误处理

设置全局错误处理函数

```js
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
}
```

errorHandler 指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例

不过值得注意的是，在不同 Vue 版本中，该全局 API 作用的范围会有所不同：

> 从 2.2.0 起，这个钩子也会捕获组件生命周期钩子里的错误。同样的，当这个钩子是 undefined 时，被捕获的错误会通过 console.error 输出而避免应用崩

> 从 2.4.0 起，这个钩子也会捕获 Vue 自定义事件处理函数内部的错误了

> 从 2.6.0 起，这个钩子也会捕获 v-on DOM 监听器内部抛出的错误。另外，如果任何被覆盖的钩子或处理函数返回一个 Promise 链 (例如 async 函数)，则来自其 Promise 链的错误也会被处理

#### 生命周期钩子

errorCaptured 是 2.5.0 新增的一个生命钩子函数，当捕获到一个来自子孙组件的错误时被调用

基本类型

```js
(err: Error, vm: Component, info: string) => ?boolean
```

此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播

参考官网，错误传播规则如下：

- 默认情况下，如果全局的 config.errorHandler 被定义，所有的错误仍会发送它，因此这些错误仍然会向单一的分析服务的地方进行汇报
- 如果一个组件的继承或父级从属链路中存在多个 errorCaptured 钩子，则它们将会被相同的错误逐个唤起。
- 如果此 errorCaptured 钩子自身抛出了一个错误，则这个新错误和原本被捕获的错误都会发送给全局的 config.errorHandler
- 一个 errorCaptured 钩子能够返回 false 以阻止错误继续向上传播。本质上是说“这个错误已经被搞定了且应该被忽略”。它会阻止其它任何会被这个错误唤起的 errorCaptured 钩子和全局的 config.errorHandler

下面来看个例子

定义一个父组件 cat

```js
Vue.component("cat", {
  template: `
        <div>
			<h1>Cat: </h1>
        	<slot></slot>
        </div>`,
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  errorCaptured(err, vm, info) {
    console.log(`cat EC: ${err.toString()}\ninfo: ${info}`)
    return false
  },
})
```

定义一个子组件 kitten，其中 dontexist()并没有定义，存在错误

```js
Vue.component("kitten", {
  template: "<div><h1>Kitten: {{ dontexist() }}</h1></div>",
  props: {
    name: {
      required: true,
      type: String,
    },
  },
})
```

页面中使用组件

```js
<div id="app" v-cloak>
  <cat name="my cat">
    <kitten></kitten>
  </cat>
</div>
```

在父组件的errorCaptured则能够捕获到信息

```js
cat EC: TypeError: dontexist is not a function
info: render
```

## 参考文献

- [https://juejin.cn/post/6844904096936230925](https://juejin.cn/post/6844904096936230925)
- [https://segmentfault.com/a/1190000018606181](https://segmentfault.com/a/1190000018606181)
