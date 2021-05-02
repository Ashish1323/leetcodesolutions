/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let res = n.toString(k);
    var sum=0
    for(a of res) sum+=Number(a)
    return sum
}