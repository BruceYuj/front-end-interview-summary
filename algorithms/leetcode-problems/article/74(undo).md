## 简介
- [题目链接](https://leetcode-cn.com/problems/search-a-2d-matrix/)

## 思路
### 解法一 - 暴力法
逐行匹配，直到满足或者直接退出。

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(!matrix.length || !matrix[0].length) return false;

  for(let i = 0; i < matrix.length; i++)
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === target) return true;
      else if(matrix[i][j] < target) continue;
      else return false;
    }
  
  return false;
};
```
**复杂度分析**:
- 时间复杂度： $O(N*M)$
- 空间复杂度： $O(1)$


### 暴力法改进
因为下一行的首位数字大于该行上面任意一行的所有数字。因此，我们可以先遍历第一列，找到 target 可能处于的行。然后遍历这一行即可。
```javascript
var searchMatrix = function(matrix, target) {
  if(!matrix.length || !matrix[0].length) return false;

  let row = 0;
  for(let i = 0; i < matrix.length-1; i++){
    if(target >= matrix[i+1][0] ) row = i+1;
    else break;
  }

  for(let i = 0; i < matrix[0].length; i++) {
    if(target === matrix[row][i]) return true;
    if(target > matrix[row][i]) continue;
    else return false;
  }
  
  return false;
};
```

**复杂度分析**:
- 时间复杂度： $O(N+M)$
- 空间复杂度： $O(1)$

### 二分查找
