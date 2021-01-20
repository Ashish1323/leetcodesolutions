/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function(n,cache={}) {
//     if (n==0 || n==1) return n
//     if (n==2) return 1
//     if(cache[n])
//         return cache[n];
//     cache[n]=tribonacci(n-1, cache) + tribonacci(n-2, cache) + tribonacci(n-3, cache);
//     return cache[n];
// };

const tribonacci =(n) => {
    let a  = [ 0,1,1];
    for(let i = 3 ; i <= n ; i++){
        a[i] = a[i -1 ] + a[i -2 ] + a[i -3 ]
        
    }
    return a[n]
};