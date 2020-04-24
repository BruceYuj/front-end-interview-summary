**文本更新于 2020年04月24日 18:38:51**

DIP: dependency inversion principle，中文叫做依赖反转原则，属于 OO programmming 领域当中一种特定的解耦方式。传统的开发是高层次模块依赖于低层次的模块的细节，运用该原则之后，依赖关系会被翻转，从而使低层次模块依赖于高层次的模块。
该原则具体体现在两点：
- 高层次(high-level) module 不应该依赖于 low-level modules。两者都应该依赖于 abstractions(比如  interface)
- abstractions 不应该依赖于细节，细节（具体的实现）应该依赖于 abstractions

通过 high-level 和 low-level objects 依赖于同样的 abstraction，这种设计原则反转了思考 OO programming的方式。

principles 是思考的方式，而 patterns 通常是用来解决问题的方法， coding patterns 可能只是语言所缺少的特性。


## spring 中的 IoC 和 DI

## JavaScript 中的 DI 和 IoC
https://medium.com/@viktor.kukurba/dependency-injection-and-inversion-of-control-in-javascript-303e07e7f43f

https://www.zhihu.com/question/32108444
https://www.cnblogs.com/xdp-gacl/p/4249939.html
https://zhuanlan.zhihu.com/p/61018434
## reference
1. [DIP, wiki](https://en.wikipedia.org/wiki/Dependency_inversion_principle)