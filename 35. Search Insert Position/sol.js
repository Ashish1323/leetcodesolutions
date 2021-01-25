/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target==0) return 0
    var i=0 
    for(i=0;i<nums.length;i++){
        if(target<nums[i] || target==nums[i]) return i
    }
    return i  
  };