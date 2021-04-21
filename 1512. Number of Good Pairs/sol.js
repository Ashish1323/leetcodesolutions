/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    var c=0
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
            if(nums[i]==nums[j] && i<j) c++
        }
    }
    return c
};