---
title: 为什么有了 XHR，还要设计一套 fetch API?
autoPrev: "2-why-setTimeout-4ms"
---

> Why's THE Design(为什么这么设计) 是一系列关于计算机领域程序设计决策的文章(偏向于前端领域)，在该系列会从不同的角度讨论这种设计的优缺点、对具体实现造成的影响。由 Draveness 的《为什么这么设计》 启发

## 正文
在阅读本文之前，需要大家先忘掉类似于 `$.ajax()` 和 `axios` 这类的库方法或库，回归到最原始的 `XMLHttpRequest`，然后再去思考后设计的 `fetch API`。因此阅读本文之前，你需要一些简单的前置知识：`XMLHttpRequest`(后面以 `XHR` 简称) 和 `fetch API` 。

首先，我们给两个概念下一个定义。`XHR` 和 `fetch API` 都是浏览器给上层使用者暴露出来的 API（类似于操作系统暴露系统 API 给浏览器这类应用一样）。这两套暴露的 API 给上层使用者提供了部分操作 http 包的能力，也就是说这两者都是建立在 http 协议上的，我们可以将其当成具有部分功能的 http 客户端。


`XHR` 出现时间很早，最开始在 Microsoft Exchange Server 2000 的 Outlook Web Access 中引入，后来在 1999 年出现在 IE5 中，并被加入到所有主流的浏览器中。也就是说，`XHR` 已经 21 岁高龄了（一种技术能存活如此之久，足够证明其经典）。而 `XHR` 变得人尽皆知则是由于 AJAX 架构的出现（在这里需要提到的是，Ajax 更多的被认为是一种 Web 应用架构，其最早出现在 Jesse James Carrett 于 2005年 发表的一篇 《Ajax: A New Approach to Web Applications》），各种著名应用都使用了 AJAX（比如 Google 的 Gmail）。不管是谁促进了谁，都足以证明 `XHR` 解决了当时很大的痛点问题，减少网络延迟或损耗，提高用户体验，并增强了 JavaScript 在浏览器上操作 HTTP 的能力。

用技术术语来讲，`XHR` 在当时很好的解决了客户端和服务器端的异步通信。尽管当时 Web 正在经历爆炸性的增长，但是按照目前的 Web 现状来倒推，当时的 Web 应用的功能仍然是比较简单的，更多的是对信息的展示，因此 `XHR` 设计者无需考虑过多的架构设计（没有硬需求，毕竟过度设计同样是个问题）。

以现代软件工程的角度来看，`XHR` 的整个设计非常混乱，将 request、response 和事件监听混在一个对象里，并且需要通过实例化才能够发送请求（后面我们通过实际代码来演示）。这带来的问题是在实际使用过程中配置和调用方式比较混乱（注意，这在 web 应用比较简单的时候不构成问题）。用架构的术语来讲，**XHR 不符合关注点分离原则（SOC）**，SOC 原则期望在设计系统时候能够将系统元素分离开来，尽量保持各个元素的职责单一（比如 TCP/IP 协议簇的分层、经典 MVC 架构都是 SOC 原则的经典体现）。

我们来看一下最原始的 `XHR` 的使用：
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
从上面代码可以很明显的看出，http request 、http response 和事件监听都处于同一个 `xhr` 实例里面。整个代码组织缺少语义化，并且可能陷入回调地狱的窘境。如果没有各种包装库的实现（这也同样是 `fetch` API 出现后难以推广的原因之一），手写 `xhr` 绝对是个痛苦的事情。

按照 jake archibald(Google chrome 成员，个人比较喜欢的一个技术专家 ) 的话来讲：
> XHR was an ugly baby and time has not been kind to it. It's 16 now. In a few years it'll be old enough to drink, and it's enough of a pain in the arse when it's sober

从近二十年的历史来看，Web 绝对是世界的中心（你看 JavaScript 设计得这么潦草的语言仍然占据很重要地位就可以侧面理解这句话的含义了）。Web 的发展代表着用户群体增多，也就意味着各种需求的增多（比如由文本传递到各种多媒体信息传递），各种技术方案、标准不断被引入到 Web 体系中（比如著名的 WHATWG 组织和 ECMA International 组织），`XHR` 显然到了该改变的时候，改变往往有两种大方向：
1. 在原有基础上革新，但是会受到旧方案的约束（也就是我们常说的技术债，比如 Vue 3 在设计最初如何和 Vue2 的设计进行兼容权衡的），具体到 `XHR` 中有 `XMLHttpRequest2` 的方案发布（提供了操作二进制数据的能力）。到现在为止，`XHR` standard 仍然有少量的更新。
2. 重新设计一套东西（具体到本文就是 `fetch API`）。好处在于没有历史的束缚，而问题在于如何让社区来接受这一套新东西（尤其是在旧方案仍然满足大部分需求的时候）  

