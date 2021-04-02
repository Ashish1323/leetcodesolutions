/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
   var s=[...heights].sort((a,b)=>a-b)
   var c=0
   //console.log(s)
   for(var i=0;i<heights.length;i++){
       if(heights[i]!=s[i]){
         c+=1  
       } 
   }
    return c
};