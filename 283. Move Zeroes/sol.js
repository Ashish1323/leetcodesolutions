/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var array=[]
    var count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0) count ++
        else array.push(nums[i])
    }
    while(count>0){
        array.push(0)
        count--
    }
    for(let i=0;i<array.length;i++){
        nums[i]=array[i]
    }  
  };