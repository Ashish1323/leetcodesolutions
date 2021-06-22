/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    var res=[]
    var char=new Array(26).fill(0)
    for(var i=0;i<s.length;i++){
        char[s[i].charCodeAt()-97]=i
    }
    var i=0
    while(i<s.length){
        var end=char[s[i].charCodeAt()-97];
        var j=i
        while(j!=end){
            end=Math.max(end,char[s[j++].charCodeAt()-97])
        }
        res.push(end-i+1);
        i=j+1;
    }
    
    return res;
};