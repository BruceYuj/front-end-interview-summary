/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(!matrix.length || !matrix[0].length) return 0;

    let m = matrix.length;
    let n = matrix[0].length;
    let maxLen = 0;
    let up = new Array(n+1).fill(0);
    let down = new Array(n+1).fill(0);


    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            if(matrix[i-1][j-1] === '1') {
                down[j] = Math.min(up[j], up[j-1], down[j-1]) + 1;
                maxLen = Math.max(maxLen, down[j]);
            }else {
                down[j] = 0;
            }
        }
        [up, down] = [down, up];
    }

    return maxLen * maxLen;
};

maximalSquare([["1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","0","0","0"],["0","1","1","1","1","0","0","0"]]);