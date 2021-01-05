/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var set=new Set()
    for(let i=0; i<nums.length;i++){
        if(!set.has(nums[i])){
            set.add(nums[i])
        }
        else if (set.has(nums[i])){
            set.delete(nums[i])
        }
    }
    return set.values().next().value
};