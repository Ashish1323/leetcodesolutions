/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var a=[]
    a[0]=nums[0]
    var b=[]
    var f=[]
    for(i=1;i<n;i++){
        a.push(nums[i])
    }
    for(var i=n;i<nums.length;i++){
        b.push(nums[i])
    }
    for(i=0;i<a.length;i++){
        f.push(a[i])
        f.push(b[i])
    }
    return f
    
};