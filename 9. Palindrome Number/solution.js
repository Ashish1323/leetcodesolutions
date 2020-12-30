/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x=x.toString().split("")
    j=x.length-1
    if(x[0]=="-") return false  
    for(let i=0;i<x.length;i++,j--){
        if(x[i]!= x[j]) return false
    }
    return true  
  };