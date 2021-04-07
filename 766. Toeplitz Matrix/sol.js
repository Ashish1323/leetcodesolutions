/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    var map=new Map()
    for(var i=0;i<matrix.length;i++){
        for(var j=0;j<matrix[0].length;j++){
            var d=i-j
            if(!map.has(d)) map.set(d,[])
            var v=map.get(d)
            v.push(matrix[i][j])
        }
    }
    var arr=[...map.values()]
    for(var i=0;i<arr.length;i++){
        var set=new Set(arr[i])
        if(set.size!=1) return false
    }
    return true
};