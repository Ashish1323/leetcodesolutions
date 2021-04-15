/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
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
    for(i=0;even.length || odd.length ;i++){
        if(even.length) r.push(even.pop())
        if(odd.length) r.push(odd.pop())
    }
    return  r
};