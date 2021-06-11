
[什么是概率？](https://zhuanlan.zhihu.com/p/58995841)


[837. 新21点](https://leetcode-cn.com/problems/new-21-game/)

题目要求：在小于 k 时可以抽取。也就是最多可以在 k-1 的时候抽取，得到 $[k+1, k+w]$ 时会暂停。并且每个数的概率是相等的， $1/w$。

题目求最后得分不超过 N 的概率是多少。假设不超过 N 表示成功 - 1，超过 N 表示失败 - 0。那么答案就是最后成功的概率。

假设 $f(i)$ 从 i 开始抽取，最后获胜的概率是多少， $f(0)$ 就是答案。

初始化： $f(k+1, ... , min(k+w, N)) = 1$, $f(N+1, ... , k+w) = 0$

时间复杂度为 $O(nk)$

观察，我们会发现，内层循环是一个固定长度的滑动窗口，因此，可以优化：$O(n)$


## reference
1. https://wenku.baidu.com/view/1c41152de2bd960590c677a8.html
2. https://wenku.baidu.com/view/90adb02acfc789eb172dc8a8.html
3. https://wenku.baidu.com/view/56147518a8114431b90dd81e.html
4. https://www.acwing.com/blog/content/1723/

