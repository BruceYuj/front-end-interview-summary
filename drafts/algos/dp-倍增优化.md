

通常来讲，dp 按照阶段进行线性增长，而倍增优化就是将线性增长优化为成倍增长。

倍增的思想应用在很多地方，比如：
- 区间最值 ST 算法， $f(i, j) 表示 $[i, i + 2^j-1]$ 子区间的最大值。此处的阶段就是区间的长度，区间的左端点 i 是附加的维度。因此在 ST 的实现当中，外层循环为区间长度以 2 为底的对数，内层循环为左端点。状态转移时，从长度为 $2^{i-1}$ 转移到 $2^i$。 
- 多重背包的二进制优化
- LCA 的倍增应用