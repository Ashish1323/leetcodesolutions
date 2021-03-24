/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  var list=[]
  list[0]=1
    for(var i=1;i<nums.length;i++){
        list[i]=1
        for(var j=0;j<i;j++){
            if(nums[i]>nums[j] && list[i]<list[j]+1){
                list[i]=list[j]+1
            }
        }
    }
    return Math.max(...list)
};