/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    var arr=[]
    var output=""
    for(i=0;i<indices.length;i++){
        arr.push([indices[i],s[i]])
    }
    arr.sort((a,b)=> a[0]-b[0])
    for(i=0;i<arr.length;i++){
        output+=arr[i][1]
    }
    return output
};

