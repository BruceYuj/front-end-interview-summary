/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let dp = new Array(s.length).fill(s.length);
    let palindrome = new Array(s.length);
    for(let i = 0; i < s.length; i++) palindrome[i] = new Array(s.length).fill(false);

    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < s.length; j++) {
            if(j <= i) {
                palindrome[i][j] = true;
                continue;
            }
            palindrome[i][j] =  s[i] === s[j] && palindrome[i+1][j-1];
        }
    }

    dp[0] = 0;
    for(let i = 1; i < dp.length; i++) {
        if(palindrome[0][i]) {
            dp[i] = 0;
            continue;
        }
        for(let j = 0; j < i; j++) {

            if(palindrome[j+1][i]) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }

    return dp[s.length-1];
};

minCut("aabbc");