/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    for(i=16;i>=0;i--){
        if(n==Math.pow(4,i)) return true
    }
    return false
};