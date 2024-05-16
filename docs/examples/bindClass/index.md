---
tltle: class的动态绑定
---

# class 的动态绑定

## 对象方法

最简单的绑定（这里的 active 加不加单引号都可以，以下也一样都能渲染）

```js
:class="{ 'active': isActive }"
```

判断是否绑定一个 active

```js
:class="{'active':isActive==-1}"
//或者
:class="{'active':isActive==index}"
```

绑定并判断多个

```js
//第一种（用逗号隔开）
:class="{ 'active': isActive, 'sort': isSort }"

//第二种（放在data里面）
//也可以把后面绑定的对象写在一个变量放在data里面，可以变成下面这样
:class="classObject"
data() {
    return {
        classObject:{ active: true, sort:false }
    }
}

//第三种（使用computed属性）
:class="classObject"
data() {
    return {
        isActive: true,
        isSort: false
    }
},
computed: {
    classObject: function () {
        return {
            active: this.isActive,
            sort:this.isSort
        }
    }
}
```

## 数组方法

单纯数组

```js
:class="[isActive,isSort]"
data() {
    return{
        isActive:'active',
        isSort:'sort'
    }
}
```

## 数组与三元运算符结合判断选择需要的 class

> （注意：三元运算符后面的“：”两边的 class 需要加上单引号，否则不能正确渲染）

```js
:class="[isActive?'active':'']"
```

或者

```js
:class="[isActive==1?'active':'']"
```

或者

```js
:class="[isActive==index?'active':'']"
```

或者

```js
:class="[isActive==index?'active':'otherActiveClass']"
```

## 数组对象结合动态判断

> 前面这个 active 在对象里面可以不加单引号，后面这个 sort 要加单引号

```js
:class="[{ active: isActive }, 'sort']"
```

或者

```js
:class="[{ active: isActive==1 }, 'sort']"
```

或者

```js
:class="[{ active: isActive==index }, 'sort']"
```

举个常用的例子

```html
<template>
  <div
    :class="['timeSelectListBtn',{active: item.index == timeSelectList.active}]"
    @click="timeSelectItem(item.index)"
    v-for="(item,index) in timeSelectList.timeBtn"
    :key="index"
  >
    {{item.text}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //定义一个列表，然后通过active来判断选中的是哪个
        timeSelectList: {
          active: 2,
          timeBtn: [
            {
              index: 1,
              text: "近7天",
            },
            {
              index: 2,
              text: "近30天",
            },
            {
              index: 3,
              text: "近半年",
            },
            {
              index: 4,
              text: "近一年",
            },
            {
              index: 5,
              text: "自定义",
            },
          ],
        },
      }
    },
    methods: {
      timeSelectItem(e) {
        this.timeSelectList.active = e
      },
    },
  }
</script>

<style lang="less" scoped>
  .timeSelectListBtn {
    //写普通的样式
  }
  .timeSelectListBtn.active {
    //写一些被选中的样式
  }
</style>
```
