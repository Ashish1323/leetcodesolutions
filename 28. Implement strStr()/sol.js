/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle) return 0
    if (needle === haystack) return 0;

    var len=needle.length
    for(let i=0;i<haystack.length;i++){
        //console.log(substre(haystack,i,len))
        if(haystack.slice(i,i+len)==needle) return i
    }
    return -1
};