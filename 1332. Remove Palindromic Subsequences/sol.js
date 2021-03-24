/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if(s.length<=1) return s.length
    if(isPal(s)) return 1
    return 2
};

const isPal = s =>{
    var p1=0
    var p2=s.length-1
    while(p1<=p2){
        if(s[p1]!=s[p2]) return false
        p1++
        p2--
    }
    return true
}