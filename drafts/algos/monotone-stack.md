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