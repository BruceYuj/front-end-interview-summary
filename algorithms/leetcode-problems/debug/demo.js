/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let helper = s.trim().split(/\s+/);

    let start = 0;
    let end = helper.length - 1;

    while(start < end) {
        helper[start], helper[end] = helper[end], helper[start];
        start++;
        end--;
    }

    return helper.join(' ');

};


console.log(reverseWords("  hello world!  "));