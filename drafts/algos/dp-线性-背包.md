## 01 背包问题

1. 求最值/求合法方案数

1. [278. 数字组合](https://www.acwing.com/problem/content/280/)

$f(i, j)$ 表示前 i 个数中进行选择，和为 j 的方案数。

划分方式：最后一个数是否被选进行划分
- 没有选 - $f(i-1, j)$
- 选了 - $f(i-1, j-a[i])$

初始化：$f[i][0] = 1$, 其余为 0 

## 完全背包问题

1. 求最值/求合法方案数

1. [acwing 279. 自然数拆分](https://www.acwing.com/problem/content/description/281/)

题目转换成：有 $[1, N]$ 个物品，体积和编号相同，每个编号的物品有无数个，求在这 N 个物品中挑选形成体积为 N 的方案数。

$f(i, j)$ 表示前 i 个物品选择，得到体积为 j 的方案数
划分方式：
- 第 i 个物品选了 0 个 $f(i-1, j)$
- 选了 1 个 $f(i-1, j-i)$
- 选了 k 个 $f(i-1, j- k*i), j \geq k*i$

$f(i, j) = f(i-1, j)  + f(i-1, j-i) + ... + f(i-1, j-i*k)$

这样需要 $O(n^3)$ 的复杂度，需要优化

$f(i, j-i) = f(i-1, j-i) + ... + f(i-1, j-i*k)$

因此， $f(i, j) = f(i-1, j) + f(i, j-i)$，时间复杂度降低到 $O(n^2)$

初始化：$f(0, 0) = 1$，其余为 0

1. [acwing 280. 陪审团](https://www.acwing.com/problem/content/282/)

本题分析:
1. 从 N 个人中选择 M 个人
2. 选择的 |D-P| 最小，如果存在多个，保证 P+D 最大。输出方案。

已知 $D, P \in [0, 400]$，因此 $D-P \in [-400, 400]$

这里，由于有最大最小两个判断标准，且有固定的体积 M 个人。因此，我们需要在原有的状态表示上增加维度。

$f(i, j, k)$ 表示前 i 个人中已经选择了 j 个人，且当前的体积之差为 k 的所有方案的最大值。

$f(0, 0, 400) = 0$, 其余值为负无穷。

最终答案为 合法的最小的 abs(k) 的 f 即为答案所求。

**由于k的范围存在负数，因此我们得进行偏移映射。**

划分方式,求最大值：
- 选择第 i 个人: $f(i-1, j-1, k - (d[i]-p[i])) + d[i] + p[i]$
- 不选第 i 个人: $f(i-1, j, k)$


## 多重背包问题

解法一： 可以将其看成是 01 背包问题来解决。也就是说，将每一类物品中的每个商品都单独处理。

$f(i, j)$ 仍然表示前 i 个商品中背包容量为 j 的最大价值。

```python
if __name__ == "__main__":
    n, m = map(int, input().split())
    
    v = [0] * n
    w = [0] * n
    s = [0] * n
    
    for i in range(n):
        v[i], w[i], s[i] = map(int, input().split())
    
    f = [0] * (m+1)
    
    for  i in range(n):
        for j in range(1, s[i]+1):
            for k in range(m, v[i]-1, -1):
                f[k] = max(f[k], f[k-v[i]]+w[i])
    
    print(f[m])
```

此时的时间复杂度为 $O(nsm)$,能够处理的数据范围较小。

**多重背包的二进制优化**

上面朴素的解法是将每一类的每个物品都当作是一个单独的物品；也就是拆分成 $\sum(C_i)$ 个物品的 01 背包问题。

已知，任何一个整数 $p = a_0*2^0 + a_1*2^1 + a_2*2^2 + ... + a_k*2^k$。

$2^0, 2^1, 2^2, ... , 2^k$ 可以表示 $[0, 2^{k+1}-1]$ 中所有的数。

我们的目的是要有一种方式能够表示 $[0, c_i]$ 中的所有的数。

因此，我们先求出 $2^0+2^1+ ... + 2^p \leq c_i$ 的最大的 p，此时我们能够表示 $[0, 2^{p+1} -1]$ 中所有的数。

剩下的 $[2^{p+1}, c_i]$ 该如何表示呢？

我们设 $R_i = c_i - (2^{p+1} -1)$.

那么我们从 $2^0, 2^1, ... , 2^p, R_i$ 中选择，一定能够表示 $[R_i, R_i+2^{p+1}-1] => [R_i, c_i]$ 范围中的所有数


已知 $2^{p+1} > R_i$，那么表示 $2^{p+1} -1 \geq R_i$ 的，因此， $[0, R_i] \in [0, 2^{p+1}-1]$

因此， $2^0, 2^1, ... , 2^p, R_i$ 能够表示所有 $[0, c_i]$ 的数。

这样，我们可以将 c_i 个物品拆分成 p+2 个物品。时间复杂度变为 $O(nmlogc)$


```python


if __name__ == "__main__":
    n, m = map(int, input().split())
    
    v = []
    w = []
    
    for i in range(n):
        a, b, c = map(int, input().split())
        
        t = 1
        
        while c >= t:
            v.append(a*t)
            w.append(b*t)
            c -= t
            t *= 2
        
        if c > 0:
            v.append(a*c)
            w.append(b*c)
        
    
    f = [0] * (m+1)
    
    
    for i in range(len(v)):
        for j in range(m, v[i]-1, -1):
            f[j] = max(f[j], f[j-v[i]]+w[i])
    
    print(f[m])
    
```

**单调队列优化**：

我们再来仔细思考下多重背包问题的状态转移：
$f(i, j)$ 表示前 i 类物品，背包体积为 j 的最大价值

$f(i, j) = max (f(i-1, j),f(i-1, j- v_i)+ w_i, ...., f(i-1, j- c_i*v_i) + c_i*w_i$

在这里，我们可以通过滚动数组优化掉第一维，也就是通过两个一维数组来滚动求解：
$f(j) = max( f(j), f(j -v_i) + w_i, ... + f(j-k*v_i) + k*w_i) , k = min(j//v_i, c_i)$

我们设 $m = k*v_i + t$, 则上面的公式可以变成：
$f(k*v_i + t) = max(f(t) + k*w_i, f(t+v_i) + (k-1)*w_i + ... + f(t+k*v_i) + 0*w_i$

我们将 $[0, k*v_i+t] => [0, m]$ 中的所有 $f$ 写成下面的形式：

$f(0), f(v_i),   f(2*v_i), ... , f(k*v_i)$
$f(1), f(1+v_i), f(1+2v_i), ..., f(1+kv_i)$
...
$f(t), f(t+v_i), f(t+2v_i), ..., f(t+kv_i)$

这样我们相当于将 $[0, k*v_i+t]$ 分成了 $t+1 = v_i$ 类，每一类中的值都是在同类当中转换得到的。

这样，我们可以：
$f(t) = f(t)$
$f(t+v) = max(f(t)+w, f(t+v))$
$f(t+2v) = max(f(t) + 2w, f(t+v)+w, f(t+2v))$

我们期望能够通过单调队列快速的求出 t 类中的所有 f 值，需要将上面的公式进行转换：
$f(t) = f(t)$
$f(t+v) = max(f(t), f(t+v)-w) + w$
$f(t+2v) = max(f(t), f(t+v)-w, f(t+2v)-2w) + 2w$

因此，我们只要维护 $f(t+kv)-kw$ 就行。队列大小为 $c_i+1$

这样，我们能够在 $O(m)$ 的时间复杂求出 $f[i][0...m]$ 的所有值，也就是每一个阶段的 $f[0...m]$ 值，时间复杂度降低到 $O(nm)$

```python


if __name__ == "__main__":
    n, m = map(int, input().split())
    
    N = n+1
    M = m+1
    
    f = [[0] * M for i in range(N)]
    v = [0] * N
    w = [0] * N
    s = [0] * N
    
    for i in range(1, N):
        v[i], w[i], s[i] = map(int, input().split())
    
    q = [0] * M
    
    for i in range(1, N):
        
        for t in range(v[i]):
            hh = 0
            tt = -1
            for k in range((m-t)//v[i]+1):
                while hh <= tt and k - q[hh] > s[i]:
                    hh += 1
                
                while hh <= tt and f[i-1][t+q[tt]*v[i]] - q[tt] * w[i] < f[i-1][t+k*v[i]] - k * w[i]:
                    tt -= 1
                
                tt += 1
                q[tt] = k
            
                f[i][k*v[i]+t] = f[i-1][q[hh]*v[i]+t] - q[hh] * w[i] + k * w[i]
        
    print(f[n][m])
```


1. [acwing 281. 硬币](https://www.acwing.com/problem/content/283/)

本题属于多重背包模型：有 N 种物品，面值是体积，每种有 $s_i$ 个， M 是背包总容量。

本题不是最优化问题，是可行性问题。我们可以**依次考虑每种硬币是否能够被用于拼成最终的面值**，直接拆分法的时间复杂度为 $O(NCM)$ 
会超时。

```python
f = [False] * (m+1)

f[0] = True

for i in range(1, n+1):
    for j in range(1, s[i]+1):
        for k in range(m, a[i]-1, -1):
            f[k] |= f[k-a[i]]

ans = 0

for i in range(1, m+1):
    if f[i]: ans += 1

print(ans)
```

常见优化方式：
- 二进制优化： $O(NMlogC)$ ，超时
- 单调队列优化： $O(NM)$，需要优化常系数，因为队列操作比较耗时
    - 将二维转换成一维
    - 使用贪心优化

$g_j$ 表示从 $j$ 开始往左看，距离最近的 1 的距离。如果 $g_j > s_i$ 的话，表示当前队列中没有 1。

> 另外一种理解思路是，$g_j$ 表示 $f(j)$ 在阶段 i 时为 true 至少需要用多少枚第 i 类的硬币，尽量少的使用。

```python


if __name__ == "__main__":
    while True:
        n, m = map(int, input().split())
        if n == 0 and m == 0: break
    
        a = [0] * n
        s = [0] * n
        
        h = list(map(int, input().split()))
        a[:n] = h[:n]
        s[:n] = h[n:]
        
        f = [0] * (m+1)
        f[0] = 1
        
        for i in range(n):
            g = [0] * (m+1)
            
            for j in range(a[i], m+1):
                if not f[j] and f[j-a[i]] and g[j-a[i]] < s[i]:
                    f[j] = 1
                    g[j] = g[j-a[i]] + 1
        
        ans = 0
        
        for i in range(1, m+1):
            ans += f[i]
        
        print(ans)
```


