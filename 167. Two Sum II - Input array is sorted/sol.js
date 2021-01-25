/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (arr,sum) =>{
    let i=0;
    let j=0
    var Map={}
    for(i=0;i<arr.length;i++){
        if(Object.keys(Map).find(ele=>ele==arr[i])){
            return [Map[arr[i]]+1,i+1]
        }
        let remainingNumber=sum-arr[i]
        Map[remainingNumber]=i       
    }
}