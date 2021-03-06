/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    for(i=20;i>=0;i--){
        if(n==Math.pow(3,i)) return true
    }
    return false
};