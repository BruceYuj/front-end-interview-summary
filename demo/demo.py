class Solution:
    def maxSumMinProduct(self, nums) -> int:
        
        nums = [0] + nums + [0]
        
        n = len(nums)
        s = [0] * n
        st = []
        ans = 0
        
        for i in range(1, n):
            s[i] = s[i-1] + nums[i]
        
        for i in range(n):
            if not st or nums[st[-1]] <= nums[i]:
                st.append(i)
            
            while nums[st[-1]] > nums[i]:
                t = st.pop()
            
                ans = max(ans, (s[i-1]-s[st[-1]])*nums[t])
        
        return ans
    

so = Solution()
ans = so.maxSumMinProduct([2,3,3,1,2])