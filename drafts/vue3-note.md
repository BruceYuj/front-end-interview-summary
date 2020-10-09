## 有用技巧
1. 判断数据类型
  
`typeof` 本身在判断 JS 数据类型时是不全面的，
- 比如 `typeof []` 为 `"object"`
- 比如 `typeof null` 为 `"object"`

因此，我们需要一个更加详细、精确的数据类型判断方式

`Object.prototype.toString` 默认行为是返回 `[object type]`，其中 type 是对象类型。

因此，我们可以封装一个方法：
```javascript
var _toString = Object.prototype.toString;
function toRawType (value) {
  return _toString.call(value).slice(8, -1); // 本写法期望于规范不会变化此处行为，浏览器按照规范实现
}

```

```javascript
toRawType([]) // Array
toRawType(null) // Null
toRawType({}) // Object
toRawType(undefined) // Undefined
toRawType(function(){}) // Function
```

2. 利用闭包、map 缓存数据，提高访问效率
比如 vue 中判断标签是否是 HTML 标签还是组件名。

```javascript
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) map[list[i]] = true;

  return expectsLowerCase
  ? function (val) {return map[val.expectsLowerCase];}
  : function (val) {return map[val];}
}

var isHTMLTag = makeMap('html, body,link');
console.log(isHTMLTag('body')); // true
```

3. vue2 中是如何监测 Array 的数据变化的？
- `Array.prototype` 本身是一个数组
```javascript
// 重写 push 等方法，然后再将原型指回原方法
var ARRAY_METHOD = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

var array_methods = Object.create(Array.prototype);
ARRAY_METHOD.forEach(method => {
  array_methods[method] = function() {
    console.log("拦截逻辑");

    return Array.prototype[method].apply(this, arguments);
  }
})
```

本质上是在 **原型链上增加一个结点，被增加的结点包含拦截逻辑。** 使用的语言机制是**方法掩盖**。


4. 简单实用闭包实现 `once` 方法
```javascript
function once(fn) {
  var called = false;
  return function() {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}
```