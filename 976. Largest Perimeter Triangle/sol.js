/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b)=> b-a)
    //console.log(nums)
    var res=[]
    for(i=nums.length-3;i>=0;i--){
        if(nums[i]+nums[i+1]> nums[i+2] && nums[i+2]+nums[i]> nums[i+1] && nums[i+2]+nums[i+1]> nums[i]) res.push(nums[i]+nums[i+1]+nums[i+2])
    }
    //console.log(res)
    return res.length ? Math.max(...res) : 0
};