/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */


var wordBreak = function(s, wordDict) {
    let map = {};
    for(let i = 0; i < wordDict.length; i++) map[wordDict[i]] = true;

    let memo = new Array(s.length).fill(-1);

    let ans = helper(0);
    return ans[1].map(elem => {
        return elem.join(' ');
    })

    function helper(index) {
        if(index >= s.length) return [true, []];
        if(memo[index] !== -1) return memo[index];

        let path = [];
        let isSucceed = false;
        for(let i = index; i < s.length; i++) {
            let word = s.slice(index, i+1);
            if(map[word]) {
                let tmp = helper(i+1);
                if(tmp[0]) {
                    isSucceed = true;
                    if(!tmp[1].length) {
                        path.push([word]);
                        continue;
                    }
                    for(let j = 0; j < tmp[1].length; j++) {
                        path.push([word, ...tmp[1][j]]);
                    }
                }
            }
        }

        memo[index] = [isSucceed, path];
        return memo[index];
    }
};

wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"])