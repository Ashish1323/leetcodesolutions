/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    var uglyList=[1]
    var two=0
    var three=0
    var five=0
    while(uglyList.length!=n){
        var twoc=uglyList[two] *2
        var threec=uglyList[three] *3
        var fivec=uglyList[five] *5
        
        var min=Math.min(twoc,threec,fivec)
        uglyList.push(min)
        if(min == twoc) two+=1
        if(min == threec) three+=1
        if(min == fivec) five+=1
    }
    return uglyList[uglyList.length-1]
};