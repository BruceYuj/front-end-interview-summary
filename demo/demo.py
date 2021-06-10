class Solution:
    def minFlips(self, s: str) -> int:
        da = db = 0
        a = '10'
        b = '01'
        n = len(s)

        for i in range(n):
            if s[i] != a[i%2]:
                da += 1
            
            if s[i] != b[i%2]:
                db += 1
        
        res = min(da, db)
        print(da, db)
        s = s + s

        for i in range(1, n):
            da1 = da 
            db1 = db
            if s[i-1] == '1':
                db1 -= 1
            else:
                da1 -= 1

            if s[i+n-1] == '1':
                if not (n & 1):
                    da = db1 + 1
                else:
                    db = da1 + 1
            else:
                if n & 1:
                    da = db1 + 1
                else:
                    db = da1 + 1
            
            res = min(res, da, db)
        
        return res

s = Solution()
ans = s.minFlips("01001001101")
print(ans)