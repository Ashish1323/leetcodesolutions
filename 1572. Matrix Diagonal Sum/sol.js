/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    var Pd=0
    var Sd=0
    
    for(var i=0,j=mat.length-1;i<mat.length;i++,j--){
        Pd+=mat[i][i]
        Sd+=mat[i][j]
    }
    if(mat.length%2==0) return Sd+Pd
    else return Sd+Pd-mat[Math.trunc(mat.length/2)][Math.trunc(mat.length/2)]
    
};