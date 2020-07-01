---
title: 为什么有了 XHR，还要设计一套 fetch API?
autoPrev: "2-why-setTimeout-4ms"
---

> Why's THE Design(为什么这么设计) 是一系列关于计算机领域程序设计决策的文章(偏向于前端领域)，在该系列会从不同的角度讨论这种设计的优缺点、对具体实现造成的影响。由 Draveness 的《为什么这么设计》 启发

## 正文
首先需要声明的是，阅读本文需要了解一点 XMLHttpRequest(下面以 XMR 简称) 和 fetch API。如果你只了解 axios 这类 XHR 库，可能会需要一些耐心看文本文。

不管是 XHR，还是 fetch API，都是浏览器在底层实现 http 协议的基础上暴露出来的一层 API，你可以将其当做提供部分操作 http 包的 http 客户端。

XHR 出现的很早，最开始出现在 Microsoft Exchange Server 2000 的 Outlook Web Access 中，后来由 IE5 在 1999 年引入（由此你可以看出，其已经 21 岁高龄了，一个技术能存活如此之久，足够证明其经典）。而随着 AJAX 架构出现（如果注意的话，Ajax 更多的被认为是一种 Web 应用架构，最早出现在 Jesse James Carrett 于 2005年 发表的一篇 《Ajax: A New Approach to Web Applications》），XHR 伴随着一起一飞冲天。在这里，我们不会过多讨论 Ajax 这种架构。

XHR 在当时很好的解决了客户端和服务器端的异步通信，但是当时的 Web 应用的功能是简单的，更多的是对信息的展示（和当今 Web 应用复杂度不可同日而语），因此我们无需过多的考虑 XHR 的架构设计。在如今开来，XHR 的整个设计非常的混乱，将 request、response 和事件监听混在一个对象里，并且需要通过实例化才能够发送请求。这导致的问题是在实际使用过程中配置和调用方式比较混乱（注意，这在 web 应用比较简单的时候不构成问题），用架构的术语来讲，**XHR 不符合关注点分离原则（SOC）**，简单来讲，SOC 期望的是我们在设计系统时候能够将系统元素分离开来，也就是元素的职责尽量单一（比如 TCP/IP 协议簇也是关注点分离和分层的经典应用）。

有同学可能会问，目前我们使用 XHR 好像并没有出现很多不方便的地方。其实这是由于我们使用的是封装好的库，比如 jQuery 的 `$.ajax()` 和 axios（而这些库的方便使用，也很大造成了 Fetch API 的推进）。如果你使用最原始的 XHR，代码该如何组织呢？
```javascript
let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.onload = function() {
  console.log(xhr.response);
}
xhr.onerror = function() {
  console.log('error');
}

xhr.send();
```
整个代码的组织是缺少语义化。而换成 fetch API，则更加的清晰：
```javascript
fetch(url)
  .then((r) => r.json())
  .then((data) => console.log(data))
  .catch((e) => console.log('error'))
```
axios 出现在 2014 年，jQuery 1.5 出现在 2011 年。而这两个库的功能都比较强大，你看时间线也可以体会到 fetch API 推广的困难。


Fetch API 最开始提出议案是在 2014 年下半年，并且在 2015 年正式提出。作为将要取代 XHR 的技术新标准，位于 WHATWG spec 里面。

在设计之初，其希望用更加现代的思维来考虑整个 fetch API 的设计。其考虑点主要有下面几个方面：
1. 使用最新的 Promise 语法结构，对用户编程更加友好
2. 整个设计更加底层，这意味着在实际使用过程当中能够进行更多的弹性设计
3. 关注点分离，request / response / header 分开


最开始 fetch API 出现的时候，在前端圈子出现了很大的争议。其中一个 JavaScript 社区成员是这么说的：“作为浏览器平台方，不应该在 XHR 基础上添加 high level features，而是应该提供更加 low level 的 primitives”。

很明显，上面的话陷入了一个误区，就是“一个设计良好的、简洁的 API 就是 high level的”。如果仔细看过规范的，你会发现， XHR 目前是建立在 fetch 的基础上的，有规范为证(在 XHR 的 `send()` 上)：
> Fetch req. Handle the tasks queued on the networking task source per below.

也就是说，`fetch` API 更加低阶。


