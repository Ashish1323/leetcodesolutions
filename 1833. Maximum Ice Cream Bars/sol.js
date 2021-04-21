/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b)=>a-b)
    var count=0
    for(i of costs){
        if(i<=coins && coins){
            coins-=i
            count++
        }
    }
    return count
};