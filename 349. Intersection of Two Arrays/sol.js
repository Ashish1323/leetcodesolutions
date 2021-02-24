/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var common=[]
    for(let i=0;i<nums2.length;i++){
        for(let j=0;j<nums1.length;j++){
            if(nums2[i]==nums1[j]) common.push(nums2[i])
        }
    }
    var set=new Set(common)
    common=[... set]
    return common
};