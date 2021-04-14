/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var s=num.toString()
    while(s.length>2 || s.length==2){
        s=num.toString()
        var n=0
        for(i=0;i<s.length;i++){
            n+=parseInt(s[i])
        }
        num=n
    }
    return num
};