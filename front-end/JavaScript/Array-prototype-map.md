 
 
 
## 简介
本文档主要理解 Array.prototype.map 的语言细节。

**需要思考的问题**：
1. 技术细节是什么？
2. 对边界情况我们需要记住多少？
3. 平时的工程开发我们怎么使用？

## 内部细节
我们直接进入目前最新的[ECMAScript 2020](https://tc39.es/ecma262/#sec-completion-record-specification-type) 文档查看方法的细节：
```javascript
let newArray = arr.map(
  function(currentValue |optional, currentIndex |optional, arr |optional) {

  }[, thisArg]
)

```
下面是ECMAScript 2020 给出的算法细节：
1. Let O be ? ToObject(this value).
2. Let len be ? LengthOfArrayLike(O).
3. If IsCallable(callbackfn) is false, throw a TypeError exception.
4. Let A be ? ArraySpeciesCreate(O, len).
5. Let k be 0.
6. Repeat, while k < len
    - Let Pk be ! ToString(k).
    - Let kPresent be ? HasProperty(O, Pk).
    - If kPresent is true, then
      - Let kValue be ? Get(O, Pk).
      - Let mappedValue be ? Call(callbackfn, thisArg, « kValue, k, O »).
      - Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
    -  Set k to k + 1.
8. Return A.

整个算法非常简单易懂。

**那么除了内部算法之外，我们还需要了解哪些细节呢？**
1. callbackfn 会作用于 array 实际存在的每个元素
    - 不会作用于 array 的 missing element
         1. indexes that has never been set
         2. which has been delete
         3. which has never been assigned a value
    - 也就是说，if the array which map was called upon is sparse, resulting array will also be sparse keeping same indices blank.
```javascript
let b = []

b[1] = 2 // [empty, 2]

b // [empty, 2]

b.map(() => console.log(1)) // 打印 1 一次，返回 [empty, undefined]
```
2. callbackfn 里面可能会调用 this，而传入的 thisArg 会被赋予给 this，如果不传入，则为 undefined，但是具体指向谁取决于环境（this指向的通用问题）
3. map 并不会直接操作 (mutate) 原数组，但是我们需要注意的是 callbackfn 可能会操作，比如我在 callbackfn 里面给原数组 arr 添加或删除元素。
    - 既然我们在 callbackfn 里面可能对原数组进行添加或删除操作，那么会不会导致程序进入死循环或者逻辑错误呢？ 答案是不会，文档定义 map 方法操作的是在调用 map 方法时的原数组的一个快照。后续在 callbackfn 中对原数组进行的操作不会影响到 map 方法  

**上面的技术细节描述了我们需要记住的边界情况，也就是问题2**


**那么问题3该如何解答呢？**：
**首先，我们反过来看，什么时候不该使用 map？**
1. 程序中无需使用 map 生成的新数组
2. 我们没有在 callbackfn 中返回有意义的值

这个时候我们可以使用 `forEach` 或者 `for ... of` 替代。

如果我们阅读 specification 仔细的话:
> NOTE 2:
The map function is intentionally generic; it does not require that its this value be an Array object. Therefore it can be transferred to other kinds of objects for use as a method.

也就是说，我们不仅仅可以在 Array 上面调用 map 方法。还可以在其他类型数据上面，比如 String， NodeList等等。

下面用例子来描述：
1. 在 String 上面调用
```javascript
let map = Array.prototype.map
let a = map.call('Hello World', function(x) { 
  return x.charCodeAt(0)
})
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

```
2. 在 NodeList 上面调用（尽管我们可以通过`Array.from()`来更方面的处理）：
```javascript
let elems = document.querySelectorAll('select option:checked')
let values = Array.prototype.map.call(elems, function(obj) {
  return obj.value
})
```

**有人可能会质疑，了解这么多细节有用吗？**
有道经典的题目就考察了我们对 JavaScript 细节的理解：
`['1', '2', '3'].map(parseInt)` 返回的结果是什么？

这道题需要我们充分理解 map 和 [parseInt](./built-in-parseInt.md) 才能给出正确答案：
```javascript
// parseInt(string, radix) -> map(parseInt(value, index))
/*  first iteration  (index is 0): */ parseInt("1", 0)  // 1
/*  second iteration (index is 1): */ parseInt("2", 1)  // NaN
/*  third iteration  (index is 2): */ parseInt("3", 2)  // NaN
```


## polyfill
Array.prototype.map 是在 ES5 才被定义出来，因此 older browser 可能不会支持该 function。此时需要我们进行 polyfill 来向后兼容。而算法我们直接将 specification 翻译过来即可。
这里，直接将[MDN, Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)给搬运过来：
```javascript
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

  Array.prototype.map = function(callback/*, thisArg*/) {

    var T, A, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| 
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal 
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let A be a new array created as if by the expression new Array(len) 
    //    where Array is the standard built-in constructor with that name and 
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal 
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal 
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal 
        //     method of callback with T as the this value and argument 
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}
```