/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let n = s.length;
    let num = '';
    let encoded = '';
    let stack = [];

    let ans = '';

    for(let i = 0; i < n; i++) {
        if(s[i] === ']') {
            let status = 0;
            while(stack.length) {
                let top = stack.pop();
                let code = top.charCodeAt(0);
                if(top === '[' && status === 0) {
                    status = 1;
                    continue;
                }
                if(code >= 48 && code <= 57 && status === 1) {
                    status = 2;
                    num= top + num;
                    continue;
                }
                if(status === 0)encoded = top + encoded;
                else {
                    stack.push(top);
                    break;
                }
            }
            let count = parseInt(num);
            if(num === '' && encoded.length) {
                stack.push(encoded);
            } else {
                let tmp = '';
                while(count) {
                    tmp += encoded;
                    count--;
                }
                stack.push(tmp);
            }
            num = '';
            encoded = '';
        }else {
            stack.push(s[i]);
        }
        
    }

    for(let i = 0; i < stack.length; i++) {
        ans += stack[i];
    }
    return ans;
};

console.log(decodeString("100[leetcode]"))