/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var s=[...nums].sort((a,b)=>a-b)
    return nums.map((v)=>s.indexOf(v))
};