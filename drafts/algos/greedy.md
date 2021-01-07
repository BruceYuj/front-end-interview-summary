## 贪心算法
在我看来，贪心算法是一类较难的题目，其难点在于贪心策略的证明。对于一个严谨的逻辑党来讲，如果答案没法严格证明的话，写起来总是有点嘘嘘的感觉，另外对于算法的提升不太好。所以本篇文章在于总结一些常用的贪心算法题目。


## 1. 区间与排序 
有一类贪心题目是和区间有关的。其处理的特点往往是进行左右端点排序的预处理。


[435. 无重叠区间](https://leetcode-cn.com/problems/non-overlapping-intervals/)

**题目要求找到移除区间的最小数量**，也就是另外一种题目：**不重叠区间的最大数量**。其看起来是一道**求最优解**的问题。我们可以尝试通过 dp 来做。

其属于 **LIS** 问题的变种，**LIS** 问题的抽象语义是**在一组数当中找出最长的符合某种规则的数列**。这种规则可以是**严格上升**，**严格下降**等等。

如果我们将每个区间看作是单个元素的话，那么规则可以归纳为**元素之间没有重叠**。而排序是让我们判断是否重叠的较好处理方式，其本质是通过性质来**剪枝**。


假设 `f[i]` 表示的是 **以 i 结尾的最长不重叠区间的数量**。那么最终答案就是 $max(f[i]), i \in [0, n)$

那么 `f[i]` 该怎么求解呢？其可以由所有符合条件的 `f[j], j \in [0, i)` 得到，这个条件就是 **区间 j 和 i 不重叠**。

$f[i] = max(f[j], 0) + 1$

**显然，该 dp 算法的时间复杂度是 $O(n^2)$**

```python
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0
        
        intervals.sort()
        n = len(intervals)
        f = [1]

        for i in range(1, n):
            f.append(max((f[j] for j in range(i) if intervals[j][1] <= intervals[i][0]), default=0) + 1)

        return n - max(f)
```

**通过 Python3 的列表推导式来优化算法复杂度常系数，否则会 TLE**

**很多时候，区间的题目会和贪心算法有关，并且一般都会用到端点排序，至于是左端点还是右端点就得根据题目和个人经验来预判了**。

我们的贪心策略是：
1. 选取第一个区间，期望第一个区间的右端点足够偏左。
2. 取完第一个区间后，剩下的区间形成同样性质的子问题。

制定该策略很符合常理逻辑。也就是**如果第一个区间的右端点足够左，那么我们就有更大可能性来得到最大数量的区间**。

但是只是常理想象还不能够，我们需要证明它。证明通过**反证法**即可。

1. **假设贪心策略得到的解不是最优解。那么一定存在另外一个最优解，其第一个区间的右端点不是最左边。设该区间为 i**
2. **假设区间右端点最左的区间为 j。那么一定有 j[1] <= j[i]。**
3. **那么区间 j 替换最优解中的第一个区间 i,仍然构成一个合理的解，与初始定义矛盾**


这样我们证明了我们贪心策略的正确性。

那么如何方便我们快速判断右端点足够的左呢？ **将区间按照右端点升序排序**
```python
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0
        
        intervals.sort(key=lambda x: x[1])

        n = len(intervals)
        
        ans = 1
        right = intervals[0][1]

        for i in range(1, n):
            if intervals[i][0] >= right:
                ans += 1
                right = intervals[i][1]

        return n - ans
```

