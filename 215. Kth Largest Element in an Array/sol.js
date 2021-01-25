/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    for (var i = 1; i < nums.length; i++)
    for (var j = 0; j < i; j++)
        if (nums[i] < nums[j]) {
          var x = nums[i];
          nums[i] = nums[j];
          nums[j] = x;
        }
    if(nums.length==1) return nums
    for(i=nums.length-1;i>=0;i--){
         if(k==1) return nums[i]
         k--
    }
};