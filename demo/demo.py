from typing import List

<<<<<<< HEAD
class Solution:
<<<<<<< HEAD
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
=======
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
=======
>>>>>>> 0ee5c8a9f535cab9e0e815f620ef631f76cb61b5


if __name__ == "__main__":
    
    while True:
        
        h = list(map(int, input().split()))
        n = h[0]
        
        if n == 0: break
        
        a = [-1] * (n+2)
        a[1:n+1] = h[1:]
        
        st = [0]
        ans = 0
<<<<<<< HEAD

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
>>>>>>> 91f64733a5364f4d5f74198b61df88a09a2723c2

print(ans)
=======
        for i in range(1, n+2):
            print(i)
            if a[st[-1]] < a[i]:
                st.append(i)
            else:
                while st and a[st[-1]] >= a[i]:
                    t = st.pop()
                    ans = max(ans, a[t] * (i - st[-1]-1))
                st.append(i)
        
        print(ans)
    
>>>>>>> 0ee5c8a9f535cab9e0e815f620ef631f76cb61b5
