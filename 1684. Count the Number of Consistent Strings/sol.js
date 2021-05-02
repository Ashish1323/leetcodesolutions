/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    var map=new Map()
    for(i of allowed) map.set(i,0)
    var c=0
    var total=0
    for(i=0;i<words.length;i++){
        for(j=0;j<words[i].length;j++){
            if(map.has(words[i][j])) c++
        }
        if(c===words[i].length) total++
        c=0
    }
    return total
};