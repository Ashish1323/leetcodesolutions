/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(x, y) {
    if(y==0) return x
    else return getSum(x^y,(x&y) << 1)
};