/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    var j=0
    var count=0
    if(ruleKey=="color") j=1
    if(ruleKey=="type") j=0 
    if(ruleKey=="name") j=2 
    for (let i=0;i<items.length;i++){
        if(items[i][j]== ruleValue) count++
    }
    return count
};