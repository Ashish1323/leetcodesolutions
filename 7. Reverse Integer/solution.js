/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const number = Math.abs(x).toString().split('').reverse().join('');

   if (number > Math.pow(2, 31) - 1) {
       return 0
   }
   x=x.toString()
   if(x[0]=="-"){
       let news=""
       for(i=1;i<x.length;i++){
           news+=x[i]
       }
       return "-"+[...news].reverse().join('')
   }
   return [...x].reverse().join('')
};