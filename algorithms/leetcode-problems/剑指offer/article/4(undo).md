## 简介
-[题目链接](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

## 思路
### 解法一 - 暴力法
遍历矩阵中所有可能值。做一些简单的剪枝。

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if(!matrix.length || !matrix[0].length) return false;

  for(let i = 0; i < matrix.length; i++)
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === target) return true;
      if(matrix[i][j] < target) continue;
      else break;
    }
  
  return false;
};

```


**复杂度分析**:
- 时间复杂度： $O(N*M)$
- 空间复杂度： $O(1)$