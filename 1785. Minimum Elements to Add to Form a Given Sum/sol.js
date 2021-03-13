/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
    var val=0
    for(i=0;i<nums.length;i++){
        val+=nums[i]
    }
    goal=Math.abs(goal-val)
    
    return Math.ceil(goal/limit)
};