  /**
   * @param {number[]} prices
   * @return {number}
   */
var maxProfit = function(prices) {
    let n = prices.length;
    let res = 0;
    let min = prices[0];
    helper(0, n-1);
    
    return res;

    function helper(i, end) {
        if(i >= end) return 0;
        if(i > 0 && min > prices[i-1]) min = prices[i-1];
        if(prices[i] > min) {
            res = Math.max(res, prices[i] - min + helper(i+1, end));
        } else {
            res = helper(i+1, end);
        }
    }
};

maxProfit([7,1,5,3,6,4]);