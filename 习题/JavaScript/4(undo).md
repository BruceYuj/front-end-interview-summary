# 题目
[题目链接](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/235)
> 为什么 for 循环的嵌套顺序会影响性能？

如下图：
![](../../images/200317-problem-120.png)


我们可以分别从语言层面讲和计算机底层（硬件）来讲：

1. 语言层面：
先比较代码 1 和 代码 2。

对于代码 1：

循环层级 | 比较次数 | 自增次数 | 生成 environment record 次（let declaration）
-| -| -|-|
i | 100 | 100 | 100
j | `100*1000` | `100*1000` | `100*1000`
k | `100*1000*10000` | `100*1000*10000` | `100*1000*10000`

对于代码 2：

循环层级 | 比较次数 | 自增次数| 生成 environment record 次（let declaration）
-| -| -|-|
i | 10000 | 10000 | 10000
j | `10000*1000` | `10000*1000` | `10000*1000`
k | `100*1000*10000` | `100*1000*10000` | `10000*1000*100`


也就是说，代码 1 在 循环的第一层和第二层，比较次数、自增次数和产生新 environment record 次数比代码 2 少很多。


2. 底层层面
这里我们先不考虑 JavaScript 在处理 for 循环时遇到 let declaration 产生的 block scope。在 ECMAScript 规定在每次循环时生成新的 environment record。