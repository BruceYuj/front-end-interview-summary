**文本更新于 2020年04月17日 19:03:30**
## modular programming introduction
modular programming（模块化编程）是一种非常常用的软件设计技巧（technique），该技巧的思想起源于 1960s，其主要思路是将整个程序的功能分割成一个个独立的模块（module），然后相信每个模块各自干好自己的事。如果运用得当，在实际的软件工程方面中会带来不少的好处：
- 关注点分离(SoC原则)
- 代码可以被更好的复用（如果系统的 module 设计的是健壮的） 
- 降低对开发者的要求。此时不需要单个开发者去开发、维护整个系统，甚至都不需要理解整个系统。只需要让每个成员专注于各自被分配的更小的任务中。（在某种程度上可以改善人月神话中的 Brooks法则展示的问题-向进度落后的项目中添加人手，只会使项目更加落后）。

从代码组织来看，modular programming 、 structured programming（面向过程编程）和object-oriented programming（面向对象编程）的思想非常相似，都是为了能够将大型的软件程序分解成一个个更小的部分。具体到细节中就是模块、子过程和对象之间的关系。这些技巧和思想的出现有利于团队合作，让开发者能够处理更加复杂的情景。通常来讲人能够处理的事物复杂度是非常有限的。
另外，我需要指出的是，这些编程思想并非完全割裂，很多时候它们间的界限是模糊的。

**具体到不同的高级编程语言中，modular programming 的细节有哪些呢？**
1. 不同的高级编程语言会有使用不同的术语来表示 module 的概念，并且在这些语言中相同的单词可能代表着不同的含义。下面我们简单举几个例子：
   - C#/F# 中的 assembly 和 Java/Go/Dart 中的 package同样有 module 的含义
   - Java 和 Python 中都有 package 和 module 的概念，但是其含义是有区别的（尽管都是为了更好地组织代码）。在 Python 当中，每一个文件都是一个 module，而 package 是多个 module 的集合。而 Java 中的 package 的作用类似于文件夹，并且将功能相似或相关的 class 和 interface 组织在一起，Java 9 中引入的 module 则表示多个 package 的集合。

因此，具体到不同的编程语言当中，我们应当对 modular programming 进行更加抽象的理解。

2. 在前端开发过程中，component 也是一个会被经常提及的概念，其概念和 module 是相似的。通常我们会认为 component 是更上层的概念。component 是相对于整个系统（whole system），而 module 是相对于独立的程序（individual program）

3. 在 2020 年的当下，主流的高级编程语言都开始原生支持 module 的概念（这里指的是原生的，而不是通过语言特性所模拟的，毕竟任何一门图灵完备的语言都可以模拟其他语言的特性）。
   - 2014年 C++ 引入 module
   - 2013年 IOS 7（objective-C）中引入 module
   - JavaScript 在 ECMAScript 2015 中引入 module

上面的细节还有很多，这里就不一一细聊了。

**仔细思考的同学可能会有一个问题，modular programming 的思想看起来是很不错的，为什么很多高级语言要很久之后才原生支持 module 的概念呢？**

很显然，第一名的光芒总会比前几名的光芒更亮。从 1980s 开始，随着 C++ 和 Java 相继的现象级流行，整个编程世界都处在 OO Programming 的光芒之下。而 OO programming 的很多概念和 modular programming 会有重叠，大部分 object-oriented 程序都能够很好的组织自己的代码，也就不需要再多出一个 module 的概念了。

另外，有一部分人认为应该区分开 modularity 和 modular programming，其认为 modular programming（解决大量 goto 语句的问题） 与 structured programming 同期发展并且已经被 structured programming 完全吸收。**个人认为，这里历史上的纠纷就无需过多考究了。**

另外需要知道的是到目前为止， C 和 pascal 仍然不原生支持 module。

下面我们开始我们本系列的重点，前端模块化的演化。

1. 蛮荒时代： 1999 - 2007
2. 异军突起： 2009
3. 百花齐放： 2011 - 2013
4. 大一统：2015

1. 我们在分析 module dependency时，会发现所有的 modules 会形成一个 DAG(有向无环图)，这意味着做基础工具时可以使用很多 DAG 的算法。




## reference
[wiki, modular programming](https://en.wikipedia.org/wiki/Modular_programming)

