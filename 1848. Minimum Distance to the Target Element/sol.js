/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    var min=Infinity
    for(i=0;i<nums.length;i++){
        if(nums[i]==target){
            if(Math.abs(i-start)<min) min= Math.abs(i-start)
        }
    }
    return min
};