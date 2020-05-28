var generateParenthesis = function(n) {
    if(n === 0) return [];
    let res = [];
    let left = 0;
    let right = 0;

    backtrack('', 0, 0, n);

    return res;

    function backtrack(path, open , close, max) {
        if(path.length === 2*n) {
            res.push(path);
            return;
        }

        if(open < max) backtrack(path+'(', open+1, close, max);
        if(close < open) backtrack(path+')', open, close+1, max);

    }
};

console.log(generateParenthesis(3));