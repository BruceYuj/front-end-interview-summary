---
title: 算法面试套路之 - 大整数运算
autoPrev: 2-binary-search-template
---

## 前言
总所周知，很多编程语言喜欢用有限的位数来表示整数，这也就通常表示着我们申请的整型的大小是有限的。

比如在 JavaScript 中，最大安全整数范围是 $[-2^53, 2^53]$，具体原因看我另外一篇文章。

在 BigInt 方案没出来之前，我们需要一种方案来帮助我们进行大整数的基本数学运算（加、减、乘、除）。

而通常的方式是使用数组来存储大整数。通常来讲，我们偏向于逆序存储整数的位。这是因为加、乘、减可能得到的结果比原有的操作数都大，这是我们需要增加位数，如果整数高位存储在数组前面，扩展的代价过大，因此，我们采取逆序存储。

而除法虽然没有这类问题，但是我们仍然统一使用一种表达方式，因为可能一个具体的问题里面，会同时包含这四种运算。

### 大整数加法
这里我们限定两个操作数都是正整数（如果里面存在负数，我们可以转换成减法）。

我们先想一下，如果我们直接在脑海里计算 $12314214+123124124$ 心智负担会很大。而回归到我们小学时候学习两位数加法时，列行列式是不是解答过程就会简单很多，而我们的算法就是对行列式的描述。
$a_i...a_2a_1 + b_j...b_2b_1$，则每一位则是: $a_i+b_i+t$

```javascript


```

这是最基本的写法，我们还可以通过 压缩位数的技巧 将数组的体积减低。而压缩位数的技巧就是数组每个元素存储多位，比如 9 位。

```javascript

```

## 高精度除法
同样的是一个大整数 除以一个小整数

```javascript
var readline = require('readline');

var f1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var m = 0;
var a = null;
var b = 0;
f1.on('line', function(data) {
    
    if(m === 0) {
        a = data.trim().split('').map(elem => parseInt(elem)).reverse();
        m++;
    } else {
        b = parseInt(data.trim());
        let ans = div(a, b);
        
        console.log(ans[0].reverse().join(''));
        console.log(ans[1]);
        m = 0;
    }
})


function div(a, b) {
    let t = 0;
    let res = [];
    
    for(let i = a.length-1; i >= 0; i--) {
        t = t*10+a[i];
        
        res.push(parseInt(t/b));
        
        t = t % b;
    }
    
    res.reverse();
    while(res.length > 1 && res[res.length-1] === 0) res.pop();
    
    return [res, t];
      
}
```
