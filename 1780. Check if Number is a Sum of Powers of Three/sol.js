/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    for(i=15;i>=0;i--){
        var x=Math.pow(3,i)
        if(x<=n) n-=x
        if(n==0) return true
    }
    return false
};