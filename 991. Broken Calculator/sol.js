/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
    var r=0
    while(Y>X){
        Y= Y%2==1 ? Y+1: Y/2
        r++
    }
    return r+X-Y
};