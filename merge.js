function mergeSort(arr){
    if(arr.length==1) return arr
        var mid=Math.floor(arr.length/2)
        var left=arr.slice(0,mid)
        var right=arr.slice(mid)

        mergeSort(left)
        mergeSort(right)
        return merge(left,right)

}

    function merge(left,right){
        var i=0
        var j=0
        var res=[];
        while(i<left.length && j<right.length){
            if(left[i]>right[j]){
                res.push(right[j])
                j++
            }
            else{
                res.push(left[i])
                i++
            }
            
        }

    return res.concat(left.slice(i)).concat(right.slice(j));
    }


var a=[1,4,3,5,32,31]

console.log(mergeSort(a))