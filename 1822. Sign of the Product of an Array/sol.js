/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    var v=1
    for(var i=0; i<nums.length;i++){
        //console.log(typeof(nums[i]))
        v*=nums[i]
    }
    //console.log(v)
    return Math.sign(v)
};