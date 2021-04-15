/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    nums.sort((a,b)=>b-a);
    var map=new Map()
    for(i=0;i<nums.length;i++){
        if(!map.has(nums[i])) map.set(nums[i],0)
        var c=map.get(nums[i])
        c+=1
        map.set(nums[i],c)
    }
    let arr = []
  map.forEach((value, key) => arr.push([key, value]))
    arr.sort((a,b)=> a[1]-b[1])
    let r=[]
    for(i=0;i<arr.length;i++){
        while(arr[i][1]>0){
          r.push(arr[i][0])
            arr[i][1]--
        } 
    }
    return r
};