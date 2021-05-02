/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    var sum=0
    var weeks=Math.floor(n/7)
    var remaining=n-weeks*7
    var money=0
    
    for(var i=0;i<weeks;i++){
        for(j=i+1;j<i+8;j++){
            money+=j
        }
    }
    
    for(i=Math.floor(n/7)+1;i<=weeks+remaining;i++) money+=i
    return money
};