 
## JavaScript 中模块化的演化
当 Brendan Eich 设计出 JavaScript 的第一个版本时，并不会预见到这门语言在后面的二十多年有怎么样的发展。很显然，JavaScript 重来都不是完美的语言，而其很大的一个缺点就是缺乏 modularity。

在设计之初，JavaScript 中不引入模块化的原因是很显然的-一切来源于需求。最开始，JavaScript 只是作为脚本语言和浏览器进行一些简单的交互，代码的构成都很简单，也就不需要模块化来降低处理的复杂性了。

但是，时间是奇妙的。到2020年为止，JavaScript 已经演变成一个通用性高级编程语言，可以被用来在多种环境中搭建复杂的程序（比如浏览器，手机端，服务器，IoT等等）。而最开始的那种只需要在全局范围内写出所有代码就变得不可维护了。自然而然，模块化需要被引入语言本身。

本文会一步步讲述 JavaScript 历史过程中的对于模块化的探索。

下面是会描述的内容：
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

通常来讲，对于JavaScript 来讲，模块化需要解决下面三个问题：
- code isolation(SoC原则)
- 模块间的依赖关系定义
- script loader，将模块代码加载到执行环境当中

首先，我们
当处理的任务复杂度越来越高， Name Collision 就不可避免了。
很简单的例子是：
```javascript
// file a.js
var isValid = [];

// file b.js
var isValid = {};

```
当我们在一个 HTML 文件中同时引入 `a.js` 和 `b.js` 时，同名的变量会产生冲突。这对于一个较大的项目来讲是非常令人头痛的一件事。

对于 ES5 browser 环境来讲，我们通过 `<script>` 标签来引入 JavaScript 文件，而当我们的项目非常大之后，可能需要引入非常多的 JavaScript 文件。手动去维护引入的 JavaScript 文件的顺序是非常枯燥的。


## **1999 - Directly Defined Dependencies**
直接定义依赖模式是由 Erik Arvidsson 在 1999 年首次提出。后面 Dojo toolkit 在 2004 也实现了该模式：

```javascript
// file greeting.js
dojo.provide("app.greeting");

app.greeting.helloInLang = {
    en: 'Hello world!',
    es: '¡Hola mundo!',
    ru: 'Привет мир!'
};

app.greeting.sayHello = function (lang) {
    return app.greeting.helloInLang[lang];
};

// file hello.js
dojo.provide("app.hello");

dojo.require('app.greeting');

app.hello = function(x) {
    document.write(app.greeting.sayHello('es'));
};
```

这种方式和 CommonJS 非常神似。区别在于直接通过 dojo.provide 和 dojo.require 这种全局方法来定义、引用模块（dojo.js 在全局环境中引入）。这种方式带来的是我们可以在任何文件中定义模块，模块不和文件相关联（CommonJS 以文件作为模块）。

## namespace pattern（2002）
为了解决 name collision，我们可以使用编程惯例，这种方式有点类似于 python 中通过下划线约定私有变量（比如`__init`）。因此我们可以在 variables 和 functions 标识符前面添加一些特殊的前缀。但是这种方式的问题在于如何寻找到这个特殊的前缀呢？

另外一种方式是利用 function 属于一等公民的特性。在库中使用一个 global object 来避免 name collision。global object 中包含 data 和 logic。最先使用该 pattern 的仍然是 Erik Avidsson 在 Bindows 中。随后更多其他的库来使以这种方式来组织代码，比如 Dojo(2005) 和 YUI(2005)

```javascript
// file app.js
var app = {};

// file greeting.js
app.helloInLang = {
    en: 'Hello world!',
    es: '¡Hola mundo!',
    ru: 'Привет мир!'
};

// file hello.js
app.writeHello = function (lang) {
    document.write(app.helloInLang[lang]);
};
```

## the module pattern(2003)
namespace pattern 带来了代码组织的有序性，但是很明显，这种模式并不够彻底，比如逻辑和数据的分离。

module pattern 则是尝试解决该问题的先驱。它的要点是通过 closure 来封装 data 和 logic，外界只能通过有限的方式访问数据：
```javascript
var greeting = (function () {
    var module = {}; // 存放可以被外部访问的

    var helloInLang = { // 表示不可以被外部直接访问
        en: 'Hello world!',
        es: '¡Hola mundo!',
        ru: 'Привет мир!'
    };

    module.getHello = function (lang) {
        return helloInLang[lang];
    };

    module.writeHello = function (lang) {
        document.write(module.getHello(lang))
    };
    
    return module;
}());
```

这里使用了 IIFE（immediately invoked function）来返回一个 module object。这种方式可以确保在外界无法直接访问 module 中的数据。这给我们的代码带来了原子性，并且可以被其他脚本使用而不用担心 name collision。

这种方式，首先由 richard cornford 在 2003 年使用，然后由 Douglas crockford 在其 2008 年著名的书《JavaScript: the Good Parts》 中被广为流传。其实在 2005年， Yahoo 的 YUI framework 已经采用这种方式（YUI 也是 douglas crockford 领导的）。

## template defined Dependencies(2006)
