/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let array=[1,1]
    for( i=2; i<=n; i++){
        array.push(array[i-1]+array[i-2])
    }
    return array[n]
};