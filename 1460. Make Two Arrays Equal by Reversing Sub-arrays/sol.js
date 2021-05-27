/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    // var max=Math.max(...target) > Math.max(...arr) ? Math.max(...target) : Math.max(...arr)
    // var hash=new Array(max+1).fill(0)
    // for(var i=0;i<target.length;i++){
    //     hash[target[i]]++
    // }
    // //console.log(hash)
    // for(var i=0;i<target.length;i++){
    //     if(hash[arr[i]]==0) return false
    // }
    // return true
    return arr.sort((a,b)=> a-b).toString() == target.sort((a,b)=> a-b).toString()
};