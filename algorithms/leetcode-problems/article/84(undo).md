## 简介
- [题目链接](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)

对于高度不一的柱状体，矩形由最小的高度决定。

## 解法一 - 暴力法
我们枚举所有可能的高度，也就是数组的所有元素。然后以该元素分别向左和向右扩展直到碰到比该元素小的值或者到达边界，此时我们得到以该元素为高度的最大矩形宽度。

```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let ans = 0;
    for(let i = 0; i < heights.length; i++) {
        ans = Math.max(ans, heights[i] * getWidth(i));
    }
    return ans;

    function getWidth(index) {
        let i = index;
        let j = index;
        for(i = index; i >= 0; i--) {
            if(heights[i] < heights[index]) break;
        }
        for(j = index; j < heights.length; j++) {
            if(heights[j] < heights[index]) break;
        }

        return j - i - 1;
    }
};

```
**复杂度分析**:
- 时间复杂度： $O(N^2)$
- 空间复杂度： $O(1)$

