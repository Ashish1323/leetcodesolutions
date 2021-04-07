/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
   var map=new Map()
    for(var i=0;i<mat.length;i++){
        for(var j=0;j<mat[i].length;j++){
            var d=i-j
            if(!map.has(d)) map.set(d,[])
            var v=map.get(d)
            v.push(mat[i][j])
        }
    }
    for(let [key, val] of map) { 
        val.sort((a, b) => b-a)
    }
    console.log(map)
        for(let r = 0; r < mat.length; r++) {
        for(let c = 0; c < mat[0].length; c++) {
            const key = r-c;
            mat[r][c] = map.get(key).pop();
        }
    }
    return mat;
};