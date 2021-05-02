/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var mix=nums1.concat(nums2)
    mix.sort((a,b)=>a-b)
    if(mix.length%2==0){
         return (mix[Math.round(mix.length/2)]+ mix[Math.round(mix.length/2)-1])/2
    }
    else{
        return mix[Math.round(mix.length/2)-1]
    }
};