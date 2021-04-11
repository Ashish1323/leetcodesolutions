/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var row=0
    var column=matrix[0].length-1
    while(row<matrix.length && column<matrix[0].length && row>=0 && column>=0){
        if(matrix[row][column] == target)
            return true;
        if(matrix[row][column] < target)
            row++;
        else
            column--;
    }
    return false
};