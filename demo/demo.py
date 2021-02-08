class Solution:
    def maxTurbulenceSize(self, A) -> int:
        n = len(A)
        if n <= 1: return n
        if n == 2:
            if A[0] != A[1]: return n
            else: return 1

        i = 0
        j = 1

        flag = False 
        if A[j] > A[j-1]: flag = True
        ans = 2
        while j+1 < n:
            if A[j+1] > A[j] and not flag:
                j += 1
                flag = not flag
                ans = max(ans, j-i+1)
            elif A[j+1] < A[j] and flag:
                j += 1
                flag = not flag
                ans = max(ans, j-i+1)
            
            else:
                if A[j+1] == A[j]:
                    i = j+1
                    j = i+1
                else:
                    i = j
                    j = j+1
                    if A[j] > A[j-1]: flag = False
                    else: flag = True 
        
        return ans

solution = Solution()
ans = solution.maxTurbulenceSize([0,1,1,0,1,0,1,1,0,0])

print(ans)