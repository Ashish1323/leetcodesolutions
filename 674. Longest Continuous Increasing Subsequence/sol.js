/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length==0) return 0
  var max=0
  var arr=[]
  for(i=0;i<nums.length;i++){
          if(nums[i]<nums[i+1]) max+=1
          else{
              max+=1
            arr.push(max)
              max=0
          }
  }
    return  Math.max(...arr)
};


// Better space.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findLengthOfLCIS = function(nums) {
//     if(nums.length==0) return 0
//   var max=0
//   var newMax=0
//   for(i=0;i<nums.length;i++){
//           if(nums[i]<nums[i+1]) max+=1
//           else{
//               max+=1
//             newMax=Math.max(newMax,max)
//               max=0
//           }
//   }
//     return  newMax
// };