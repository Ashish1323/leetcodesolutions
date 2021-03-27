/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    var dp=[]
    for(i=0;i<coins.length;i++){
        dp[i]=[]
        for(j=0;j<=amount;j++){
            dp[i][j]=-1
        }
    }
    return count(0,amount,coins,dp)
};

const count =(i,amount,coins,dp) =>{
    if(amount==0) return 1
    if(i>=coins.length || amount<0) return 0
    if(dp[i][amount]!=-1) return dp[i][amount]
    var left=count(i,amount-coins[i],coins,dp)
    var right=count(i+1,amount,coins,dp)
    return dp[i][amount]=left+right
}