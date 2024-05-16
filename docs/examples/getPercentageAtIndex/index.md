---
title: 计算索引处百分比
---

# 计算索引处百分比

::: tip
用于计算列表中特定索引处的值在列表总和中的百分比，根据给定的精度。它首先计算列表的总和，然后将列表中每个值转换为百分比形式，并将其舍入到给定的精度。接着，它通过将剩余的百分比分配给舍入后的值来确保总和达到 100%。这个算法主要使用了除法和取余操作
:::

<code-group>

<code-group-item title="封装方法">

```js
//valueList要计算的数组
//idx要计算数组中值的下表
//precision百分比保留几位小数
getPercentValue(valueList, idx, precision) {
    // 判断是否为空
    if (!valueList[idx]) {
        return 0;
    }
    // 求和
    let sum = valueList.reduce(function(acc, val) {
        return acc + (isNaN(val) ? 0 : val);
    }, 0);
    if (sum === 0) {
        return 0;
    }
    // 10的2次幂是100，用于计算精度。
    let digits = Math.pow(10, precision);
    // 扩大比例100，
    let votesPerQuota = valueList.map(function(val) {
        return (isNaN(val) ? 0 : val) / sum * digits * 100;
    });
    // 总数，扩大比例意味的总数要扩大
    let targetSeats = digits * 100;
    // 再向下取值，组成数组
    let seats = votesPerQuota.map(function(votes) {
        return Math.floor(votes);
    });
    // 再新计算合计，用于判断与总数量是否相同，相同则占比会100%
    let currentSum = seats.reduce(function(acc, val) {
        return acc + val;
    }, 0);
    // 余数部分的数组：原先数组减去向下取值的数组，得到余数部分的数组
    let remainder = votesPerQuota.map(function(votes, idx) {
        return votes - seats[idx];
    });
    // 给最大最大的余额加1，凑个占比100%；
    while (currentSum < targetSeats) {
        //  找到下一个最大的余额，给其加1
        let max = Number.NEGATIVE_INFINITY;
        let maxId = null;
        for (let i = 0, len = remainder.length; i < len; ++i) {
            if (remainder[i] > max) {
                max = remainder[i];
                maxId = i;
            }
        }
        // 对最大项余额加1
        ++seats[maxId];
        // 已经增加最大余数加1，则下次判断就可以不需要再判断这个余额数。
        remainder[maxId] = 0;
        // 总的也要加1，为了判断是否总数是否相同，跳出循环。
        ++currentSum;
    }
    // 这时候的seats就会总数占比会100%
    return seats[idx] / digits;
}
```

</code-group-item>

<code-group-item title="调用方式">

```js
let arr = [1, 2, 3, 4]
let firper = getPercentValue(arr, 0, 2) //求数组元素1在数组arr中的占比，保留两位小数
```

</code-group-item>
</code-group>
