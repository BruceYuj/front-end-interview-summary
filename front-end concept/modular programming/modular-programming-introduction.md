## modular programming introduction
modular programming 是一种软件设计技巧，这种技巧是将整个程序的功能分割成一个个独立的模块，然后每个模块各自干好自己的事。这种技巧的目的和 structured programming（面向结构编程）以及 object-oriented programming（面向对象编程）非常相似，都是为了能够将大型的软件程序分解成一个个更小的部分。这些技巧和思想都是为了开发者能够处理更加复杂的情景和团队合作而出现的。因为通常来讲人能够处理的事物复杂度非常有限，并且人类中的团队合作产生的作用往往比单个力量更大。

很巧的是，这三种思想都是起源于 1960s。

在不同的高级编程语言当中，会有很多不同的术语来表示 module 的概念，并且相同的单词会有不同的含义。下面我们简单举几个例子：
- assembly（C#、F# 等）和 package(Dart、Go、Java 等）同样有 module 的含义
- 比如 Java 和 Python 中都有 package 和 module 的概念，但是其含义是有区别的（尽管都都是为了更好的组织代码）。在 Python 当中，我们知道每一个文件都是一个 module，而 package 是多个 module 的集合。而 Java 中的 package 的作用类似于文件夹，并且将功能相似或相关的 class 和 interface 组织在一起。而 Java 9 中引入的 module 则表示多个 package 的集合。
- 在 web app 开发当中， component 是一个会被经常提及的概念。其同样和 module 具有相似的含义。两者间的区别是 component 是更抽象的概念。

在 2020 年的当下，主流的高级编程语言都开始原生支持 module 的概念。
- 2014年 C++ 引入 module
- 2013年 IOS 7（objective-C）中引入 module
- JavaScript 在 ECMAScript 2015 中引入 module

从 1980s 开始，整个编程世界都处在 OO Programming 的光芒之下（主要是 C++ 和 Java 现象级流行）。以至于 C++ 在 30年之后才原生支持 module。Java 在开始的时候通过 package 的形式来支持 module（在 Java 中最基本的代码组织单元是 class），而 Python 在一开始就同时支持 module 和 object 的概念，并且使用 module 作为最基本的代码组织单元，package 作为更高层次的组织形式。
但是，同样也存在一些编程语言不原生支持 module，比如 C 和 pascal。**这里需要注意的是，不原生支持 module 不代表不可以进行 modular programming，我们可以通过语言 feature 来模拟。**



modular programming 在 1990s 开始就 widespread。在 OO 语言中，和 class 的概念会有重叠。



https://en.wikipedia.org/wiki/Modular_programming

https://v8.dev/features/modules v8 中对于 ES module 的科普

https://zhuanlan.zhihu.com/p/40733281 常见的模块好的实践

https://zhuanlan.zhihu.com/p/22890374 入门的模块化

https://segmentfault.com/a/1190000011081338 

https://zhuanlan.zhihu.com/p/26118022 模块化的历史
https://yuguo.us/weblog/javascript-module-development-history/
https://huangxuan.me/js-module-7day/#/10

https://nodejs.org/dist/latest-v13.x/docs/api/esm.html
