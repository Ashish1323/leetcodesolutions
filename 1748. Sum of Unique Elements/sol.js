/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    var unique=[... new Set(nums)]
    var map=new Map()
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],{value:0})
        }
        else{
            map.set(nums[i],{value:1})
        }
        
    }    
    var sum=0
    for(let i=0;i<unique.length;i++){
        if(map.get(unique[i]).value==1) sum-=unique[i]
        sum+=unique[i]
    }
    
    return sum
};