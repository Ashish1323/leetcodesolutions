/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var map={"q": 0, "w":0, "e":0,"r":0,"t":0, "y": 0, "u":0, "i":0,"o":0,"p":0}
    var map2={"a": 0, "s":0, "d":0,"f":0,"g":0, "h": 0, "j":0, "k":0,"l":0}
    var map3={"z": 0, "x":0, "c":0,"v":0,"b":0, "n": 0, "m":0}
    
    var c1=0
    var c2=0
    var c3=0
    var res=[]
    for(i=0;i<words.length;i++){
        for(j=0;j<words[i].length;j++){
            if(words[i][j].toLowerCase() in map) c1++
            if(words[i][j].toLowerCase() in map2) c2++
            if(words[i][j].toLowerCase() in map3) c3++
        }
        //console.log(c1,c2,c3)
        if(c1 == words[i].length  || c2 == words[i].length || c3== words[i].length) res.push(words[i])
        c1=0
        c2=0
        c3=0
    }
    return res

};