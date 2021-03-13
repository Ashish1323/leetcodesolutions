/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    var f=s.indexOf('1')
    var l=s.lastIndexOf('1')
    var i=f
    console.log(f,l)
    while(s[i]==="1") i++
    
    return i-1==l
};