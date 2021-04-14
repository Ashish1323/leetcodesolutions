/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    var matches=0
    while(n!=1){
        if(n%2==0){
          matches+=n/2
          n/=2  
        } 
        else {
            matches+=Math.floor(n/2)
            n=Math.floor(n/2)+1
        }
    }
    return matches
};s