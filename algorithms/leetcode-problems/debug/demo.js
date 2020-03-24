const backPack = function (m, A) {
    let n = A.length;
    let dp = new Array(m+1).fill(0);
    
    for(let i = 0; i < n; i++)
        for(let j = 1; j <= m; j++) {
            dp[j] = Math.max(dp[j], j >= A[i] ?(dp[j-A[i]] + A[i]) : 0);
        }
        
    return dp[m];
}
backPack(10, [3,4,8,5]);