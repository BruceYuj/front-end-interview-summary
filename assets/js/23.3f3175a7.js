(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{382:function(t,s,a){t.exports=a.p+"assets/img/200115-JavaScript-prototype-chain.e4815bc5.jpg"},480:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"javascript-中的继承与原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript-中的继承与原型链"}},[t._v("#")]),t._v(" JavaScript 中的继承与原型链")]),t._v(" "),n("p",[t._v("JavaScript 中的继承对于熟练使用 class-based 的编程语言的开发者来讲是困惑的。JavaScript 是动态的，内部并没有提供 "),n("code",[t._v("class")]),t._v(" 的实现。尽管在 "),n("strong",[t._v("ES2015")]),t._v(" 中引入了 "),n("code",[t._v("class")]),t._v(" 关键字，但其实只是一种 syntax sugar, 内部的 prototype-based 的本质并没有发生改变。")]),t._v(" "),n("p",[t._v("那为什么要提供 "),n("code",[t._v("class")]),t._v(" 的 syntax sugar?\n可能有下面几方面的原因：")]),t._v(" "),n("ul",[n("li",[t._v("扩大 "),n("code",[t._v("JavaScript")]),t._v(" 的生态。希望更多其他语言的从业者加入到 "),n("code",[t._v("JavaScript")]),t._v(" 的生态中来，而引入 "),n("code",[t._v("class")]),t._v(" 会减少加入者入门的难度")]),t._v(" "),n("li",[n("code",[t._v("class")]),t._v(" 的写法看起来更加的抽象一些，结构看起来更明确一些。也就是更偏向于人类一些。")])]),t._v(" "),n("p",[t._v("当谈到 inheritance 的时候，JavaScript 只有一种结构：objects。每一个 object 都有一个 private property 指向另外一个 object（被称为它的 prototype)。而这个 prototype object 也会有自己的 prototype， 这样层层向上直到 "),n("code",[t._v("null")]),t._v("。 这样就形成了一个单链表 - 原型链。")]),t._v(" "),n("p",[t._v("被认为 JavaScript 的缺点之一的 prototypal inheritance 其实是一个更强大的模型，比如我们可以等价的用 prototypal model 来实现 classic model。")]),t._v(" "),n("h3",{attrs:{id:"inheriting-properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inheriting-properties"}},[t._v("#")]),t._v(" inheriting properties")]),t._v(" "),n("p",[t._v("JavaScript 的 object 可以类比于动态的包裹， 包裹里面装的都是 properties。其中就包括一个指向 prototype object 的 property。\n那么当我们尝试访问 object 的一个 property 的时候，会发生什么呢？\n解释器会沿着 prototype chain 寻找匹配的名称，如果找到就返回或者到达链表的尾部。")]),t._v(" "),n("p",[t._v("来看看实际 ECMAScript 标准中关于 prototype 的内容：\nECMAScript 标准使用 "),n("code",[t._v("someObject.[[Prototype]]")]),t._v(" 来表示指向 "),n("code",[t._v("someObject")]),t._v(" 的 prototype。而从 ECMAscript 2015 开始，我们可以通过 "),n("code",[t._v("Object.getPrototypeOf()")]),t._v(" 或者 "),n("code",[t._v("Object.setPrototypeOf()")]),t._v(" 来操作一个 object 的 prototype。 这也等同于操作 非标准的但大部分浏览器已经实现了的 "),n("code",[t._v("__proto__")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码来源： MDN")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 让我们从一个自身拥有属性 a 和 b 的函数里创建一个对象 o：")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("f")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 这么写也一样\nfunction f() {\n  this.a = 1;\n  this.b = 2;\n}\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" o "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {a: 1, b: 2}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 f 函数的原型上定义属性")]),t._v("\nf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不要在 f 函数的原型上直接定义 f.prototype = {b:3,c:4}; 这样会直接打破原型链")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o.[[Prototype]] 有属性 b 和 c")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  （其实就是 o.__proto__ 或者 o.constructor.prototype)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o.[[Prototype]].[[Prototype]] 是 Object.prototype.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后 o.[[Prototype]].[[Prototype]].[[Prototype]] 是 null")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这就是原型链的末尾，即 null，")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据定义，null 就是没有 [[Prototype]]。")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 综上，整个原型链如下：")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {a:1, b:2} ---\x3e {b:3, c:4} ---\x3e Object.prototype---\x3e null")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a 是 o 的自身属性吗？是的，该属性的值为 1")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b 是 o 的自身属性吗？是的，该属性的值为 2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原型上也有一个'b'属性，但是它不会被访问到。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 这种情况被称为"属性遮蔽 (property shadowing)"')]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// c 是 o 的自身属性吗？不是，那看看它的原型上有没有")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// c 是 o.[[Prototype]] 的属性吗？是的，该属性的值为 4")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// d 是 o 的自身属性吗？不是，那看看它的原型上有没有")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// d 是 o.[[Prototype]] 的属性吗？不是，那看看它的原型上有没有")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o.[[Prototype]].[[Prototype]] 为 null，停止搜索")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找不到 d 属性，返回 undefined")]),t._v("\n")])])]),n("h3",{attrs:{id:"inherting-methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inherting-methods"}},[t._v("#")]),t._v(" inherting methods")]),t._v(" "),n("p",[t._v("JavaScript 中不存在 class-based 的语言中的 methods. 在 JavaScript 中， function 可以直接成为一个 object 的 property。 继承下来的 function 的表现和其他 property 也没有什么区别，比如 property shadowing。")]),t._v(" "),n("p",[t._v("唯一需要注意的是，作为 property 的 function 中 "),n("code",[t._v("this")]),t._v(" 究竟指向的是什么？")]),t._v(" "),n("h3",{attrs:{id:"实际使用中的细节"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实际使用中的细节"}},[t._v("#")]),t._v(" 实际使用中的细节")]),t._v(" "),n("p",[t._v("在浏览器环境中， "),n("code",[t._v("Object")]),t._v(" 、 "),n("code",[t._v("Function")]),t._v(" 、 "),n("code",[t._v("Object.prototype")]),t._v(" 、 "),n("code",[t._v("Function.prototype")]),t._v(" 等之间究竟存在着怎样的关系？")]),t._v(" "),n("p",[n("img",{attrs:{src:a(382),alt:"prototype-chain"}})]),t._v(" "),n("h3",{attrs:{id:"创建-object-的不同方式以及产生的-prototype-chain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-object-的不同方式以及产生的-prototype-chain"}},[t._v("#")]),t._v(" 创建 object 的不同方式以及产生的 prototype chain")]),t._v(" "),n("ol",[n("li",[t._v("使用语法结构来创建 object")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o ---\x3e Object.prototype ---\x3e null")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// arr ---\x3e Array.prototype ---\x3e Object.prototype ---\x3e null")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f ---\x3e Function.prototype ---\x3e Object.prototype ---\x3e null")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("通过 constructor 来创建 object - 在 JavaScript 当中一个 constructor 指的是我们通过 new operator 调用的一个 function。")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Graph")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertices "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edges "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Graph")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("addVertex")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" g "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Graph")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// g ---\x3e Graph.prototype ---\x3e Object.prototype ---\x3e null")]),t._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("通过 "),n("code",[t._v("Object.create()")]),t._v(" 方法创建")])]),t._v(" "),n("h2",{attrs:{id:"问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),n("p",[t._v("JavaScript 动态在哪里？\n引入 class 的 优缺点？")])])}),[],!1,null,null,null);s.default=e.exports}}]);