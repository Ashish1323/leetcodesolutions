/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var map=new Map()
    for (let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            nums.splice(i,1)
            i--
        }else
{        map.set(nums[i])
}
    }
};