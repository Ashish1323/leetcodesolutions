/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    var res=""
    for(i=0;i<s.length;i++){
        if(s[i].charCodeAt(0)> 46 && s[i].charCodeAt(0)< 58){
            res+=String.fromCharCode(s[i-1].charCodeAt(0) + Number(s[i]))
    } 
        else {
            res+=s[i]
        }
    }
    
    return res
};