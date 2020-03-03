## 简介
本篇主要通过 ECMAScript 中的 environment record 概念来深入理解 JavaScript 中的困惑与细节。

首先，对自己提出几个疑问：
1. environment record 究竟是什么？
2. 它和 running execution context 有怎样的联系？
3. 对于 JavaScript 使用者来讲，理解这些概念的意义在于哪里？
4. 我们能够应用它吗？

## 细节
ECMAScript 在 2015 版本以后花了整整一个大章节来描述 environment record 究竟是个什么东东（[8. executable code and execution contexts](http://www.ecma-international.org/ecma-262/10.0/index.html#sec-executable-code-and-execution-contexts)）。

我们知道，根据 ECMAScript 文档规范写的代码是一种语法嵌套结构。比如全局环境里面嵌套着代码块和各种方法。方法里面又有着各种语法结构，比如条件语句块、循环语句块等等。这些加起来形成一种嵌套结构，并且在这些结构里面，我们会有指定的 variables 和 functions。通过这些结构才形成一整套完整的程序逻辑。

 lexical environment 就是 ECMAScript 文档内部用来定义 identifier（标识符）和具体的 variables、functions 之间关系的一种规范类型。

**那么哪些语法结构会产生 lexical environment?**
在 ECMAScript 中，下面结构被执行的时候：
- Function Declaration
- Block statement
- Try statement 中的 catch clause

lexical environment 里面包含一个 environment record 和一个指向外部 lexical environment 的 reference。这种指向是多对一的关系，比如一个 Function declaration 当中包含两个内部的 function declaration。

这种结构可以和数据结构中的有向无环图联系起来。

global environment - 是最外层的 lexical environment，该 environment 会和一个 global object 相互关联。

module environment - 包含一个 Module 里面顶层的声明，同时还包含通过import语法显式引入的 bindings。它的外层 environment 就是 global environment。

function environment - 由 ECMAScript function object 触发生成。

Environment record 和具体的 lexical environment 息息相关。在 ECMAScript 规范当中有两种基本 Environment record 值：
- declarative environment record：用来记录 Function declaration ， variable declaration 和 catch clause 这些语法元素，这些语法元素的特点是identifier和 ECMAScript language value 直接关联。
- object environment record：用来记录 withstatement 这种 ECMAScript element，特点是 identifier 和 一些 object 的 property 进行关联。

Declarative environment record 会和程序中对应的作用域相互关联，该 record 会绑定该作用域中的 declarations 和 identifiers。这些 declarations 包括 variable, constant, let, class ,funciton , module ,import。

Object environment records 每一个 object environment record 会和一个 object 关联（我们称这个 object 为 binding object）。object environment record 绑定的 string identifiers 和 binding object 的 property name 一致（但是 binding object 的 非 string 类型 key 的 property name 不被包含），包含 own 和 inherited properties（不需要[[Enumerable]] attribute 为 true）。我们知道， object 可以被动态的 add/delete/modify property，这也就意味着需要同样对 object environment record 执行同样的操作（并且这些 binding 全部是 mutable 的）。

对于 with statement 中的 object environment record，可以将 binding object 作为 隐式的 this 值传递给 function call。

前面我们知道， function environment records 是 declarative environment record 的特例，用来表示一个 function 的 top-level scope。如果该 function 不是 arrow function，会提供 this binding。如果该 function 不是 arrow function，并且 reference super，那么该 function environment record 同样包含被用于执行 super method 的一些状态。
下面是 funciton environment record 的一些额外属性：
- [[ThisValue]]: 指代 function 里面的 this value
- [[ThisBingdStatus]]: 可能是 lexical/initialized/uninitialized 这三种值，如果该值时 lexical， 表示是 arrow function, 并且没有本地的 this value。
- 其他fields






