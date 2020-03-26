/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */


var wordBreak = function(s, wordDict) {
    let map = {};
    for(let i = 0; i < wordDict.length; i++) {
        map[wordDict[i]] = true;
    }
    let dp = new Array(s.length+1);
    for(let i = 0; i < s.length; i++) dp[i] = [];

    dp[s.length] = [''];

    for(let i = s.length - 1; i >= 0; i--) {
        let path = [];
        for(let j = i; j < s.length; j++) {
            let word = s.slice(i, j+1);
            if( map[word]) {
                for(let k = 0; k < dp[j+1].length; k++) {
                    let tmp = word + (dp[j+1][k].length === 0 ? '':' ') +  dp[j+1][k]; 
                    path.push(tmp);
                }
            }
        }
        dp[i] =  path;
    }
    return dp[0];
};

wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"])