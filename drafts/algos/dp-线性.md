
## 定义

## 题目

1. [acwing 271. 杨老师的照相排列](https://www.acwing.com/problem/content/description/273/)

核心概念：
> 从高到低依次安排每个同学位置。假设当前安排第 $i, i \in [ 1, n]$ 个学生，那么前 $i-1$ 个学生一定占据每一排最靠左的连续若干个位置，并且从后往前每排人数单调递减。否则一定不满足“每一排从左到右身高递减，从后往前递减”。

为什么上面的成立？
1. 因为我们是从高到低排的，那么前 $i-1$ 个学生身高一定大于第 $i$ 个学生。那么这些最高的 $i-1$ 个学生一定在每一排最靠左的位置，否则与定义不符合
2. 为什么从后往前每排人数单调递减？反证法即可。假设第 $x$ 排人数大于第 $x-1$ 排，由于从高到低安排，所以剩下的 $n-i$ 个身高一定小于所有已经安排的身高，那么剩下的任意身高都不能放在第 $x-1$ 排，也就不满足定义 $N_1>N_2>...>N_k$,得证。


根据上面的性质我们可以假设：$f[a][b][c][d][e]$ 表示从后往前每排人数为 $a,b,c,d,e$ 的所有方案的集合，其中 $a \geq b \geq c \geq d \geq e$。


状态计算 - 对应当前集合的划分，本题按照**最后一个同学被安排在哪一排**作为划分依据，可以将 $f[a][b][c][d][e]$ 划分成**不重不漏**的 5 个子集：
- 当 $a > 0, a > b$ 时，最后一个同学可以被安排在第一排，方案数是 $f[a-1][b][c][d][e]$
- 当 $b > 0, b > c$ 时，最后一个同学可以被安排在第二排，方案数是 $f[a][b-1][c][d][e]$
- 当 $c > 0, c > d$ 时，最后一个同学可以被安排在第三排，方案数是 $f[a][b][c-1][d][e]$
- 当 $d > 0, d > e$ 时，最后一个同学可以被安排在第四排，方案数是 $f[a][b][c][d-1][e]$
- 当 $e > 0$ 时，最后一个同学可以被安排在第五排，方案数是 $f[a][b][c][d][e-1]$


时间复杂度： $O(k(\frac{N}{k})^k)$

> 思考：这里我们需要思考的是，设计 dp 的状态转移方程时，是否一定要从 “如何计算出当前状态” 来求出呢？答案是不一定，我们也可以从“一个已知状态应该更新哪些后续阶段的未知状态”。对于本题来讲，两种方式都可，对于某些题目来讲，第二种方式更加自然、方便。

2. [acwing 272. 最长公共上升子序列](https://www.acwing.com/problem/content/description/274/)

本题是 LIS 和 LCS 的结合。

我们先来看 LIS 问题：

其状态定义是 $f[i]$, 表示以 i 为结尾的最长上升子序列的长度。我们可以在 $O(n^2)$ 的时间复杂度得到答案（另外一种解法是贪心+二分）

再来看 LCS 问题：

状态定义是 $f[i][j]$, 表示以 $A[0,i], B[0, j]$ 区间的最长公共子序列。

那么 LCIS 问题就是两者的结合。
我们可以这么定义状态：$f[i][j]$ 表示 $A[0, i], B[0, j]$ 范围内并且以 $B[j]$ 结尾的最长公共上升子序列的长度。

下面就变成了集合划分：
1. 如果 $A[i] = B[j]$, 那么 $f[i][j] = max_{k=1}^{k=j-1}(f[i-1][k]) + 1, B[k] < A[i] = B[j]$
2. 如果 $A[i] \neq B[j]$, 那么 $f[i][j] = f[i-1][j]$

朴素做法三重循环即可。
```python
if __name__ == "__main__":
    n = int(input())
    N = n+1
    
    a = [0] * N
    b = [0] * N
    
    f = [[0] * N for i in range(N)]
    
    a[1:N] = map(int, input().split())
    b[1:N] = map(int, input().split())
    a[0] = b[0] = float("-inf")
    
    for i in range(1, N):
        for j in range(1, N):
            if a[i] == b[j]:
                for k in range(j):
                    if b[k] < a[i]:
                        f[i][j] = max(f[i][j], f[i-1][k]+1)
            
            else:
                f[i][j] = f[i-1][j]
    
    ans = 0
    
    for i in range(1, N):
        ans = max(ans, f[n][i])
    
    print(ans)
```

时间复杂度 $O(n^3)$

在转移过程中，我们可以将满足 $k \in [0, j), 且 B[k] < A[i]$ 的所有 k 构成一个集合，并且将这个集合称为 $f[i][j]$ 进行状态转移时的决策集合，记为 $s[i][j]$。

我们会发现在第二层循环 $j$ 从 1 到 m 是，第一层循环 i 是定值，这表示条件 $A[i]$ 在第二层循环时是固定的。那么当 j 增加 1 时，k 的取值范围从 $[0, j)$ 变成了 $[0, j+1)$ ，也就是说 j 会进入到决策集合当中，由于在第三层循环中求的时最大值，那么我们只需要比较 $[0, j)$ 中的最大值和当前 j 比较即可。也就是说，我们用一个变量存储 $[0,j)$ 的最大值，这样我们就能在 $O(1)$ 求出第三层循环的值了。这样，避免重复扫描。

```python


if __name__ == "__main__":
    n = int(input())
    N = n+1
    
    a = [0] * N
    b = [0] * N
    
    f = [[0] * N for i in range(N)]
    
    a[1:N] = map(int, input().split())
    b[1:N] = map(int, input().split())
    a[0] = b[0] = float("-inf")
    
    for i in range(1, N):
        val = f[i-1][0]
        for j in range(1, N):
            if a[i] == b[j]:
                f[i][j] = max(f[i][j], val+1)
            else:
                f[i][j] = f[i-1][j]
                
            if b[j] < a[i]: val = max(val, f[i-1][j])
            
    ans = 0
    
    for i in range(1, N):
        ans = max(ans, f[n][i])
    
    print(ans)
```

3. [acwing 273. 分级](https://www.acwing.com/problem/content/275/)

本题首先得知道一个性质：**构造的 B 序列中的所有元素一定都属于 A**。

在这里，我们只证明 B 是递增的情况，递减证明方式类似。
证明：

1. 先将 $A$ 按照递增的顺序排序
2. 假设构造的 B 序列是 $B_1, B_2, ... , B_n$，由于 $B$ 是非严格递增的，由[图片 算法图解 17] 可知，部分元素会落在 $A$ 序列当中，剩下的元素都落在 $A$ 的值域之间。假设 $B_i, B_{i+1}， B_{i+2}$ 落在 $j', (j+1)'$ 之间。

那么 $B_i,...$ 这三个值对于最终 $S$ 的贡献就是 $|B_i - A_i| + |B_{i+1} - A_{i+1}| + |B_{i+2} - A_{i+2}|$, 并且 $B_i, B_{i+1}， B_{i+2} \in (A_{j'}, A_{(j+1)'})$。统计 $A_i, A_{i+1}， A_{i+2}$ 这三个数中大于等于 $A_{j+1'}$ 的数量，假设为 x，那么小于等于 $A_{j'}$ 的数量就是 $3-x$

- 如果 $x > 3-x$，根据《货仓选址》的证明，我们可以将 $B_i,...$ 三个点移动到 $A_{j+1'}$ 上面，一定可以使最终结果更小。
- 否则，可以将三个点移动到 $A_{j'}$ 上，使最终结果更小

因此，所有 B 序列中不在 A 中的元素一定可以重新构造成 A 中的元素，并且时原有结果不变或更小


具体的 dp 分析，有两种思路，一种是传统的： 阶段 - > 状态 -> 决策 （算法进阶指南中的），另外一种是集合思想。

这里用第二种分析思路：
1. 状态表示： 
   - 定义：$f(i, j)$ 表示已经分配了前 i 项，且最后一个值是 A 排序后的第 j 项的所有方案集合
   - 求最小值

2. 状态计算：由于已知了第 i 项的值，且 B 序列是非严格单调的，那么我们可以根据 **倒数第二个数来将集合划分成 j 个不重不漏的子集**：
   - 倒数第二个数选的是 $A'_1$ 的所有方案的集合， 最小值是 $f(i-1, 1) + abs(A[i] - A'[j])$ 
   - 倒数第二个数选的是 $A'_2$ 的所有方案的集合， 最小值是 $f(i-1, 2) + abs(A[i] - A'[j])$ 
   - ...
   - 倒数第二个数选的是 $A'_j$ 的所有方案的集合， 最小值是 $f(i-1, j) + abs(A[i] - A'[j])$

$f(i, j)$ 就是所有子集的最小值。最终答案就是 $min(f(n, i))$。

原始的 dp 时间复杂度是 $O(n^3)$，会超时。此时，我们发现在第三层循环（决策层）时，和 LCIS 问题一样，第三层的决策时求最小值，而该最小值可以由上一次循环的最小值和当前值比较得出，也就是 $O(1)$ 求出最小值，将时间复杂度降低到 $O(n^2)$。

```python
def dp(flag):
    b = a[:]
    if flag:
        b.sort()
    else:
        b.sort(reverse=True)
        
    f = [[float("inf")] * N for i in range(N)]
    
    f[0][0] = 0
    
    for i in range(1, N):
        value = f[i-1][0]
        
        for j in range(1, N):
                value = min(value, f[i-1][j])
                
                f[i][j] = min(f[i][j], value + abs(a[i-1]- b[j-1]))
        
    res = float("inf")
    
    for i in range(1, N):
        res = min(res, f[n][i])
    
    return res
    
if __name__ == "__main__":
    n = int(input())
    N = n+1
    a = [0] * n
    
    for i in range(n):
        a[i] = int(input())
        
    ans = dp(True)
    
    ans = min(ans, dp(False))
    
    print(ans)
```

4. [acwing 274. 移动服务](https://www.acwing.com/problem/content/276/)

我们先从题意抽象出条件：
1. 三个人起点在 $1, 2, 3$
2. 任意时刻只能移动一个人，且每个点只能有一个人
3. 移动费用为 $c(p, q)$， 且不对称(也就是 $c(p,q) \neq c(q, p)$)，但是 $c(p,p) = 0$
4. 过程中不能去其他地方

求执行 n 次请求的最小花费

- 阶段：我们将 **已经完成的请求** 当成阶段，通过指派一名人员，可以将 “完成 i-1 个请求” 的状态转移到 “完成 i 个请求” 的状态
- 状态：为了计算指派的费用，我们需要知道每个阶段服务员的位置，因此最直接的方法是将三个人员的位置信息附加在状态中，也就是 $f(i, x, y, z)$, 其表示完成了前 i 个请求，三个员工位于 x, y, z 时，公司当前最小的花费。

$f(i, x, y, z)$ 可以用来更新**第 i+1 阶段**，转移通常有三种，也就是派三个员工去第 i+1 个请求处：
- 派第一个员工： $f(i+1, p_{i+1}, y, z) = min(f(i+1, p_{i+1}, y, z), f(i, x, y, z) + c(x, p_{i+1}))$
- 派第二个员工： $f(i+1, x, p_{i+1}, z) = min(f(i+1, x, p_{i+1}, z), f(i, x, y, z) + c(y, p_{i+1}))$
- 派第三个员工： $f(i+1, x, y, p_{i+1}) = min(f(i+1, x, y, p_{i+1}), f(i, x, y, z) + c(z, p_{i+1}))$



时间复杂度为 $O(NL^3) = 2*10^9$

初始化：$f(0, 1, 2, 3) = 0$, 其他为正无穷
```python

if __name__ == "__main__":
    m, n = map(int, input().split())
    
    M = m+1
    N = n+1
    c = [[0] * M for i in range(M)]
    
    for i in range(1, M):
        c[i][1:M] = map(int, input().split())
    
    q = list(map(int, input().split()))
    
    f = [[[[float("inf")] * M  for i in range(M)] for j in range(M)] for k in range(N)]
    f[0][1][2][3] = 0
    
    for i in range(1, N):
        p = q[i-1]
        
        for x in range(1, M):
            for y in range(1, M):
                for z in range(1, M):
                    if x == y or y == z or x == z: continue
                
                    f[i][p][y][z] = min(f[i][p][y][z], f[i-1][x][y][z] + c[x][p])
                    f[i][x][p][z] = min(f[i][x][p][z], f[i-1][x][y][z] + c[y][p])
                    f[i][x][y][p] = min(f[i][x][y][p], f[i-1][x][y][z] + c[z][p])
    
    res = float("inf")
    
    for x in range(1, M):
        for y in range(1, M):
            for z in range(1, M):  
                if x == y or y == z or x == z: continue
            
                if x == q[n-1] or y == q[n-1] or z == q[n-1]:
                    res = min(res, f[n][x][y][z])
                    
    print(res)
```

仔细观察可以看到，第 i 个请求完成时，一定有一个员工在 $p_i$ 处，因此只需要知道阶段 i 和另外两个员工的位置即可。第三个员工的信息属于冗余信息, 因此我们可以用 $f(i, x, y)$ 表示执行了第 $i$ 次请求，员工分别为 $p_i, x, y$ 的最小值。

- 派位于$p_i$ 员工： $f(i+1,x, y) = min(f(i+1,x, y), f(i, x, y) + c(p_i, p_{i+1}))$
- 派位于 $x$ 员工： $f(i+1, p_{i}, y) = min(f(i+1,p_{i}, y), f(i,x, y) + c(x, p_{i+1}))$
- 派位于 $y$员工： $f(i+1, x, p_{i}) = min(f(i+1, x, p_{i}), f(i, x, y) + c(y, p_{i+1}))$
 
时间复杂度为 $O(NL^2)$

初始化：$f[0][1][2] = 0$, 其他为正无穷
```python
import sys
input = sys.stdin.readline


if __name__ == "__main__":
    m, n = map(int, input().split())
    
    M = m+1
    N = n+1
    c = [[0] * M for i in range(M)]
    
    for i in range(1, M):
        c[i][1:M] = map(int, input().split())
    
    q = [0] * N
    q[0] = 3
    q[1:N] = map(int, input().split())
    
    f = [[[float("inf")] * M for i in range(M)] for j in range(N)]
    f[0][1][2] = 0
    
    for i in range(1, N):
        p = q[i-1]
        p1 = q[i]
        
        for x in range(1, M):
            for y in range(1, M):
                    if x == y or x == p or y == p: continue
                
                    f[i][x][y] = min(f[i][x][y], f[i-1][x][y] + c[p][p1])
                    f[i][p][y] = min(f[i][p][y], f[i-1][x][y] + c[x][p1])
                    f[i][x][p] = min(f[i][x][p], f[i-1][x][y] + c[y][p1])

    
    res = float("inf")
    
    for x in range(1, M):
        for y in range(1, M):
            if x == y or y == q[n] or x == q[n]: continue
        
            res = min(res, f[n][x][y])
                    
    print(res)
```

