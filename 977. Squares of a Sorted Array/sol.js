/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var a=[]
    for(i of nums) a.push(Math.pow(i,2))
    return a.sort((a,b)=> a-b)
};