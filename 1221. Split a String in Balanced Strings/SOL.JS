/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    var c=0
    var Lc=0
    
    var Rc=0
    for(var i=0;i<s.length+1;i++){
   
        //console.log(Lc, Rc, s, i)
        if(Lc>=1 && Rc>=1 & Lc==Rc){
            c++
            s=s.slice(i)
            Lc=0
            Rc=0
            i=0
        }
        if(s[i]==="L") Lc++
        if(s[i]==="R") Rc++
    }
    return c
};