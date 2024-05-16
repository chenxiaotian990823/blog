---
title: 动态给vue的data添加一个新的属性时会发生什么？怎样解决？
sidebarDepth: 0
date: 2024-05-16
---

# 动态给 vue 的 data 添加一个新的属性时会发生什么？怎样解决？

[[toc]]

## 原理分析

为什么产生上面的情况呢？

下面来分析一下

vue2 是用过 Object.defineProperty 实现数据响应式

```js
const obj = {}
Object.defineProperty(obj, 'foo', {
        get() {
            console.log(`get foo:${val}`);
            return val
        },
        set(newVal) {
            if (newVal !== val) {
                console.log(`set foo:${newVal}`);
                val = newVal
            }
        }
    })
}
```

当我们访问foo属性或者设置foo值的时候都能够触发setter与getter

``` js
obj.foo   
obj.foo = 'new'
```

但是我们为obj添加新属性的时候，却无法触发事件属性的拦截

``` js
obj.bar  = '新属性'
```

原因是一开始obj的foo属性被设成了响应式数据，而bar是后面新增的属性，并没有通过Object.defineProperty设置成响应式数据

## 解决方案

Vue 不允许在已经创建的实例上动态添加新的响应式属性

若想实现数据与视图同步更新，可采取下面三种解决方案：

- Vue.set()
- Object.assign()
- $forcecUpdated()

### Vue.set()

Vue.set( target, propertyName/index, value )

参数

- {Object | Array} target
- {string | number} propertyName/index
- {any} value

返回值：设置的值

### Object.assign()

直接使用Object.assign()添加到对象的新属性不会触发更新

应创建一个新的对象，合并原对象和混入对象的属性

``` js
this.someObject = Object.assign({},this.someObject,{newProperty1:1,newProperty2:2 ...})
```

### $forceUpdate

如果你发现你自己需要在 Vue中做一次强制更新，99.9% 的情况，是你在某个地方做错了事

$forceUpdate迫使Vue 实例重新渲染

PS：仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。

## 小结

- 如果为对象添加少量的新属性，可以直接采用Vue.set()

- 如果需要为新对象添加大量的新属性，则通过Object.assign()创建新对象

- 如果你实在不知道怎么操作时，可采取$forceUpdate()进行强制刷新 (不建议)

::: tip 注意
vue3是用过proxy实现数据响应式的，直接动态添加新属性仍可以实现数据响应式
:::

## 参考文献

- [https://cn.vuejs.org/v2/api/#Vue-set](https://cn.vuejs.org/v2/api/#Vue-set)
- [https://vue3js.cn/docs/zh](https://vue3js.cn/docs/zh)