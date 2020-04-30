/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
 function MountainArray(arr) {
    this.arr = arr;
    this.get = function(index) {
        return this.arr[index];
    };
    this.length = function() {
        return this.arr.length;
    };
};


/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let n = mountainArr.length()
    let peek = getPeek(mountainArr, n);

    let ans = binarySearch(mountainArr, 0, peek, target, true);

    if(ans !== -1) return ans;

    return binarySearch(mountainArr, peek+1, n-1, target, false);

    function binarySearch(arr, left, right, target, flag) {
        let lo = left;
        let hi = right;

        while(lo <= hi) {
            let mid = lo + Math.floor((hi-lo)/2);
            let midVal = arr.get(mid);
            if(midVal === target) return mid;
            if(!((midVal < target) ^ flag)) lo = mid+1;
            else hi = mid-1;
        }

        return -1;
    }

    function getPeek(arr, len) {
        let lo = 0;
        let hi = len-1;

        while(lo < hi) {
            let mid = lo + Math.floor((hi-lo)/2);
            if(arr.get(mid) < arr.get(mid+1)) lo = mid+1;
            else hi = mid;
        }

        return lo;
    }
};
console.log(findInMountainArray(2, new MountainArray([1,2,3,4,5,3,1])));