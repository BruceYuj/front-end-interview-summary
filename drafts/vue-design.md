
## 1. 为什么会说 JSX 比 template 更加的灵活
template 是在原有的 html 基础上赋予了高级语言的逻辑特性，比如循环、条件等等其他特性。这种特性在 Vue 当中外在表现为 vue directives。

按照 vue 的架构来讲，template 转换的过程为：
`tempalte string -> JavaScript -> virtual DOM`

template的问题在于我们只能通过 directives 来扩展 html 的功能，而 JSX 的好处在于直接是 JavaScript，因此可以完全利用 JavaScript 高级语言的特性。这也是其更灵活的原因。

## 在目前 Vue/React 当中开发，组件(component) 的产出是什么？
在 template engine 年代，我们通常是：
`template + data => html 字符串 => 挂载在 DOM 上`

在 Vue 当中：
`template + data => virtual DOM => patch`

从这里可以看出来，Vue 当中最重要的是什么功能? render 功能。

比如比较出名的 snabbdom(著名的可以生成 virtual DOM 的 library)。

为什么要将原有的 html string 变为 virtual dom？
最重要的原因是 virtual dom 带来了分层的概念（计算机降低复杂度，带来抽象的手段）。virtual dom 对渲染过程进行抽象，使框架可以渲染到 web 以外的平台、能够实现 SSR 等。

而 virtual DOM 与原生 DOM 操作的性能关系，并不是 virtual DOM 的目标。而比较这两者之间的性能是需要定量的，引入多维度的参数，比如页面的大小、数据量的变化等等，也就是说不能脱离实际的业务。

## 如果让你去设计一套 VNode，你该怎么设计？
首先，VNode 表示的是真实的 DOM，那么对于真实的 DOM 来京，我们需要一个属性来表示其标签类型，如下所示：
```javascript
const elementVNode = {
  tag: 'div'
}
```

假设你已经有了 VNode，下一步就是需要渲染（不考虑 diff 等复杂的情况），该如何写这个 renderer 方法呢？
```javascript
function render(vnode, container){
  // 根据 vnode 创建元素
  const el = document.createElement(vnode.tag);
  container.appendChild(el);
}
```
渲染函数至少需要两个参数，其中一个是挂载的点。

上面函数的功能对于标准的 HTML 标签是 ok 的（就算是有嵌套情况，我们仍然可以通过递归形式来处理）。

但是，在实际开发中，我们会将应用生成一个个组件（component)，实现 SoC 和 highly coherison。其实组件仍然是通过普通 HTML 元素和其他组件构成的。因此，我们可以将其当做一个更高级别的抽象，它的 tag 我们可以直接指向组件本身。

```javascript
const componentVNode = {
  tag: MyComponent
}

class MyComponent {
  render() {
    return {
      tag: 'div'
    }
  }
}
```

那么原有的 render 就需要稍微复杂一些：
```javascript
function render(vnode, container) {
  if(typeof vnode.tag === 'string') { // 通过判断 vnode.tag 是否是字符串来区分到底是基本的 HTML 标签还是 Vue component。
    mountElement(vnode, container)
  } else {
    mountComponent(vnode, container)
  }
}

function mountComponent(vnode, container) {
  const instance = new vnode.tag()
  instance.$vnode = instance.render()
  mountElement(instance.$vnode, container)
}
```


通常来讲，Vue/React 提供了两种组件：
1. 函数式组件 `function MyComponent(props){}`
- 纯函数
- 没有自身状态，只接受外部数据
- 通过单纯的函数调用，产生 VNode

2. 有状态组件 `class MyComponent {}`
- 类，可以实例化
- 可以有自身状态
- 通过实例化，调用 render 产生 VNode


## **为什么设计 VNode 非常的重要？**
因为设计 VNode 本身就是在设计框架，会对后面的 diff 性能产生影响。

一个 HTML 标签会提供什么信息？
- 标签名
- 各种属性
- 事件
- 样式
- 子节点

而这些都需要在 VNode 当中体现。我们可以通过 data 属性来存储标签的附加信息，比如 style、class、事件等

```javascript
const elementVNode = {
  tag: 'div',
  data: {
    style: {
      width: '100px',
      backgroundColor: 'red'
    }
  },
  children: {
    tag: 'span',
    data: null
  }
}

```
如果有多个子节点， children 可以设计为一个数组。

