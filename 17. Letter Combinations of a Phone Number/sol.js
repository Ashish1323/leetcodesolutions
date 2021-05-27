/**
 * @param {string} digits
 * @return {string[]}
 */


var letterCombinations = function(digits) {
    var keypad=["", '', 'abc', 'def', 'ghi','jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

    var res=[]
    if(!digits.length) return []

    function subs(s,ans) {
    if (s.length== 0)
    {
        res.push(ans)
        return;
    }
    
    var ch=s[0]
    var code=keypad[parseInt(ch)]
    var ros=s.substr(1)
    for(var i=0;i<code.length;i++){
        subs(ros,ans+code[i])
    }
}
    
    subs(digits,"")
    return res
};

