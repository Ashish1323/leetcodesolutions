/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    var sum
    for(i=0;i<n;i++){
        sum=sum^start + 2*i
    }
    return sum
};