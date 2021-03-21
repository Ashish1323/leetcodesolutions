/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    sum=0
    sum1=0
    j=0
    nums.push(0)
    // [10,20,30,5,10,50]
    for(i=0;i<nums.length;i++){
        //console.log(sum1)
        if(nums[i]<nums[i+1]){
            sum1+=nums[i]
        } else {
            sum1+=nums[i]
            j++
            if(j==1){
            sum=Math.max(sum1,sum)
            sum1=0
            j=0    
            }
        }
    }
    return sum
};