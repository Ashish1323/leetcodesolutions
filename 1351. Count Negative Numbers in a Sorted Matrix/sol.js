/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    var c=0
    for(i=0;i<grid.length;i++){
        for(j=0;j<grid[i].length;j++){
           if(Math.sign(grid[i][j])==-1) c++ 
        }
    }
    return c
};