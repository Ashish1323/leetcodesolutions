/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if(cost.length==0) return null
    if(cost.length==1) return cost[1]
    cost.push(0)
    var dp=[]
    dp[0]=cost[0]
    dp[1]=cost[1]
    for(i=2;i<cost.length;i++){
        dp[i]=Math.min(dp[i-1],dp[i-2]) + cost[i]
    }
    return dp[dp.length-1]
};
