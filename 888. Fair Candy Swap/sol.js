/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    var a=0
    var b=0
    for(i of A){
        a+=i
    }
    for(j of B){
        b+=j
    }
    for(i=A.length;i>=0;i--){
        for(j=B.length;j>=0;j--){
            var d=A[i]-B[j]
            if(a-d==b+d) return [A[i],B[j]]
            
        }
    }
};