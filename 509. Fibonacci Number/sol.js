/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     if(n==0) return 0
//     if(n==1) return 1
//     return fib(n-1)+fib(n-2)
// };

// Iterative
// var fib = function(N) {
//   if (N === 0 || N === 1) return N;
  
//   let a = 0;
//   let b = 1;
//   let i = 2;
  
//   for (; i <= N; i += 1) {
//     const temp = a + b;
//     a = b;
//     b = temp; 
//   }
  
//   return b;
// };


const fib =(n) => {
    let a  = [ 0,1];
    for(let i = 2 ; i <= n ; i++){
        a[i] = a[i -1 ] + a[i -2 ]
        
    }
    return a[n]
};