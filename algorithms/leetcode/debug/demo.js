/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if(nums.length <= 1) return nums;

    let n1 = undefined;
    let n2 = undefined;
    let cnt1 = 0;
    let cnt2 = 0;

    for(let i = 0; i < nums.length; i++) {
        if(cnt1 === 0) {
            n1 = nums[i];
            cnt1++;
        } else if(nums[i] === n1) cnt1++;
        else if(cnt2 === 0) {
            n2 = nums[i];
            cnt2++;
        }else if(n2 === nums[i]) cnt2++;
        else {
            cnt1--;
            cnt2--;
        }
    }

    cnt1 = 0;
    cnt2 = 0;

    for(let i = 0; i < nums.length; i++) {
        if(n1 === nums[i]) cnt1++;
        if(n2 === nums[i]) cnt2++;
    }

    let ans = [];
    if(cnt1 > Math.floor(nums.length/3)) ans.push(n1);
    if(cnt2 > Math.floor(nums.length/3)) ans.push(n2);

    return ans;
};
console.log(majorityElement([0,-1,2,-1]));