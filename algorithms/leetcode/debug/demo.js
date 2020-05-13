var numberWays = function(hats) {
    let n = hats.length;
    let dp = new Array(n);
    for(let i = 0; i < n; i++) dp[i] = new Array(1<<41).fill(-1);
  
    return dfs(0, 0);
  
    function dfs(i, used) {
  
      if(i === n) {
        return 1;
      }
      if(dp[i][used] !== -1) return dp[i][used];
      let ans = 0;
  
      for(let j = 0; j < hats[i].length; j++) {
        if((used & (1 << hats[i][j])) === 0) {
          ans += dfs(i+1, used | (1 << hats[i][j]));
        }
      }
      dp[i][used] = ans;
      return ans;
    }
  }

console.log(numberWays([[1,2,3],[2,3,5,6],[1,3,7,9],[1,8,9],[2,5,7]]));
