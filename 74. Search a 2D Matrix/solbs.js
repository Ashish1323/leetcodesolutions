 
var searchMatrix = function(matrix, target) {
    var a=[]
    for(var i=0;i<matrix.length;i++){
        if(target>=matrix[i][0] && target<=matrix[i][matrix[i].length-1]){
            a=matrix[i]
            break
        }
    }
    //if(matrix.length==1) return bs(a,0,a.length,target)
    return recursiveFunction(a,target,0,a.length-1)
};


let recursiveFunction = function (arr, x, start, end) {
       
    // Base Condition
    if (start > end) return false;
   
    // Find the middle index
    let mid=Math.floor((start + end)/2);
   
    // Compare mid with given key x
    if (arr[mid]===x) return true;
          
    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x) 
        return recursiveFunction(arr, x, start, mid-1);
    else
  
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid+1, end);
}