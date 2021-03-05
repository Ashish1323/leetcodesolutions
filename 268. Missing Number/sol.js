/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var set= new Set(nums)
    for(var i=0;i<nums.length+1;i++){
        if(!set.has(i)) return i
    }
};