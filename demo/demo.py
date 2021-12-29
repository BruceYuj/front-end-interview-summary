from collections import defaultdict

class Solution:
    def countPairs(self, arr) -> int:
        h = [1]
        MOD = 10 ** 9 + 7
        ans = 0

        for i in range(21):
            h.append(h[-1]*2)
        
        cnt = defaultdict(int)

        for t in arr:
            cnt[t] += 1
        
        # print(cnt)
        for i in range(22):
            for x in cnt:
                y = h[i] - x
                if x < y:
                    ans += cnt[x] * cnt[y]
                elif x == y:
                    ans += cnt[x] * (cnt[x] - 1)
        
        return ans % MOD


so = Solution()
ans = so.countPairs([1,3,5,7,9])