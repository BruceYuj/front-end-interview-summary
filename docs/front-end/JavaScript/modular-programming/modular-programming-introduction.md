**文本更新于 2020年04月21日 18:11:50**
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


## 前端模块化的介绍
>**当命运石之门打开之日起，就注定了 JavaScript 不平凡的一生。**

当 Brendan Eich 设计出 JavaScript 的第一个版本时，并不会预见到这门语言在后面的二十多年有怎么样的发展。很显然，JavaScript 从来都不是完美的语言，而其很大的一个缺点就是缺乏 modularity。

在设计之初，JavaScript 不引入模块化的原因是很显然的-一切来源于需求。最开始，JavaScript 只是作为脚本语言和浏览器进行一些简单的交互，代码的构成都很简单，也就不需要模块化来降低处理的复杂性了。

但是，命运是奇妙的。到2020年为止，JavaScript 已经演变成一个通用型高级编程语言，可以被用来在多种环境中搭建复杂的程序（比如浏览器，手机端，服务器，IoT等等）。而最开始的那种只需要在全局范围内写出所有代码的方式就变得不可维护了。自然而然，模块化需要被引入语言本身。

**那么为什么说，复杂的 JavaScript 项目没有模块化会不可维护？**
其实原因有很多，比如：
1. 处理 name collision（命名冲突）。

对于任何一门编程语言来讲，命名都不是一件简单的事，保证名字的语义化和可维护是重要的原则。CSS 中出现的各种命名规范就是一个很好的例子。
而对于 JavaScript 来讲，一旦项目变得复杂，全局作用域下的命名就很容易发生冲突，比如下面的代码，当我们在一个 HTML 文件中同时引入 `a.js` 和 `b.js` 时，同名的变量会产生冲突：
```javascript
// file a.js
var isValid = [];

// file b.js
var isValid = {};

```

2. browser 环境中的 JavaScript 文件顺序。

对于 ES5 browser 环境来讲，我们通过 `<script>` 标签来引入 JavaScript 文件，而当我们的项目非常大之后，可能需要引入非常多的 JavaScript 文件。手动去维护引入的 JavaScript 文件的顺序是非常枯燥的。

其实，从 JavaScript 语言诞生后没几年，JavaScript 开发社区就开始了各自的模块化方案探索，这些方案各自有各自的优缺点。而我将 1999 - 2015 这17年分成了 4 个阶段：
1. 刀耕火种： 1999 - 2007
2. 异军突起： 2009
3. 平稳发展： 2011 - 2013
4. 大一统：2015

主要涉及到以下几种模块化方案：
- Directly Defined Dependencies（直接定义依赖模式）
- Namespace
- Module
- Detached Dependency Definitions
- Sandbox
- Dependency Injection
- CommonJS
- AMD
- UMD
- Labeled Modules
- YModules
- ES2015 Modules

在最后，我需要强调的是，对于JavaScript 来讲，模块化需要解决下面三个问题：
- code isolation(SoC原则) - module 中的代码不应该直接被泄漏到模块之外
- 模块间的依赖关系定义 - 模块间的关系如何定义
- script loader - 如何将模块代码加载到执行环境当中

另外，有的模块化系统也会实现一种额外的特性 - sandbox and inversion of control(沙盒和控制反转)，其允许在不同的 sandbox 当中加载 module dependency graph。

## reference
[wiki, modular programming](https://en.wikipedia.org/wiki/Modular_programming)

