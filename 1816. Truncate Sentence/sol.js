/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  var a=s.split(" ")
  var l=""
  for(i=0;i<k;i++){
      if(i==k-1) {
          l+=a[i] 
          break}
      l+=a[i]+" "
  }
    return l
};