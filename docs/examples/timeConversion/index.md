---
title: 时间转换
---

# 时间转换

首先获取当前时间

``` js
let date = new Date()
console.log(date)       //Fri Sep 03 2021 14:29:27 GMT+0800 (中国标准时间)
```

**<font color=#FF8C00 size=5>简单获取</font>**  

根据世界时，把 Date 对象转换为字符串。

``` js
console.log(date.toUTCString())  //Fri, 03 Sep 2021 06:31:56 GMT
```

根据本地时间格式，把 Date 对象转换为字符串。 

``` js
console.log(date.toLocaleString())      //2021/9/3下午2:33:37
```

根据本地时间格式，把 Date 对象的时间部分转换为字符串。toLocaleDateString() 根据本地时间格式，把 Date 对象的日期部分转换为字符串。 

``` js
console.log(date.toLocaleTimeString())      //下午2:33:55
```

获取当天是属于当前月份的第几天(1-31)

``` js
console.log(date.getDate())      //3---因为是9月3日测试的
```

获取当天属于当前周的第几天

``` js
console.log(date.getDay())      //5----，因为测试的时间是周五
```

获取当前月份

``` js
console.log(date.getMonth())        //8---虽然是9月份，但是获取到是8
```

获取当前年份
``` js
console.log(date.getFullYear())         //2021
```

获取当前小时

``` js
console.log(date.getHours())            //14--测试时间为14:46
```

获取当前分钟

``` js
console.log(date.getMinutes())          //46--测试时间为14:46
```

获取当前秒

``` js
console.log(date.getSeconds())            //14
```

获取当前毫秒数

``` js
console.log(date.getMilliseconds())         //842
```

获取从1970年1月1日至今的毫秒数

``` js
console.log(date.getTime())                 //1630651751828
```


<font color=#FF8C00 size=5>中国标准时间转为北京时间</font>

<code-group>
  <code-group-item title="封装方法">

  ``` js
  GMTToStr(time) {
      let date = new Date(time)
      let month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
      let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
      let hour = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
      let minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
      let seconds = date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`
      let Str = date.getFullYear() + '-' +
          month + '-' +
          day + ' ' +
          hour + ':' +
          minutes + ':' +
          seconds
      return Str
  },
  ```
  </code-group-item>

  <code-group-item title="调用方式">

  ``` js
  let date = new Date()  //Fri Sep 03 2021 15:03:20 GMT+0800 (中国标准时间)
  GMTToStr(date)          //2021-09-03 15:03:20
  ```
  </code-group-item>
</code-group>

<font color=#FF8C00 size=5>格林尼治时间和北京时间的相互转化</font>

<code-group>
  <code-group-item title="北京时间转为格林尼治时间">

  ``` js
  let date = new Date()   //Fri Sep 03 2021 15:15:45 GMT+0800 (中国标准时间)
  bjToGreenich(date)      //Fri Sep 03 2021 07:15:45 GMT+0800 (中国标准时间)
  GMTToStr(bjToGreenich(date))    //2021-09-03 07:15:45

  bjToGreenich(time) {
      return new Date(time.getTime() - 8*3600*1000)
  },
  ```
  </code-group-item>

  <code-group-item title="格林尼治时间转为北京时间">

  ``` js
  let date = new Date()   //Fri Sep 03 2021 15:22:11 GMT+0800 (中国标准时间)
  greenichToBj(date)      //Fri Sep 03 2021 23:22:11 GMT+0800 (中国标准时间)
  GMTToStr(greenichToBj(date))    //2021-09-03 23:22:11

  greenichToBj(time){
      return new Date(time.getTime + 8*3600*1000)
  },
  ```
  </code-group-item>
</code-group>




