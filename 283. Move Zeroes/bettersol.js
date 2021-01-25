/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]==0 && nums[j]!=0){
                temp=nums[i]
                nums[i]=nums[j]
                nums[j]=temp
            }
        }
    }
};