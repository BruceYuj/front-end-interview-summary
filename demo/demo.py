class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        n = len(s)
        l = r = 0
        cnt = [0,0,0]
        ans = window = 0
        for i in range(n):
            if i != 0:
                ch1 = ord(s[i]) - 97
                cnt[ch1] -= 1
                if cnt[ch1] == 0: window -= 1
            
            while r < n and window < 3:
                ch = ord(s[r]) - 97
                cnt[ch] += 1
                if cnt[ch] == 1: window += 1
                r += 1
            if window == 3:
                ans += n-r+1
        
        return ans
            
                
            

solution = Solution()
ans = solution.numberOfSubstrings("abcabc")

print(ans)