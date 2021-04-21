/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    var a=[...arr1]
    a.sort((a,b)=> a-b)
    var res=[]
    for(i=0; i<arr2.length;i++){
        for(j=0;j<arr1.length;j++){
            if(a[j]==arr2[i]) res.push(a[j])
        }
    }
    var not=[]
    for(i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i])) not.push(arr1[i])
    }
    not.sort((a,b)=>a-b)
    for(i of not) res.push(i)
    return res
};