/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a,b)=>a-b)
    for(i=0;i<arr.length;i++){
        if(arr[0]!=1) arr[0]=1
        if(Math.abs((arr[i]-arr[i-1])>1)) arr[i]=arr[i-1]+1
    }
    return Math.max(...arr)
};