 
## modular programming introduction
modular programming（模块化编程）是一种软件设计技巧，这种技巧的思想起源于 1960s。其主要思路是将整个程序的功能分割成一个个独立的模块，然后每个模块各自干好自己的事。很明显，这种技巧在软件工程方面可以带来不少的好处：
- separation of concerns(SoC原则)
- 代码可以被更好的复用（如果系统的 module 设计的是健壮的）
- 降低对开发者的要求。因为不需要开发者去开发维护整个系统，甚至都不需要理解整个系统。并且可以让每个成员能够专注于各自被分配的更小的任务。（在某种程度上可以改善人月神话中的 Brooks法则展示的问题-向进度落后的项目中添加人手，只会使项目更加落后）。

modular programming 和 structured programming（面向结构编程）以及 object-oriented programming（面向对象编程）非常相似，都是为了能够将大型的软件程序分解成一个个更小的部分。这些技巧和思想的出现希望开发者能够处理更加复杂的情景并且能够利用团队的力量，因为通常来讲人能够处理的事物复杂度非常有限，并且人类中的团队合作产生的作用往往比单个力量更大。

**具体到高级编程语言中，modular programming 的细节有哪些呢？**
1. 在不同的高级编程语言当中，会有很多不同的术语来表示 module 的概念，并且相同的单词可能代表着不同的含义。下面我们简单举几个例子：
   - assembly（C#、F# 等）和 package(Dart、Go、Java 等）同样有 module 的含义
   - Java 和 Python 中都有 package 和 module 的概念，但是其含义是有区别的（尽管都是为了更好地组织代码）。在 Python 当中，每一个文件都是一个 module，而 package 是多个 module 的集合。而 Java 中的 package 的作用类似于文件夹，并且将功能相似或相关的 class 和 interface 组织在一起，Java 9 中引入的 module 则表示多个 package 的集合。

2. 在前端开发过程中，component 也是一个会被经常提及的概念。在我看来，其作用和 module 是相似的，两者间的区别在于 component 是更上层的概念。

3. 在 2020 年的当下，主流的高级编程语言都开始原生支持 module 的概念（这里指的是原生的，而不是通过语言特性所模拟的，毕竟任何一门图灵完备的语言都可以模拟其他语言的特性）。
   - 2014年 C++ 引入 module
   - 2013年 IOS 7（objective-C）中引入 module
   - JavaScript 在 ECMAScript 2015 中引入 module

modular programming 的思想看起来是很不错的，为什么很多高级语言要很久之后才原生支持 module 的概念呢？

这是因为从 1980s 开始，C++ 和 Java 相继的现象级流行，整个编程世界都处在 OO Programming 的光芒之下。而 OO programming 的很多概念和 modular programming 会有重叠。

4. 到目前为止， C 和 pascal 仍然不原生支持 module。

5. 我们在分析 module dependency时，会发现所有的 modules 会形成一个 DAG(有向无环图)，这意味着做基础工具时可以使用很多 DAG 的算法。




## reference
[wiki, modular programming](https://en.wikipedia.org/wiki/Modular_programming)

