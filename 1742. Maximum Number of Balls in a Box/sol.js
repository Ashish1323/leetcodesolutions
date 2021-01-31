/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let boxes = {};
   let max = 0;
   for(let i=lowLimit;i<=highLimit;++i){
       let s = sumOfDigits(i);
       if(!boxes[s]){
           boxes[s] = [];
       }
       boxes[s].push(i);
       max = Math.max(max, boxes[s].length);
   }
   return max;
};
function sumOfDigits(n){
   let sum = 0;
   while(n>0){
       sum += n%10; 
       n = Math.floor(n/10);
   }
   return sum;
}
//     for(let i=lowLimit;i<=highLimit;i++){
//         var temp=sumOfDigits(i)
//         if(map.has(temp)){
//             var v=map.get(temp)
//             v++
//             map.set(temp,v)
//         }
//     }
//     console.log(map)
//     // let arr = Object.values(map);
//     // let max = Math.max(...arr);
//     return Math.max(...map.values())
// };