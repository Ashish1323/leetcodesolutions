/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    var m=(1 << maximumBit)-1
    //console.log(m)
    var total=0
    var v=[]
    for(var i of nums){
        total^=i
    }
    for(i=nums.length-1;i>=0;i--){
        console.log(total)
        var ans=total^m
        v.push(ans)
        total=total^nums[i];
    }
    return v
};