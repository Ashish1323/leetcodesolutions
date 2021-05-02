/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
    var map=['a','e','i','o','u']
    var count=0
    var max=[]
    var str=""
    var i=0
    for(i=0;i<word.length;i++){
        if(word[i]===map[count]){
            count++
            str+=word[i]
        }
        else if(word[i]==map[count-1]){
            str+=word[i]
        }
        else if(count==5){
            max.push(str)
            str=""
            count=0
        }
        else{
            count=0
            str=""
            if(word[i]==map[count]) {
            count++
            str+=word[i] 
            }
            else{
                str=""
            }
        }
    }
    if(count==5){
            max.push(str)
            str=""
            count=0
        }
    var f=0
    for(i of max) i.length>f? f=i.length:f
    return f
};