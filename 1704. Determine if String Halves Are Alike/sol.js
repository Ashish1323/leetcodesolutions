/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    var map={a:1,e:1,i:1,o:1,u:1,A:1,E:1,O:1,I:1,U:1}
    var half=s.length/2
    var first=s.slice(0,half)
    var last=s.slice(half,s.length)
    var f1=0
    var f2=0
    for(let i=0;i<half;i++){
        if(map[first[i]]) f1+=1
        if(map[last[i]]) f2+=1 
    }
    //console.log(f1,f2)
    //console.log(first,last)
    return f1==f2
};