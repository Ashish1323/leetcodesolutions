/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    var res=new Array(T.length).fill(0)
    var count=0
    for(i=0;i<T.length;i++){
        for(j=i+1;j<T.length;j++){
            count++
            if(T[j]>T[i]){
                res[i]=count
                count=0
                break
            }
        }
        count=0
    }
    return res
};