标准编著者除了需要考虑使用者的方便，还要着眼于未来趋势。从各类相关产品（这里我将各种设计称为产品的目的是想从另外的角度思考问题）的时间线上来看，Fetch API 第一个 commit 出现在 2011 年，正式标准化并由浏览器厂商实现则是到了 2015 年左右；jQuery1.5（提供新版的 `$.ajax()`） 出现在 2011 年，axios 第一个版本出现在 2014 年。你会发现，这几个时间线是很接近的，如果你再联想到 JavaScript，当时 JavaScript 世界的最重大事件莫过于 ES2015 被一步步标准化（这也意味着 Promise 被正式引入标准，尽管 `Promise` 的理念早已经在程序世界家喻户晓），因此上面的几个产品不约而同地使用了 `Promise`的方式来设计各自上层的 API（这侧面说明了回调这种异步写法不太符合程序员线性顺序处理思维）。

我们们来看看 `fetch API` 在设计时主要考虑点在哪里：
1. 使用最新的 Promise 语法结构，对上层用户编程更加友好
2. 整个设计更加底层，这意味着在实际使用过程当中能够进行更多的弹性设计
3. 关注点分离，request / response / header 分开，这也意味着能够更加灵活的使用这些 API（比如只使用 request，后面会提到）

具体 `fetch API` 使用方式如下：
```javascript
fetch(url)
  .then((r) => r.json())
  .then((data) => console.log(data))
  .catch((e) => console.log('error'))
```
代码组织比最开始的 `XHR` 更加清爽了很多，如果使用 `async/await` 语法则更加简洁。

一项新技术方案的出现，一定会引起业界的讨论，甚至是争议。而很明显，`fetch API` 带来了不少的争议（尤其是 `fetch API` 很难实现某些 `XHR` 的功能时），这类争议被我分为两类：
1. 第一类是误解
2. 第二类是会导致某些用户需求实现的不方便

第一个误解是（来自于一个 JavaScript 社区成员），“作为平台方，不应该在 `XHR` 基础上添加 high level features，而是应该提供更加 low level 的 primitives”。

很明显，上面的话陷入了一个误区，“一个设计良好的、简洁的 API 就是 high level的”。如果仔细看过规范的，你会发现， XHR 目前是建立在 fetch 的基础上的，有规范为证(在 XHR 的 `send()` 上)：
> Fetch req. Handle the tasks queued on the networking task source per below.

也就是说，`fetch` API 实际上更加低阶，也就会给上层开发者（指的普通前端开发者）。

社区另外抱怨的一点是，认为规范需要提供一个更加完善的东西，而不是一个半成品。说实话个人认为这是属于开发者的“双标”。当我们作为开发者时，我们对于自己产品的要求是迭代式开发；而当我们作为消费使用第三方技术或标准时，我们的反应是 “how dare you present me with such incomplete imperfection”，这不是妥妥的双标又是什么呢？目前来讲，大部分规范都是在迭代中而实际上迭代发布意味着规范方能够从实际使用中获得反馈进行改进，并且可以指导未来的设计（如果你有看过 CSS 特性发布历史的话你可以理解这句话的含义-具体指的 CSS 各种前缀的滥用，导致尾大不掉）。

第一类争议在经过解释后往往会消失掉，而真正麻烦的是第二类 - 缺少方便实现旧方案功能的条件（注意这里指的是方便实现，而不是各种 hack 实现），具体到 `fetch API` 有以下几个：
1. request aborting。具体分为两种：如何中断一个请求？如何超时中断一个请求？

请注意，我将超时中断单独列了出来，是因为 `XMLHttpRequest` 单独提供了属性用来处理超时中断。

在 `XHR` 中，中断一个请求可以直接调用 `XHR` 实例上的 `abort()` 方法，另外我们可以使用事件监听（`onabort` 事件），监听请求中断并作出相应的响应。
对于超时中断，`XHR` 实例提供了 `timeout` 属性可以很方便的实现功能，并且 `XHR` 还提供了 `ontimeout` 事件（这里就不聊具体代码如何写了，Google 一下就行）

