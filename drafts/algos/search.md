## 搜索的进阶
在学完基础的 BFS 和 DFS 后，一般性搜索类题目都不存在难点了。

通常来讲，搜索类题目属于一类 **思路很好懂，代码实现较复杂** 的题目。


## flood fill
flood fill 算法算是搜索算法的具体的一个应用，既可以通过 BFS 来完成，也可以通过 DFS 来完成，但由于 DFS stack 递归深度一般都会有限制，我们一般会通过 BFS 的 queue 来实现算法。

算法根据是否考虑结点对角线方向来分为 **四路算法** 和 **八路算法**。

**那么该如何让题目稍微提高一点呢？**
> 在出题的时候和其他技巧进行结合。


对于 flood fill 算法通常被用来解决什么问题呢？
1. 求出给定图中的连通块数量，如 [acwing 1097](https://www.acwing.com/problem/content/1099/)

这是最基本、经典的题目之一。

我们在基础上可以结合其他技巧来增加题目的难度，比如：
- flood fill + 位运算：[acwing 1098 城堡问题](https://www.acwing.com/problem/content/1100/)
- flood fill + 额外判断：[acwing 1106. 山峰和山谷](https://www.acwing.com/problem/content/1108/)


## 最短路模型
这里，bfs 处理的最短路模型具体指的是什么呢？
> 将题目转化成有向图，有向图的边长为 1。求起点到终点的最短距离。

而题目的难点往往在于**如何将题意转换成有向图**。

比如 [acwing 1076 迷宫问题](https://www.acwing.com/problem/content/1078/)
> 起点开始，相邻的点如果为 0,则表示存在一条边。

那么，很显然，bfs 的最短路模型属于**图论中求单源最短路的特例**，只是我们不需要**显式的建图而已**，我们在**入队**时**隐式的边已经建好了**。


## 多源 BFS
多源 BFS 的通用解题思路只需要 **虚拟一个公共起始节点** 即可。

## 最小步数模型
**最小步数模型**类似于 **最短路模型**，两者的区别在于：
最小步数模型是将某个物体当中一个状态来延展（比如一个矩阵）

## 双端队列广搜
通常来讲，**BFS** 的问题可以转换为 **图论** 问题。换句话说， **BFS** 问题就是简化的 **图论** 问题。

那么什么是 **双端队列** 呢？也就是具有 **单调性的队列**，两头都可以添加元素，但是取元素只从头部取。

[175. 电路维修](https://www.acwing.com/problem/content/177/)

题意抽象为 **(0, 0) 到 (r, c) 点的最短距离， 边由格子里的元件方向决定，同方向边长为 0， 需要转动边长为 1**。这样就转换成 **单源最短路问题**，我们也就可以通过 **dijkstra 算法**解决问题。

而本题的特殊性质可以优化 **堆版本的 dijkstra 算法**：
1. $r_n+c_m$ 如果是奇数的话，一定无法到达
2. heap 本身的作用是每次在 $logm$ 时间取出最短的 $dist$。而由于本题的边长要么为 $0$, 要么为 $1$。因此我们可以利用 **双端队列** 替代 **heap**。

每次遇到需要插入的新的点，如果边长为 0，则插入队列左边，如果为 1，则插入队列右边。仍然可以保证队列里面距离起点的单调性。

```python
from collections import deque

def bfs():
    dist[0][0] = 0
    dx = [-1, -1, 1, 1]
    dy = [-1, 1, 1, -1]
    ix = [-1, -1, 0, 0]
    iy = [-1, 0, 0, -1]
    chs = '\\/\\/'
    
    qu = deque()
    qu.append((0,0))
    
    while qu:
        t = qu.popleft()
        
        if vis[t[0]][t[1]]: continue
        vis[t[0]][t[1]] = True
        
        for i in range(4):
            x = t[0] + dx[i]
            y = t[1] + dy[i]
            
            if x < 0 or x > n or y < 0 or y > m: continue
            
            r, c = t[0] + ix[i], t[1] + iy[i]

            diff = 1
            if g[r][c] == chs[i]: diff = 0
            
            d = diff + dist[t[0]][t[1]]
            if d < dist[x][y]:
                dist[x][y] = d
                if diff: qu.append((x, y))
                else: qu.appendleft((x, y))
    
    return dist[n][m]
    
if __name__ == "__main__":
    cnt = int(input())
    
    while cnt:
        cnt -= 1
        
        n, m = map(int, input().split())
        g = [[] for i in range(n)]
        dist = [[float("inf")] * (m+1) for i in range(n+1)]
        vis = [[False] * (m+1) for i in range(n+1)]
        
        for i in range(n):
            g[i] = input()
        
        if (n+m) & 1: print("NO SOLUTION")
        else:
            print(bfs())
```

## 双向广搜
双向广搜本质就是对于 **基本 BFS 的剪枝**。

如果普通 BFS 搜索的步骤过多，那么很容易 TLE。