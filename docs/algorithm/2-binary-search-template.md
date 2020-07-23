---
title: 算法面试套路之 - 二分法
autoPrev: 1-algorithms-learning-general-outline
---


二分法可以用来解决什么类型的问题？

通常我们会发现二分法和单调性的关联很大。但实际上二分法的本质是：
> 如果一个区间能够按照某个特性分成两个不重复的部分（边界点不考虑），那么我们就可以通过二分法来找到这两个区间的边界

《插入图片说明》

也就是说，如果一个区间满足单调性，我们一定可以通过二分法来解决；但是可以二分法的题目不一定需要单调。（单调性是充分条件）

在实际的做题过程中，我们通常会遇到两类问题：
1. 整数的二分
2. 浮点数的二分


在实际的做题过程中，各种边界情况是非常令人讨厌的。我们如果没有模板和理解边界情况产生的原因，很容易就做错和浪费时间。

《举例各种边界情况》
那么我们先来看，边界情况是怎么产生的。首先，我们明确的是，浮点数的二分是不需要考虑边界情况的，而只有整数的二分需要。

这是因为 $c = a+b/2$, 对于 c 来讲，会存在取上底还是下底的判断。


我们来看常用的两个模板：
```javascript
function check() {}; // 判断是否满足某种特性

function biSearch1(l, r) {

  while(l < r) {
    let mid = l + Math.floor((r-l)/2);
    if(check(mid)) r = mid;
    else l = mid+1;
  }

  return l;
}

function biSearch1(l, r) {

  while(l < r) {
    let mid = l + Math.ceil((r-l)/2);
    if(check(mid)) l = mid;
    else r = mid-1;
  }

  return l;
}
```

为什么上面的有的取上底，有的取下底呢？
我们先看模板 1：
我们的区间不断变小，一定会存在 $[i, i+1]$, 此时如果取上底 $mid = i+1$，如果此时 $check(mid)$ 成功，那么整个区间仍然是 $[i, i+1]$ 此时就进入了死循环。而如果取下底 $mid = i$, 我们会先进入到 $[i, i]$ 或者 $[i+1, i+1]$

模板 2 是同理。


记住上面的两个模板，我们基本可以打二分法的天下了。

通常来讲，对于整数的二分，有三种类型：
1. 在数组中寻找等于 $target$ 的位置，如果不存在返回 -1.
2. 在数组中寻找 $>= target$ 的最小位置
3. 在数组中寻找 $<= target$ 的最大位置

其实类型 1 可以算作 类型 2 和 类型 3 的特殊情况。

因此，我们直接看类型 2。对于类型 2，我们的特性是什么？
就是根据 $>= target$ 将区间分成两个部分，区间 1 都是 $< target$ 的，区间 2 都是 $>= target$ 的，求边界点。
```javascript

function check(pos) {// 判断是否满足某种特性
  return nums[pos] >= target;
}; 

function biSearch(l, r) {

  while(l < r) {
    let mid = l + Math.floor((r-l)/2);
    if(check(mid)) r = mid;
    else l = mid+1;
  }

  return l;
}
```

而对于类型 3，我们可以就是根据 $<= target$ 将区间分成两个部分，区间 1 都是 $<= target$ 的，区间 2 都是 $> target$ 的，求区间1 的右边界点。
```javascript

function check(pos) {// 判断是否满足某种特性
  return nums[pos] <= target;
}; 

function biSearch(l, r) {

  while(l < r) {
    let mid = l + Math.ceil((r-l)/2);
    if(check(mid)) l = mid;
    else r = mid-1;
  }

  return l;
}
```

这样我们就解决了所有问题。

而对于不存在的情况，这不是二分法的问题，而是我们对于最终的数据进行下判断即可。


首先我们看 [35. 搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)
```
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1
示例 3:

输入: [1,3,5,6], 7
输出: 4
示例 4:

输入: [1,3,5,6], 0
输出: 0
```

我们可以先根据题意将整个数组划分成两个区间，然后找区间的边界点即可。
比如我们可以将按照 3 种 特性来划分区间：
1. 找到第一个 >= x 的位置
2. 找到第一个 > x 的位置
3. 找到最后一个 <= x 的位置

对于第一个 1 和 2 其实特性都是一样的(但是 leetcode 的测试需要满足性质 1，其他两个都不能通过)：
```javascript
var searchInsert = function(nums, target) {
    // 找到第一个 >= x 的位置
    // 找到第一个 > x 的位置
    // 找到最后一个 <= x 的位置

    let l = 0;
    let r = nums.length - 1;

    while(l < r) {
        let mid = l + Math.floor((r-l)/2);

        if(nums[mid] >= target) r = mid;
        else l = mid+1;
    }

    if(nums[r] < target) return r+1;
    else return r;

};

```


[34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)


```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 找到 >= target 的第一个位置


    let left = biSearch(0, nums.length-1);

    if(nums[left] !== target) return [-1, -1];

    let right = biSearch2(0, nums.length-1);

    return [left, right];

    function biSearch(l, r) {
        while(l < r) {
            let mid = l + Math.floor((r-l)/2);

            if(nums[mid] >= target) r = mid;
            else l = mid+1;
        }

        return l;
    }

    function biSearch2(l, r) {
        while(l < r) {
            let mid = l + Math.floor((r-l+1)/2);

            if(nums[mid] <= target) l = mid;
            else r = mid-1;
        }

        return l;
    }
};
```

[33. 搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)

```javascript
function search(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while(l < r) {
        let mid = l + Math.floor((r-l)/2);

        if(check(mid)) r = mid;
        else l = mid+1;
    }

    return nums[l] === target ? l : -1;

    function check(mid) {
        if(nums[mid] >= nums[l] && target <= nums[mid] && target >= nums[l])  return true;

        if(nums[mid] < nums[l] &&(target <= nums[mid] || target >= nums[l])) return true;

        return false;
    }
}
```

153. 寻找旋转排序数组中的最小值
https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while(l < r) {
        let mid = l + Math.floor((r-l)/2);

        if(nums[l] > nums[r] && nums[mid] >= nums[l]) l = mid+1;
        else r = mid;
    }

    return nums[l];
};
```

[54. 寻找旋转排序数组中的最小值 II](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while(l < r) {
        let mid = l + Math.floor((r-l) /2);
        if(nums[l] === nums[r]) r--;
        else if(nums[l] > nums[r] && nums[mid] >= nums[l]) l = mid + 1;
        else r = mid;
    }

    return nums[l];
};
```