社区另外抱怨的一点是，认为规范需要提供一个更加完善的东西，而不是一个半成品。说实话这是一个开发者的“双标”，当我们作为开发者时，我们对于自己产品的要求是迭代式开发；而当我们消费者（比如使用第三方技术时），我们的反应是“how dare you present me with sunch incomplete imperfection”。而实际上迭代发布意味着我们已经能够从实际使用中获得反馈，并且可以指导未来的设计。


在前面我们说过，XHR 失去了关注点分离，将 request 和 response 混在了一起。因此在 Fetch 被设计时，将 requset 和 response 分开。这在 service worker 当中是非常有用的。
```javascript
self.addEventListener('fetch', function (event) {
  if (event.request.url === new URL('/', location).href) {
    event.respondWith(
      new Response('<h1>Hello!</h1>', {
        headers: {'Content-Type', 'text/html'}
      })
    )
  }
})
```
在上面的代码中， `event.request` 是一个 `Request`。这意味着我可以自己设计我的 response，而不是让浏览器去请求网络。这样我们可以通过`fetch(event.request)` 来从 network 获取 response，或者通过 cache 来获取 response。

另外， CORS 的规范说明是出现在 Fetch 规范当中的（CORS 在 XHR 中同样可以使用，其实 CORS 的本质是利用 HTTP 协议的灵活性，扩展了 HTTP headers）。
在 XHR 中，如果跨域请求没有 CORS headers 时会直接失败，而 Fetch 提供了 `mode:no-cors`，这在 CDN 内容中是非常有用的（因为往往这些静态资源缺少 CORS headers）。

XHR 缺乏 streams，我们需要等待整个 response 被 buffer 到内存里面才能够访问到，这对于越来越“重”的客户端来讲是不方便的， fetch 被设计成允许访问更加 low-level body stream。也即是说，fetch 可以结合新的 stream API。

fetch API 提供了更加方便的 headers class 和 cache control。

按照 jake archibald 的话来讲：
> XHR was an ugly baby and time has not been kind to it. It's 16 now. In a few years it'll be old enough to drink, and it's enough of a pain in the arse when it's sober

我们目前使用 XHR 方便的原因，在于库在 XHR 上面进行了 hack，但是 hack 就只是 hack。而 fetch 不仅仅提供了设计更加优秀的 lower-level API,并且允许我们在其基础上创建更加优秀好用的 API（比如使用 ES6 的 promise 和 iterators）。

但是兼容性仍然是一个问题。就像前段时间，youyuxi 在 twitter 发起的“是否仍然需要兼容 IE11”一样，仍然有25% 左右的支持工作中仍然会涉及到 IE11。fetch 在低版本的浏览器需要 polyfill（通过 XHR）。

fetch API 缺乏的非常重要的是：
1. request aborting。这个讨论时长很长，其实主要原因是是否使用 cancellable promises

2. progress events，在 upload 应用场景时的问题

3. synchronous request, 个人认为是好处，避免你使用同步的 requset。



## reference
https://jakearchibald.com/2015/thats-so-fetch/
https://developers.google.com/web/updates/2015/03/introduction-to-fetch
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API


https://github.com/whatwg/fetch/issues/607
https://developers.google.com/web/updates/2017/09/abortable-fetch
https://developer.mozilla.org/en-US/docs/Web/API/AbortController
https://github.com/github/fetch
https://github.com/AnthumChris/fetch-progress-indicators

fetch abort:
https://github.com/whatwg/fetch/issues/951
https://nodejs.org/api/http.html#http_http_request_options_callback
https://github.com/whatwg/fetch/issues/20
https://javascript.info/fetch-progress
https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers

xhr:
https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest


兼容：
https://www.caniuse.com/#search=fetch


常见的 polyfill:
- node-polyfill: 顾名思义，在 node 端运行 fetch，替代原生的 http 模块。https://github.com/node-fetch/node-fetch
- polyfill: https://github.com/github/fetch
----
> 我是 BY，一个有趣的人，以后会带来更多的原创文章。
> 
> 本文章遵循 MIT 协议，转载请联系作者。
> 
> 有兴趣可以关注公众号（点击下方链接）或者 Star GitHub repo.

[公众号，更多文章](https://www.bruceyj.com/front-end-interview-summary/info/)