/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    var cols=[]
    for(let i=0;i<matrix[0].length;i++){
        var l = [] ; 
        for(let j=0;j<matrix.length;j++){
            l.push(matrix[j][i]) ;
        }
        cols.push(l) ;
    }
    for(var i=0;i<matrix.length;i++){
        for(var j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==Math.min(...matrix[i]) && matrix[i][j]==Math.max(...cols[j])) return [matrix[i][j]]
        }
    }
    return []
};