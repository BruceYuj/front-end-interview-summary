class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        n = len(s)
        m = len(part)
        
        if n < m: return s
        
        while True:
            i = j = 0

            while i < len(s) and j < m:
                if s[i] != part[j]:
                    j = 0
                    i += 1
                else:
                    i += 1
                    j += 1
            print(i, j)
            if j == m:
                s = s[:i-m+1] + s[i+1:]
            else:
                return s

so = Solution()
ans = so.removeOccurrences("daabcbaabcbc", "abc")