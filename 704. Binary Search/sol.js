/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //if(nums.length==1 && target==nums[0]) return 0
    return bs(nums,0,nums.length,target)
};

function bs(a,l,h,key){
    if(l>h) return -1
    var mid=Math.floor((l+h)/2)
    if(a[mid]==key) return mid
    if(a[mid]>key) return bs(a,l,mid-1,key)
    else return bs(a,mid+1,h,key)
}