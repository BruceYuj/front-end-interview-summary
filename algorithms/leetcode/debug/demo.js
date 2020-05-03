var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    let ans = [];

    for(let i = 0; i < candies.length; i++) {
        max = Math.max(max,  candies[i]);
    }

    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= max) ans.push(true);
        else ans.push(false);
    }

    return ans;
};

/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    let digits = [];
    let max = 0;
    let min = 0;
    let numCopy = num;
    
    while(numCopy > 0) {
        digits.unshift(numCopy % 10);
        numCopy = Math.floor(numCopy/10);
    }

    let i = 0;

    for(; i < digits.length; i++) {
        if(digits[i] < 9) break; 
    }
    if(i === digits.length) max = num;
    else {
        for(let j = 0; j < digits.length; j++) {
            max = 10*max + (digits[j] === digits[i] ? 9 : digits[j]);
        }        
    }


    if(digits[0] > 1) {
        for(let j = 0; j < digits.length; j++) {
            min = 10*min + (digits[j] === digits[0] ? 1 : digits[j]);
        }
    } else {
        let tmp = 1;
        for(; tmp < digits.length; tmp++) {
            if(digits[tmp] > 0 && digits[tmp] !== 1) break;
        }
        if(tmp === digits.length) min = num;
        else {
            for(let j = 0; j < digits.length; j++ ) {
                min = 10 *min + (digits[j] === digits[tmp] ? 0 : digits[j]);
            }            
        }

    }

    return max - min;
};
console.log(maxDiff(9));

// var checkIfCanBreak = function(s1, s2) {
//     s1 = s1.split('');
//     s2 = s2.split('');
//     s1.sort();
//     s2.sort();

//     let n = s1.length;
//     let i = 0;
//     let j = n-1;

//     for(let k = 0; k < n; k++) {
//         if(s1[j] >= s2[i]) {
//             j--;
//             i++;
//         } else {
//             break;
//         }
//     }

//     if(j === 0) return true;

//     i = 0;
//     j = n-1;
//     for(let k = 0; k < n; k++) {
//         if(s2[j] >= s1[i]) {
//             j--;
//             i++;
//         } else {
//             break;
//         }
//     }
//     if(j === 0) return true;

//     return false;
// };

var checkIfCanBreak = function(s1, s2) {
    let arr1 = new Array(26).fill(0);
    let arr1C = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);
    let arr2C = new Array(26).fill(0);
    let ans = true;

    for(let i = 0; i < s2.length; i++) {
        arr1[s1.charCodeAt(i) - 97]++;
        arr2[s2.charCodeAt(i) - 97]++;
        arr1C[s1.charCodeAt(i) - 97]++;
        arr2C[s2.charCodeAt(i) - 97]++;
    }

    
    for(let i = 0; i < 26; i++) {
        let isTrue = true;
        if(arr1[i] > 0) {
            let tmp = arr1[i];
            let j = i;
            while(tmp > 0) {
                if(arr2[j] >= tmp) {
                    arr2[j] -= tmp;
                    tmp = 0;
                    break;
                }
                else {
                    tmp -= arr2[j];
                    arr2[j] = 0;
                    
                    j++;
                }
                if(j == 26 && tmp > 0) {
                    isTrue = false;
                    break; 
                }
            }
        }
        if(!isTrue) {
            ans = false;
            break;
        }
    }
    if(ans) return true;

    for(let i = 0; i < 26; i++) {
        let isTrue = true;
        if(arr2C[i] > 0) {
            let tmp = arr2C[i];
            let j = i;
            while(tmp > 0) {
                if(arr1C[j] >= tmp) {
                    arr1C[j] -= tmp;
                    tmp = 0;
                    break;
                }
                else {
                    tmp -= arr1C[j];
                    arr1C[j] = 0;
                    j++;
                }
                if(j == 26 && tmp > 0) {
                    isTrue = false;
                    break; 
                }
            }
        }
        if(!isTrue) {
            ans = false;
            break;
        }
    }
    return ans;

};
console.log(checkIfCanBreak("szy","cid"));