/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    var a=[]
    for(i=0;i<nums.length;i++){
        a.insert(index[i],nums[i])
    }
    return a
};


Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};