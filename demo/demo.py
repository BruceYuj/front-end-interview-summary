#
# 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
#
# min edit cost
# @param str1 string字符串 the string
# @param str2 string字符串 the string
# @param ic int整型 insert cost
# @param dc int整型 delete cost
# @param rc int整型 replace cost
# @return int整型
#
class Solution:
    def minEditCost(self , str1: str, str2: str, ic: int, dc: int, rc: int) -> int:
        # write code here
        n = len(str1)
        m = len(str2)
        
        dp = [[0] * (m+1) for i in range(n+1)]
        
        for i in range(1, n+1):
            dp[i][0] = dp[i-1][0] + dc
          
        for i in range(1, m+1):
            dp[0][j] = dp[0][j-1] + ic
        
        for i in range(1, n+1):
            for j in range(1, m+1):
                if str1[i] == str2[j]:
                    dp[i][j] = dp[i-1][j-1]
                else:
                    dp[i][j] = min(dp[i-1][j-1]+rc, dp[i-1][j]+dc, dp[i][j-1] + ic)
        
        return dp[n][m]