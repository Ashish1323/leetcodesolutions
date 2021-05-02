/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var max=Math.max(...candies)
    var res=[]
    for(i of candies){
        if(i+extraCandies>=max) res.push(true)
        else res.push(false)
    }
    return res
};