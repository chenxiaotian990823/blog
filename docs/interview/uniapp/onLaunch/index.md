---
title: uniapp 应用启动onLaunch方法，改为同步，执行后再执行页面加载onLoad方法
sidebarDepth: 0
date: 2024-05-21
---

# uniapp 应用启动 onLaunch 方法，改为同步，执行后再执行页面加载 onLoad 方法

[[toc]]

## 问题描述

app.vue 里的 onLaunch 中如果有异步方法，返回结果可能会在页面的 onLoad 之后，为了让页面的 onLoad 在 onLaunch 之后执行，使用以下解决方案

## 方案一

### main.js 添加如下代码

```js
Vue.prototype.$onLaunched = new Promise((resolve) => {
  Vue.prototype.$isResolve = resolve
})
```

### 应用启动时，设置需要等待的逻辑

在 App.vue 的 onLaunch 中增加代码 this.$isResolve()

这个方法必须在你的业务如 ajax 执行完毕后再执行

另外注意要用箭头函数，否则 this 不好使

```js
onLaunch: function() {
	console.log('App Launch');

	console.log('倒计时10秒');
	setTimeout(() => {
	    console.log('倒计时结束');
	    this.$isResolve()
	},5000);
},
```

### 在页面 onLoad 中增加等待代码 await this.$onLaunched

```js
async onLoad(option) {
	//等待倒计时
	await this.$onLaunched;
	console.log("等待倒计时结束后打印");

	// 后续业务逻辑
},
```

## 方案二

### main.js

```js
Vue.prototype.$visitStore = async (option) => {
  //页面入参option

  //自己的业务逻辑

  //如果是ajax，注意要加同步等待
  await Vue.prototype.http
    .post("/customer/updateLastVisitStoreId", { lastVisitStoreId: storeId })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
```

### 页面

```js
async onLoad(option) {			
	await this.$visitStore(option);//同步执行这个方法
}
```

## 参考文献

- [https://blog.csdn.net/yfx000/article/details/108186719](https://blog.csdn.net/yfx000/article/details/108186719)
