/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var a=[...nums]
    for(i=0;i<nums.length;i++){
        a[(i + k) % nums.length] = nums[i];
    }
    for(i=0;i<nums.length;i++) nums[i]=a[i]
    //return a
};