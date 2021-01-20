/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var set=new Set()
    for(let i=0; i<nums.length;i++){
        if(!set.has(nums[i])){
            set.add(nums[i])
        }
        else{
            return nums[i]
        }
    }
};