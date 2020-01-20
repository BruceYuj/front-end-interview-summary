## JavaScript 中的继承与原型链
JavaScript 中的继承对于熟练使用 class-based 的编程语言的开发者来讲是困惑的。JavaScript 是动态的，内部并没有提供 `class` 的实现。尽管在 **ES2015** 中引入了 `class` 关键字，但其实只是一种 syntax sugar, 内部的 prototype-based 的本质并没有发生改变。

那为什么要提供 `class` 的 syntax sugar?
可能有下面几方面的原因：
- 扩大 `JavaScript` 的生态。希望更多其他语言的从业者加入到 `JavaScript` 的生态中来，而引入 `class` 会减少加入者入门的难度
- `class` 的写法看起来更加的抽象一些，结构看起来更明确一些。也就是更偏向于人类一些。

当谈到 inheritance 的时候，JavaScript 只有一种结构：objects。每一个 object 都有一个 private property 指向另外一个 object（被称为它的 prototype)。而这个 prototype object 也会有自己的 prototype， 这样层层向上直到 `null`。 这样就形成了一个单链表 - 原型链。

被认为 JavaScript 的缺点之一的 prototypal inheritance 其实是一个更强大的模型，比如我们可以等价的用 prototypal model 来实现 classic model。

### inheriting properties
JavaScript 的 object 可以类比于动态的包裹， 包裹里面装的都是 properties。其中就包括一个指向 prototype object 的 property。
那么当我们尝试访问 object 的一个 property 的时候，会发生什么呢？
解释器会沿着 prototype chain 寻找匹配的名称，如果找到就返回或者到达链表的尾部。

来看看实际 ECMAScript 标准中关于 prototype 的内容：
ECMAScript 标准使用 `someObject.[[Prototype]]` 来表示指向 `someObject` 的 prototype。而从 ECMAscript 2015 开始，我们可以通过 `Object.getPrototypeOf()` 或者 `Object.setPrototypeOf()` 来操作一个 object 的 prototype。 这也等同于操作 非标准的但大部分浏览器已经实现了的 `__proto__`。
```JavaScript
// 代码来源： MDN
// 让我们从一个自身拥有属性 a 和 b 的函数里创建一个对象 o：
let f = function () {
   this.a = 1;
   this.b = 2;
}
/* 这么写也一样
function f() {
  this.a = 1;
  this.b = 2;
}
*/
let o = new f(); // {a: 1, b: 2}

// 在 f 函数的原型上定义属性
f.prototype.b = 3;
f.prototype.c = 4;

// 不要在 f 函数的原型上直接定义 f.prototype = {b:3,c:4}; 这样会直接打破原型链
// o.[[Prototype]] 有属性 b 和 c
//  （其实就是 o.__proto__ 或者 o.constructor.prototype)
// o.[[Prototype]].[[Prototype]] 是 Object.prototype.
// 最后 o.[[Prototype]].[[Prototype]].[[Prototype]] 是 null
// 这就是原型链的末尾，即 null，
// 根据定义，null 就是没有 [[Prototype]]。

// 综上，整个原型链如下：
// {a:1, b:2} ---> {b:3, c:4} ---> Object.prototype---> null

console.log(o.a); // 1
// a 是 o 的自身属性吗？是的，该属性的值为 1

console.log(o.b); // 2
// b 是 o 的自身属性吗？是的，该属性的值为 2
// 原型上也有一个'b'属性，但是它不会被访问到。
// 这种情况被称为"属性遮蔽 (property shadowing)"

console.log(o.c); // 4
// c 是 o 的自身属性吗？不是，那看看它的原型上有没有
// c 是 o.[[Prototype]] 的属性吗？是的，该属性的值为 4

console.log(o.d); // undefined
// d 是 o 的自身属性吗？不是，那看看它的原型上有没有
// d 是 o.[[Prototype]] 的属性吗？不是，那看看它的原型上有没有
// o.[[Prototype]].[[Prototype]] 为 null，停止搜索
// 找不到 d 属性，返回 undefined
```

### inherting methods
JavaScript 中不存在 class-based 的语言中的 methods. 在 JavaScript 中， function 可以直接成为一个 object 的 property。 继承下来的 function 的表现和其他 property 也没有什么区别，比如 property shadowing。

唯一需要注意的是，作为 property 的 function 中 `this` 究竟指向的是什么？

### 实际使用中的细节
在浏览器环境中， `Object` 、 `Function` 、 `Object.prototype` 、 `Function.prototype` 等之间究竟存在着怎样的关系？

![prototype-chain](../images/200115-JavaScript-prototype-chain.jpg)

### 创建 object 的不同方式以及产生的 prototype chain
1. 使用语法结构来创建 object
```javascript
var o = {a: 1};

// o ---> Object.prototype ---> null

var arr = [1,2];
// arr ---> Array.prototype ---> Object.prototype ---> null

function f(){}
// f ---> Function.prototype ---> Object.prototype ---> null
```

2. 通过 constructor 来创建 object - 在 JavaScript 当中一个 constructor 指的是我们通过 new operator 调用的一个 function。
```javascript
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v) {
    this.vertices.push(v);
  }
};

var g = new Graph();

// g ---> Graph.prototype ---> Object.prototype ---> null
```

3. 通过 `Object.create()` 方法创建


## 问题
JavaScript 动态在哪里？
引入 class 的 优缺点？