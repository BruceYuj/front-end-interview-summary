


深度优先搜索 - 每次选定一个分支，不断深入，直至达到递归的边界。
其缺陷在于 - 如果搜索树每个节点的分支数目特别多，且答案在某个较浅的节点上。而如果深搜一开始选错了分支，就会在不包含答案的深层子树上面浪费许多时间。

迭代加深是用来解决 - 搜索深度过深导致不必要的子树遍历。

其原理在于：我们可以从小到大限制搜索的深度，如果在当前深度限制下搜不到答案，就将深度限制增加，重新进行一次搜索。所谓 “迭代”，就是在上一次结果的基础上，重复执行来逼近答案的意思。
- 在搜索深度为 d 时，会重复搜索深度在 `[1, d-1]` 层的节点，这些重复搜索与可能的深层子树规模（指数）级别，不是一个量级。比如 **二叉树，[1, d-1] 层的子节点只有 2^d-1 个**

适用范围 - 当搜索树规模随着层次的深入增加很快，并且我们能够确保答案在一个较浅的层次。比如有些题目会写 “如果 10 步以内搜索不到结果无解”

[170. 加成序列](https://www.acwing.com/problem/content/172/)

搜索框架：
1. 依次搜索序列中的每个位置 k，枚举 i 和 j 作为分支，把 x[i] 和 x[j] 的和填写到 x[k] 上，然后递归填写下一个位置。

剪枝：
1. 优化搜索顺序 - 让序列尽快逼近 n，在枚举 i 和 j 时从大到小枚举
2. 排除等效冗余 - 对于不同的 i 和 j，x[i] 和 x[j] 的和可能是相等的。因此，可以用 bool 数组进行一次判重。

仔细观察发现，序列的长度不会太长，如果每次枚举两个数的和，分支很多。因此可以使用迭代加深的做法。

基础dfs写法
```python
def dfs(path):
    global length,ans
    if path[-1] == n:
        if length > len(path):
            length = len(path)
            ans = path[:]
        return
    
    m = len(path)
    vis = [False] * (n+1)
    for i in range(m-1, -1, -1):
        for j in range(i, -1, -1):
            t = path[i] + path[j]
            
            if t > n or vis[t] or t <= path[-1]: continue
            path.append(t)
            vis[t] = True
            dfs(path)
            path.pop()

if __name__ == "__main__":
    
    while True:
        n = int(input())
        if not n: break
        
        length = 100
        ans = []
        dfs([1])
        
        for x in ans:
            print(x, end=" ")
        print("")
```


