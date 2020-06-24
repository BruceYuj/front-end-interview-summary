---
title: 为什么 setTimeout 有最小时延 4ms ?
autoPrev: "1-Why-design-MIME"
---

> Why's THE Design(为什么这么设计) 是一系列关于计算机领域程序设计决策的文章(偏向于前端领域)，在该系列会从不同的角度讨论这种设计的优缺点、对具体实现造成的影响。由 Draveness 的《为什么这么设计》 启发

## 前言
在前端技术圈子里面，对于 `setTimeout` 常常有一句结论，“`setTimeout` 的最小设置延迟是 4ms”。
按照 “某乎” 的方式，在回答一个问题之前得 “先看是不是”，“再看对不对或为什么”。

我们先来看第一个问题，**“是不是存在具体的规范来指定了 4ms, 还是只是业界实践的既定事实？”**

熟悉前端的知道，`setTimeout` 并不是由 ECMAScript 维护的，而是由 host environment 提供的，具体遵循的规范有 whatwg 来维护（至于为什么 ECMAScript 不直接提供 setTimeout 的功能，在 2011 年的 esdiscuss 中有了很多讨论，参与者有 Brendan Eich, kyle Simpson 等一帮前辈，后面会简单提到）。
回到 html standard，在 [8.6 Timers-2020/6/23](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout) 中对于 `setTimeout()` 和 `setInterval()` 有详细的描述，我们只看其中的 10-13 行：
>10. If timeout is less than 0, then set timeout to 0.
>11. If nesting level is greater than 5, and timeout is less than 4, then set timeout to 4.
>12. Increment nesting level by one.
>13. Let task's timer nesting level be nesting level.

从上面的规范可以看出来：
1. 如果设置的 `timeout` 小于 0，则设置为 0
2. 如果嵌套的层级超过了 5 层，并且 timeout 小于 4ms，则设置 timeout 为 4ms。

到这里，我们似乎已经找到了 4ms 的出处，并且对于 setTimeout 的最小延迟有了更加精确的定义 - **“需要同时满足嵌套层级超过 5 层，timeout 小于 4ms，才会设置 4ms”**

有人可能会好奇，“什么是 timer nesting level 呢”？（我同样很好奇），具体看下面的代码（具体浏览器源码中是如何来实现 timer nesting level 和 最小时延的，后面会通过 chromium 源码解释）：
```javascript
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          
        }, 0)        
      }, 0)      
    }, 0)
  }, 0)
},0)
```


到这里，看似已经能够解释 `setTimeout` 关于最小时延的设计了。但正如 B 站中经常说的一句话，**“你只看到了第二层，以为我在第一层，但其实我已经到了第五层”**。

我在看到群友提出的这个问题时，第一想法除了寻找规范的出处之外，还有两个其他关注点：
1. 各大浏览器的厂商有没有按照规范实现，如果没有是为什么？
2. 4ms 这个数字究竟是如何确定的？

正如我经常思考的，**“一个貌似简单的设计结果背后一定有其背后的根源，这个根源可能来自于当时的痛点、背景和局限。我们不仅仅需要理解设计，更重要的是理解设计背后的东西-比如各大技术大拿、厂商是背后如何博弈并作出 tradeoff 的，并稳定推进结果的”**

我们先来看各大主流浏览器对 `setTimeout` 延迟各种边界情况的输出(需要注意的是这里不考虑由于单个 event loop 延迟导致 setTimeout 延迟增加，简化到最原始情况，具体就是不考虑单个 loop 中执行时间过长的情况，假设单个 loop 执行时长小于 ms 级别)：
1. Chrome 83.0.4103.106 和 Safari / edge

![](./images/2-why-settimeout-4ms-1.png)

2. Firefox 65.0.1 和 IE 11

![](./iamges/../images/2-why-settimeout-4ms-2.png)

看上图我们会发现，对于 `setTimeout` 设置延迟 `0ms` 和 `1ms`，各大浏览器厂商采取了两种策略。而具体的策略是怎样的的，待我们进入到浏览器源码中来查找：


----
https://bugzilla.mozilla.org/show_bug.cgi?id=686201
https://javascript.info/settimeout-setinterval
https://bugs.webkit.org/show_bug.cgi?id=67501
https://esdiscuss.org/topic/bringing-settimeout-to-ecmascript
https://stackoverflow.com/questions/779379/why-is-settimeoutfn-0-sometimes-useful
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Minimum_delay_and_timeout_nesting
https://www.businessinsider.com/google-chrome-system-clock-tick-rate-2014-7
https://humanwhocodes.com/blog/2011/12/14/timer-resolution-in-browsers/
http://jsfiddle.net/rgrove/rQtUU/
https://johnresig.com/blog/accuracy-of-javascript-time/
https://www.belshe.com/2010/06/04/chrome-cranking-up-the-clock/
https://i.imgur.com/xHkaW.png

---