/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(!nums) return 0
    if(nums.length==1) return nums[0]
    if(nums.length==2) return  Math.max(nums[0],nums[1])
    var dp=[]
    dp[0]=nums[0]
    dp[1]=Math.max(nums[0],nums[1])
    for(i=2;i<nums.length;i++){
        dp[i]=Math.max(nums[i]+ dp[i-2],dp[i-1])
    }
    
    return dp[nums.length-1]
};