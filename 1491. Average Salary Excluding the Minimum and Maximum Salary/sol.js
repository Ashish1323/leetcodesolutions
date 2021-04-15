/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    var a=[...salary]
    a.sort((a,b)=> a-b)
    var sum=0
    for(i=1;i<a.length-1;i++){
        sum+=a[i]
    }
    return sum/(a.length-2)
};