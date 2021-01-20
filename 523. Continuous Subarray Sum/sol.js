var checkSubarraySum = function(nums, k) {

    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            let smallArr=nums.slice(i,j+1)
            var num=sum(smallArr)/k
            if(smallArr[0]==0 && smallArr[1]==0 && k==0){
                return true
            }
            
            if(Number.isInteger(num)){
                return true
            }
        }
    }
    return false
}

function sum(input){
             
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }