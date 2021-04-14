/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    if(A.length==1) return A
    var arr=[...A]
    arr.sort((a,b)=>a-b)
    var even=[]
    var odd=[]
    var r=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0) even.push(arr[i])
        else odd.push(arr[i])
    }
    //console.log(odd)
    if(even.length){
    for(i=0;i<even.length;i++){
        r.push(even[i])
    }
    }
    if(odd.length){
         for(i=0;i<odd.length;i++){
             r.push(odd[i])
        }
    }
    return  r
};