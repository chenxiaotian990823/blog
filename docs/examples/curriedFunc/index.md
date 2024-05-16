---
title: currying柯里化函数
date: 2021-08-30 11:24:16
tags:
---

# currying 柯里化函数

我们平常写方法，比如写个加法

<code-group>
  <code-group-item title="调用方式(原调用方式)">

  ```js
  this.add(4, 5) //9
  ```

  </code-group-item>

  <code-group-item title="方法定义(原调用方式)">

  ```js
  add(a,b){
      return a + b
  }
  ```

  </code-group-item>
</code-group>

使用 currying 后呢，我们可以写成这样

<code-group>
  <code-group-item title="调用方式(柯里化)">

  ```js
  this.add(4)(5) //9
  ```

  </code-group-item>

  <code-group-item title="方法定义(柯里化)">

  ```js
  add(a){
    return (b)=>{
      return a + b
    }
  }
  ```

  </code-group-item>
</code-group>

这么看上去好像没有必要，但是有时候我们比如封装了一个方法,但是我们有其中一个参数是固定的，比如我们总要算 5+任意数

```js
add(a){
  return (b) =>{
    return a + b
  }
}

let result = add(5)
console.log(result(6))      //11
```

::: tip
注:这样就可以封装一些常用的方法，比如正则表达式这种，总要验证手机号啥的，就可以类似封装
:::
::: tip
这只是简单用法，详细用法可以参考一下 <https://www.jianshu.com/p/2975c25e4d71>
:::