html 当中还存在文本节点：
```javascript
const textVNode = {
  tag: null,
  data: null,
  children: '文本内容'
}
```
在这里我们采取了一个设计策略：尽可能保证语义的情况下复用属性，会使 VNode 对象更加轻量。而不是另外生成一个属性来保存文本内容。

对于组件，本身属于一种抽象。我们的目的不是在页面上渲染一个名为 MyComponent 的标签元素，而是要渲染 MyComponent 对应的 VNode。

在上面，我们直接通过 VNode.tag 来区分是普通 HTML 标签还是 component。除了 component 之外，还存在另外两种抽象内容，Fragment 和 Portal。

Fragment 表示要渲染一个片段。比如：
```html
<template>
  <td></td>
  <td></td>
</template>
```
在此时，我们上述设计的 VNode 好像没什么方式来表示这个 template。因此，这里我们需要引入新的抽象元素，也就是 fragment：
```javascript
const Fragment = Symbol()

const fragmentVNode = {
  tag: Fragment,
  data: null,
  children: [
    {
      tag: 'td',
      data: null
    },
    {
      tag: 'td',
      data: null
    }
  ]
}
```
这样，在渲染 Fragment 的时候只需要需要其子元素即可。

Portal 的目的是允许将内容渲染到任何地方。比如我们对蒙层的实现，需要组件不受 DOM 层级的关系限制。

这样来看，我们可以发现，不同类型的 VNode 拥有不同的设计，因此我们可以将其分类来减少我们设计的心智负担。
![](./vnode-types.png)

**通过给 VNode 添加 flags 是 Virtual DOM 的优化手段之一。**

1、拿到 VNode 后先尝试把它当作组件去处理，如果成功地创建了组件，那说明该 VNode 就是组件的 VNode
2、如果没能成功地创建组件，则检查 vnode.tag 是否有定义，如果有定义则当作普通标签处理
3、如果 vnode.tag 没有定义则检查是否是注释节点
4、如果不是注释节点，则会把它当作文本节点对待

Vue2 中对于 VNode 的判断是在 挂载或 patch 阶段进行的，这就带来了两个问题：
1. 无法在 AOT 层面优化
2. 开发者无法手动优化


```javascript
if (flags & VNodeFlags.ELEMENT) {
  // VNode 是普通标签
  mountElement(/* ... */)
} else if (flags & VNodeFlags.COMPONENT) {
  // VNode 是组件
  mountComponent(/* ... */)
} else if (flags & VNodeFlags.TEXT) {
  // VNode 是纯文本
  mountText(/* ... */)
}
```

Vue 3 对于 Virtual DOM 的优化采用的是 inferno 的手段。
https://github.com/infernojs/inferno/blob/master/packages/inferno-vnode-flags/src/index.ts

```javascript
const VNodeFlags = {
  // html 标签
  ELEMENT_HTML: 1,
  // SVG 标签
  ELEMENT_SVG: 1 << 1,

  // 普通有状态组件
  COMPONENT_STATEFUL_NORMAL: 1 << 2,
  // 需要被keepAlive的有状态组件
  COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE: 1 << 3,
  // 已经被keepAlive的有状态组件
  COMPONENT_STATEFUL_KEPT_ALIVE: 1 << 4,
  // 函数式组件
  COMPONENT_FUNCTIONAL: 1 << 5,

  // 纯文本
  TEXT: 1 << 6,
  // Fragment
  FRAGMENT: 1 << 7,
  // Portal
  PORTAL: 1 << 8  
}
```

```javascript
// html 和 svg 都是标签元素，可以用 ELEMENT 表示
VNodeFlags.ELEMENT = VNodeFlags.ELEMENT_HTML | VNodeFlags.ELEMENT_SVG
// 普通有状态组件、需要被keepAlive的有状态组件、已经被keepAlice的有状态组件 都是“有状态组件”，统一用 COMPONENT_STATEFUL 表示
VNodeFlags.COMPONENT_STATEFUL =
  VNodeFlags.COMPONENT_STATEFUL_NORMAL |
  VNodeFlags.COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE |
  VNodeFlags.COMPONENT_STATEFUL_KEPT_ALIVE
// 有状态组件 和  函数式组件都是“组件”，用 COMPONENT 表示
VNodeFlags.COMPONENT = VNodeFlags.COMPONENT_STATEFUL | VNodeFlags.COMPONENT_FUNCTIONAL
```

这样，我们就可以给每个 VNode 打上 flag。
https://krausest.github.io/js-framework-benchmark/2020/table_chrome_83.0.4103.106.html