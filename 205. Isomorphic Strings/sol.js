/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var hashs = {};
    var hasht = {};
    
    for(var i = 0; i < s.length; i++) {
        if(hashs[s[i]] == undefined) hashs[s[i]] = i;
        if(hasht[t[i]] == undefined) hasht[t[i]] = i;
        if(hashs[s[i]] != hasht[t[i]]) return false;
    }
    return true;

};