/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
        if (s == t) {
        return true;
    }
    
    let j = 0;
    
    for (let i = 0; i < t.length; i++) {
        if (s[j] === t[i]) {
            j++;
        }
    }
    
    return j === s.length;
};

function sub(i,j,s,t){
    if(i>s.length || j>t.length) return false
    if(s[i]==t[j]) return true
    var left=sub(i+1,s,t)
    var right =sub(i,j+1,s,t)
    if(left && right) return true
    else
        return false
    
}