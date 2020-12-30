/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, sum) {
    let i=0;
   let j=0
   for(i=0;i<arr.length;i++){
       for(j=i+1;j<arr.length;j++){
           if(arr[i]+ arr[j]==sum){
               return [i,j]
           }
       }
   }
};