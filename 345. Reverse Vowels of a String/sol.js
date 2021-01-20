/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var map={"A":0,"a":0,"e":0,"E":0,"i":0,"I":0,"o":0,"O":0,"u":0,"U":0}
    var stack=[]
    for(let i=0;i<s.length;i++){
        if(map.hasOwnProperty(s[i])){
            stack.push(s[i])
        }
    }
    //console.log(stack)
    var k=s.split("")
    //console.log(k)
    for(let i=0;i<s.length;i++){
        if(map.hasOwnProperty(s[i])){
            k[i]=stack.pop()
        }
    }
    return k.join("")
};