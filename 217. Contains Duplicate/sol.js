/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var set= new Set(nums)
    return set.size<nums.length
};