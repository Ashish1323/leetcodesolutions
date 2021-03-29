/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var map=new Map()
    for(i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1)
        }
        else{
            var count=map.get(nums[i])
            count+=1
            map.set(nums[i],count)
        }
    }
    var ar=[...map.entries()]
    var max=0
    var m=0
    for(i=0;i<ar.length;i++){
        if(ar[i][1]>max){
            max=ar[i][1]
            m=ar[i][0]
        }
    }
    return m
};