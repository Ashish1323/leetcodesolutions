// time O(n) space O(n)
var removeOuterParentheses = function(S) {
    let result = ''
    let level = 0
    
    for(const item of S) {
        if(item === ')') {
            level--
        }
        if(level >= 1) {
            result += item                
        }
        if(item === '(') {
            level++
        }
    }
    
    return result
};