在最开始的 `fetch API` 并没有提供上面的功能，而具体的讨论则经历了漫长的两年之久，堪称 `fetch API` 讨论最激烈特性了，其主要分为以下几个阶段(在这里我不过多描述争论的细节，只解释几个方案的 tradeoff，具体可以看我给出的链接)：
1. 最初的讨论 [whatwg/issue 27](https://github.com/whatwg/fetch/issues/27), 这个 issue 讨论的目的是如何提供给上层开发者一个方便的方法来终止 `fetch`。
2. cancelable promise 方案由于安全原因被否 [tc39/proposal-cancelable-promises#4](https://github.com/tc39/proposal-cancelable-promises/issues/4)。(题外话，cancelable promises 规范提出者 domenic 和 chrome 团队产生激烈争论，由于 chrome 团队强烈反对导致该方案被废弃)
3. 其他方案另开一贴继续讨论（由此可以看出讨论之激烈） [whatwg/issue 447](https://github.com/whatwg/fetch/issues/447)
4. whatwg 最终给出的标准 [whatwg/dom spec#dom-abort-controller](https://dom.spec.whatwg.org/#dom-abortcontroller-abortcontroller)


在最开始的讨论中，主要有两种方案：
1. 使用 `cancelable promise` 方案（由 jake archibald 提出），然后直接如下这样使用
```javascript
var requestPromise = fetch(url);
var jsonPromise = requestPromise.then(r => r.clone().json());
var textPromise = requestPromise.then(r => r.text());
textPromise.abort();
```
这种方案你咋眼一看，是不是非常的完美，也比较符合原有 `XHR` 的写法（需要注意的是这里的 promise 是特别封装的 `CancellablePromise`）。

但是这种方案却受到另一方的强烈反对，主要代表是 getify(《you don't know js》 作者，个人认为其水平很高，但是容易夹带私货)。它反对的点主要是更加深层次的设计，其认为该方案是 `action at a distance`(这里的 `action at a distance` 指的是一种 anti-pattern，通常在现代程序设计中非常不推荐使用，因为其会带来很多不可控性，详细信息 wiki 里面有介绍)，并且认为这类做法在最开始 `promise` 引入 ES6 时已经有了很多的讨论。简单点讲，如果引入 `abort()` 会带来 `promise` 内部 observer(观察者，这里有牵扯到 promise 实际在 js engine 被如何实现的，具体另外写一篇讨论)的设计矛盾，并且对于 `async/await` 的设计也会带来问题。

到这里，你是不是就能体会到上面简单的特性引入究竟会带来哪些深层次的设计问题。在设计一个新的 API，也需要考虑到其他牵扯到的方案（比如对于 `streams API` 是否有影响）

在讨论过程中，两方都无法说服对方，直到第一种方案出现可能的安全问题，才被直接否决。但是 `abort` 的需求仍然是存在的，最终 `controller + signal` 的方案被确定下来（具体讨论看下面的链接 3）。

正如我在 《为什么 setTimeout 的最小延迟是 4ms》 中一直在讲的观点是，“**对于同一个需求，不同参与方的思考角度不一样，会带来不同的方案，也会有很多不同的 tradeoff。而如何思考、权衡，则是架构师的必备技能**”

尽管该方案的讨论时长过于的长，我们最终还是有了落地的方案（尽管很多人还是不能接受，但有时候有了总比原地踏步要强些），具体代码如下所示：
```javascript
const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => controller.abort(), 5000);

fetch(url, { signal }).then(response => {
  return response.text();
}).then(text => {
  console.log(text);
});
```
上面的代码就是结合 `controller + setTimeout` 实现了超时中断的功能。


2. progress events，`fetch API` 缺乏方便获取请求传输进度的能力。我们知道在异步请求一个较大文件时，展示文件下载进度是一个非常友好的功能，而 `XHR` 提供了 `onprogress` 事件来帮助我们来实现该功能，具体代码如下：
```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', '/foo');
xhr.addEventListener('progress', (event) => {
    const { lengthComputable, loaded, total } = event;
    if (lengthComputable) {
        console.log(`Downloaded ${loaded} of ${total} (${(loaded / total * 100).toFixed(2)}%)`);
    } else {
        console.log(`Downloaded ${loaded}`);
    }
});
xhr.send();
```
很明显的是，对于该特性，`fetch API` 仍然处于停滞当中。个人认为主要原因还是规范方精力有限，而该特性又不是优先级特别高。但是，我们仍然可以结合 `streams API` 和 `service worker` 来实现上述需求（提一句，`streams API` 是非常优秀的功能，给了前端开发者更多操作底层网络数据的能力）。在这里，就不具体阐述实现方案了，给出我个人认为实现很好的：
[fetch progress indicators](https://github.com/AnthumChris/fetch-progress-indicators)

3. synchronous request, 个人认为是好处，避免你使用同步的 requset。


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


我们目前使用 XHR 方便的原因，在于库在 XHR 上面进行了 hack，但是 hack 就只是 hack。而 fetch 不仅仅提供了设计更加优秀的 lower-level API,并且允许我们在其基础上创建更加优秀好用的 API（比如使用 ES6 的 promise 和 iterators）。

但是兼容性仍然是一个问题。就像前段时间，youyuxi 在 twitter 发起的“是否仍然需要兼容 IE11”一样，仍然有25% 左右的支持工作中仍然会涉及到 IE11。fetch 在低版本的浏览器需要 polyfill（通过 XHR）。

fetch API 缺乏的非常重要的是：




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


有同学可能会问，目前我们使用 XHR 好像并没有出现很多不方便的地方。其实这是由于我们使用的是封装好的库，比如 jQuery 的 `$.ajax()` 和 axios（而这些库的方便使用，也很大造成了 Fetch API 的推进）。

axios 出现在 2014 年，jQuery 1.5 出现在 2011 年。而这两个库的功能都比较强大，你看时间线也可以体会到 fetch API 推广的困难。
----
> 我是 BY，一个有趣的人，以后会带来更多的原创文章。
> 
> 本文章遵循 MIT 协议，转载请联系作者。
> 
> 有兴趣可以关注公众号（点击下方链接）或者 Star GitHub repo.

[公众号，更多文章](https://www.bruceyj.com/front-end-interview-summary/info/)