## introduction

**单调栈**, monotone stack。也就是在 **栈** 这种数据结构的基础上加上数据单调的特性。

其往往可以用来解决某几类特殊的问题。


## 应用 1： 去除掉某些元素后期望剩下的最小或最大
[402. 移掉 K 位数字](https://leetcode-cn.com/problems/remove-k-digits/)


```python
class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        if len(num) == k: return '0'
        
        st = []
        for x in num:
            while k > 0 and st and st[-1] > x:
                st.pop()
                k -= 1
            st.append(x)
        
        i = 0
        while i < len(st) - 1 and st[i] == '0':
            i += 1
        
        ans = ''.join(st[i:len(st)-k])        
        return ans
```

[316. 去除重复字母](https://leetcode-cn.com/problems/remove-duplicate-letters/?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china)
```python
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        d = [0] * 26
        vis = [False] * 26
        st = []
        for x in s:
            d[ord(x)-97] += 1
        
        for x in s:
            while st and d[ord(st[-1]) - 97] > 0 and st[-1] >= x and not vis[ord(x)-97]:
                vis[ord(st[-1]) - 97] = False
                st.pop()

            if(not vis[ord(x) -97]): st.append(x)
            d[ord(x)-97] -= 1
            vis[ord(x) - 97] = True

        return ''.join(st) 
```


[321. 拼接最大数](https://leetcode-cn.com/problems/create-maximum-number/)
```python
class Solution:
    def maxNumber(self, nums1: List[int], nums2: List[int], k: int) -> List[int]:
        def helper(nums, k):
            st = []

            for x in nums:
                while st and st[-1] < x and k:
                    st.pop()
                    k -= 1
                
                st.append(x)
            
            return st[:len(st)-k]

        m = len(nums1)
        n = len(nums2)
        ans = []
        for i in range(0, k+1):
            tmp = []
            if i > m: break
            if k-i > n: continue

            a = helper(nums1, m - i)
            b = helper(nums2, n-k+i)

            while a and b:
                if a > b:
                    tmp.append(a[0])
                    a.pop(0)
                else: 
                    tmp.append(b[0])
                    b.pop(0)
            
            tmp = tmp + a + b
            if tmp > ans: ans = tmp

        return ans
```

## **离线的 RMQ 问题**

## 例题
1. [leetcode 962. 最大宽度坡](https://leetcode-cn.com/problems/maximum-width-ramp/)

首先，我们来看朴素解法：

1. 枚举所有的 $(i, j)$，判断 $a[i] \leq a[j]$, 如果满足，则判断是否更新 ans

时间复杂度为 $O(n^2)$，会超时。

有没有什么办法帮助我们加快剪枝呢？

通常来讲，一个有序的数列是一个很好的剪枝前提，比如我们常用的 **双指针** 技巧。

我们将数组升序排列，排列时添加一位信息来保存每个元素的下标。下面我们同样可以枚举所有的元素来解决问题，我们再来看问题，对于枚举的每个元素 i，我们期望找到比他小的元素且下标离他最远。由于数组已经有序，那么比 i 小的元素一定在它的左边，由于枚举的范围时线性增加的，也就是从 $[0, i] => [0, i+1]$，那么我们可以通过一个变量维护左边的所有元素中下标最小的元素的下标，这样就可以在 $O(1)$ 判断出对于元素 i 的答案了，这样总体时间复杂度为排序的复杂度 $O(nlogn)$。

这种通过线性增加范围，用变量维护某类值的技巧被经常使用，比如很多 dp 的问题当中。


另外一种思路是：

按照降序考虑 i，希望找到一个最大的 j，满足 $a[j] \geq a[i], if \ exists$。
因此，我们期望候选的 j 是降序的，这样我们可以通过二分来快速查找出对应的 j。

我们需要维护一个 d 数组，其按照索引值降序，对应值升序的方式。
时间复杂度为 $O(nlogn)$


最后一种单调栈的思路：

> 最大坡度宽的坡底一定在以 $a[0]$ 开头的严格递减序列当中

通过反证法证明：

假设最大宽度的坡底不在上面的递减序列中，设为 k，且最大宽度为 j - k。那么 $[0, k)$ 之间的所有元素的值一定是 $a[i] > a[j] \geq a[k]$ 的，也就是说 $a[0,...,k-1] > a[k]$，那么 a[k] 一定会在以 a[0] 开头的递减序列中，与开头设定矛盾。

这样我们可以枚举所有可能的坡底 i，我们可以倒序枚举所有可能的 i，对于任意的 j：

如果 j 是第一个满足 $a[j] \geq a[i]$ 的，那么表示 对于其他的坡底元素来讲，$a[j,...,n-1]$ 不可能是坡顶，因为 i 左边的坡底元素一定比 a[i] 大，也就证明完成了，其思路和双指针技巧剪枝类似。

这样我们将时间复杂度降低了 $O(n)$

1. [leetcode 1124. 表现良好的最长时间段](https://leetcode-cn.com/problems/longest-well-performing-interval/) 

我们将 $>8$ 表示为 $+1$, $\leq 8$ 表示为 $-1$，则我们求范围内的最长区间，且该区间的和 $> 0$，我们可以通过前缀和将区间和变成两个元素和差，也就是表示需要一个 $s[j] > s[i]$ 的最长宽度，也就是变成了上面的题型。

这样，我们可以在 $O(n)$ 时间复杂度内解决问题。