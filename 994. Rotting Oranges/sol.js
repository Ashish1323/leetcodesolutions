/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let fresh=0
    let queue=[]
    
    for(var i=0;i<grid.length;i++){
        for(var j=0;j<grid[i].length;j++){
            if(grid[i][j]===1) fresh++
            else if (grid[i][j]==2) queue.push([i,j])
        }
    }
    
    var dR=[-1,0,1,0]
    var dC=[0,1,0,-1]
    
    let min=0
    
    while(queue.length!=0 && fresh){
        let next=[]
        while(queue.length!=0){
           let current=queue.shift() 
        for(i=0;i<dR.length;i++){
             let nR = current[0]+dR[i];
                let nC = current[1]+dC[i];
                if (nR>=0 && nC>=0 && nR<grid.length && nC<grid[0].length) {
                    if (grid[nR][nC]==1) {
                        grid[nR][nC]=2;
                        fresh--;
                        next.push([nR,nC]);
                    }
                }
        }
    }
    min++
    queue=next
}
       
    return fresh===0 ? min : -1
};