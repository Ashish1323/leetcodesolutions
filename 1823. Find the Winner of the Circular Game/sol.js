/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    var c=0
    var a=[]
    for(i=0;i<n;i++){
        a.push(i+1)
    } 
    var i=0 
    while(a.length!=1){
        //console.log(i)
            c++
           if(k==c){
               a.splice(i,1)
               c=0
               //i-=1
           }else{
              i=(i+1)%a.length 
           }
        
    }
    return a[0]
};