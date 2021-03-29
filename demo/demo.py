class Solution:
    def countPairs(self, n: int, edges, queries):
        cnt = [[0, i] for i in range(n+1)]
        
        for x in edges:
            u, v = x

            cnt[u][0] += 1
            cnt[v][0] += 1
        
        cnt.sort()
        
        ans = [0] * len(queries)
        
        for i in range(len(queries)):
            x = queries[i]
            l = 0
            r = n
            
            while l < r:
                mid = (l+r) // 2
                if cnt[mid][0] > x:
                    r = mid
                else:
                    l = mid+1
            
            tmp = (n-l+1)*(l-1) + (n-l+1)*(n-l)//2
            
            ans[i] = tmp
                
        return ans
                
            

solution = Solution()
ans = solution.countPairs(5,[[1,5],[1,5],[3,4],[2,5],[1,3],[5,1],[2,3],[2,5]],[1,2,3,4,5])

print(ans)