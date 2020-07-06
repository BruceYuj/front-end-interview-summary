

什么是 core web vitals?
core web vitals is a set of metrics and thresholds that apply to all web pages and should be measured by all site owners.

展现了 site 的健康程度。

在有了那么多衡量网站健康程度的标准、测试工具之后，为什么还要使用 core web vitals？
1. 我们想要创造 amazing experiences 给所有的 users。Not just because it's nice, but because it sets us up for success.

怎么知道已经改进的 -> 首先知道测量什么 -> we need to define our goals

what makes a web shine?

Defining Quality:
Core Dimensions：
1. content need to load quickly
2. responsive interactivity
3. visual stability


## eport.tool

## samesite cookie roll back

## Web Stories

## Developer Needs assessment


## what's new in V8/JavaScript
1. optional chaining
比如我在写一个 chat app，我需要访问 network，我在代码里进行了一个可配置化的 params，而这些 configuartions 是以 map 形式保存的。但是 network configuration is optional 因为其并不总是被 user 设置。它有 sub-configurations 比如 server 和 port.
```javascript
let netConfig = config.get("network");
let addr = netConfig && netConfig.server && netConfig.server.addr;
let port = netConfig && netCOfig.server && netConfig.server.prot;

if(addr && port) connectToServer(addr, port);
```
chains of property 很多时候 makes us feel pain. 因为 chains 中间的 property 可能是 undefined。

```javascript
let netConfig = config.get("network");
let addr = netConfig?.server?.addr;
let port = netConfig?.server?.port;

if(addr && port) connectToServer(addr, port);
```

https://v8.dev/features/optional-chaining



**default values**

```javascript
let netConfig = config.get("network");
let addr = netConfig?.server?.addr || "ws://localhost";
let port = netConfig?.server?.port || 8888;

connectToServer(addr, port);
```
这种通过逻辑或的写法在大部分情况下是ok的，但是仍然有例外：
```javascript
let compressed = netConfig?.enableCompression || true;
```
上面的永远都是 `true`。

Nullish Coalescing.(`null` and `undefined` is null)
https://v8.dev/features/nullish-coalescing

```javascript
let compressed = netConfig?.enableCompression ?? true;
```

**weakRefs**
很难被使用正确。
https://v8.dev/features/weak-references

https://v8.dev/blog/pointer-compression


## puppeteer
在 chrome，开发 puppteer 的人员 和 devtool 的人员是相交的。


## 10 modern layouts in 1 line of CSS
http://1linelayouts.glitch.me/
