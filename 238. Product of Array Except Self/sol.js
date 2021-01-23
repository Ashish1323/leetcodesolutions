/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left=[]
    let right=[]
    left[0]=1
    right[nums.length-1]=1
    var product=1
    for(let i=1;i<nums.length;i++){
        product=product*nums[i-1]
        left[i]=product
    }
    var product=1
    for(let j=nums.length-2;j>=0;j--){
        product=product*nums[j+1]
        right[j]=product
    }
    for(i=0;i<nums.length;i++){
        nums[i]=left[i]*right[i]
    }
   return nums 
};

// 1,2,3,4
// 1, 1  ,2  ,6- left
// 24,12,4,1- right