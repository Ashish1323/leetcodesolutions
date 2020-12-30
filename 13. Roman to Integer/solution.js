var romanToInt = function(s) {
    const map = new Map([["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000]]);
  
    let result = 0;
      
   for(i=0;i<s.length;i++){
       var num1=map.get(s[i])
       var num2=map.get(s[i+1])
       if(s.length>1){
           if(num1<num2){
               var res=num2-num1;
               result+=res
               i++
           }
           else{
               result+=num1
           }
       }
       else{
           result+=num1
       }
   }
      return result
  }