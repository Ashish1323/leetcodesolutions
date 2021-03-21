/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(!nums) return nums
    if(!nums.left==1) return nums[0]
    if(nums.length==2) return Math.max(nums[0],nums[1])
    dp1=[nums[0], Math.max(nums[0], nums[1])]
    dp2=[0,nums[1]]
    for(i=2;i<nums.length-1;i++){
        dp1[i]=Math.max(nums[i]+dp1[i-2],dp1[i-1])
    }
     for(i=2;i<nums.length;i++){
        dp2[i]=Math.max(nums[i]+dp2[i-2],dp2[i-1])
    }
    
    return Math.max(dp2.pop(),dp1.pop())
    
};