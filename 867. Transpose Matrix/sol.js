/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const seen=new Array(matrix[0].length).fill(0).map(()=> new Array(matrix.length).fill(0))
    for(i=0;i<matrix[0].length;i++){
        for(j=0;j<matrix.length;j++){
            seen[i][j]=matrix[j][i]
        }
    }
    
    return seen
};