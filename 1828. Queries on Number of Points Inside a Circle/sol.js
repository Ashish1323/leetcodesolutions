/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    var operation=0
    for(var i=0;i<nums.length;i++){
        while((nums[i]>=nums[i+1])){
            nums[i+1]++
            operation++
        } 
    }
    return operation
};


