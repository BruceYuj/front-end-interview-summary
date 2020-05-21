/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 0) return '';
    let  max = 0;
    let ans = null;

    for(let i = 0; i < s.length; i++) {
        let tmp1 = expandByIndex(i, i);

        let tmp2 = expandByIndex(i, i+1);

        let len1 = (tmp1-1) * 2 + 1;
        let len2 = tmp2 * 2;

        if(len1 > max) {
            max = len1;
            ans = [i-tmp1+1, i+tmp1-1];
        }

        if(len2 > max) {
            max = len2;
            ans = [i-tmp2, i+tmp2+1];
        }
    }

    return s.slice(ans[0], ans[1]+1);


    function expandByIndex(i, j) {
        let step = 0;
        while(i >= 0 && j < s.length && s[i] === s[j]) {
            i--;
            j++;
            step++;
        }

        return step;
    }
};

console.log(longestPalindrome('cbbd'));