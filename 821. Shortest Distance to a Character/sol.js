/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let arr=[]
    var c=-S.length
    for(let i=0;i<S.length;i++){
            if(S[i]==C){
                c=i
            }
        arr[i]=i-c
    }
    for(let j=S.length-1;j>=0;j--){
            if(S[j]==C){
                c=j
            }
        arr[j]=Math.min(arr[j],Math.abs(j-c))
    }
return arr
};