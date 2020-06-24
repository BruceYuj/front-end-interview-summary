---
title: 理解 parseInt 的细节
autoPrev: README
---  
 
 
## 简介
本文档主要理解 ECMAScript 文档当中的 built-in function *parseInt(string[,radix])*

**需要思考的问题**：
1. *parseInt* 的内部细节是什么？
2. 了解这些细节的目的？
3. 具体该如何使用该 function ？

## 内部细节
我们直接进入 [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/#sec-parseint-string-radix) 文档里面看该 function 的算法实现细节即可（一直强调的一手资料）：
> The parseInt function produces an integer value dictated by interpretation of the contents of the string argument according to the specified radix. Leading white space in string is ignored. If radix is undefined or 0, it is assumed to be 10 except when the number begins with the code unit pairs 0x or 0X, in which case a radix of 16 is assumed. If radix is 16, the number may also optionally begin with the code unit pairs 0x or 0X.

> The parseInt function is the %parseInt% intrinsic object. When the parseInt function is called, the following steps are taken:

（这是引擎内部的算法步骤）
1. Let inputString be ToString(string): 首先调用内部 abstract operation *ToString* 将第一个参数变成字符串。
2. ReturnIfAbrupt(string)：用来判断第一个参数是否是 abrupt completion。这是引擎内部的类型，具体看[completion record](./completion-record.md)
3. Let S be a newly created substring of inputString consisting of the first code unit that is not a StrWhiteSpaceChar and all code units following that code unit. (In other words, remove leading white space.) If inputString does not contain any such code unit, let S be the empty string：这一步对转换后的变量 inputString 进行预处理，去除 leading whitespace，也就是开头的空白符。
4. Let sign be 1：定义符号变量 sign，初始化为 1
5. If S is not empty and the first code unit of S is 0x002D (HYPHEN-MINUS), let sign be −1：判断首位字符是否是负号，如果是，则将 sign 赋值为 -1
6. If S is not empty and the first code unit of S is 0x002B (PLUS SIGN) or 0x002D (HYPHEN-MINUS), remove the first code unit from S：如果首位字符是$+$ 或者 $-$，则移除该符号位。
7. Let R = ToInt32(radix)：将参数 radix 转换成32位整数。而内部操作会将 `undefined` 转换成 0。也就是如果我们对于 radix 什么都不传，则 radix会在这一步被转成 0。ES5才对 `undefined` 这种边界情况作出定义，但是并不是所有浏览器都遵守。因此，保险起见我们都要显示指定 radix。
8. ReturnIfAbrupt(R)：作用和第二步类似。
9. Let stripPrefix be true： stripPrefix 用来标志是否是十六进制。
10. If R ≠ 0, then
    - a. If R < 2 or R > 36, return NaN.
    - b. If R ≠ 16, let stripPrefix be false.
11. Else R = 0,
    - Let R = 10.
12. If stripPrefix is true, then
    - a. If the length of S is at least 2 and the first two code units of S are either "0x" or "0X", remove the first two code units from S and let R = 16：对十六进制进行预处理
13. If S contains a code unit that is not a radix-R digit, let Z be the substring of S consisting of all code units before the first such code unit; otherwise, let Z be S：对字符串进行预处理，定位到一第一个不属于 radix-R（进制能够表达的数字）字符，去除该字符以及所有后面的部分。
14. If Z is empty, return NaN.：处理后的 Z 如果为空，返回 NaN
15. Let mathInt be the mathematical integer value that is represented by Z in radix-R notation, using the letters A-Z and a-z for digits with values 10 through 35. (However, if R is 10 and Z contains more than 20 significant digits, every significant digit after the 20th may be replaced by a 0 digit, at the option of the implementation; and if R is not 2, 4, 8, 10, 16, or 32, then mathInt may be an implementation-dependent approximation to the mathematical integer value that is represented by Z in radix-R notation.): 表示我们使用$[A-Z | a-z]$ 来表示 $[10, 35]$，并且说明如果此时的字符串 Z 超出可以表达的精确精度的话，具体如何近似则看具体浏览器实现。
16. If mathInt = 0, then： 对 正负0的处理
    - a. If sign = −1, return −0.
    - b. Return +0.
17. Let number be the Number value for mathInt.
18. Return sign × number.


**回答问题2：为什么我们需要了解这些细节？**
1. 可以更好的理解 JavaScript 的内部机制
2. 很多时候，我们无法控制程序的输入，大样本环境下小概率的边界事件同样可能发生，了解细节后对于我们定位错误有好处
3. 可以和其他语言进行触类旁通

**回答问题3：我们该如何使用该方法？**
1. 显示的指定 radix，并且确保其合法
2. 考虑大数的精度问题，当超出可以 Integer 可以表示的范围该如何处理
3. 是否对 string 进行预处理，或者知晓非字符串类型被传入方法后导致的后果是什么

### 示例
[MDN, parseInt examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt#Examples)：非常详尽，有上述的各种特例情况的输出