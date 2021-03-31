/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var a=[]
    var val=0
    for(i=0;i<accounts.length;i++){
        for(j=0;j<accounts[i].length;j++){
            val+=accounts[i][j]
            if(j==accounts[i].length-1) {
                a.push(val)
                val=0
            }
        }
    }
    //console.log(a)
    return Math.max(...a)
};