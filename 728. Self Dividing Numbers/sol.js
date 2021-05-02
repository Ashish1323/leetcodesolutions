/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var res=[]
    var c=0
    for(var i=left;i<=right;i++){
        i=i.toString()
        for(var e=0;e<i.length;e++) {
            if(Number(i)%Number(i[e])==0) c++ 
        }
        if(c===i.length) res.push(Number(i))
        c=0
    }
    return res
};