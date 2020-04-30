**文本更新于 2020年04月30日 18:32:08**

## event-driven programming
参考 [wiki, reference](https://en.wikipedia.org/wiki/Event-driven_programming)

中文为事件驱动编程，属于编程范式的一种。这种编程范式在 graphical user interfaces 和 web applications 处于领导的地位（因为这类应用和用户的交互是根本）。

在 event-driven 应用当中，通常会有一个 main loop 来监听 events，在 events 被触发时触发 callback function。在嵌入式系统，可能会使用 hardware interrupt 替代 main loop。

event-driven 开发方式可以用在任何的编程语言当中，但是对于提供 high-level abstraction(比如 await 和 closures) 的语言来讲，实现起来更加容易。

## aysnc/await
参考 [wiki, reference](https://en.wikipedia.org/wiki/Async/await)

在编程领域中， aysnc/await pattern 属于编程语言提供的语法特性，其允许我们以同步的方式组织异步的、非阻塞的方法。在语义上来讲，和 coroutine 的概念相关，并且通过 promise或者类似的 data structure 来实现。这种语法模式在很多的编程语言中都有，比如 JavaScript ES2017，Python 3.5, Dart, Kotlin 1.1

## Asynchronous I/O(待补充)
参考 [wiki, reference](https://en.wikipedia.org/wiki/Asynchronous_I/O#Polling)

## coroutine
参考 
- [wiki, coroutine](https://en.wikipedia.org/wiki/Coroutine)
- [zhihu lua](https://zhuanlan.zhihu.com/p/25513336)

coroutine，中文为协程。其属于 computer program components, 一般化了 non-preemptive multitasking（非抢占式多任务）的 subroutines。coroutine 允许执行被挂起（suspend）或恢复(resume)。coroutine 非常适合去实现一些 program component，比如 cooperative task, exceptions, event loops, iterators, infinite lists, pipes。

该 term 来源于 1958 年，Donald Knuth, Melvin Conway。

**coroutine 和 subroutine 的对比**

subroutine 属于 coroutine 的特例。当 sburoutine 被调用后，执行从 start 处开始，一旦该 subroutine 退出，表示其已经被完成了。 一个 subroutine 的 instance 只会返回一次，并且在调用之间不保持状态。而对于 coroutine 来讲，coroutine 可以通过调用其他的 coroutine 而退出，并且可以在未来的某个时间点返回最初触发的地方，因此，每个 coroutine instance 会保存状态。在 coroutine 之间的触发来讲，术语上通常称其为 yielding。

任何 subroutine 可以被转换成不调用 yeild 的 coroutine。
常见的 coroutine 的例子是, consumer-producer 例子：
```
var q := new queue

coroutine produce
    loop
        while q is not full
            create some new items
            add the items to q
        yield to consume

coroutine consume
    loop
        while q is not empty
            remove some items from q
            use the items
        yield to produce
```

**和 threads 的比对**

coroutines和 threads 非常相似，但是 coroutines 是 cooperatively multitasked ，而 thread 是典型的  preemptively mutitasked。这表示 coroutiene 提供 concurrency 而不是 paralleelism。 使用 coroutine 的好处在于他可能被使用在 hard-realtime context(coroutine 之间的切换不需要包含 system calls 或者 blocking  calls)，也不需要 synchronisation primitives(同步原语)，比如 mutexes(互斥锁),semaphores（信号量）来保护 critical sections，也不需要操作系统的支持。

**和 generator 的比对**
generator 也被称为 semicoroutines, generator 也能够 yield 很多次，执行挂起，重新恢复。两者之间的区别在 coroutine 能够控制在 yield 之后立刻被执行的地方，而 generators 需要把 控制转移给 generator caller。这也是为什么，generator 通常被用来简化 iterators。

## cooperative multitasking / preemption
参考 [wiki, preemption](https://en.wikipedia.org/wiki/Preemption_(computing)#PREEMPTIVE)

cooperative multitasking: operating system 不会主动切换上下文，而是process 自愿 yield control 或者 idel / logically blocked。

## dining philosophers problem
参考 [wiki, reference](https://en.wikipedia.org/wiki/Dining_philosophers_problem)

## futures and promises
参考 [wiki, reference](https://en.wikipedia.org/wiki/Futures_and_promises)

## Boilerplate code
参考 [wiki, reference](https://en.wikipedia.org/wiki/Boilerplate_code)

## fiber
参考 [wiki, fiber(CS)](https://en.wikipedia.org/wiki/Fiber_(computer_science))

在 CS 领域， fiber 是一种轻量级的tread。

## message passing
参考 [wiki, reference](https://en.wikipedia.org/wiki/Message_passing)


