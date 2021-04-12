/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if(n==0) return 0
    var a=[0,1]
    for(i=2;i<n+1;i++){
        if(i%2==0) a.push(a[i/2])
        else a.push(a[Math.round(i/2)-1]+a[Math.round(i/2)])
    }
    return Math.max(...a)
};