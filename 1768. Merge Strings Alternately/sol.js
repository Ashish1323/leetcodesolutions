/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var len1=word1.length
    var len2=word2.length
    var newStr=""
    var i=0
    var j=0
    while(len1 && len2){
        newStr=newStr+word1[i]
        newStr+=word2[j]
        i++
        j++
        len1--
        len2--
    }
    while(len1){
        newStr+=word1[i]
        i++
        len1--
    }
    while(len2){
        newStr+=word2[j]
        j++
        len2--
    }
    
    return newStr
};