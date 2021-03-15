from typing import List

class Solution:
    def numSubarraysWithSum(self, a: List[int], t: int) -> int:
        def binary_search(l, r, x):
            while l < r:
                mid = (l+r) // 2
                if p[mid] >= x: r = mid
                else: l = mid+1
            return l
        
        def binary_search1(l, r, x):
            while l < r:
                mid = (l+r+1) // 2
                if p[mid] <= x: l = mid
                else: r = mid - 1
            return l

        n = len(a)
        p = [0] * (n+1)

        for i in range(1, n+1):
            p[i] = p[i-1] + a[i-1]
        
        ans = 0

        for i in range(1, n+1):
            if p[i] < t: continue
            x = p[i] - t

            l = binary_search(0, i-1, x)
            r = binary_search1(0, i-1, x)
            # print(l, r)

            ans += (r-l+1)

        return ans        
            

solution = Solution()
ans = solution.numSubarraysWithSum([0,0,0,0,0,0,1,0,0,0], 0)

print(ans)