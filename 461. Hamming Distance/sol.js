/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var n=x^y // xor
    var dis=0
    while(n!=0){
        n= n & (n-1) //multiplying with previous
        dis++
    }
    return dis
};