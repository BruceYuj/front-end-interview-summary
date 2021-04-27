#include<bits/stdc++.h>
using namespace std;
#define Re register int

const int N = 200005, K = 10, S = 1024;
struct info
{
	int l, d;
};
int n, m, f[N], ans[N];
bool cnt[N], res[S + 5];
vector<info> q[N];

inline int read()
{
	char c = getchar();
	int ans = 0;
	while (c < 48 || c > 57) c = getchar();
	while (c >= 48 && c <= 57) ans = (ans << 3) + (ans << 1) + (c ^ 48), c = getchar();
	return ans;
}

inline void add(int x, int y)
{
	while (x <= m) f[x] ^= y, x += x & -x;
}

inline int que(int x)
{
	int ans = 0;
	while (x) ans ^= f[x], x -= x & -x;
	return ans;
}

int main()
{
	n = read(), m = read();
	for (Re i = 0; i < n; ++i) cnt[read()] ^= 1;
	n = read();
	for (Re i = 0; i < n; ++i)
	{
		int u = read(), v = read();
		q[u].push_back(info{u, i}), q[v + 1].push_back(info{u, i});
	}
	for (Re i = m; i; --i)
	{
		if (cnt[i])
		{
			res[i % S] ^= 1;
			for (Re j = i, k = 0; j > 0; j -= S, ++k) add(max(1, j - S + 1), k), add(j + 1, k);
		}
		int u = q[i].size();
		for (Re j = 0; j < u; ++j)
		{
			int v = q[i][j].l, s = que(v) << K;
			for (Re k = 0; k < S; ++k)
			{
				if (!res[k]) continue;
				int w = (k - v) % S;
				if (w < 0) w += S;
				s ^= w;
			}
			ans[q[i][j].d] ^= s;
		}
	}
	for (Re i = 0; i < n; ++i) putchar(65 + (!ans[i]));
	return 0;
}
