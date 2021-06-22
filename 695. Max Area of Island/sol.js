/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var count=0
    
    function dfs(i, j) {
       if(i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j] != '1')
           return;
        
        grid[i][j]='0'
        dfs(i+1,j)
        dfs(i-1,j)
        dfs(i,j+1)
        dfs(i,j-1)
    }
    
    for(var i=0;i<grid.length;i++){
        for(var j=0;j<grid[i].length;j++){
            if(grid[i][j]==1){
                count+=1
                dfs(i,j)
            }
        }
    }
    
    return count
};


