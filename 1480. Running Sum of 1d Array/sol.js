/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var a=[]
    a[0]=nums[0]
    for(var i=1;i<nums.length;i++){
        a[i]=a[i-1]+nums[i]
    }
    return a
};